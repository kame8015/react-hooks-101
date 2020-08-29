import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)  // 状態全てをstate一つで持つ
  const { name, price } = state  // 分割代入

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
