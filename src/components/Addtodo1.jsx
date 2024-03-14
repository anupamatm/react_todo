import React, { useRef } from 'react'

function Addtodo1({onitemAdd}) {
 const inputtext=useRef('')
 const inputcom=useRef('')
 const inputId=useRef('')

 const handleOnclick=()=>{
  const newitem={
    id:inputId.current.value,
    text:inputtext.current.value,
    completed:inputcom.current.checked
    
  }
  onitemAdd(newitem)
 }
  return (
    <div style={{width:'300px'}}>
       <label htmlFor="todo id">todo id</label> <input type="text" ref={inputId}/>
        <label htmlFor="todo name">todo name</label> <input type="text" ref={inputtext} />
        <label htmlFor="compleated">compleated</label> <input type="checkbox" ref={inputcom} />
        <button onClick={handleOnclick}>Add+</button>
    </div>
  )
}

export default Addtodo1