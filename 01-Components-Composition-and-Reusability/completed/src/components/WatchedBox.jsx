import { useState } from 'react'
import { tempWatchedData } from '../assets/data'
import { average } from '../utils'

export const WatchedBox = () => {
  const [watched, setWatched] = useState(tempWatchedData)
  const [isOpen2, setIsOpen2] = useState(true)

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
  const avgUserRating = average(watched.map((movie) => movie.userRating))
  const avgRuntime = average(watched.map((movie) => movie.runtime))

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && (
        <>
          <Summary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />

          <WatchedList watched={watched} />
        </>
      )}
    </div>
  )
}

export const Summary = (props) => {
  const { avgImdbRating, avgUserRating, avgRuntime, watched } = props
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}

export const WatchedList = (props) => {
  const { watched } = props
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}

const Movie = (props) => {
  const { movie } = props
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  )
}
