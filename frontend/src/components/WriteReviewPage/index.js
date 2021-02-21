import React, { useState } from 'react';
import { Redirect, NavLink, useHistory } from 'react-router-dom';

import { fetch } from '../../store/csrf';
import './WriteReview.css'

function WriteReview({ user }) {
    const history = useHistory();
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({
                review,
                user_id: user.id
            })
        })

        history.push("/reviews")

    }


    return (
        <div className="write-review-container">
            <form className="write-review-form" onSubmit={handleSubmit}>
                <div className="write-review-header-container">
                    <h1 className="write-review-header">Write a Review</h1>
                </div>
                <div className="write-review-text-area">
                    <textarea
                    rows="22"
                    cols="45"
                    name="review"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <div className="write-review-button-container">
                    <button className="write-review-submit" type="submit" >Submit Review</button>
                </div>
            </form>
            <div>
                <NavLink exact to="/"><button className="write-review-navigation-button">Return Home</button></NavLink>
            </div>
        </div>
    )


};

export default WriteReview;
