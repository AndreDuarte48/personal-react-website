import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/portfolio/flow1.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>CRM Module</h5>
                          <p>Final Project Intership</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a
                      href="#modal-02"
                      style={{ background: "cadetblue" }}
                      title
                    >
                      <img alt="" src="images/portfolio/uFindConcert.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>uFindConcert</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/portfolio/home4you.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Home4u</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/kingmusic.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>KingMusic</h5>
                          <p>Android Application</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/portfolio/ss.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Social Security Services</h5>
                          <p>Web Application</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt="" src="images/portfolio/robocode.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Genetic Algorithms using Robocode</h5>
                          <p>Java Application</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt="" src="images/portfolio/cs.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Shooting Java Game</h5>
                          <p>Java Application</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt="" src="images/portfolio/openw.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Weather App</h5>
                          <p>C Application</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/flow.png"
                alt=""
              />
              <div className="description-box">
                <h4>CRM Module</h4>
                <p>
                  The project is based on the creation of a module to be able to
                  integrate with the existing modules in company offer. This
                  module will manage the data sharing between customers and the
                  company, with the same customers to be in the corporate
                  network. The customer will have access to their contracts.
                  with the company, as well as the types of payment that is
                  subject to its purpose.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  JHipster, Angular 6, Spring, MySQL, etc.
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                style={{ background: "cadetblue" }}
                src="images/portfolio/modals/uFindConcert1.png"
                alt=""
              />
              <div className="description-box">
                <h4>uFindConcert</h4>
                <p>
                  I developed an API (.Net Core) and a Website (Angular).
                  Together this a project called uFindConcert with the intuit of
                  being a platform to manage users and find the concert that
                  they look up to
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Angular 8, .Net Core, C#, etc.
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/home4you.png"
                alt=""
              />
              <div className="description-box">
                <h4>Home4u</h4>
                <p>
                  I developed an API (.Net Core) and a Website (Node.Js).
                  Together this a project called Home4You with the intuit of
                  being a platform to manage university residences.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  NodeJS, .Net Core, HTML5, CSS3, JavaScript, MongoDB
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                style={{ marginLeft: "30%" }}
                src="images/portfolio/modals/kingmusic.png"
                alt=""
              />
              <div className="description-box">
                <h4>KingMusic</h4>
                <p>
                  This Android app was developed for those who love music and
                  like to go to every show they can. In this app you could:
                  Register on a database; Search Shows and Events for artists,
                  cities, venues or even your actual location(this could be a
                  way to make this appprofitable); Every Show/Event of this app
                  was set with a map system that could get you the fastest way
                  of your location to wherever you want.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Android, Java
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                style={{ marginLeft: "30%" }}
                src="images/portfolio/modals/ss1.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Social Security Services</h4>
                <p>
                  This project had three main actors, the user, the employee and
                  the administrator. Consisted of way to a normal user to report
                  some problem or ask for some special service. Those reports
                  would be saved in the archive of that user. The employee main
                  role was to see the reports and answer the user with the best
                  way to solve the issue. The administrator role was to register
                  employees and dismiss them when they’re not working anymore.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  NodeJS, Pug(Jade), CSS3, JavaScript, MongoDB
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/robocode1.png"
                alt=""
              />
              <div className="description-box">
                <h4>Genetic Algorithms using Robocode</h4>
                <p>
                  In this project I developed a game using genetic algorithms. I
                  used Robocode and the goal was to trace a path that didn’t hit
                  the obstacles, constantly learning from his failures.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Java, Genetic Algorithms
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                style={{ marginLeft: "18%" }}
                src="images/portfolio/modals/cs.png"
                alt=""
              />
              <div className="description-box">
                <h4>Shooting Java Game</h4>
                <p>
                  In this project I developed in Java game like Counter-Strike
                  in 2D, but in a 1v1 way. To accomplish this project the
                  teachers provided us some interfaces.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Java
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/openw2.png"
                alt=""
              />
              <div className="description-box">
                <h4>Weather App</h4>
                <p>
                  In this project I had to make a small app that could tell the
                  weather forecast of a specific region or place. The app could
                  register users and they would have the possibility to save
                  their locations on their “Favorites”. Had to use the
                  OpenWeatherMap API to get the right information. This was the
                  first time I actually did use an API. The information about
                  the users and their locations is saved locally in a ".txt"
                  file.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  C, API, OpenWeatherMap API
                </span>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
          </div>{" "}
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
