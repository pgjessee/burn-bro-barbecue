import React from 'react';

const ReviewBox = ({ review }) => {

    return (
        <>
            <div className="reviews__review-box">
                <h2>{review.User.first_name}</h2>
                <h2>{review.review}</h2>
            </div>
        </>
    )
}


export default ReviewBox;
