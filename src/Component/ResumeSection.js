import React from 'react'

const ResumeSection = () => {
  return (
    <>
      <section className="resume-section" id="resume-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                <h2 className="section-title">My Experience</h2>
              </div>
              <div className="resume-widget">
                <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                  <div className="time">March 2023 - Present</div>
                  <h3 className="resume-title">Flutter App developer</h3>
                  <div className="institute">AJEEVAN TECH</div>
                </div>
                <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                  <div className="time">Nav 2021 - Feb 2022</div>
                  <h3 className="resume-title">Internship</h3>
                  <div className="institute">WeeTech Solutions</div>
                </div>
                {/* <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">June 2023 - Jan 2024</div>
                <h3 className="resume-title">teaching experience</h3>
                <div className="institute">WeeTech Institute</div>
              </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                <h2 className="section-title">My Education</h2>
              </div>
              <div className="resume-widget">
                <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                  <div className="time">2009</div>
                  <h3 className="resume-title">higher secondary education</h3>
                  <div className="institute">Ambaba Girl'S High School</div>
                </div>
                <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                  <div className="time">2012</div>
                  <h3 className="resume-title">Graduation Complete</h3>
                  <div className="institute">Veer Narmad South Gujarat University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResumeSection