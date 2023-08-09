import { useState } from 'react'

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  )
}

export const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  )
}

export const Search = () => {
  const [query, setQuery] = useState('')

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export const NumResults = () => {
  return (
    <p className="num-results">
      Found <strong>X</strong> results
    </p>
  )
}
