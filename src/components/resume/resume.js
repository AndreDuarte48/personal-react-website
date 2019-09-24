import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>
                    Escola Superior de Tecnologia e Gestão - Politécnico do
                    Porto
                  </h3>
                  <p className="info">
                    Degree in Computer Engineering <span>•</span>{" "}
                    <em className="date">September 2019</em>
                  </p>
                  <p></p>
                </div>
              </div>{" "}
              <br />
              <br />
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Escola Secundária do Castêlo da Maia</h3>
                  <p className="info">
                    Science and Technology Course <span>•</span>{" "}
                    <em className="date">July 2015</em>
                  </p>
                  <p></p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Flowinn</h3>
                  <p className="info">
                    Intership in a JHipster Team (Final Project) <span>•</span>{" "}
                    <em className="date">March 2019 - June 2019</em>
                  </p>
                  <p>
                    During my internship in Flowinn, I learned how to manage
                    with JHipster, which is a code generator that builds
                    monolithic applications and micro services. To manage this
                    Software i had to use my knowledges in Angular, Java,
                    TypeScript and MySQL. I Integrated a small team with a lot
                    of projects and together we managed to deliverthem all and
                    during this time I made my school project as well.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Preh Portugal (Vacation Work)</h3>
                  <p className="info">
                    Technical Worker <span>•</span>{" "}
                    <em className="date">August 2018 - October 2018</em>
                  </p>
                  <p>
                    Here I improved my Working in team skills and in solving
                    problems as my job was troubleshoot diferent errors that
                    electric cars components could have.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                I have good communicating skills, excellent working posture /
                strong Ethic work, excellent team Worker and teamleader,
                learning facility, good problem-solving skills, initiative and
                Enterprise, planning, organizing and good Self-management. The
                technologies below are the one's that i had contact in my path
                all these years, with my auto-apreciation based on knowledge.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand" style={{ width: "50%" }} />
                    <em>C / C++</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "90%" }} />
                    <em>Java</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "80%" }} />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "85%" }} />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "80%" }} />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "80%" }} />
                    <em>Databases(SQL & Non-SQL)</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "85%" }} />
                    <em>NodeJS</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "65%" }} />
                    <em>C#</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "70%" }} />
                    <em>.Net Core</em>
                  </li>
                  <li>
                    <span className="bar-expand" style={{ width: "85%" }} />
                    <em>Angular & React</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}
