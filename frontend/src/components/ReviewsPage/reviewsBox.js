import React from 'react';

const ReviewBox = ({ review }) => {

    return (
        <div className="reviews__user-box">
            <div className="user__review-box">
                <h3>{review.review}</h3>
                <h2>- {review.User.first_name}</h2>
            </div>
            <div className="review__delete-button">
                <button className="remove-review-button">Delete Review</button>
            </div>
        </div>
    )
}


export default ReviewBox;
