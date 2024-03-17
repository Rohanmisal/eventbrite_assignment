import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg bg-light"
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand" >
              eventbrite
            </Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="navbar-link active" >
                    Home
                  </Nav.Link>
                </LinkContainer>
                {/* <span className="visually-hidden">(current)</span> */}
              </li>
              <li className="nav-item">
              <LinkContainer to="/events">
                <Nav.Link className="nav-link">
                  Events
                </Nav.Link>
              </LinkContainer>
              </li>

              <li className="nav-item dropdown">
              <LinkContainer to="/signup"> 

                <Nav.Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  New User?
                </Nav.Link>
              </LinkContainer>
                <div className="dropdown-menu">
                <LinkContainer to="/login"> 
                  <Nav.Link className="dropdown-item">
                    Login
                  </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup"> 
                  <Nav.Link className="dropdown-item" >
                    Signup
                  </Nav.Link>
                  </LinkContainer>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
