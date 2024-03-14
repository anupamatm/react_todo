import React, { useState } from 'react'
import List from './List';
import Addtodo1 from './Addtodo1';

function Todo1() {

  const todos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Walk the dog", completed: true },
    { id: 4, text: "Clean the house", completed: false }
  ];
const [todoList,setTodoList]=useState(todos)

  const onitemAdd=(newItem)=>{
      console.log(newItem)
      const newList=[...todoList,newItem]
      setTodoList(newList)
  }
  const onDelete=(id)=>{
    console.log(id)
    const newList= todoList.filter((item)=>{
      return item.id!==id
    })
    setTodoList(newList)
  }
  const onCompleate = (id) => {
    console.log(id)
    const updatedList = todoList.map(todo => {
      if (todo.id === id) {
        // Create a copy of the todo item with the completed property updated
        return { ...todo, completed: true };
      }
      return todo; // Return the original todo item for other IDs
    });
    // console.log(updatedList)
    setTodoList(updatedList); // Update the todoList state with the new array
  };
  
  
  return (
    <div>
      <h1> To do list </h1>
     <Addtodo1 onitemAdd={onitemAdd}/>
     <List todos={todoList} onDelete={onDelete} onCompleate={onCompleate}/>

    </div>
  )
}

export default Todo1