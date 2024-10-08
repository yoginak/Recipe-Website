import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./category.scss"

export default function Category({ category }) {
const [isHovered, setIsHovered] = useState(false);
const navigate = useNavigate()

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="category-card"
    onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={()=>navigate(`/category/${category.strCategory}`)}>
    <img src={category.strCategoryThumb} alt="image of food category" loading='lazy' />
    <p className="category-text">{category.strCategory}</p>  
  </div>
  )
}
