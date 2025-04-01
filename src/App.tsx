import './App.css'
import { Content } from './components/Content'
import { JokeContextProvider } from './contexts/JokeContext'

function App() {

  return (
    <JokeContextProvider>
      <Content />
    </JokeContextProvider>
  )
}

export default App
