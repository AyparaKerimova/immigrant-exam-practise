import { Route, Routes } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import Home from "./pages/Home"
import Basket from "./pages/Basket"
import ImmigrantDetails from "./pages/ImmigrantDetails"
import AddImmigrant from "./pages/AddImmigrant"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NotFound from "./pages/NotFound"
import { HelmetProvider } from "react-helmet-async"
import { createContext, useState } from "react"
import { useEffect } from "react"

export const BasketContext = createContext();

function App() {
  const [basket,setBasket] = useState([]);

  useEffect(()=>{
    const storedBasket = JSON.parse(localStorage.getItem("basket"))||[];
    setBasket(storedBasket)
  },[]);
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
  },[basket]);

  function addToBasket(item) {
    const existingBasket = basket.find((basketItem)=>basketItem.id==item._id);
    if (existingBasket){
      setBasket(
        setBasket(basket.map((basketItem)=>basketItem.id==item._id?{...basketItem}:basketItem))
      )
    } else {
      setBasket([...basket,{...item}])
    }
  }
  function removeFromBasket (id){
      setBasket(basket.filter((item)=>item._id!==id))
  }
  function clearBasket() {
    setBasket([])
  }
  const data = {
    addToBasket,removeFromBasket,
    clearBasket,basket
  }
  return (
    <>
    <HelmetProvider>
    <BasketContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="basket" element={<Basket/>}/>
          <Route path="details/:id" element={<ImmigrantDetails/>}/>
          <Route path="add-immigrant" element={<AddImmigrant/>}/>
        </Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </BasketContext.Provider>
      </HelmetProvider>
    </>
  )
}

export default App
