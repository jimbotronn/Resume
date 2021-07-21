import React ,{ Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import { FaHtml5, FaReact, FaShopify}from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { MdWeb, MdDeveloperMode } from "react-icons/md";


const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
  <div className="shane_tm_skills2">
          <div className="container">
          <div className="shane_tm_title">
            <span>Skills</span>
                     </div>
            <div className="skills_inner">
 <Reveal effect="fadeInLeft">
                <div className="left">
                  <div className="shane_tm_title">
                    <h3>Development</h3>
                  </div>
                  <div className="text">
           
                    <p><b>Languages : </b>
                    C,  C#,  C++,  Java, <br></br>
                    <b>Web : </b>
                    CSS,  HTML,  JavaScript,  JSON,  Liquid,  React,  REST API, XML<br></br>
                    <b>Tools : </b>
                    Adobe DreamWeaver,  Adobe XD,  Adobe Photoshop,  Adobe Illustrator,  Invision,  Velo and Wix Code,  WordPress
                                     </p>
                                     <b>Frameworks  :</b>  Software Development Lifecycle (SDLC), TOGAF,  Zachman<br></br>

                  </div>
                </div>
                
                {/* End .left */}
              </Reveal>
 <Reveal effect="fadeInLeft">
                <div className="right">
                  <div className="shane_tm_title">
                    <h3>Business Systems</h3>
                  </div>
                  <div className="text">
                    <p>                    <b>CRM Systems : </b>SalesForce, ServiceNow<br></br>
                    <b>ERP Systems : </b>PeopleSoft, Workday<br></br>
                    <b>Infrastructure : </b>Azure, Google Workspace<br></br>
                    <b>Inventory Managemnet :</b>BlueBin, Omnicell, Tecsys, CBORD<br></br>
                    <b>POS Systems</b>Sequia, Squre, Micros, MyMicros<br></br>
                    <b>Analytics  :</b>  Google Analytics,  Microsoft Power BI,  SQL,  Tableau
                    </p>
                  </div>
                </div>
                </Reveal>
 </div>  <div className="skills_inner">
                    {/* End .progress_inner */}
          <Reveal effect="fadeInLeft">
                <div className="all">
                  <div className="text">
                    <p>
                    <b>Others : </b>AS400,  Adobe Acrobat,  Asana,  BarTender,  DataVolley,  GHX,  Google (Docs, Sheets, Slides, Form),
                       JIRA,  Kronos,  Monday.com,  Microsoft 365 (Words, Excel, Outlook, PowerPoint, Forms, Access, Teams, Planners, Sharepoint),
                      Microsoft Power Platform (PowerApps, PowerAutomate),  Microsoft Visio, Microsoft Project,  Nintex,  Nuvia,  SmartDraw<br></br>
                      <b>Methodologies : </b>Agile,  DevOps,  Waterfall<br></br>
                    </p>
                  </div>
                </div>
                </Reveal>
              
            </div>
          </div>
          {/* End .conainer */}
        </div>
    </div>
  );
};

export default PortfolioTwo;