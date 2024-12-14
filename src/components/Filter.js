import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addItems} from "../redux/productsSlice";

const Filter = () => {

  const dispatch = useDispatch();

  const productsList = useSelector((appStore)=>appStore?.products?.items)
  
  const handleCategory= async (event)=>{
       const productsList = await fetch(`https://world.openfoodfacts.org/category/{${event.target.value}}.json`)
        const data = await productsList.json();
        dispatch(addItems(data?.products));
  }

  const handleSort = (event)=>{
    if(event.target.value === "A-Z"){
   const sortedList = [...productsList].sort((a, b) => (a.product_name_en || "").localeCompare(b.product_name_en || ""));
   dispatch(addItems(sortedList));
    }
     else if(event.target.value == "Z-A"){
    const reverseSortedList = [...productsList].sort((a, b) =>(b.product_name_en || "").localeCompare(a.product_name_en || ""));
     dispatch(addItems(reverseSortedList));
     }
  }


  return (
    <div className="m-4 md:flex">
  <div className="mr-2 mb-2 md:mb-0">
  <select onChange={handleCategory} className="border border-black rounded-full ml-2 w-52 p-2" name="category" id="CategoryfoodProducts">
     <option value="" disabled selected>select by category</option>
    <option value="Sweet snacks">Sweet snacks</option>
    <option value="Plant-based foods and beverages">Plant-based foods and beverages</option>
    <option value="Beverages">Beverages</option>
    <option value="Dairies">Dairies</option>
    <option value="Cereals and potatoes">Cereals and potatoes</option>
    <option value="Meats and their products">Meats and their products</option>
    <option value="Fermented foods">Fermented foods</option>
    <option value="Fermented milk products">Fermented milk products</option>
    <option value="Fruits and vegetables based foods">Fruits and vegetables based foods</option>
    <option value="Biscuits and cakes">Biscuits and cakes</option>
    <option value="French cheeses">French cheeses</option>
    <option value="Ice creams">Ice creams</option>
    <option value="Bodybuilding supplements">Bodybuilding supplements</option>
    <option value="Sweet pastries and pies">Sweet pastries and pies</option>
    <option value="Coffees">Coffees</option>
    <option value="Pizzas">Pizzas</option>
    <option value="Sandwiches">Sandwiches</option>
    <option value="Potato crisps">Potato crisps</option>
  </select>
  </div>
  <div>
  <select onChange={handleSort} className="border border-black rounded-full ml-2 w-52 p-2" name="sort" id="sortedFoodProducts">
    <option value="" disabled selected>sort</option>
    <option value="A-Z">A-Z</option>
    <option value="Z-A">Z-A</option>
  </select>
  </div>
    </div>
  )
}

export default Filter