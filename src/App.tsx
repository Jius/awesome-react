import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Joke = ({ value, icon_url }) => {
  return (
    <>
      <p>{value}</p>
      <img src={icon_url} className="chuck" />
    </>
  )
}

const RefreshJoke = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Refresh</button>
    </div>
  )
}

const Loader = () => {
  return (
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [joke, setJoke] = useState()

  const fetchJoke = async () => { 
    const url = "https://api.chucknorris.io/jokes/random"
    const response = await fetch(url)
    setJoke(await response.json())
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(fetchJoke, 2000)
  }, [])


  
  console.log('App re-render')
  return (
    <>
      {loading && <Loader /> }
      {joke && <Joke value={joke.value} icon_url={joke.icon_url}/>}
      {joke && <RefreshJoke onClick={fetchJoke} />}
    </>
  )
}

export default App
