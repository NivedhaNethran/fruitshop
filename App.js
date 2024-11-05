
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hme from './pages/Hme';
import Fruits from './pages/Fruits';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Hme/>}/>
<Route path='/fruits' element={<Fruits/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/admin' element={<Admin/>}/>
<Route path='/upload' element={<Upload/>}/>
<Route path='/update' element={<Update/>}/>
<Route path='/edit/:id' element={<Edit/>} loader={({params})=>fetch(`http://localhost:7080/product/${params.id}`)}/>
</Routes>
<Footer/>
</BrowserRouter>


      
    </div>
  );
}

export default App;
