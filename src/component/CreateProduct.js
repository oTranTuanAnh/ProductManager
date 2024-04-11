import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import axios from "axios";
import './Create.css'

export default function CreateProduct(){
    const [product,  setProduct] = useState({})
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {product},
        onSubmit: values => {
            axios.post(" http://localhost:3000/products", values).then(
                res =>{
                    alert("Them moi thanh cong!!!");
                    navigate("/products")
                })
        }
    })
    return(
        <>
            <form className="form-create g-3" onSubmit={formik.handleSubmit}>
                <h1>Create new product</h1>
                <div className="col-md-12">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control form-create-input" id="title"
                           value={formik.values.product.title} onInput={formik.handleChange}></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control form-create-input" id="price"
                           value={formik.values.product.price} onInput={formik.handleChange}></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control form-input" id="description"
                           name="description" value={formik.values.product.description}
                           onInput={formik.handleChange}></input>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-secondary btn-save">Save
                    </button>
                    <Link to={'/products'}><button type="button" className="btn btn-secondary btn-save">Back</button></Link>
                </div>
            </form>

        </>
    )
}