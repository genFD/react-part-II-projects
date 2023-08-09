import { MoviesBox } from './MoviesBox'
import { WatchedBox } from './WatchedBox'

export const Main = () => {
  return (
    <main className="main">
      <MoviesBox />
      <WatchedBox />
    </main>
  )
}
