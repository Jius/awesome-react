import {createContext, useContext, useState, useEffect} from 'react'

export const JokeContext = createContext({
    joke: undefined,
    jokes: [],
    loading: false,
    fetchJoke: () => null,
    addJoke: () => null
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
      addJoke(jokeFetched)
      setLoading(false)
    }
  
    useEffect(() => {
      setTimeout(fetchJoke, 2000)
    }, [])

    const addJoke = (newJoke) => {
        if (jokes.find((joke) => joke.id === newJoke.id)) return
        setJoke(newJoke)
        setJokes([...jokes, newJoke])
    }


    return <JokeContext.Provider value={{
        joke,
        jokes,
        loading,
        fetchJoke,
        addJoke,
    }}>
        {children}
    </JokeContext.Provider>
}

