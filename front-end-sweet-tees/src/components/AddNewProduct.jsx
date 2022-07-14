import React, {useState} from "react";
import axios from "axios";

const ProductAdd = () => {
    const [image, setImage] = useState(" ")
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [price, setPrice] = useState([]);

    const addNewProduct = () => {
        axios.post("http://localhost:3005/products/", {image, name, description, price})
        .then (window.location = "/");
    }

    return(
        <form>
    <div>
        <h3>Add New T-Shirt</h3>
        <label htmlFor=" ">Picture: </label>
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
        <label htmlFor=" ">Price: </label>
        <br></br>
        <input type="text" onChange={(e) => {setPrice(e.target.value)}}/>
        <br/><br/>
        <button onClick={addNewProduct}>Add New T-Shirt</button>
    </div>
    </form>
    );
}



export default ProductAdd;