import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title}: {title: string}) => {

  
 
  
  return <div>{title}</div>
}

function App() {
  const [count, setCount] = useState({
    count_1: 0,
    count_2: 0,
  })
  const [count2, setCount2] = useState(0)


  useEffect(() => {
    console.log('mount')
    
    return () => console.log('unmount')
  }, [count])
  
  console.log('App re-render')
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => ({...prev, count_1: prev.count_1 + 1}))}>
          count is {count.count_1}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {count.count_1 >= 1 && <Card title={`le compte est de ${count}`}/>}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
