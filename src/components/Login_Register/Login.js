// 1. User Authentication:

// - Implement a registration page with fields for username, email, and password.

// - Create a login page with fields for email and password.

// - Use APIs for registration and login to validate user credentials.

import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const postData = () => {
        const url = `http://127.0.0.1:8000/api/login`;
        const dataToUpdate = new FormData();
        dataToUpdate.append('email', email);
        dataToUpdate.append('password', password);
        
        fetch(url, {
            method: 'POST',
            body: dataToUpdate
        })
            .then((response) => response.json())
            .then((updatedData) => {
                // Handle the updated date in your state
                console.log(updatedData);
                setToken(updatedData);

                if(updatedData.status === true){
                    navigate(`/dashboard/${updatedData.data.id}`);
                }
            })
            .catch((error) => {
                // Handle error properly
                console.log(error);
    
        });
    }

    const navigateToRegister = () => {
        navigate('/register');
    };

    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={postData}>Login</button>
            
            <button onClick={navigateToRegister}>Register now</button>
        </div>
    );
}

export default Login;
