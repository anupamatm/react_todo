
import './App.css'
import Todo1 from './components/Todo1'
import TodoListContextProvider from './store/TodoListContext_store'

function App() {
  

  return (
 <>
 <TodoListContextProvider>
 <Todo1/>
 </TodoListContextProvider>
 
 </>
  )
}

export default App
