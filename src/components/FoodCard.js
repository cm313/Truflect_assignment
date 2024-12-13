import React from 'react'

const FoodCard = (props) => {
 const {name, imageUrl, ingredients,categories} = props;
  return (
    name && ingredients &&
      <div className = "rounded-md border shadow-md p-2 m-4 w-52 cursor-pointer">
       <img className="w-40 h-40 object-fill" src={imageUrl}></img>
       {
        <div className="font-serif font-semibold"><span className="font-serif font-semibold text-violet-600">Name:</span>{name}</div>
       }
       <div className="flex flex-wrap">
       <span className="font-serif font-semibold text-violet-600">Ingredients:</span>
       {
        ingredients.map((ingredient)=>
          <div key={ingredient?.id}>{ingredient?.text},</div>
        )
       }
       </div>
       <div><span className="font-serif font-semibold text-violet-600">Category:</span>{categories}</div>
      </div>
  )
}

export default FoodCard