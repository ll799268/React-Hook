import React from 'react'

import './index.scss'

function List (props) {

  const { 
    data, 
    openCheckModal, 
    openEditModal, 
    computed,
    removeItem } = props

  return (
    <li className="list"
      key={ data.id }>
      <div className="left">
        <input type="checkbox" 
          checked = { data.completed } 
          onChange={ () => computed(data.id) } />
        <span style={{ textDecoration: ( data.completed ) ? 'line-through' : '' }}>{ data.content }</span>
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" 
          onClick={ () => openCheckModal(data.id) }>查看</button>
        <button className="btn btn-warning" 
          onClick={ () => openEditModal(data.id) }>编辑</button>
        <button className="btn btn-danger"
          onClick={ () => removeItem(data.id) }>删除</button>
      </div>
    </li>
  )
}

export default List