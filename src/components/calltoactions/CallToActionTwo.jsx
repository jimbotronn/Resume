import React, { useState } from "react";
import Modal from "react-modal";
import Map from "../Map";
import Contact from "../Contact";
import Reveal from "react-reveal/Reveal";
import Social from "../Social";
import { InlineWidget } from "react-calendly";
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
            <button className="white-fill-bg" onClick={toggleModalOne}>
                Make an enquiry
              </button>
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
      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="shane_tm_mobalbox_contact">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/resume/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
     

          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
                <h3>Get in touch</h3>
              </div>
              {/* End title */}
              <InlineWidget url="https://calendly.com/jimiyu" />
              {/* End wrapper */}

              {/* End modal conetent */}
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </div>
  );
};

export default CallToActionTwo;
