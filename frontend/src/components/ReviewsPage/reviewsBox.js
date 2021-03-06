import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetch } from '../../store/csrf';

const ReviewBox = ({ review, onDelete }) => {
    const sessionUser = useSelector(state => state.session.user);

    const handleDeleteReview = async (reviewId) => {

        let deleteReview = await fetch(`/api/reviews/${reviewId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (deleteReview.ok) onDelete(reviewId)

        return
    };



    if (sessionUser.id === review.user_id) {
        return (
            <div className="review-container">
                <div className="user-review">{review.review}</div>
                <div className="user-firstname-review">- {review.User.first_name}</div>
                <div className="review-delete-button-container">
                    <button className="remove-review-button" onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
                </div>
            </div>
        )
    }

    
    return (
        <div className="review-container">
            <div className="user-review">{review.review}</div>
            <div className="user-firstname-review">- {review.User.first_name}</div>
        </div>
    )
}


export default ReviewBox;
