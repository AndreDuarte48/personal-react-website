import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
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
              <ul className="copyright">
                <li>This page was developed in ReactJS</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
