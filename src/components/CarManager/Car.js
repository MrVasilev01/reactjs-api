// <!-- 3. Car Management:

//    - Create a separate page to view all cars.
//         Fetch the list of cars using the "getAllCars" API.

//    - Display the list of cars with their basic details, 
//         and include an input field to add a new car.
//         The user can enter car details (e.g., make, model, year) and submit the data using the "addNewCar" API. -->
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Car() {
   const [cars, setCars] = useState([]);
   const [user_id, setUser_id] = useState("");
   const [brand, setBrand] = useState("");
   const [model, setModel] = useState("");
   const [year, setYear] = useState("");

   useEffect(() => {
      const fetchData = async () => {
         const url = 'http://127.0.0.1:8000/api/getAllCars';
         
         try {
            const response = await fetch(url);
            const result = await response.json();

            setCars(result);

            console.log(result);
         }
         catch(error){
            console.log(error);
         }
         }
      fetchData();
   },[]);


   const handleSave = async () => {
      try {
         // Use an API to add a new car
         await axios.post("http://127.0.0.1:8000/api/addCar", { user_id, brand, model, year });
         
         // Clear the input fields
         setUser_id("");
         setBrand("");
         setModel("");
         setYear("");
         
         // Fetch the updated list of cars
         const response = await axios.get("http://127.0.0.1:8000/api/getAllCars");
         setCars(response.data);

      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
            <h1>Car</h1>
            
            
            { cars.data !==undefined && cars.data.map((car) => {
               return <div key={car.id}>
                        {car.brand} - {car.model} - {car.year}
                      </div>   
            })}
            
            <br/>

            <h1>Add Car</h1>
            <label>User ID:</label>
            <input type="text" value={user_id} onChange={e => setUser_id(e.target.value)} />
            <br/>
            <label>Brand:</label>
            <input type="text" value={brand} onChange={e => setBrand(e.target.value)} />
            <br/>
            <label>Model:</label>
            <input type="text" value={model} onChange={e => setModel(e.target.value)} />
            <br/>
            <label>Year:</label>
            <input type="text" value={year} onChange={e => setYear(e.target.value)} />
            <br/>
            <button onClick={handleSave}>Add Car</button>
      </div> 
   );
}
export default Car;
