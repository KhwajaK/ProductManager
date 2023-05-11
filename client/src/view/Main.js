import React, {useState} from 'react'
// import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
// import ProductDetails from '../components/ProductDetails'

const Main = () => {
    const [product, setProduct] = useState([]);
    const removeProduct = itemId => {
        setProduct(product.filter(item => item._id != itemId))
    }

    return (
    <div>
        <ProductForm product={product} setProduct={setProduct} />
        <hr />
        <ProductList product={product} setProduct={setProduct} removeProduct={removeProduct}/>
    </div>
    )
}

export default Main
