// 2. User Dashboard:

//    - Upon successful login, redirect the user to their dashboard.

//    - The dashboard should display the user's information, including username and email. Fetch this data using the "getUserInfo" API.

//    - Provide an option for the user to edit their information, including username and email. Use an API for this purpose.

import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Dashboard(){
    const [user, setUser] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const id = useParams().id;

    useEffect(() => {
        // Fetch user info using the "getUserInfo" API
        axios.get(`http://127.0.0.1:8000/api/getUserInfo/${id}`)
        .then(response => {
            setUser(response.data);
            setUsername(response.data.data.name);
            setEmail(response.data.data.email);
        })
        .catch(error => {
            console.log(error);
        });

    }, []);

    const handleEdit = () => {
        setEditMode(true);
        axios.get(`http://127.0.0.1:8000/api/getUserInfo/${id}`)
        .then(response => {
            setUser(response.data);
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleSave = () => {
        // Use an API to update user info
        axios.post(`http://127.0.0.1:8000/api/updateUserInfo/${id}`, { name, email })
            .then(response => {
                setUser(response.data);
                setEditMode(false);
            })
            .catch(error => {
                console.log(error);
                alert("Failed to update user info.");
            });
    }

    const handleCancel = () => {
        setEditMode(false);
        axios.get(`http://127.0.0.1:8000/api/getUserInfo/${id}`)
        .then(response => {
            setUser(response.data);
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    console.log(user);
    // console.log(username);
    // console.log(email);
    return (
        <div>
            {editMode ? (
                <div>
                    <label>Username:</label>
                    <input type="text" value={name} onChange={e => setUsername(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>Username: {name}</p>
                    <p>Email: {email}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Dashboard;