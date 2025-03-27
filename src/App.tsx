import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Joke = ({ value, icon_url }) => {
  return (
    <div className="content">
      <img src={icon_url} className="chuck" />
      <blockquote>{value}</blockquote>
    </div>
  )
}

const RefreshJoke = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="button is-primary">Refresh</button>
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

const JokeList = ({ jokes }) => {
  return (
    <div>
      <h3 class="title is-3">My historic</h3>
      {jokes.map((joke) => <p key={joke.id}>{joke.value}</p>)}
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [joke, setJoke] = useState()
  const [jokes, setJokes] = useState([])

  const fetchJoke = async () => { 
    const url = "https://api.chucknorris.io/jokes/random"
    const response = await fetch(url)
    const jokeFetched = await response.json()
    setJoke(jokeFetched)
    setJokes([...jokes, jokeFetched])
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(fetchJoke, 2000)
  }, [])
  
  console.log('App re-render')
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          {loading && <Loader /> }
          {joke && <Joke value={joke.value} icon_url={joke.icon_url}/>}
          {joke && <RefreshJoke onClick={fetchJoke} />}
        </div>
        <div className="column is-one-third">
          {jokes.length > 0 && <JokeList jokes={jokes}/>}
        </div>
      </div>
      
    </div>
  )
}

export default App
