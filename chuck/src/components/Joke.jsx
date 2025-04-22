import {useJokeContext} from '../contexts/JokeContext'

export const Joke = () => {
  const { joke, fetchJoke } = useJokeContext();

  if (!joke) return;

  return (
    <>
      <div className="content">
        <img src={joke.icon_url} className="chuck" />
        <blockquote>{joke.value}</blockquote>
      </div>

      <div>
        <button onClick={fetchJoke} className="button is-primary">
          Refresh
        </button>
      </div>
    </>
  );
};
