import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const {id} = useParams();
    const [title, setTitle] = useState([])
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
// can also do string interpolation (`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title, 
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate("/home")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h1 className='mb-3'>Edit {title}</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-3" >
                    <label className='form-label' htmlFor="title">Title</label>
                    <input className='form-control' type="text" defaultValue={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="mb-3" >
                    <label className='form-label'  htmlFor="price">Price</label>
                    <input className='form-control'  type="text" defaultValue={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="mb-3" >
                    <label className='form-label'  htmlFor="description" >Description</label>
                    <input className='form-control' type="text" defaultValue={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="mb-3" >
                    <input type="submit" className="btn btn-success" value="Submit Updates"/> 
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct