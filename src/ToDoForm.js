import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    //get input from user in form
    const [ userInput, setUserInput ] = useState('');
    //change the content of a form
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    //add task with inputted value
    const handleSubmit = (e) => {
        //prevent reloading the browser
        e.preventDefault();
        //add the task
        addTask(userInput);
        //clear the form
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;