import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductDetails from "./components/ProductDetails";
import Updatedata from "./components/Update"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
  <Router>
  <Routes>
    <Route path ='/' element = {<ProductDetails/>}/>
    <Route path = '/update' element = {<Updatedata/>}/>
  
  </Routes>
   </Router>
  </>
   
  );
}
export default App;

