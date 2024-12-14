import Filter from "./components/Filter";
import FoodContainer from "./components/FoodContainer";
import FoodDetails from "./components/FoodDetails";
import Header from "./components/Header";
import Error from "./utils/Error";
import {createBrowserRouter,Outlet} from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Filter/>
    <Outlet/>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<FoodContainer/>,
      }
    ],
    errorElement:<Error/>
  },
  {
    path:'/productdetails/:productId',
    element:<FoodDetails/>,
    errorElement:<Error/>
  }
]);

export default appRouter;
