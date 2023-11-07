import { useState, useEffect } from "react";
import axios from 'axios';

function Home(){
    // const [users, setUsers] = useState({});
    const [cars, setCars] = useState([]);
    const [name, setName] = useState("");
    // const [predict, setPredict] = useState({});

        // useEffect(() => {
        //     const fetchData = async () => {

        //         const encodedParams = new URLSearchParams();
                
        //         encodedParams.set("title", "Facebook to acquire Path");

        //         // const url = 'https://random-data-api.com/api/v2/users';
        //         const url = 'http://127.0.0.1:8000/api/getAllCars';

        //         try {
        //             const response = await fetch(url);
        //             const result = await response.json();

        //             // setUsers(result);
        //             setCars(result);

        //             console.log(result);
        //         }
        //         catch(error){
        //             console.log(error);
        //         }
        //         }
        //     fetchData();
        // },[]);

        // const fetchData = async () => {
        //     axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        //         console.log(res.data);
        //         setPredict(res.data);
        //     })
        // }
        const postData = () => {
            const url = `http://127.0.0.1:8000/api/addCar`;
                const dataToUpdate = new FormData();
                dataToUpdate.append('user_id', '2');
                dataToUpdate.append('brand', 'Mercedes');
                dataToUpdate.append('model', 'AMG');
                dataToUpdate.append('year', '2020');

            fetch(url, {
                method: 'POST',
                body: dataToUpdate
            })
                .then((response) => response.json())
                .then((updatedData) => {
                    // Handle the updated date in your state
                    console.log(updatedData);
                })
                .catch((error) => {
                // Handle error properly
                    console.log(error);
            });
        }



    return (
       <div>
        <h1>
            From
        </h1>

        {/* 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <button onClick={ fetchData }> Predict Age </button>

        <h1> Name - {predict.name}</h1>
        <h1> Predicted age - {predict.age}</h1> */}
        {/* { users && users.first_name} */}
        { cars.data?.map((car) => {
            return <div key={car.id}>{car.brand}</div>   
        })}

        {/* { cars.data !==undefined && cars.data.map((car) => {
            return <div key={car.id}>{car.brand}</div>   
        })} */}

        <button onClick={ postData }> Add Car </button>

        </div>
    );
}

export default Home;