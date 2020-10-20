import React from 'react'

export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <div className="container d-flex" >
          <a class="navbar-brand" href="#"> {props.data.query.store} </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
          </div>
        </div>
      </nav>
    )
}
