import React from 'react';
import './App.css';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './view/Main';
import Details from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/home" default />
                <Route element={<Details />} path="/products/:id" />
                <Route element={<UpdateProduct/>} path="/products/edit/:id" />
            </Routes>
        </BrowserRouter>

    </div>
    );
}

export default App;