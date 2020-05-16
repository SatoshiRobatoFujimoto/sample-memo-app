import React, { useState } from 'react'

import AddForm from '../AddForm'
import Header from '../Header'
import MemoList from '../MemoList'

import "./styles.scss"

const App = () => {
  console.log('components/App')
  const [memoList, setMemoList] = useState([])
  const [memoMsg, setMemoMsg] = useState('')

  const addMemo = (memoMsg) => {
    const newMemoList = memoList.concat({
      msg: memoMsg,
      date: new Date(),
    })
    setMemoList(newMemoList)
  }

  return (
    <div className="body">
      <Header />
      <MemoList memoList={memoList} />
      <AddForm memoMsg={memoMsg} setMemoMsg={setMemoMsg} addMemo={addMemo} />
    </div>
  )
}

export default App
