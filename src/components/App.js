import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="panel">
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App