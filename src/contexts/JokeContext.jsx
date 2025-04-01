import {createContext, useContext, useState, useEffect} from 'react'

export const JokeContext = createContext({
    joke: undefined,
    jokes: [],
    loading: false,
    fetchJoke: () => null
});

export const useJokeContext = () => {
    return useContext(JokeContext)
}

export const JokeContextProvider = ({ children }) => {
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


    return <JokeContext.Provider value={{
        joke,
        jokes,
        loading,
        fetchJoke
    }}>
        {children}
    </JokeContext.Provider>
}

