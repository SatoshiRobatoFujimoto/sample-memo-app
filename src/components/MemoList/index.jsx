import React from 'react'

import './styles.scss'
// _______________________________________________________________________
//
const MemoList = ({ memoList }) => {
  console.log('components/MemoList')

  return (
    <div className="memo-list">
      {memoList.map((memo, i) => {
        return <Memo memo={memo} key={i} />
      })}
    </div>
  )
}
// _______________________________________________________________________
//
const Memo = ({ memo }) => {
  console.log('components/MemoList-Memo')

  const month = memo.date.getMonth() + 1
  const day = memo.date.getDate()

  return (
    <div className="memo-item">
      <span className="date">
        {month}/{day}
      </span>
      <span className="msg">{memo.msg}</span>
    </div>
  )
}

export default MemoList
