import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import './Detail.css'

export default function Detail(){
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:3000/products/"+id).then(res=>{
            setProduct(res.data);
        })
    },[])
    return(
        <>
            <form className="form-detail g-3">
                <h1>Product detail</h1>
                <div className="col-md-12">
                    <label className="form-label">Title: </label>
                    <span> {product.title}</span>
                </div>
                <div className="col-md-12">
                    <label htmlFor="price" className="form-label">Price: </label>
                    <span> {product.price}</span>
                </div>
                <div className="col-md-12">
                    <label htmlFor="description" className="form-label">Description: </label>
                    <span> {product.description}</span>
                </div>
                <div className="col-12">
                    <Link to={'/products'}><button type="button" className="btn btn-secondary btn-back">Back</button></Link>
                </div>
            </form>


        </>
    )
}