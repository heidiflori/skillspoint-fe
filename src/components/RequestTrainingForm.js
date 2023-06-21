import React, { useState } from 'react';

const RequestTrainingForm = () => {

    const user = "mockUser";

    const [input, setInput] = useState({
        title: "",
        description: "",
    });

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput((values) => ({...values, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const path = "http://localhost:3001/training-requests";
        const body = {...input, user};

        const response = await fetch(path, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                // Authorization: `Bearer...`,
            },
            body: JSON.stringify(body),
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label>Title</label>
                <input required type="text" name='title' value={input.title} onChange={handleChangeInput} />
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea required type="text" name='description' value={input.description} onChange={handleChangeInput} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default RequestTrainingForm;