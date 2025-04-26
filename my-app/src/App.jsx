import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponenet from './components/MainComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './pages/productPage'
import Store from './pages/storePage'
import ProductList from './pages/List/productList'
import StoreList from './pages/List/storeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
          <Route path='/' element={<MainComponenet/> }/> 
          <Route path='product' element={<Product/>}/>
          <Route path='store' element= {<Store/>}/>
          <Route path='productList' element= {<ProductList/>}/>
          <Route path='storeList' element= {<StoreList/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;