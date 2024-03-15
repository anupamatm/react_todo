import { createContext, useReducer } from "react";



function todoReducer(state,action){
  switch(action.type){
   case 'ADD_TODO':
    console.log(action.payload)
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
 const initialState = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Do laundry', completed: false },
  { id: 3, text: 'Walk the dog', completed: true },
  { id: 4, text: 'Clean the house', completed: false }
];

const TodoListContextProvider=({children})=>{
  
  const [todos, dispatch]=useReducer(todoReducer,initialState)
  

  return(
   <TodoListContext.Provider value={{todos,dispatch}}>
    {children}
   </TodoListContext.Provider>
  )
  
 }

 export default TodoListContextProvider

 export const TodoListContext= createContext({
  todos:[],
  dispatch:()=>{}
  // onitemAdd:()=>{},
  // conDelete:()=>{},
  // onCompleate:() =>{},



})