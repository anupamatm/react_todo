import React, { useContext, useReducer, useState } from 'react'
import List from './List';
import Addtodo1 from './Addtodo1';
import TodoListContextProvider, { TodoListContext } from '../store/TodoListContext_store';



function Todo1() {

 const {dispatch}=useContext(TodoListContext)

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
        <h1>To do list</h1>
        <Addtodo1 onitemAdd={onitemAdd} />
        <List  onDelete={onDelete} onCompleate={onCompleate} />
      </div>
   
  )
}

export default Todo1