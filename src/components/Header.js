import React, {useRef} from 'react'
import searchIcon from "../images/searchIcon.png"
import {useSelector, useDispatch} from "react-redux";
import { addItems, toggle} from '../redux/productsSlice';


const Header = () => {
  const dispatch = useDispatch();
  const searchItem = useRef(null);
  const barCode = useRef(null);
  const totalProductsList = useSelector((appStore)=>appStore?.products?.totalItems);

  const handleSearchName = async ()=>{
    if(!searchItem.current.value)
      return;
    dispatch(toggle());
    const productsList = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchItem.current.value}&json=true`)
    const jsonData = await productsList?.json();
     dispatch(addItems(jsonData?.products));
     dispatch(toggle());
    
  }

  const handleSearchBarcode = async ()=>{
    if(!barCode.current.value)
      return;
    dispatch(toggle());
    const productsList = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode.current.value}.json`)
    const jsonData = await productsList?.json();
     dispatch(addItems([jsonData?.product]));
     dispatch(toggle());
  }

  const handleHome = ()=>{ 
    dispatch(addItems(totalProductsList));
  }

 
  
  return (
    <div className="bg-stone-500 py-1">
      <div className="m-4 items-center md:flex justify-start">
        <div className="font-serif font-bold hover:text-yellow-200 transition-transform duration-100 ease-in-out hover:cursor-pointer mx-2" onClick={handleHome}>Home</div>
        <div className="mr-4 mb-2 md:mb-0">
        <input ref={searchItem} className="border border-black shadow-md rounded-full py-2 pl-2 mx-2 w-52" type="text" placeholder="search by name"></input>
        <button className="-ml-9" onClick={handleSearchName}><img className="w-5" src={searchIcon}/></button>
        </div>
        <div>
        <input ref={barCode} className="border border-black shadow-md rounded-full py-2 pl-2 mx-2 w-52" type="text" placeholder="search by barcode"></input>
        <button className="-ml-9"  onClick={handleSearchBarcode}><img className="w-5" src={searchIcon}/></button>
        </div>
      </div>
    </div>
  )
}

export default Header