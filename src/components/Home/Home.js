import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';
import './Home.css';


const Home = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])

    const handleChange = event => {
        setSearch(event.target.value);
    }

    return (
        <div className="home">

            <div className="mealFind">
                
                <input type="search" name="" placeholder="Search Your Meal" onChange={handleChange} id="" />
                {/* <h4>Searching: {search}</h4>
                <p>Meal Found: {meals?.length}</p> */}
                    
            </div>
            
            <div className="meals">
                <div className="container">
                    
                        <div className="single">
                            {
                                meals?.map(meal => <Meal meal={meal}></Meal>)
                            }
                        </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Home;