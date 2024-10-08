import React from 'react'
import { Link } from 'react-router-dom'
import './mealCard.scss'

export default function MealCard({ meal }) {
  return (
    <div className='meal-card'>
         <Link to={`/meal/${meal.idMeal}`}>
           <img src={meal.strMealThumb} alt={meal.strMeal} loading='lazy'/>
            <p className='meal-card__content'>{meal.strMeal.slice(0,25)}</p>
        </Link>
    </div>
  )
}
