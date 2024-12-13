import React from 'react';
import {useSelector} from "react-redux"
import ShimmerUi from '../utils/ShimmerUi';
import useProductsData from '../utils/useProductsData';
import FoodCard from './FoodCard';

const FoodContainer = () => {
   
  useProductsData();    
    const productsList = useSelector((appStore)=>appStore?.products?.items);
  return (
      !productsList?<ShimmerUi/> :
      <div className="flex flex-wrap border rounded-md shadow-lg m-2 left-0 right-0">
        {
          productsList.map((product)=>{
            const{id,product_name_en,image_front_url, ingredients, categories}=product;
           return <FoodCard key={id} name = {product_name_en} imageUrl={image_front_url} ingredients={ingredients} categories={categories} />
          })
        }
      </div>
      
  )
}

export default FoodContainer