import React, { useReducer, useState } from 'react'
import List from './List';
import Addtodo1 from './Addtodo1';

function todoReducer(state,action){
 switch(action.type){
  case 'ADD_TODO':
    return [...state, action.payload];
  case 'DELETE_TODO':
    return state.filter(todo => todo.id !== action.payload);
  case 'COMPLETE_TODO':
    return state.map(todo =>
      todo.id === action.payload ? { ...todo, completed: true } : todo
    );
  default:
    return state;
 }
}

function Todo1() {

  const todos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Walk the dog", completed: true },
    { id: 4, text: "Clean the house", completed: false }
  ];
const [todoList, dispatch]=useReducer(todoReducer,todos)
// const [todoList,setTodoList]=useState(todos)

  const onitemAdd=(newItem)=>{
      
      dispatch({
        type:'ADD_TODO',
        payload:newItem
      })
  }
  const onDelete=(id)=>{
    dispatch({
      type:'DELETE_TODO',
      payload:id
    })
    
  }
  const onCompleate = (id) => {
    dispatch({
      type:'COMPLETE_TODO',
      payload:id
    })
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