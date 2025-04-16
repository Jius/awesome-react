import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { Content } from './components/Content'
import { JokeContextProvider } from './contexts/JokeContext'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const client = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      
      <JokeContextProvider>
        <Content />
      </JokeContextProvider>
    </QueryClientProvider>    
  )
}

export default App
