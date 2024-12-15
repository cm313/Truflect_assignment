import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addItems, toggle} from "../redux/productsSlice";

const Filter = () => {
  const[select, setSelect] = useState("");
  const[sortSelect, setSortSelect] = useState("");
  const dispatch = useDispatch();

  const productsList = useSelector((appStore)=>appStore?.products?.items)
  
  const handleCategorySort= async (event)=>{
       dispatch(toggle());
       const productsList = await fetch(`https://world.openfoodfacts.org/category/{${event.target.value}}.json`)
        const data = await productsList.json();
        dispatch(addItems(data?.products));
        dispatch(toggle());
  }

  const HandleAlphabeticSort = (event)=>{
    if(event.target.value === "A-Z"){
   const sortedList = [...productsList].sort((a, b) => (a.product_name_en || "").localeCompare(b.product_name_en || ""));
   dispatch(addItems(sortedList));
    }
     else if(event.target.value == "Z-A"){
    const reverseSortedList = [...productsList].sort((a, b) =>(b.product_name_en || "").localeCompare(a.product_name_en || ""));
     dispatch(addItems(reverseSortedList));
     }
  }

  const handleNutritionSort = ()=>{
    const sortedList = [...productsList].sort((a, b) => (a.nutriscore_2023_tags[0] || "").localeCompare(b.nutriscore_2023_tags[0] || ""));
   dispatch(addItems(sortedList));
  }


  return (
    <div className="m-4 md:flex">
  <div className="mr-2 mb-2 md:mb-0">
  <select onChange={handleCategorySort} value={select} className="border border-black rounded-full ml-2 w-52 p-2" name="category" id="CategoryfoodProducts">
     <option value="" disabled>select by category</option>
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
  <select onChange={HandleAlphabeticSort} value={sortSelect} className="border mb-2 border-black rounded-full ml-2 w-52 p-2" name="sort" id="sortedFoodProducts">
    <option value="" disabled>sort(A-Z/Z-A)</option>
    <option value="A-Z">A-Z</option>
    <option value="Z-A">Z-A</option>
  </select>
  </div>
  <div>
  <button onClick={handleNutritionSort}className="border border-black rounded-full ml-2 w-52 p-2"> Sort by Nutrition Grade</button>
  </div>
    </div>
  )
}

export default Filter