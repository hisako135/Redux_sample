import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo =  ({ dispatch }) => {
  let input

  return (
    <div className="panel-box">
      <form
        onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()){
            return
          }
          dispatch(addTodo(input.value))
          input.value =  ''
        }}
      >
        <div className="control">
          <input
            className="input is-small"
            ref = {node => {
                input = node
            }}
          />
          <button className="button" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo