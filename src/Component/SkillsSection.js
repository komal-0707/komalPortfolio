import React from 'react';

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              <SkillItem
                icon="assets/img/icons/flutter.webp"
                percentage="95%"
                skillName="Flutter"
                delay=".3s"
              />
              <SkillItem
                icon="assets/img/icons/Dart_logo.png"
                percentage="95%"
                skillName="Dart"
                delay=".5s"
              />
              <SkillItem
                icon="assets/img/icons/swift.png"
                percentage="90%"
                skillName="Swift"
                delay=".7s"
              />
            </div>
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              <SkillItem
                icon="assets/img/icons/java.png"
                percentage="93%"
                skillName="Java"
                delay=".9s"
              />
              <SkillItem
                icon="assets/img/icons/Android.webp"
                percentage="93%"
                skillName="Android"
                delay=".9s"
              />
              <SkillItem
                icon="assets/img/icons/apple.png"
                percentage="90%"
                skillName="IOS"
                delay=".9s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, percentage, skillName, delay }) => {
  return (
    <div className={`skill-item wow fadeInUp`} data-wow-delay={delay}>
      <div className="skill-inner">
        <div className="icon-box">
          <img src={icon} alt={skillName} />
        </div>
        <div className="number">{percentage}</div>
      </div>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillsSection;
