import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import { ShopContextProvider } from './context/shopContext';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/E-Shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;