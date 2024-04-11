import {useEffect, useState} from "react";
import axios from "axios";
import './ListProduct.css'
import {Link} from "react-router-dom";

export default function ListProducts(){
    const [products, setProducts] = useState([]);
    const [isDelete,setIsDelete] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:3000/products").then(
            res =>{
                setProducts(res.data)
            }
        )
    },[isDelete])
    const handleDelete = (id)=>{
        axios.delete("http://localhost:3000/products/"+id).then(res=>{
                alert("Xoa thanh cong!!!!");
                setIsDelete(!isDelete);
            }
        )

    }
    return(
        <>
            <div className="list-products">
                <h1>List Products</h1>

                <Link to={'create'}>
                    <button type="button" className="btn btn-secondary add-product">Add new product</button>
                </Link>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        products.map(((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Link to={"/products/edit/"+item.id}><button type="button" className="btn btn-secondary">Edit</button></Link>
                                    <button type="button" className="btn btn-secondary"
                                            onClick={(e) => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>))
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}