import React, { ChangeEvent, useState } from 'react';
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';
import Footer from "../components/Footer";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom"


const CreateTrainingForm = () => {

    const token = Cookies.get('token');
    const currentUserId = Cookies.get('currentuserid');

    const [input, setInput] = useState({
        title: "",
        trainer: "",
        description: "",
        startingDate: "",
        duration: "",
        maximumSlots: "",
        type: ""

    });

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const path = `${apiUrl}/api/skills/trainings/add`;
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
        <>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" required type="text" name='title' value={input.title} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label>Trainer</label>
                        <input className="form-control" required type="text" name='trainer' value={input.trainer} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" required type="text" name='description' value={input.description} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label for="date-picker">Starting date</label>
                        <input className='form-control' name='startingDate' type='date' value={input.staringDate} onChange={handleChangeInput}/>                    
                    </div>
                    
                    {/* <TextField type='date' name='startingDate' label="startingDate" value={input.staringDate}/> */}
                    
                    <div className="form-group">
                        <label>Duration</label>
                        <input className="form-control" required type="text" name='duration' value={input.duration} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label>Maximum number of slots</label>
                        <input className="form-control" required type="number" name='maximumSlots' value={input.maximumSlots} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <select className="form-select" id='training-type' name='type' required value={input.type} onChange={handleChangeInput}>
                            <option value="Other" selected="selected">
                                Click to Select
                            </option>
                            <option value="Soft Skill">
                                Soft skill
                            </option>
                            <option value="Technical Skill">
                                Technical skill
                            </option>
                            <option value="Business Skill">
                                Business skill
                            </option>
                        </select>
                    </div>
                    <div className='buttons-section'>
                        <button className="btn btn-primary" type='submit' >
                            <Link to="/trainings/browse" style={{color:'white', textDecoration:'none'}}>Submit</Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateTrainingForm;