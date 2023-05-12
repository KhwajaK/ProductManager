import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const ProductList = (props) => {
    const {removeProduct, product, setProduct} = props;
    const {id} = useParams();

    const deleteItem = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => {
            removeProduct(id);
        })
        .catch(err => console.log(err))
    }
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [product])
    
    return (
    <div className='container' >
        <h2>All Products</h2>
        {
            product.map((item, i)=> (
                    <div className='m-3 p-2 bg-success rounded' key={i}>
                        <h5>{item.title}</h5>
                        <h5>{item.price}</h5>
                        <h5>{item.description}</h5>
                        <h6>
                            <Link className='link-secondary' to={`/products/${item._id}`}>View {item.title}</Link>
                        </h6>
                        <button onClick={(e) => deleteItem(item._id)} className="btn btn-dark">Delete</button>
                    </div>
                )
            )
        }
    </div>
    )
}

export default ProductList