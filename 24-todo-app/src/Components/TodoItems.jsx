import React from 'react'

const TodoItems = ({id, title, completed}) => {
  return (
    <li className={`list-group-item ${completed} && 'list-group-item-success`}>
    <div className="d-flex justify-content-center">

    <span className='d-flex align-item-center'>
        <input type="checkbo" className='mr-3' checked={completed} > </input>
        {title}
        </span>
        <button className='btn btn-danger'>Delete</button>
    </div>
      
    </li>
  )
}

export default TodoItems

