import React, { useRef } from 'react'
 
import './index.scss'

function AddInput (props) {
  const { inputIsShow, addItem } = props,
      inputRef = useRef()

  const submitVal = () => {
    const inputValue = inputRef.current.value.trim()

    if (!inputValue) {
      return
    }

    addItem(inputValue)
    inputRef.current.value = ''

  }

  return (
    inputIsShow ? 
    <div className="add-input">
      <input type="text"
        ref={ inputRef }
        placeholder="请输入待办事项" />
      <button className="btn btn-primary"
        onClick={ submitVal }>增加</button>
    </div>
    :
    ''
  )
}

export default AddInput