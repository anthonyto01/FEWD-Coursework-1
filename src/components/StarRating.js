import React, { useState } from "react";
import { FaStar} from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState("");

    return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="ratingValue" 
                    onClick={() => setRating(ratingValue)}
                />
                <FaStar className="star" color={ratingValue <= rating ? "blue" :""} size={20} />
                </label>
            );
        })}
    </div>
    );
};

export default StarRating;