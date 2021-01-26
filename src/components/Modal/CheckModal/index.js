import React from 'react'

import './index.scss'

import Modal from "../"

import { formatTime } from '../../../libs/utils'

function CheckModal (props) {

  const { 
    isShowCheckModal, 
    data, 
    closeModal 
  } = props

  return (
    <Modal
      isShowModal={ isShowCheckModal }
      modalTitle='查看事件'>
      <p className="topic">时间：{ formatTime(data.id, 'yyyy年mm月dd日', 'hh:mm:ss') }</p>
      <p className="topic">内容：{ data.content }</p>
      <p className="topic">状态：{ data.completed ? '已完成' : '未完成' }</p>

      <button
        className="btn btn-primary submit"
        onClick={ closeModal }>
        确定
      </button>
    </Modal>
  )
}

export default CheckModal