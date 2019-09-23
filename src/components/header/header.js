import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm André Duarte</h1>
              <h3>
                Passionate about technology and informatics, I have a degree in
                Computer Engineering at the School of Technology and Management
                of Porto. I have web skills, namely Angular and React, as well
                as NodeJS, Java, Spring, having contact with JHipster which
                encompasses all these technologies, which are my favorites at
                the moment. I find myself on a break to enter masters in a
                while, but I am looking for work.
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/andre.duarte.54772">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andr%C3%A9-duarte-a6263b158">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AndreDuarte48">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/andrefsd4">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
