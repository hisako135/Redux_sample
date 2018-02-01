import React from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'

const TodoList = ({ todo, onTodoClick}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id}{...todo} oncClick={() => onTodoClick(todo.id)} />
        ))} 
    </ul>
)

TodoList.prototype = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList