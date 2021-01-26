import React, { useState, useCallback, useEffect } from 'react'
import MyHeader from './components/Header'
import AddInput from './components/AddInput'
import List from './components/List'
import NoDataTip from './components/NoDataTip'
import CheckModal from './components/Modal/CheckModal'
import EditModal from './components/Modal/EditModal'

function App() {
  const [ inputIsShow, setInputIsShow ] = useState(false),
    [ todoList, setTodoList ] = useState([]),
    [ isShowCheckModal, setShowCheckModal ] = useState(false),
    [ currentData, setCurrentData ] = useState({}),
    [ isShowEditModal, setShowEditModal ] = useState(false)

  useEffect(() => {
    const toloData = JSON.parse(window.localStorage.getItem('todoListData') || '[]')
    setTodoList(toloData)
  }, [])

  useEffect(() => {
   localStorage.setItem('todoListData', JSON.stringify(todoList))
  }, [todoList])

  const addItem = useCallback(value => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: true
    }

    setTodoList((todoList) => [ ...todoList, dataItem ])
    setInputIsShow(false)
  }, [])

  const removeItem = useCallback(id => {
    setTodoList(todoList => 
      todoList.filter(item => item.id !== id)
    )
  }, [])

  const computed = useCallback(id => {
    setTodoList(todoList => 
      todoList.map(item => {
        if (item.id === id) item.completed = !item.completed
        return item
      })
    ) 
  }, [])

  const _setCurrentData = (todoList, id) => {
    setCurrentData(() => todoList.filter(item => item.id === id)[0])
  }

  const openCheckModal = useCallback(id => {
    _setCurrentData(todoList, id)
    setShowCheckModal(true)
  },[todoList])
  
  const openEditModal = useCallback(id => {
    _setCurrentData(todoList, id)
    setShowEditModal(true)
  },[todoList])

  const submitEdit = useCallback((newData, id) => {
    setTodoList(todoList =>
      todoList.map(item => {
        if (item.id === id) item = newData
        return item
      })
    )
    setShowEditModal(false)
  }, [])

  return (
    <div className="App">

      <MyHeader
        openInput={ () => setInputIsShow(!inputIsShow) } />
        
      <AddInput
        inputIsShow={ inputIsShow }
        addItem={ addItem } />

      {
        todoList && todoList.length ? 
        (
          <ul className="list-warp">
            {
              todoList.map(item => {
                return (
                  <List
                    data={ item }
                    key={ item.id }
                    openCheckModal={ openCheckModal }
                    openEditModal={ openEditModal }
                    computed={ computed }
                    removeItem={ removeItem }
                  />
                )
              })
            }
          </ul>
        )
        :
        <NoDataTip />
      }

      <CheckModal
        data={ currentData }        
        isShowCheckModal={ isShowCheckModal }
        closeModal={ () => setShowCheckModal(false) }
        />

      <EditModal 
        data={ currentData }        
        isShowEditModal={ isShowEditModal }
        submitEdit={ submitEdit }
      />
    </div>
  )
}

export default App
