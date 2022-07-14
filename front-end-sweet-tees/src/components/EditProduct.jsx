
import React, {useState} from "react";
import axios from "axios";



const ProductEdit = () => {

    const [image, setImage] = useState(" ")
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [price, setPrice] = useState([]);

    const id= window.location.pathname.replace("/edit/", "");

    const editRecipe = () => {
        axios.put(`http://localhost:3005/products/${id}`, {image, name, description, price})
        .then (window.location = "/");
    }

    return(
    <div>
        <h3>Edit Product</h3>
        <label htmlFor=" ">Image: </label>
        <br></br>
        <input type="text" onChange={(e) => {setImage(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" "> Name: </label>
        <br></br>
        <input type="text" onChange= {(e) => {setName(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Description: </label>
        <br></br>
        <input type="text" onChange={(e) => {setDescription(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Price: $ </label>
        <br></br>
        <input type="text" onChange={(e) => {setPrice(e.target.value)}}/>
        <br/><br/>
        <button onClick={editRecipe}>Submit Changes</button>
    </div>
    );
}

//export to Recipe.js
export default ProductEdit;