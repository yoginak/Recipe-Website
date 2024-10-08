import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../../components/MealCard/MealCard';
import './meal.scss'
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
    <section id='meals' className='container'>
            <h2 className='meal__title'>{category}</h2>
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
