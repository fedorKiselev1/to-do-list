import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  //use data from data.json
  const [ toDoList, setToDoList ] = useState(data);
  //switch from being completed and not completed
  const handleToggle = (id) => {
    //task = if id is found then make it complete/incomplete else do nothing
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    //set the new tasklist
    setToDoList(mapped);
  }
  //delete all completed tasks
  const handleFilter = () => {
    //return all not completed tasks
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    //set the tasklist
    setToDoList(filtered);
  }
  //add a task
  const addTask = (userInput ) => {
    //create a copy of a tasklist
    let copy = [...toDoList];
    //make the copy be 1 task larger and add input from user
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    //copy becomes original
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
