import React, { useState } from "react";
import Modal from "react-modal";
import Reveal from "react-reveal/Reveal";
import { PopupButton } from "react-calendly"


Modal.setAppElement("#root");

const CallToActionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="shane_tm_section" id="contact">
      <div
        className="shane_tm_talk bg_image_props"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/callto-action/2.png"
          })`,
        }}
      >
        {/* End shape */}

        <div className="background" id="talk">
          <a className="player"></a>
          <div className="overlay"></div>
        </div>
        {/* End background */}

        <div className="talk_inner">
          <Reveal effect="fadeInUp">
            <div className="text">
              <h3>Let's work together!</h3>
            </div>
          </Reveal>
          <Reveal effect="fadeInUp">
            <div className="button">
               <PopupButton
              className="white-fill-bg"
     color="#00a2ff"
     text="  Make an enquiry"
     textColor="#ffffff"
     url="https://calendly.com/jimiyu/web"
   />
            </div>
          </Reveal>
        </div>
        {/* End talk_inner */}
      </div>

    </div>
  );
};

export default CallToActionTwo;
