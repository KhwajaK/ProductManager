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
        <h1>ProductList</h1>
        {
            product.map((product, i)=> {
                return(
                    <div key={i}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>{product.title}'s Page!</Link>
                    </div>
                )
            })
        }
    </div>
    )
}

export default ProductList