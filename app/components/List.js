import React from 'react';
const List = (props) => {

  const list = props.listItems.map( (item,index) => (
    <li key={index}>
      <h2>{item}</h2>
    </li>
  ))

  return (
    <div>
      <ul>
        {
          list
        }
      </ul>
    </div>
  )
}
export default List