import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setItem(res.data)
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <h2>Title: {item.title}</h2>
            <p>Price: $ {item.price}</p>
            <p>Description: {item.description}</p>
        </div>
    )
}

export default Details;