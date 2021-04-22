import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <Link to="/">Met Gallery</Link>
      <Link to="/artwork">Show</Link>
    </header>
  )
}

export default Nav