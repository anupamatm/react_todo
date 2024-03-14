import React from 'react'

function List({todos,onDelete,onCompleate}) {
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td>{item.completed ? 'Completed'
               :<button onClick={()=>onCompleate(item.id)}>complete</button> }</td>
              
              <td><button onClick={() => onDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default List