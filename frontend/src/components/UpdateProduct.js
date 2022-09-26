import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct=()=>{
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const params=useParams()
    const navigate=useNavigate()

   useEffect(()=>{
    //console.warn(params)
    getProductDetails();
   },)

   const getProductDetails=async()=>{
    console.warn(params)
    let result=await fetch(`http://localhost:3000/product/${params.id}`)
    result=await result.json()
    //console.warn(result)
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
}

    const updateProduct=async()=>{
        console.log(name,price,category,company)
        let result=await fetch(`http://localhost:3000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json()
        console.warn(result)
        navigate('/')
    }
    return(
        <div className="product">
        <h1>Update Product</h1>
        <input type="text" placeholder="Enter Product Name" className="inputBox"
        value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <input type="text" placeholder="Enter Product Price" className="inputBox"
        value={price} onChange={(e)=>setPrice(e.target.value)}/>
        
        <input type="text" placeholder="Enter Product Category" className="inputBox"
        value={category} onChange={(e)=>setCategory(e.target.value)}/>
        
        <input type="text" placeholder="Enter Product Company" className="inputBox"
        value={company} onChange={(e)=>setCompany(e.target.value)}/>
        
        <button onClick={updateProduct} className="button">Update Product</button>
        </div>
    )
}
export default UpdateProduct;