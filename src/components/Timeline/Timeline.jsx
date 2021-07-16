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
    const [isOpen4, setIsOpen4] = useState(false);
  
    function toggleModalOne() {
      setIsOpen(!isOpen);
    }
    function toggleModalTwo() {
      setIsOpen2(!isOpen2);
    }
    function toggleModalThree() {
      setIsOpen3(!isOpen3);
    }
    function toggleModalFour() {
      setIsOpen4(!isOpen4);
    }
  
    return (

        <div className="shane_tm_section" id="timeline">
      <div className="shane_tm_timeline">
        <div className="container">
          <div className="shane_tm_title">
            <span>Experience</span>
            <h3>Professional & Relevant Experience</h3>
          </div>
<VerticalTimeline>
<div className="list_inner" onClick={toggleModalOne}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work list_inner1"
    contentArrowStyle={{ borderRight: '7px solid  #e65948' }}
    date="2018 - 2021"
    iconStyle={{ background: '#e65948', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">Senior Enterprise System Architect</h3>
    <h3 className="vertical-timeline-element-subtitle">Wexner Medical Center</h3>
    <p>
      Strategic Direction, Visual Design, Automation, Change Management, Intergration 
    </p>
  </VerticalTimelineElement>
  </div>
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
                                    process.env.PUBLIC_URL + "/img/news/Wexner.png"
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
                              @ Wexner Medical Center <br></br>Apr 18 - Jan 21
                              </p>
                            </div>
                            {/* End details */}
                            <div className="description">
                              <ul><li>
                              Developed technology strategic roadmap aligned 
                              with Workday HCM and Workday Financials implementation 
                              strategy, increased peripheral systems and applications 
                              utilization and integrations while minimizing business risks.  
                              </li>
                              <li>
                              Optimized existing systems and harnessed the data-derived 
                              intelligence to steward resources effectively, streamline and 
                              automate workflows through cloud-based platforms, and achieve 
                              process improvements up to 90% in some areas.</li>
                              <li>
                              Led the effort to develop integration partnerships across IT, 
                              internal business leaders, and external vendors to design, build, 
                              and implement high availability and disaster recovery infrastructure 
                              model for core applications through javascript, JSON, REST APIs, XML, 
                              and integration middleware.      </li>
                              <li>
                              Improved critical change management effectiveness by monitoring, 
                              analyzing, and reshaping staff engagement behavior in response to changes.        </li></ul><br></br><br></br>
                              <blockquote>
                              In January, shortly after the launch of the new ERP system, I left my employer
                               for over 11 years, The Ohio State University,  to avoid starting on new major 
                               projects and to further advance my career through new opportunities. <br></br><br></br> 
                               Since then, I took some time away from my profession and dedicated my full 
                               attention to a high school men's volleyball team that I've coached for 13 seasons.  
                               Pandemic lockdown abruptly ended the 2020 season and it was devastating for the players, 
                               so I wanted to give the team my undivided attention before starting a new position.   
                              </blockquote>
                            </div>
                            {/* End description */}
                            {/* End news share */}
                          </div>
                        </div>
                        {/* End box inner */}
                      </div>
                      {/* End modal box news */}
                    </Modal>
                    {/* End modal */}.
                    <div className="list_inner" onClick={toggleModalTwo}>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work list_inner2"
    date="2009 - 2015"
    iconStyle={{ background: '#ffa000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffa000' }}
    position="right"
   >
    <h3 className="vertical-timeline-element-title">System Administrator</h3>
    <h3 className="vertical-timeline-element-subtitle">The Ohio State University</h3>
    <p>
      Solution Design & Implementation, Change Management, Data Governance, Cross-platform Integration
    </p>
  </VerticalTimelineElement>
  </div><br></br><br></br>
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
                                    process.env.PUBLIC_URL + "/img/news/OSU.png"
                                  })`,
                                }}
                              ></div>
                            </div>
                            {/* End image */}
                            <div className="details">
                              <h3 className="title">
                              System Administrator
                              </h3>
                              <p className="date">
                              @ The Ohio State University <br></br>Sep 09 - Sep 15
                              </p>
                            </div>
                            {/* End details */}
                            <div className="description">
                            <ul><li>
                            Led the IT business intelligence needs and strategic direction. 
                            Bridged the technical and business functions and collaborated closely 
                            with internal stakeholders, the university IT, and external partners 
                            to design, develop, and implement an integrated and scalable system 
                            architecture to enhance and connect processes through the entire business lifecycle.  
                              </li>
                              <li>
                              Compiled/sanitized critical data and eliminated 40% of redundant 
                              data within a year, allowing for cross-platform data integration and 
                              translating data into meaningful insights in real-time.  </li>
                              <li>
                              Established data governance structure through balanced business 
                              processes and technology expertise to maintain system data integrity 
                              and accuracy.         </li>
                              <li>
                              Increased transaction efficiency by 60% by implementing unified UI 
                              and integrated custom barcodes into the existing business processes.         </li>
                              <li>
                              Designed cross-platform data integration structure to create advanced 
                              on-demand enterprise reporting system and analytics tools, providing 
                              performance analysis and benchmark for the department.        </li>
                              <li>
                              Recognized with <b>Visionary Award</b> at CBORD user conference for presenting 
                              the integrated multi-platform enterprise system concept and the change 
                              management approach.  <b>Walt Disney Resorts</b> later adopted many vital 
                              components in the presentation.        </li></ul>
                            </div>
                            {/* End description */}
                            {/* End news share */}
                          </div>
                        </div>
                        {/* End box inner */}
                      </div>
                      {/* End modal box news */}
                    </Modal>
                    <div className="list_inner" onClick={toggleModalThree}>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work list_inner3"
    date="2008 - 2009"
    iconStyle={{ background: '#5fa6a9', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5fa6a9' }}
   >
    <h3 className="vertical-timeline-element-title">System Coordinator</h3>
    <h3 className="vertical-timeline-element-subtitle">The Ohio State University</h3>
    <p>
      Requirement Gathering, Knowledge Capture, Training & Support
    </p>
    
  </VerticalTimelineElement>
  </div><br></br><br></br>
  <Modal
                      isOpen={isOpen3}
                      onRequestClose={toggleModalThree}
                      contentLabel="My dialog"
                      className="custom-modal"
                      overlayClassName="custom-overlay"
                      closeTimeoutMS={500}
                    >
                      <div className="shane_tm_modalbox_news">
                        <button
                          className="close-modal"
                          onClick={toggleModalThree}
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
                                    process.env.PUBLIC_URL + "/img/news/OSU.png"
                                  })`,
                                }}
                              ></div>
                            </div>
                            {/* End image */}
                            <div className="details">
                              <h3 className="title">
                              System Coordinator
                              </h3>
                              <p className="date">
                              @ The Ohio State University <br></br>Sep 08 - Sep 09</p>
                            </div>
                            {/* End details */}
                            <div className="description">
                            <p>Conducted business process analysis and technical system consultation to drive
                                 operational process improvements and efficiencies. Established standardize 
                                 change management practice. Developed end-user training by maintaining and 
                                 creating technical and user documentation for business applications. </p>
                            <ul><li>
                            Developed and implemented effective policies and improved forecasting and 
                            inventory management efficiency.  
                              </li>
                              <li>
                              Improved business purchasing process by implementing automated vendors 
                              order generation process. </li>
</ul>
                            </div>
                            {/* End description */}
                            {/* End news share */}
                          </div>
                        </div>
                        {/* End box inner */}
                      </div>
                      {/* End modal box news */}
                    </Modal>
                    <div className="list_inner" onClick={toggleModalFour}>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work list_inner4"
    date="2008 - Present"
    iconStyle={{ background: '#01354d', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #01354d' }}
    position="right"
    
   >
    <h3 className="vertical-timeline-element-title">Head Coach - Men's Volleyball</h3>
    <h3 className="vertical-timeline-element-subtitle">Westerville Central High School</h3>
    <p>
      Mentorship 
    </p>
    
  </VerticalTimelineElement>
  </div>
  <Modal
                      isOpen={isOpen4}
                      onRequestClose={toggleModalFour}
                      contentLabel="My dialog"
                      className="custom-modal"
                      overlayClassName="custom-overlay"
                      closeTimeoutMS={500}
                    >
                      <div className="shane_tm_modalbox_news">
                        <button
                          className="close-modal"
                          onClick={toggleModalFour}
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
                                    process.env.PUBLIC_URL + "/img/news/wchs.png"
                                  })`,
                                }}
                              ></div>
                            </div>
                            {/* End image */}
                            <div className="details">
                              <h3 className="title">
                              Head Coach - Men's Volleyball
                              </h3>
                              <p className="date">
                              @ Westerville Central High School <br></br>2008 - Present
                              </p>
                            </div>
                            {/* End details */}
                            <div className="description">
                            <p>Coaching and mentoring student-athletes.  Develop practice and conditioning
                               plans and team-building activities. Manage budgets, fundraising activities, 
                               and transportation plans for the team. Evolve team strategy based on game 
                               statistical analysis.  </p>
                            <ul><li>
                            Won District Champion Title in 2015 and 2018 
                              </li>
                              <li>
                              Won Division I East Region Coach Achievement Award in 2017 </li>
</ul>
                            </div>
                            {/* End description */}
                            {/* End news share */}
                          </div>
                        </div>
                        {/* End box inner */}
                      </div>
                      {/* End modal box news */}
                    </Modal>
                    </VerticalTimeline>
</div></div></div>
  );
};

export default Timeline;