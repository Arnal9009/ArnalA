import './App.css'
import { AddTodo } from './components/Add_todo/add_todo';
import React from 'react';


function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [todos,setTodos]=React.useState([])
  
  function addTask () {
    if (inputValue) {
      const newObj = {
        id: Date.now(),
        title: inputValue,
        status: false
      }
      setTodos([...todos,newObj])
    }
  } 

  
  return (
    <div className="App">
      <h1>{inputValue}</h1>
      <AddTodo 
      add={addTask}
      value={inputValue}
      setValue={setInputValue} />
    </div>
  );
}

export default App;