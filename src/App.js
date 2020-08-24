import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const double = () => {
    setCount(count => count * 2)
  }

  const divide3 = () => {
    setCount(previouCount => {
      return previouCount % 3 === 0 ? previouCount / 3 : previouCount
    })
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>×2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}

export default App
