import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Figma",
"Framer (CMS & Analytics)",
"Adobe XD",
"Sketch",
"Miro",
"FigJam",
"Notion",
"User Flows",
"Information Architecture",
"Prototyping",
"Wireframing",
"Design Systems",
"UI Kits",
"Accessibility",
"Adobe Photoshop",
"Adobe Illustrator",
"Adobe After Effects",
];

const labelsSecond = [
   "User Research",
   "User Interviews",
   "Journey Mapping",
   "Personas",
   "Design Thinking",
   "Double Diamond",
   "Surveys",
   "CSD Matrix",
   "Usability testing",
   "A/B Testing",
   "Agile Methodologies",
   "Scrum",
   "Maze",
   "Miro / FigJam",
   "Hotjar",
   "Jira / Notion",
   "Confluence",
   "GitHub",
   "Trello",
   "Azure Devops",
];

const labelsThird = [
    "Lovable",
   "Google Stitch",
    "Chat GPT",
    "Microsoft Copilot",
    "Gemini",
    "Veo 3",
    "Github Copilot",
    "VS Code",
    "Power BI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>UX/UI & Product Designer</h3>
                    <p>I design intuitive and engaging digital experiences, from discovery to delivery, combining research, prototyping, and visual design. My expertise spans the full product lifecycle, from problem definition to high-fidelity solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Research & Product Strategy</h3>
                    <p>I plan and conduct user research, usability testing, and discovery workshops to uncover needs and opportunities. I synthesize insights into actionable strategies and align cross-functional teams for product delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Design Innovation & Emerging Tech</h3>
                    <p>I explore and integrate emerging technologies, from AI-driven design tools to no-code/low-code platforms, to accelerate prototyping and push innovation in digital products.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;