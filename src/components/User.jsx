import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.jsx'; 

const User = ({ props }) => {

    return (
        <div className="initUser">
            <Link to="/login"><Button>Iniciar sesión</Button></Link>
        </div>
    )
}

export default User