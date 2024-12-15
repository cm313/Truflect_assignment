import React from 'react';
import {useSelector} from "react-redux"
import ShimmerUi from '../utils/ShimmerUi';
import useProductsData from '../utils/useProductsData';
import FoodCard from './FoodCard';
import {Link} from "react-router-dom";

const FoodContainer = () => {
   
    useProductsData();    
    const productsSlice = useSelector((appStore)=>appStore?.products);
    const productsList = productsSlice?.items;
    const isFetched = productsSlice?.dataFetched;
  return (
      !isFetched?<ShimmerUi/> :
      <div className="flex flex-wrap border rounded-md shadow-lg m-2 left-0 right-0">
        {
          productsList.map((product)=>{
           return <Link to={`/productdetails/${product?.id}`} key={product?.id}  ><FoodCard product={product} /></Link>
          })
        }
      </div>
      
  )
}

export default FoodContainer