import React from 'react'

const FoodDetailsCard = ({product}) => {
  const {product_name_en,
    image_front_url,
    ingredients,
    categories
   } = product;

   const{energy,fiber,proteins,saturated_fat,sodium,sugars}=product?.nutriscore_data

  return (
    product_name_en && image_front_url && ingredients &&
    <div className="m-4 md:flex border border-black shadow-lg rounded-xl">
      <div className="m-4 border rounded-xl p-2 w-1/2">
        <img className="w-60 h-60 object-contain" src={image_front_url} alt="Loading.."/>
        <div className="font-serif mt-2 font-semibold"><span className="font-serif font-semibold text-violet-600">Name:</span>{product_name_en}</div>
      </div>
      <div className="m-4 border rounded-xl p-2 w-1/2">
      <div className="flex font-serif flex-wrap">
       <span className=" font-semibold text-violet-600">Ingredients:</span>
       {
        ingredients.map((ingredient)=>(
          <div  className="" key={ingredient?.id}>{ingredient?.text},</div>
        )
        )
       }
       </div>   
       <div className="font-serif my-2"><span className="font-semibold text-violet-600">Category:</span>{categories}
       </div>
       {
        ingredients[0].vegan &&
        <div className= " bg-green-400 rounded-lg text-white font-serif w-14 px-2 py-1">Vegan</div>
        }

        <div className="font-serif my-2">
          <span className="font-semibold text-violet-600">Nutrtition Values:</span><span className="text-wrap">
            energy({energy}),fiber({fiber}),proteins({proteins}),saturated_fat({saturated_fat}),sodium({sodium}),sugars({sugars})
          </span>
        </div>

      </div>

    </div>
  )
}

export default FoodDetailsCard