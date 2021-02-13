import React, {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';

import MenuEntreeBox from './menuEntreeBox';
import './MenuPage.css'

const ListMenuEntrees = () => {
    const [menuEntrees, setMenuEntrees] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/entrees/');
            const { entrees } = await res.json();
            setMenuEntrees(entrees)
        })()
    }, [])

    return (
        <div className='menu__div-box'>
            <div className="logo-div">
                <Link exact to="/"><img className="homepage-logo" src="/logos/burnbro-logo.png"/></Link>
            </div>
            <div className="menu-header"><h1>- - Our Menu - -</h1></div>
            <div className='menu-entrees-container'>
                {menuEntrees.map(entree => {
                    return <MenuEntreeBox key={entree.id} entree={entree}/>
                })}
            </div>
            <div className="return-home-menu-button">
                <NavLink exact to="/"><button className="menu-navigation-button">Return Home</button></NavLink>
            </div>
        </div>
    )

}

export default ListMenuEntrees;
