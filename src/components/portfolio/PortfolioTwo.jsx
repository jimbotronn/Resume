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
                    <span>Portfolio</span>
                    <h3>Creative Portfolio</h3>
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
    
      <ul><li>HTML</li><li>JavaScript</li><li>Liquid</li><li>ReactJS</li><li>CSS</li>
      <li>JSON</li><li>REST API</li><li>XML</li><li>Adobe DreamWeaver</li><li>Adobe Photoshop</li>
      <li>Adobe Illustrator</li><li>Adobe XD</li><li>Invision</li><li>Adobe Photoshop</li><li>Velo and Wix Code</li><li>AS400</li><li>Kronos</li><li>Adobe Acrobat</li><li>Google Docs, Sheets, Slides, and Form</li>
                      <li>Google Workspace</li><li>Microsoft Words, Excel, Outlook, PowerPoint, and Forms</li><li>Microsoft Teams, Planners</li><li>GHX</li>
                      <li>ERP Systems (PeopleSoft, Workday)</li><li>Microsoft Power Platform (PowerApps, PowerAutomate)</li>
                      <li>Microsoft Sharepoint, Visio, and Project</li>
                      <li>CRM Systems (SalesForce, ServiceNow)</li><li>POS Systems (Sequia, Squre, Micros, MyMicros)</li>
      <li>Monday.com</li><li>Asana</li><li>JIRA</li><li>Azure Board</li><li>Inventory Systems (Omnicell, Tecsys, CBORD)</li><li>Microsoft Power BI</li><li>Tableau</li><li>SQL Database & Queries</li><li></li>
                      <li>Google Workspace</li><li>DataVolley</li><li>LucideChart</li><li>SmartDraw</li>
                      <li>BarTender</li><li>Nuvia</li></ul>
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                      <ul alt="Web"><li>HTML</li><li>JavaScript</li><li>Liquid</li><li>ReactJS</li><li>CSS</li>
      <li>JSON</li><li>REST API</li><li>XML</li><li>Adobe DreamWeaver</li><li>Adobe Photoshop</li>
      <li>Adobe Illustrator</li><li>Adobe XD</li><li>Invision</li><li>Adobe Photoshop</li><li>Velo and Wix Code</li><li>Google Analytics</li></ul>
                      </TabPanel>

                      <TabPanel>
                      <ul alt="Business"><li>AS400</li><li>Kronos</li><li>Adobe Acrobat</li><li>Google Docs, Sheets, Slides, and Form</li>
                      <li>Google Workspace</li><li>Microsoft Words, Excel, Outlook, PowerPoint, and Forms</li><li>Microsoft Teams, Planners</li><li>GHX</li>
                      <li>ERP Systems (PeopleSoft, Workday)</li><li>Microsoft Power Platform (PowerApps, PowerAutomate)</li>
                      <li>Microsoft Sharepoint, Visio, and Project</li>
                      <li>CRM Systems (SalesForce, ServiceNow)</li><li>POS Systems (Sequia, Squre, Micros, MyMicros)</li>
      <li>Monday.com</li><li>Asana</li><li>JIRA</li><li>Azure Board</li><li>Inventory Systems (Omnicell, Tecsys, CBORD)</li></ul>
                      </TabPanel>

                      <TabPanel>
                      <ul alt="Data"><li>Microsoft Power BI</li><li>Tableau</li><li>SQL Database & Queries</li><li></li>
                      <li>Google Workspace</li><li>DataVolley</li><li>LucideChart</li><li>SmartDraw</li>
                      <li>BarTender</li><li>Nuvia</li></ul>
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
