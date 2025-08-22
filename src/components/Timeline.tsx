import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">UX/UI & Product Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Instituto Atlântico</h4>
            <p>
              UX, UI and Product Design Leading, Discovery, Research, User Interviews, Usability Testing, Stakeholder Communication, POCs, Service Design, Workshops and Lectures
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Senior Graphic Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">SiMCo Healthcare</h4>
            <p>
              Design Lead, Design Guidelines, UX, UI, Style Guides, Branding, Visual Identity, Campaigns, Product Design,User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Graphic Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Senac</h4>
            <p>
              Design Guidelines, Visual Identity, Branding, Graphic Materials, Digital Design, Editorial Design, Marketing, Campaigns, Events
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graphic Designer/Content Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Making Soluções</h4>
            <p>
              Branding, Visual Identity, Graphic Materials, Digital Design, UX Social Media, Digital Content, Live Marketing, Naming, Editorial Design, Marketing, Campaigns, Events, Content Management
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;