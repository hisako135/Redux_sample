import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter( t => !t.completed )
        case 'SHOW_COMPLETED':
            return todos.filter( t => t.completed )
        default:
            throw new Error('Unknown filter:' + filter)
    }
}

const mapStateProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList