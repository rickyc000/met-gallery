import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <div className="nav-section-left">
        <Link to="/">
          <div className="nav-item">
            Met Gallery
          </div>
        </Link>
      </div>
      <div className="nav-section-right">
        <Link to="/artwork">
          <div className="nav-item">
            Show
          </div>
        </Link>
        <Link to="/about">
          <div className="nav-item about-link">
            About
          </div>
        </Link>
      </div>

    </header>
  )
}

export default Nav