import React from 'react';
/* import Card from './CardHotel'; */
import Login from "./Login";
import Register from './Register';

const Body = ({ props }) => {
    return (
        <div className='main_container'>
        <Login/>
        {/* <Register/> */}
        </div>
    )
}

export default Body