import React from 'react';

const ToDo = ({todo, handleToggle}) => {
    //if clicked call a function (make complete/incomplete)
    const handleClick = (e) => {
        //prevent reloading the browser
        e.preventDefault()
        //call a function to an id
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;