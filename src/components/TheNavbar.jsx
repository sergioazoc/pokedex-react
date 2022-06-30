import { Link } from "react-router-dom"

export default function TheNavbar() {

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
        >
          Pokedex React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="navbar"
          className="collapse navbar-collapse"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
              >
                Finder
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pokemons"
                className="nav-link"
              >
                List Pokemons
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}