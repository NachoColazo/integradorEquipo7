import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Button from '../utils/Button.jsx';


const Login = ({ props }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <h2>Iniciar sesión</h2>
                <form className='form'>
                    <div className='form__container'>
                        <label htmlFor="email">Correo electrónico
                            <input type="email" id="email" placeholder="Usuario" required /></label>
                        <label htmlFor="password">Contraseña
                            <input type="password" id="password" placeholder="• • • • • • • •" required /></label>
                    </div>
                    <Link to="/home"><Button filled>Ingresar</Button></Link>
                    <p className='ancor_register'>¿Aún no tenes cuenta?<a className="containerLogo" onClick={() => { navigate("/register") }}><span>Registrate</span></a></p>
                </form>
            </div>
        </>
    )
}

export default Login