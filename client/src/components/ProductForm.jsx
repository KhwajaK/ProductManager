import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {product, setProduct} =props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then(res => {console.log(res);
            console.log(res.data)
            setProduct([...product, res.data])
            })
            .catch(err =>console.log(err))
        setTitle("")
        setPrice("")
        setDescription("")
    };

    return (
        <div className='container'>
            <h1 className='mb-3'>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3" >
                    <label className='form-label' htmlFor="title">Title</label>
                    <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </div>
                <div className="mb-3" >
                    <label className='form-label'  htmlFor="price">Price</label>
                    <input className='form-control'  type="text" onChange={(e)=>setPrice(e.target.value)} value={price} />
                </div>
                <div className="mb-3" >
                    <label className='form-label'  htmlFor="description" >Description</label>
                    <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <div className="mb-3" >
                    <input type="submit" className="btn btn-success" value="Submit"/> 
                </div>
            </form>
        </div>
    )
}

export default ProductForm