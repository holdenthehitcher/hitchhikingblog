import React from "react"

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          {" "}
          <h1>Holden's Catering Company</h1>{" "}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="modal" data-target="#navModal">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="holdenNavbar">
          <ul class="nav my-auto ml-4">
            <li class="nav-item active">
              <a href="#" class="nav-link active">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Reserve
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
