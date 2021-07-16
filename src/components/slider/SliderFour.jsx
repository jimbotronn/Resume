import React from "react";
import TextLoop from "react-text-loop";
import Particles from 'react-particles-js';

const Slider = () => {
  return (
    <Particles/>
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/slider/3.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  Jimi Yu
                  <br />
                </span>{" "}
                <TextLoop>
                  <span className="loop-text"> Enterprise Architect.</span>
                  <span className="loop-text"> Technical Consultant.</span>
                  <span className="loop-text"> System Analyst.</span>
                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                based in Columbus, Ohio.
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="#about"
              className="white-fill-bg btn-outline btn-medium"
            >
              LEARN MORE
              <span className="overlay_effect"></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
