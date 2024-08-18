import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoItem from './Components/TodoItem/TodoItem'

const App = () => {
  return (
  <React.Fragment>
  <Navbar />
  <TodoForm />
  <TodoItem />
  </React.Fragment>
  )
}

export default App
