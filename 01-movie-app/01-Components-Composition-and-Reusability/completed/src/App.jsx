import { useState } from 'react'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
import { tempMovieData, tempWatchedData } from './assets/data'
import { average } from './utils'
import { StarRating } from './components/StarRating'

function App() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)

  return (
    <>
      <Navbar>
        <NumResults moviesLength={movies.length} />
      </Navbar>

      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>

        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  )
}
const NumResults = ({ moviesLength }) => {
  return (
    <p className="num-results">
      Found <strong>{moviesLength}</strong> results
    </p>
  )
}

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  )
}

export const WatchedList = (props) => {
  const { watched } = props
  return (
    <ul className="list">
      {watched.map((movie) => (
        <MovieWatched key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}

const MovieWatched = (props) => {
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
export const Summary = (props) => {
  const { watched } = props

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
  const avgUserRating = average(watched.map((movie) => movie.userRating))
  const avgRuntime = average(watched.map((movie) => movie.runtime))

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

const MoviesList = (props) => {
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

export default App
