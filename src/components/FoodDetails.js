import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from "react-redux";
import FoodCard from './FoodCard';
import FoodDetailsCard from './FoodDetailsCard';

const FoodDetails = () => {
  const {productId} = useParams();
  const productsList = useSelector((appStore)=>appStore?.products?.items);
   const product = productsList.filter((product)=>(
     productId == product.id
   ));

   const productInfo = product[0];

  return (
    <div>
      <FoodDetailsCard product={productInfo}/>
    </div>
  )
}

export default FoodDetails