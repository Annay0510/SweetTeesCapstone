import React, {useEffect, useState} from "react";
import axios from "axios";
const Gallery = () => {
    const [product, setProduct]= useState([]);
    useEffect (()=> {
        const fetchFunction= async () => {
            const res= await axios.get("http://localhost:3005/products/");
            const data = res.data.data;
            setProduct (data.products)
            console.log(data.products)
        }
        fetchFunction()
        console.log(product);
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:3005/products/${id}`)
        .then (window.location = "/");
    }

    const listOfProducts = product.map ((element) => {
        return (
            <div>
                <img src = {element.image} alt= {element.description}></img>
                <h2>{element.name}</h2>
                <p>price: ${element.price}</p>
                <p>description: {element.description}</p>
                <button onClick={()=>deleteProduct(element._id)}>Delete</button>
            </div>
        )
    })
        return (
            <div>
                <h1>Gallery</h1>
               <div>{listOfProducts}</div> 

            </div>
        );
    };  



export default Gallery;
