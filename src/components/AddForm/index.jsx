import React from 'react'

import './styles.scss'

const AddForm = ({ memoMsg, setMemoMsg, addMemo }) => {
  console.log('components/AddForm')

  const updateMemo = (e) => {
    setMemoMsg(e.target.value)
  }

  const submitValue = () => {
    if (memoMsg === '') return
    addMemo(memoMsg)
    setMemoMsg('')
  }

  return (
    <div className="add-form">
      <input
        type="text"
        value={memoMsg}
        onChange={updateMemo}
        placeholder="メモを入力"
      />
      <button onClick={submitValue}>＋</button>
    </div>
  )
}

export default AddForm
