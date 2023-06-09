import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Category} from './Category';
import { Navigation } from './Navigation';
import { Customer } from './Customer';
import { Feedback } from './feedback';
import { OrderDetails } from './OrderDetails';
import { Orders } from './Orders';
import { Payment } from './payment';
import { Product } from './pr';
import { Sh } from './Ship';
import { Vendor } from './Ven';

import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <h3 className='m-3 d-flex justify-content-center'>
        Opticart Admin
      </h3>

      <Navigation/>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/category' element={<Category/>} />
      <Route path='/customer' element={<Customer/>} />
      <Route path='/feedback' element={<Feedback/>} />
      <Route path='/OrderDetails' element={<OrderDetails/>} />
      <Route path='/Orders' element={<Orders/>} />
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Shipper' element={<Sh/>}/>
      <Route path='/Vendor' element={<Vendor/>}/>                 
      </Routes>      
    </div>
    </BrowserRouter>
  );
}

export default App;