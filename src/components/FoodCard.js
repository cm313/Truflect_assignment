import React from 'react'

const FoodCard = (props) => {
 const {product_name_en,
  image_front_url,
  ingredients,
  categories
 } = props?.product;
  return (
    product_name_en && image_front_url && ingredients &&
      <div className = "rounded-md border shadow-md p-2 m-4 transition-transform duration-100 ease-in-out hover:scale-95 md:w-52 h-full cursor-pointer">
       <img className="w-40 h-40 object-fill" src={image_front_url}></img>
        <div className="font-serif my-2 font-semibold border rounded-md px-2"><span className="font-serif font-semibold text-violet-600">Name:</span>{product_name_en}</div>
       <div className="flex flex-wrap my-2  border rounded-md px-2">
       <span className="font-serif font-semibold text-violet-600">Ingredients:</span>
       {
        ingredients.map((ingredient)=>
          <div className="overflow-hidden font-serif" key={ingredient?.id}>{ingredient?.text},</div>
        )
       }
       </div>
       <div className="overflow-hidden my-2 rounded-md font-serif border px-2" ><span className="font-serif font-semibold text-violet-600">Category:</span>{categories}</div>
      </div>
  )
}

export default FoodCard