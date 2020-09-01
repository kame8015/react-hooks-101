import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)  // 状態全てをstate一つで持つ
  const { name, price } = state  // 分割代入

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  // DOMの最初のレンダリングのときのみ実行される
  useEffect(() => {
    console.log('This is like componentDidMount.')
  }, [])

  // 最初とnameが変更されたときのみ実行される
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])

  return (
    <>
      <p>現在の{name}は，{price}円です．</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  )
}

// 初期値
App.defaultProps = {
  name: '',
  price: 1000
}

export default App
