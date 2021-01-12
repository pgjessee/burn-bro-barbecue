'use strict';
const bcrypt = require('bcryptjs');
const { Ingredient } = require('./ingredient');
const { Food_Log } = require('./food_log')
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256]
      }
    },
    hashed_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {len: [60,60]}
    },
    is_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_procurer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashed_password', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentEmployee: {
        attributes: { exclude: ['hashed_password'] },
      },
      loginEmployee: {
        attributes: {},
      },
    },
  }, {});

  Employee.prototype.toSafeObject = function() {
    const { id, email } = this;
    return { id, email };
  };

  Employee.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashed_password.toString());
  };

  Employee.getCurrentEmployeeById = async function (id) {
    return await Employee.scope('currentEmployee').findByPk(id);
  };

  Employee.login = async function ({ credential, password }) {

    const employee = await Employee.scope('loginEmployee').findOne({
      where: {
          email: credential,
      },
    });

    if (employee && employee.validatePassword(password)) {
      return await Employee.scope('currentEmployee').findByPk(employee.id);
    };

  };

  Employee.newEmployee = async function ({ first_name, email, password, is_manager, is_procurer }) {
    const hashed_password = bcrypt.hashSync(password);
    const employee = await Employee.create({
      first_name,
      email,
      hashed_password,
      is_manager,
      is_procurer
    });
    return await Employee.scope('currentEmployee').findByPk(employee.id);
  };

  const columnMapping = {
    through: 'Food_Log',
    otherKey: 'ingredient_id',
    foreignKey: 'employee_id'
  }

  Employee.associate = function(models) {
    Employee.belongsToMany(models.Ingredient, columnMapping);
    Employee.hasMany(models.Food_Log, { foreignKey: "employee_id"})
  };
  return Employee;
};
