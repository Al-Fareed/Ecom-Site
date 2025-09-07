import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import RefundPolicy from './pages/Refund policy/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/ToS/Terms';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
