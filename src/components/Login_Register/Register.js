import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_Password] = useState("");
    const navigate = useNavigate();

    const postData = () => {
        const url = `http://127.0.0.1:8000/api/register`;
            const dataToUpdate = new FormData();
            dataToUpdate.append('name', name);
            dataToUpdate.append('email', email);
            dataToUpdate.append('password', password);
            dataToUpdate.append('c_password', c_password);

            console.log(dataToUpdate.password);

        fetch(url, {
            method: 'POST',
            body: dataToUpdate
        })
            .then((response) => response.json())
            .then((updatedData) => {
                // Handle the updated date in your state
                console.log(updatedData);

                if(updatedData.status === true){
                    navigate('/dashboard');
                }
            })
            .catch((error) => {
            // Handle error properly
                console.log(error);
        });
    }

    const navigateToLogin = () => {
        navigate('/login');
    };

    return(
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" onChange={(e) => setC_Password(e.target.value)} />
            
            <button onClick={postData}>Register</button>

            <button onClick={navigateToLogin}>Login now</button>
        </div>
    );
}

export default Register;