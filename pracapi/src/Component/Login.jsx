import React, { useContext } from 'react'
import { Wrapper } from '../App'
import { useNavigate } from 'react-router-dom';

function Login() {

    const { setIslogin } = useContext(Wrapper);

    const navigate = useNavigate()

    function login() {
        setIslogin(true);
        navigate("/");
    }

    return (
        <div className="container p-5">
            <h2>Login Form</h2>
            <button className="btn btn-primary" onClick={login}>
                Login
            </button>
        </div>
    )
}

export default Login;