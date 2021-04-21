import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetch } from '../../store/csrf';
import './WriteReview.css'

function WriteReview({ user }) {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [review, setReview] = useState('');
    const [charLimit, setCharLimit] = useState(500);
    const [errors, setErrors] = useState([]);

    if (!sessionUser) history.push("/")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                body: JSON.stringify({
                    review,
                    user_id: user.id
                })
            })

            if (!res.ok) throw res;
            history.push("/reviews")

        } catch (errs) {
            setErrors(errs.data.errors)
        }

    }

    const handleCharLimit = (e) => {
        let charCount = e.target.value;
        const maxChars = 500
        setCharLimit(maxChars - charCount.length)
    }


    return (
        <div className="write-review-container">
            <div className="write-review-header-container">
                <h1 className="write-review-header">Write a Review</h1>
            </div>
            <div className="review-errs-container">
                <ul>
                    {errors.map((error, idx) =>
                        <li className="review-errs" key={idx}>{error}</li>
                    )}
                </ul>
            </div>
            <form className="write-review-form" onSubmit={handleSubmit}>
                <div className="write-review-text-area">
                    <textarea
                    rows="22"
                    cols="45"
                    name="review"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => (setReview(e.target.value), handleCharLimit(e))}
                    />
                </div>
                <div className="review-char-count">
                    Character Count: {charLimit}
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
