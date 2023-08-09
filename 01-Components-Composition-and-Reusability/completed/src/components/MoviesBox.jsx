import { useState } from 'react'
import { tempMovieData } from '../assets/data'

export const MoviesBox = () => {
  const [movies, setMovies] = useState(tempMovieData)
  const [isOpen1, setIsOpen1] = useState(true)

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && <MoviesList movies={movies} />}
    </div>
  )
}

export const MoviesList = (props) => {
  const { movies } = props
  return (
    <ul className="list">
      {movies?.map((movie) => (
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
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}
