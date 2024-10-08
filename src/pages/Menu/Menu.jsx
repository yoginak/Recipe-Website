import React from 'react'
import { useEffect, useState } from 'react'
import Category from '../../components/Category/Category'
import './Menu.scss'

export default function Menu() {
    const [categories, setCategories] = useState([])
    const displayFood = async () => {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await res.json()
      setCategories(data.categories)
     console.log(data.categories);
    }
    useEffect(() => {
      displayFood()
    }, [])

  return (
    <section id='menu'>
       
    <div id='categoryContainer' className='category container'>    
    {
      categories.map((category)=>{
        return <Category key={category.idCategory} category={category}/>
      })
    }
  </div>
</section>
  )
}
