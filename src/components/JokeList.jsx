export const JokeList = ({ jokes }) => {
    return (
      <div>
        <h3 className="title is-3">My historic</h3>
        {jokes.map((joke) => <p key={joke.id}>{joke.value}</p>)}
      </div>
    )
  }