import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    
    return (
    <div className='container' >
        <h1>All Products</h1>
        {
            product.map((item, i)=> {
                return(
                    <div key={i}>
                        <Link to={`/products/${item._id}`}>{item.title}'s Page!</Link>
                    </div>
                )
            })
        }
    </div>
    )
}

export default ProductList