import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IData } from '../IData.interface';
import { api } from '../config';

const GetRequest = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    

    // performing side effect
    useEffect(() => {

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => {
        //         setData(response.data);
        //         setLoading(false)
        //     })
        //     .catch((error: Error) => {
        //         console.log("Error occurred while fetching data : ", error);
        //     })

            api.get("/posts")
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((error: Error) => {
                console.log("Error occurred while fetching data : ", error);
            })

    }, []);

    if (loading) {

        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
            <ul>
                {data.map((item: IData) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default GetRequest