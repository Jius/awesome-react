import { useState, useEffect  } from 'react'


import './App.css'
import {Joke} from './components/Joke'
import {RefreshJoke} from './components/RefreshJoke'
import {Loader} from './components/Loader'
import {JokeList} from './components/JokeList'

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
