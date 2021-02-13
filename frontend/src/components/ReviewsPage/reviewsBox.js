import React from 'react';

const ReviewBox = ({ review }) => {

    return (
        <div className="review-container">
            <div className="user-review">{review.review}</div>
            <div className="user-firstname-review">- {review.User.first_name}</div>
            <div className="review-delete-button-container">
                <button className="remove-review-button">Delete Review</button>
            </div>
        </div>
    )
}


export default ReviewBox;
