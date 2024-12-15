import  { useEffect } from 'react'
import { addItems, addTotalItems,toggle } from '../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const useProductsData = () => {
  const dispatch = useDispatch();
 
  const productsList =  useSelector((appStore)=>appStore?.products?.items);
  useEffect(()=>{
   !productsList && fetchProductsData();
}, [])

const fetchProductsData = async()=>{
  const data = await fetch("https://world.openfoodfacts.org/category/%7BSnacks%7D.json");
  const jsonData = await data.json();
  dispatch(addItems(jsonData?.products));
  dispatch(addTotalItems(jsonData?.products));
  dispatch(toggle());
}
}

export default useProductsData