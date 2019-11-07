import React from 'react'
import { connect } from 'react-redux'
import { addStop } from '../actions'

const AddStop = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addStop(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddStop)
