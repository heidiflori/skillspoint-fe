import React, { ChangeEvent, useState } from 'react';
import '../styles/astyles.css';

const CreateTrainingForm = () => {

    const user = "mockUser";

    const [input, setInput] = useState({
        title: "",
        description: "",
    });

    // const [file, setFile] = useState<File>();

    // const handleFileChange = (event) => {
    //     if (e.target.files) {
    //         setFile(e.target.files[0]);
    //     }
    // };

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput((values) => ({...values, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const path = "http://localhost:3001/training-create";
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
        <div class="form-container">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Title</label>
                    <input class="form-control" required type="text" name='title' value={input.title} onChange={handleChangeInput} />
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" required type="text" name='description' value={input.description} onChange={handleChangeInput} />
                </div>
                
                <button class="btn btn-primary" type='submit'>Submit</button>
            </form>
        </div>

    );
}

export default CreateTrainingForm;