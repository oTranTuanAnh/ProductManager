import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export default function EditProduct(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:3000/products/"+id).then(res=>{
            setProduct(res.data);
        })
    },[])
    return(
        <>
            <Formik initialValues={product} onSubmit={(values)=>{
                axios.put(" http://localhost:3000/products/"+product.id, values).then(
                    res =>{
                        alert("Update thanh cong!!!");
                        navigate("/products")

                    }
                )
            }} enableReinitialize={true}>
                <Form className="form-create g-3">
                    <h1>Update product</h1>
                    <div className="col-md-12">
                        <label htmlFor="tile" className="form-label">Title</label>
                        <Field type="text" className="form-control form-create-input" id="tile" name="title"></Field>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="price" className="form-label">Price</label>
                        <Field type="text" className="form-control form-input" id="price"
                               name="price"></Field>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <Field type="text" className="form-control form-input" id="description"
                               name="description"></Field>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-secondary btn-save">Save</button>
                        <Link to={'/products'}><button type="button" className="btn btn-secondary btn-save">Back</button></Link>
                    </div>
                </Form>
            </Formik>
        </>
    )
}