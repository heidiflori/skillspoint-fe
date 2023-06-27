import React, { useEffect, useState } from 'react';
import apiUrl from '../../apiConfig.js';
import '../../styles/styles.css';
import Cookies from 'js-cookie';


const TrainingRequestForm = () => {

    const token = Cookies.get('token');
    const currentUserId = Cookies.get('currentuserid');
    const likesCounter = 0;

    const [input, setInput] = useState({
        user: { id: currentUserId },
        title: "",
        description: "",
        likesCounter: likesCounter
    });

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const path = apiUrl + "/training-requests";
        const path = `${apiUrl}/api/skills/training-requests/add`;
        const body = { ...input };

        const response = await fetch(path, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body),
        })
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className='form-control' required type="text" name='title' value={input.title} onChange={handleChangeInput} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className='form-control' required type="text" name='description' value={input.description} onChange={handleChangeInput} />
                </div>
                <div className='buttons-section'>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>

    );
}

export default TrainingRequestForm;