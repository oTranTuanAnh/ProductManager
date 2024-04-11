import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import axios from "axios";
import './Create.css'

export default function CreateProduct(){
    const [product,  setProduct] = useState({})
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {student: product},
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
                <h1>Create new student</h1>
                <div className="col-md-12">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control form-create-input" id="name" value={formik.values.student.name} onInput={formik.handleChange}></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control form-input" id="description"
                           name="description" value={formik.values.student.description} onInput={formik.handleChange}></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="score" className="form-label">Score</label>
                    <input type="number" className="form-control form-input" id="score" name="score" value={formik.values.student.score} onInput={formik.handleChange}></input>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-save">Save
                    </button>
                </div>
            </form>


        </>
    )
}