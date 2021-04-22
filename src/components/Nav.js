import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <div className="nav-section-left">
        <div className="nav-item">
          <Link to="/">Met Gallery</Link>
        </div>
      </div>
      <div className="nav-section-right">
        <div className="nav-item">
          <Link to="/artwork">Show</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
      </div>

    </header>
  )
}

export default Nav