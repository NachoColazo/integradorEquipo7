import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Button from '../utils/Button.jsx';


const Register = ({ props }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <h2>Crear cuenta</h2>
                <form className='form'>
                    <div className='form__container'>
                        <div className='container__aux'>
                            <label htmlFor="name">Nombre
                                <input type="text" id="name" placeholder="Nombre" required /></label>
                            <label htmlFor="lastname">Apellido
                                <input type="text" id="lastname" placeholder="Apellido" required /></label>
                        </div>
                        <label htmlFor="email">Correo electrónico
                            <input type="email" id="email" placeholder="Usuario" required /></label>
                        <label htmlFor="password">Contraseña
                            <input type="password" id="password" placeholder="• • • • • • • •" required /></label>
                        <label htmlFor="conf-password">Confirmar contraseña
                            <input type="password" id="conf-password" placeholder="• • • • • • • •" required /></label>
                    </div>
                    <Link to="/home"><Button filled>Crear cuenta</Button></Link>
                    <p className='ancor_register'>¿Ya tienes una cuenta?<a className="containerLogo" onClick={() => { navigate("/register") }}><span>Iniciar sesión</span></a></p>
                </form>
            </div>
        </>
    )
}

export default Register