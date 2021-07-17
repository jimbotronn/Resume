import React, { useState } from "react";
import Modal from "react-modal";
import Map from "../Map";
import Contact from "../Contact";
import Reveal from "react-reveal/Reveal";
import Social from "../Social";


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
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
        
<div class="calendly-inline-widget" data-url="https://calendly.com/jimiyu" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

              </div>
              {/* End modal conetent */}
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </div>
  );
};

export default CallToActionTwo;
