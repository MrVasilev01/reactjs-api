import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CarInfo() {
    const [cars, setCars] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://127.0.0.1:8000/api/getCarById/' + id + '/';
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

    return(
        <div>
            <h1>Car Info</h1>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    { cars.data !==undefined && cars.data.map((car) => {
                    return <tr key={car.id}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CarInfo;