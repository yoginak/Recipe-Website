import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Recipe.scss';

export default function Recipe() {
    
    const [meal, setMeal] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      displayMeal();
    }, []);
  
    const displayMeal = async () => {
      let url;
  
      if (!isNaN(id)) {
        url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
      }
  
      const res = await fetch(url);
      const data = await res.json();
  
      if (data.meals) {
        setMeal(data.meals[0]);
      } else {
        console.log('Recipe not found');
      }
    };
  return (
    <section className='recipe-section' id='single-meal'>
      {meal.strMeal ? ( 
        <>       

          <div className="container">
          <h2 className='recipe-header'>{meal.strMeal}</h2>
            <div className="video-container">
              <ReactPlayer url={meal.strYoutube} width="100%" height="360px" controls={true} playing={true} />
            </div>
            <div className='recipe-info'>
              <p className='recipe-text'><strong>Category:</strong> {meal.strCategory}</p>
              <p className='recipe-text'><strong>Area:</strong> {meal.strArea}</p>
              <p className='recipe-text'><strong>Instructions:</strong> {meal.strInstructions}</p>
            </div>
            <div className="recipe__ingredients">
              <h3 >Ingredients:</h3>
              <ul className="recipe__ingredients-list">
                {Object.keys(meal)
                  .filter(key => key.includes('Ingredient') && meal[key])
                  .map(key => (
                    <li className="recipe__ingredients-listitem" key={key}>{meal[key]}</li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Recipe not found! Try finding some other Recipe.</p>
      )}
    </section>
  )
}
