import React, { Component } from "react";

export default class About extends Component {
  render() {
    var style = {
      maxWidth: "100%",
      width: "auto",
      height: "auto"
    };

    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/profile_pic.jpg"
                alt=""
                style={style}
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me </h2>
              <p>
                I consider myself a very positive and attentive person, very
                energetic, responsible, ambitious, autonomous and always ready
                to give my best at any time and I like to work. As a student in
                Computer Engineering, I developed teamwork skills and how to
                achieve the desired goals on time as well as a tremendous
                ability to learn quickly everywhere.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Rua Dr. David Assoreira</span>
                    <br />
                    <span>
                      São Mamede do Coronado
                      <br />
                      Trofa, Porto · 4745-394
                    </span>
                    <br />
                    <span>(+351) 916 945 717</span>
                    <br />
                    <span>
                      <a href="mailto: andreduarte04@hotmail.com">
                        andreduarte04@hotmail.com
                      </a>
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="https://1drv.ms/b/s!AlNmA-KS9V1yhJd5o7f2BdEZ829ytg?e=oiK18e"
                      className="button" target="_blank"
                    >
                      <i className="fa fa-download" />
                      Download Curriculum Vitae
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
