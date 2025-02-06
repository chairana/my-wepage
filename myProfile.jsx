import React from 'react';
import './App.css';
import myProfilePic from './myProfilePic.JPG';

function MyProfile() {
  return (
    <div className="profile-container">
      
      {/* ---------- Left 30% (full height) ---------- */}
      <div className="left-pane">
        <div className="imgblock">
          <img src={myProfilePic} alt="profile" />
        </div>

        <div className="innerblock">
          <h1>
            Chaitanya Ranadeep<br />
            Software Developer<br />
            Colorado, United States
          </h1>
        </div>

        <div className="buttonblock">
          <a href="/ChaitanyaApplicationSupport.docx" download>
            Download Resume Here
          </a>
        </div>
        
      {/* </div> */}

      {/* ---------- Right 70%: Top 30% ---------- */}
      {/* <div className="right-top-pane"> */}
        <div className="techblock">
          <h3>Education</h3>
          <ul className="educationblock">
            <li>&#x1F393; Bachelors of Engineering, Computer Science</li>
            <li>&#x1F3EB; Jawaharlal Nehru Technological University</li>
            <li>&#x1F5D3; 2012 - 2016</li>
          </ul>

          <h3>Contact Details</h3>
          <ul className="addressblock">
            <li>&#x1F4F1; +1 5713565500</li>
            <li>
             &#x2709; <a href="mailto:chairana1995@gmail.com"> chairana1995@gmail.com</a>
            </li>
            <li>&#x1F3E1; Westminster, CO 80021</li>
          </ul>

          <h3>&#x2699; Skills</h3>
          <ul className="skillblock">
            <li>UNIX, Linux</li>
            <li>Python</li>
            <li>Shell Scripting</li>
            <li>JavaScript, HTML, CSS</li>
            <li>ReactJS</li>
            <li>Jenkins, Ansible</li>
            <li>Docker, Kubernetes</li>
            <li>GIT, GITHUB</li>
            <li>Weblogic 12c</li>
            <li>Losant</li>
            <li>AWS</li>
          </ul>
        </div>
        <div className='linkedin-profile'>
          <a href="https://www.linkedin.com/in/chaitanyadirisala/" target="_blank" rel="noopener noreferrer"> LinkedIn Profile</a>
        </div>
      </div>

      {/* ---------- Right 70%: Bottom 70% ---------- */}
      <div className="right-bottom-pane">
        <div className="summaryblock">
          <h3>Career Summary</h3>
          <p>
          IT professional with 9 years of experience in application support, build & release engineering, and WebLogic administration. Proven in managing end-to-end software development lifecycles—from initial build processes and deployment to production support—while optimizing system performance and ensuring high availability. Adept at troubleshooting complex issues, automating processes, and coordinating cross-functional teams. Possesses strong technical skills in UNIX/Linux, multiple programming languages (Python, C, Java, Shell Scripting, Groovy, Spring Boot), CI/CD tools (Jenkins, Maven, Ansible), cloud computing (AWS, Azure, Losant), and container orchestration (Kubernetes).
          </p>
          
          <h4>AmeriGas King Of Prussia</h4>
          <h4>Application Support Engineer (June 2023 – Present)</h4>
          <ul>
            <li>Troubleshoot application errors using SQL, Unix, and scripting.</li>
            <li>Implemented Control-M jobs, improving scheduling efficiency.</li>
            <li>Collaborated with stakeholders on system performance improvements.</li>
            <li>Documented configuration changes and system updates.</li>
            <li>Analyzed performance data using dashboards, reducing downtime.</li>
            <li>Managed incidents via ServiceNow and automated tasks using Monday.com.</li>
            <li>Leveraged AWS S3 for secure backup and versioning.</li>
          </ul>

          <h4>Deutsche Bank</h4>
          <h4>Build & Release Engineer (June 2017 – May 2023)</h4>
          <ul>
            <li>Automated build/deployment with Jenkins, Maven, Ansible.</li>
            <li>Deployed code to multiple environments with a 20% time reduction.</li>
            <li>Coordinated releases across QA, DBA, and dev teams.</li>
            <li>Developed UNIX shell scripts for automation.</li>
            <li>Maintained Tomcat servers for high availability.</li>
            <li>Implemented CI/CD pipelines using Jenkins and Git.</li>
          </ul>

          <h4>SP Software PVT LIMITED</h4>
          <h4>WebLogic Administrator (June 2016 – June 2017)</h4>
          <ul>
            <li>Administered WebLogic in production/non-prod environments.</li>
            <li>Automated backups using shell scripting and Cron jobs.</li>
            <li>Optimized system performance in clustered environments.</li>
            <li>Monitored system health with Splunk, conducted root cause analysis.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default MyProfile;