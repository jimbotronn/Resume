import React from "react";
import Reveal from "react-reveal/Reveal";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <Reveal effect="fadeInLeft">
                <div className="left">
                  <div className="shane_tm_title">
                    <h3>Technical competence with dependability and loyalty</h3>
                  </div>
                  <div className="text">
                    <p>
                    Grounded in the fundamental of information technologies and 
                    strengthen by strategic thinking, my background has demonstrated 
                    my ability to excel in developing innovative solutions and to 
                    provide leadership in establishing as well as executing technology 
                    strategies, goals, and priorities aligned with enterprise mission.
                    </p>
                  </div>
                </div>
                {/* End .left */}
              </Reveal>

              <Reveal effect="fadeInLeft">
                <div className="right">
                  <div className="tokyo_progress">
                    <div className="progress_inner">
                    <div className="shane_tm_title">
                  <span>Area of Emphasis</span>
                </div>
                      <span>
                        <span className="label"> Solution architecture & Digital Transformation</span>
                        <span className="number"></span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}

                    <div className="progress_inner">
                      <span>
                        <span className="label">Business & Technology Alignment</span>
                        <span className="number"></span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}

                    <div className="progress_inner">
                      <span>
                        <span className="label">Change Management & Risk Assessmentn</span>
                        <span className="number"></span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}
                  </div>
                </div>
                {/* End .right */}
              </Reveal>
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
