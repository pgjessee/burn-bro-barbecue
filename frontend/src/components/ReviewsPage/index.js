import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ReviewBox from './reviewsBox';

import './ReviewsPage.css'

const ListReviews = () => {
    const [allReviews, setAllReviews] = useState([])
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/reviews');
            const { reviews } = await res.json();
            setAllReviews(reviews)
        })()
    }, [])

    const handleReviews = (reviewId) => {

        setAllReviews(allReviews.filter(rev => rev.id !== reviewId))

    };

    return (
        <>
        <div className="nav-bar">
            <div className="write-review-nav-container">
                <NavLink to="/write-review" className="write-review-nav">Write a Review</NavLink>
            </div>
            <div className="nav-header">Our Reviews</div>
            <div className="nav-image-container">
                <NavLink to="/"><img className="nav-logo" src="/logos/burnbro-logo.png"/></NavLink>
            </div>
        </div>
        <div className="reviews-page-container">
                {allReviews.map(review => {
                    return <ReviewBox key={review.id} review={review} onDelete={handleReviews}/>
                })}
            <div className="write-review-button">
                <NavLink to="/write-review"><button className="review-navigation-button">Write a Review</button></NavLink>
            </div>
            <div className="home-button">
                <NavLink to="/"><button className="review-navigation-button">Return Home</button></NavLink>
            </div>
        </div>
        </>
    )

}

export default ListReviews;
