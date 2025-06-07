import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams(); 
    //Todo: Fetch book details by id and implement update functionality
    return (
        <div>
            <h1>Update a book .. id no {id} </h1>
        </div>
    );
};

export default Update;