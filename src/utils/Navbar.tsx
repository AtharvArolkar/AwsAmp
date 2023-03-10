
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong>VEOLIA</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Upload
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/view">
                Fetch
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/list">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/form">
                Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
