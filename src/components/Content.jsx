
import {useJokeContext} from '../contexts/JokeContext'
import {Loader} from './Loader'
import {JokeList} from './JokeList'
import {Joke} from './Joke'
import {Form} from './Form'

export const Content = () => {
  const {jokes, loading, fetchJoke} = useJokeContext()

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          {loading && <Loader />}
          <Joke />
          <Form />
        
        </div>
        <div className="column is-one-third">
          {jokes.length > 0 && <JokeList jokes={jokes} />}
        </div>
      </div>

    </div>
  )
}