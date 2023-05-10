import React, {useState} from 'react'
// import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
// import ProductDetails from '../components/ProductDetails'

const Main = () => {
    const [product, setProduct] = useState([]);

    return (
    <div>
        <ProductForm product={product} setProduct={setProduct} />
        <hr />
        <ProductList product={product} setProduct={setProduct} />
    </div>
    )
}

export default Main
