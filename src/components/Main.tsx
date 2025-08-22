import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEsqMQJzfiNyw/profile-displayphoto-scale_200_200/B4DZh4bzZeG8Ac-/0/1754367214839?e=1758758400&v=beta&t=Aj75eogumle1P3E02Vz8rexbvGYXGVXalSqAlPOHRLc" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/cazios-git" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/cazios/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Cassio Saboia</h1>
          <p>UX/UI & Product Designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/cazios-git" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/cazios/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;