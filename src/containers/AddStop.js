import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStop } from '../actions'

function AddStop({ dispatch }) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  const onAddStop = e => {
    console.log('asdf');
    e.preventDefault();
    dispatch(addStop(name));
  }

  return (
    <div>
      <input
        placeholder='Name'
        onChange={(e) => setName(e.target.value.trim())}
      />
      <input
        placeholder='Address'
        onChange={(e) => setAddress(e.target.value.trim())}
      />
      <button onClick={onAddStop}>
        Add
      </button>
    </div>
  )
}

export default connect()(AddStop);
