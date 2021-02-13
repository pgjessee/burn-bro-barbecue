import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ReviewBox from './reviewsBox';

import './ReviewsPage.css'

const ListReviews = () => {
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/reviews');
            const { reviews } = await res.json();
            setAllReviews(reviews)
        })()
    }, [])

    return (

        <div className="reviews-page-container">
            <div className="home-button">
                <NavLink to="/"><button className="top-review-navigation-button">Return Home</button></NavLink>
            </div>
            <div className="write-review-button">
                <NavLink to="/write-review"><button className="top-review-navigation-button">Write a Review</button></NavLink>
            </div>
            <div className="reviews-header"><h1>- - Our Reviews - -</h1></div>
                {allReviews.map(review => {
                    return <ReviewBox key={review.id} review={review}/>
                })}
            <div className="write-review-button">
                <NavLink to="/write-review"><button className="review-navigation-button">Write a Review</button></NavLink>
            </div>
            <div className="home-button">
                <NavLink to="/"><button className="review-navigation-button">Return Home</button></NavLink>
            </div>
        </div>
    )

}

export default ListReviews;
