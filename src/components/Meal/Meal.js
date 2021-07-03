import React from 'react';
import "./Meal.css";
import {
  Link
} from "react-router-dom";

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, strCategory, strArea} = props.meal;
    return (

        <Link to={"/recipe/"+idMeal}>
            <div className="meal">

                <img src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                
            </div>
        </Link>
    );
};

export default Meal;