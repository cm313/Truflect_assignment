import React, { useRef, useState } from 'react'
import searchIcon from "../images/searchIcon.png"
import {useSelector, useDispatch} from "react-redux";
import { addItems, addNameItems, addBarcodeItems } from '../redux/productsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const searchItem = useRef(null);
  const barCode = useRef(null);
  const productsList = useSelector((appStore)=>appStore?.products?.items);
  const totalProductsList = useSelector((appStore)=>appStore?.products?.totalItems);

  const handleSearchName = async ()=>{
    const productsList = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchItem.current.value}&json=true`)
    const jsonData = await productsList?.json();
     dispatch(addItems(jsonData?.products));
    
  }

  const handleSearchBarcode = async ()=>{
    const productsList = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode.current.value}.json`)
    const jsonData = await productsList?.json();
     dispatch(addItems([jsonData?.product]));
  }

  const handleHome = ()=>{ 
    dispatch(addItems(totalProductsList));
  }

 
  
  return (
    <div className="bg-stone-500 py-1">
      <div className="m-4 items-center mx-auto right-0 left-0 flex justify-between w-3/6">
        <div className="font-serif font-bold hover:text-yellow-200 hover:cursor-pointer mx-2" onClick={handleHome}>Home</div>
        <div>
        <input ref={searchItem} className="border border-black shadow-md rounded-md py-2 pl-2 pr-40 mx-2" type="text" placeholder="search for products by name"></input>
        <button className="-ml-9"  onClick={handleSearchName}><img className="w-6" src={searchIcon}/></button>
        </div>
        <div>
        <input ref={barCode} className="border border-black shadow-md rounded-md py-2 pl-2 pr-40 mx-2" type="text" placeholder="search for products by barcode"></input>
        <button className="-ml-9"  onClick={handleSearchBarcode}><img className="w-6" src={searchIcon}/></button>
        </div>
      </div>
    </div>
  )
}

export default Header