import React from 'react'

const Input = ({ onChange,onSubmit,value }) => (
  <form
    onSubmit={onSubmit}>
    <div className="form-group">
      <lable
        htmlFor="listInput">
        Email address
      </lable>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        id="listItemInput"
        placeholder="Add new todo"/>
        <button
          className="btn btn-primary">
          Add Item
        </button>
    </div>
  </form>
)
export default Input