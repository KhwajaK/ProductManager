import React, {useState} from 'react'
// import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);

    return (
    <div>
        <ProductForm product={product} setproduct={setProduct} />
        <hr />
        <ProductList product={product} setproduct={setProduct} />

    </div>
    )
}

export default Main
