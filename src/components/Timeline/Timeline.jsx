import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Icon from 'react-component-bytesize-icons';
import 'react-vertical-timeline-component/style.min.css';
import React, { useState } from "react";
import Modal from "react-modal";
import Reveal from "react-reveal/Reveal";

Modal.setAppElement("#root");

const Timeline = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  
    function toggleModalOne() {
      setIsOpen(!isOpen);
    }
    function toggleModalTwo() {
      setIsOpen2(!isOpen2);
    }
    function toggleModalThree() {
      setIsOpen3(!isOpen3);
    }
  
    return (

        <div className="shane_tm_section" id="timeline">
        <div className="shane_tm_title">
        <span>Professional Experience</span>
        </div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    onClick={toggleModalOne}    
  >
        </VerticalTimelineElement>
       {/* START MODAL */}
       <Modal
                      isOpen={isOpen}
                      onRequestClose={toggleModalOne}
                      contentLabel="My dialog"
                      className="custom-modal"
                      overlayClassName="custom-overlay"
                      closeTimeoutMS={500}
                    >
                      <div className="shane_tm_modalbox_news">
                        <button
                          className="close-modal"
                          onClick={toggleModalOne}
                        >
                          <img src="/resume/img/svg/cancel.svg" alt="close icon" />
                        </button>
                        {/* End close icon */}
                        <div className="box_inner">
                          <div className="description_wrap scrollable">
                            <div className="image">
                              <img
                                src="/resume/img/placeholders/4-3.jpg"
                                alt="thumb"
                              />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: `url(${
                                    process.env.PUBLIC_URL + "/img/news/wexner.jpg"
                                  })`,
                                }}
                              ></div>
                            </div>
                            {/* End image */}
                            <div className="details">
                              <h3 className="title">
                              Senior Enterprise System Architect
                              </h3>
                              <p className="date">
                              @ Wexner Medical Center <span>Apr 18 - Jan 21</span>
                              </p>
                            </div>
                            {/* End details */}
                            <div className="description">
                              <p>
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. As
                                Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. As
                                Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities.
                              </p>
                              <blockquote>
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person.
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. As
                                Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities.
                              </blockquote>
                              <p>
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. We
                                encounter professionals with careers to covet
                                and lives to write books about. As Vintage
                                decided to have a closer look into fast-paced
                                New York web design realm in person, we get to
                                acquaint with most diverse and exceptionally
                                captivating personalities. As Vintage decided to
                                have a closer look into fast-paced New York web
                                design realm in person, we get to acquaint with
                                most diverse and exceptionally captivating
                                personalities. As Vintage decided to have a
                                closer look into fast-paced New York web design
                                realm in person, we get to acquaint with most
                                diverse and exceptionally captivating
                                personalities.
                              </p>
                            </div>
                            {/* End description */}
                            {/* End news share */}
                          </div>
                        </div>
                        {/* End box inner */}
                      </div>
                      {/* End modal box news */}
                    </Modal>
                    {/* End modal */}
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    onClick={toggleModalTwo}
   
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <Modal
                      isOpen={isOpen2}
                      onRequestClose={toggleModalTwo}
                      contentLabel="My dialog"
                      className="custom-modal"
                      overlayClassName="custom-overlay"
                      closeTimeoutMS={500}
                    >
                      <div className="shane_tm_modalbox_news">
                        <button
                          className="close-modal"
                          onClick={toggleModalTwo}
                        >
                          <img src="/resume/img/svg/cancel.svg" alt="close icon" />
                        </button>
                        {/* End close modal */}
                        <div className="box_inner">
                          <div className="description_wrap scrollable">
                            <div className="image">
                              <img
                                src="/img/placeholders/4-3.jpg"
                                alt="thumb"
                              />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: `url(${
                                    process.env.PUBLIC_URL + "/img/news/9.jpg"
                                  })`,
                                }}
                              ></div>
                            </div>
                            {/* End image */}
                            <div className="details">
                              <h3 className="title">
                                How to be appreciated for your hard work as a
                                developer
                              </h3>
                              <p className="date">
                                By <a href="#">Brook Kennedy</a>{" "}
                                <span>07 April 2020</span>
                              </p>
                            </div>
                            {/* End details */}
                            <div className="description">
                              <p>
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. As
                                Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. As
                                Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities.
                              </p>
                              <blockquote>
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person.
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. As
                                Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities.
                              </blockquote>
                              <p>
                                As Vintage decided to have a closer look into
                                fast-paced New York web design realm in person,
                                we get to acquaint with most diverse and
                                exceptionally captivating personalities. We
                                encounter professionals with careers to covet
                                and lives to write books about. As Vintage
                                decided to have a closer look into fast-paced
                                New York web design realm in person, we get to
                                acquaint with most diverse and exceptionally
                                captivating personalities. As Vintage decided to
                                have a closer look into fast-paced New York web
                                design realm in person, we get to acquaint with
                                most diverse and exceptionally captivating
                                personalities. As Vintage decided to have a
                                closer look into fast-paced New York web design
                                realm in person, we get to acquaint with most
                                diverse and exceptionally captivating
                                personalities.
                              </p>
                            </div>
                            {/* End description */}
                            {/* End news share */}
                          </div>
                        </div>
                      </div>
                    </Modal>
             
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  
  />
</VerticalTimeline>
</div>
  );
};

export default Timeline;