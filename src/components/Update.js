import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

function Updatedata(){

const{state} = useLocation();
    
    const[getCategory, setCategory]=useState(state.productCategory)
    const[getName, setName]=useState(state.productName)
    const[getPrice, setPrice]=useState(state.price)
    const[getQuantity, setQuantity]=useState(state.quantity)

    const UpdateData = ()=>{
        let data ={
            productCategory : getCategory,
            productName : getName,
            price : getPrice,
            quantity : getQuantity

        }
        axios.put("http://localhost:402/product/updateproduct", data).then(res=>{
            console.log("res",res.data)
            alert("successfully updated")
        }).catch(err=>{
            console.log("err", err.message)
        })
    }

    console.log("state",state)

    return(
        <>
         <h1>Update Product Details</h1>
         <div className="col-md-2 container">

            <div className="col-md-4 container">
            <input type="text" class="form-control" name='productCategory' value = {getCategory} onChange={(e)=>setCategory(e.target.value)}/>
            <label  htmlfor="productCategory" className="form-label">ProductCategory</label>
            </div>

            <div className="col-md-4 container">
            <input type="text" class="form-control" value = {getName} onChange={(e)=>setName(e.target.value)}/>
            <label  className="form-label">ProductName</label>
            </div>

            <div className="col-md-4 container">
            <input type="text" class="form-control" value = {getPrice} onChange={(e)=>setPrice(e.target.value)}/>
            <label  className="form-label">Price</label>
            </div>

            <div className="col-md-4 container">
            <input type="text" class="form-control" value = {getQuantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <label  className="form-label">Quantity</label>
            </div>

              <button type="button" onClick = {UpdateData} className="btn btn-primary btn-block mb-4">Update</button>
            </div>
           </>
    )
}
export default Updatedata;
