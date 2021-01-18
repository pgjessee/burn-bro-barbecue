import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ReviewBox from './reviewsBox';


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
        <>
        <div></div>
        <div className="write-review-button">
        <NavLink to="/write-review"><button className="navigation-button">Write a Review</button></NavLink>
        </div>
        <div className="reviews-header"><h1>Our Reviews</h1></div>
        <div className="reviews">
            {allReviews.map(review => {
                return <ReviewBox key={review.id} review={review}/>
            })}
        </div>
        <div className="home-button">
        <NavLink to="/"><button className="navigation-button">Return Home</button></NavLink>
        </div>
        </>
    )

}

export default ListReviews;
