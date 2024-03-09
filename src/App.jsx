import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('button clickd')
  }

  return (
    <>
      <h1>React Core Concepts Part 2</h1>
      <Team></Team>
      <Friends></Friends>
      <Counter></Counter>
      <Users></Users>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('I am clicked')}>Click Me 2</button>
    </>
  )
}

export default App
