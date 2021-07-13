import React from "react";
import Reveal from "react-reveal/Reveal";

const About = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Reveal effect="fadeInLeft">
                  <div className="image">
                    <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "/img/about/1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                </Reveal>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <Reveal effect="fadeInLeft">
                  <div className="shane_tm_title">
                    <span>About Me</span>
                    <h3>An innovative and result-oriented professional</h3>
                  </div>
                  <div className="text">
                    <p>
                    I have 10+ years of success leading technology innovation transformation, 
                    delivering integrated enterprise cloud solutions and creating an Information 
                    Technology roadmap in alignment with business strategies and initiatives.<br></br><br></br>  
                    History of analyzing technology trends, leveraging existing and emerging 
                    technologies to uncover opportunities and develop trailblazing strategies to 
                    improve operations, break down complex projects into steps that drive business 
                    process improvement, reduce risks, maintaining scalability, and increase 
                    efficiencies.   
                    </p>
                  </div>
                  <div className="shane_tm_button">
                    <a href="img/resume/resume.jpg" download>
                      Download CV
                    </a>
                  </div>
                </Reveal>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
