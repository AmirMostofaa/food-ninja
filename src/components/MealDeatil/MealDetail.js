import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetail.css';

const MealDetail = () => {
    const {mealId} = useParams()
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const newData = data.meals[0];
            setMeal(newData);
        })
    }, [mealId])

    const {strMeal, strCategory, strArea, strInstructions, strTags, strMealThumb, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9} = meal;

    return (
        <div className="mealDetail">

            <div className="details">
                <img src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                <p>Tags: {strTags}</p>
                <p><b>Ingredients:</b> {strIngredient1},  {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}, {strIngredient7}, {strIngredient8},  {strIngredient9}</p>
                <br/>
                <p><b>Instruction:</b> {strInstructions}</p>
                <br/>
                <p>Watch on Youtube: <a href={strYoutube}>Click Here</a></p>
            </div>
        </div>
    );
};

export default MealDetail;