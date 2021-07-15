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
                    <h3>Modern Development Methodologies & Frameworks</h3>
                  </div>
                  <div className="text">
                    <p>
                      I understand how to adopt development methodologies and
                      frameworks to meet business needs and produce the best results
                    </p>
                  </div>
                </div>
                {/* End .left */}
              </Reveal>

              <Reveal effect="fadeInLeft">
                <div className="right">
                  <div className="tokyo_progress">
                    <div className="progress_inner">
                      <span>
                        <span className="label">Agile      |      Waterfall      |      DevOps</span>
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
                        <span className="label">TOGAF        |        Zachman</span>
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
                        <span className="label">IaaS     |     SaaS     |     PaaS Design</span>
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
