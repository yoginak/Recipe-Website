import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../../components/MealCard/MealCard';
import './meal.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function Meal() {
    const [meals, setMeals] = useState([])

    const { category } = useParams()
    useEffect(() => {
        displayCategory()
    }, [])

    const displayCategory = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const data = await res.json()
        setMeals(data.meals)
    }
  return (
    <section id='meals' className='container meal__container'>
         <Link className='meal__link' to="/" >            
            <FontAwesomeIcon icon={faArrowLeftLong} />
            &nbsp;&nbsp;Back to Home
        </Link>
            <h4 className='meal__title'>Find Your Next Favorite {category} Dish!</h4>
            <div id='mealContainer' className='meal'>
                {
                    meals.map((meal) => {
                        return <MealCard key={meal.idMeal} meal={meal} />
                    })
                }
            </div>
        </section>
  )
}
