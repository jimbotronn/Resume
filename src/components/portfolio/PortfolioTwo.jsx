import React ,{ Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import { FaHtml5, FaReact, FaShopify}from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import Collapsible from 'react-collapsible';

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Technical Skills</span>
                                    </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>Design & Development</Tab>
                    <Tab>Business Systems</Tab>
                    <Tab>Data Analysis & Visualization</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                                         <TabPanel>
    
      <ul><li>Adobe Acrobat, DreamWeaver, Photoshop, Illustrator, XD</li><li>AS400</li> <li>Asana</li><li>Azure Board</li> <li>BarTender</li> <li>CRM Systems (SalesForce, ServiceNow)</li><li>GHX</li><li>CSS</li><li>DataVolley</li><li>Google Analytics, Docs, Sheets, Slides, Form, Workspace</li><li>ERP Systems (PeopleSoft, Workday)</li><li>HTML</li><li>Invision</li><li>JSON</li><li>JavaScript</li><li>Liquid</li>
      <li>Inventory Systems (Omnicell, Tecsys, CBORD)</li><li>JIRA</li><li>Kronos</li><li>LucideChart</li><li>Microsoft 365 (Words, Excel, Outlook, PowerPoint, Forms, Access, Teams, Planners, Sharepoint)</li><li>Microsoft Power Platform (PowerApps, PowerAutomate, PowerBI)</li>
                      <li>Microsoft Visio, and Project</li> <li>Monday.com</li><li>Nuvia</li><li>POS Systems (Sequia, Squre, Micros, MyMicros)</li><li>ReactJS</li><li>REST API</li><li>SmartDraw</li><li>SQL Database & Queries</li><li>Tableau</li><li>XML</li><li>Velo and Wix Code</li>                  
                     </ul>
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                      <ul alt="Web"><li>Adobe DreamWeaver, PhotoShop, Illustrator, XD</li><li>CSS</li><li>Google Analytics</li><li>HTML</li><li>Invision</li><li>JavaScript</li><li>JSON</li><li>Liquid</li><li>ReactJS</li>
      <li>REST API</li><li>XML</li><li>Velo and Wix Code</li></ul>
                      </TabPanel>

                      <TabPanel>
                      <ul alt="Business"><li>AS400</li><li>Adobe Acrobat</li><li>Asana</li><li>Azure Board</li><li>CRM Systems (SalesForce, ServiceNow)</li><li>ERP Systems (PeopleSoft, Workday)</li><li>GHX</li><li>Google Docs, Sheets, Slides, and Form</li>
                      <li>Google Workspace</li><li>Inventory Systems (Omnicell, Tecsys, CBORD)</li><li>JIRA</li><li>Kronos</li><li>Monday.com</li><li>Microsoft 365 (Words, Excel, Outlook, PowerPoint, Forms, Access, Teams, Planners, Sharepoint)</li>
                      <li>Microsoft Power Platform (PowerApps, PowerAutomate)</li><li>Microsoft , Visio, and Project</li>
                      <li>POS Systems (Sequia, Squre, Micros, MyMicros)</li>
      </ul>
                      </TabPanel>

                      <TabPanel>
                      <ul alt="Data"> <li>BarTender</li><li>DataVolley</li><li>Google Workspace</li><li>LucideChart</li><li>Microsoft Power BI</li><li>Nuvia</li><li>SQL Database & Queries</li> <li>SmartDraw</li><li>Tableau</li>
                                          </ul>
                      </TabPanel>
                                   {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
