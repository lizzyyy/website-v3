import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

import * as s from "../styles/home.module.css"
import Clock from "../components/clock.js";
import Project from "../components/project.js";
import ProjectItem from "../components/projectItem.js";

import sun from "../images/sun.png"
import socketcare1 from "../images/socketcare1.png"
import socketcare2 from "../images/socketcare2.png"
import xr1 from "../images/xr1.png"
import xr2 from "../images/xr2.png"
import innod1 from "../images/innod1.png"
import innod2 from "../images/innod2.png"
import circles1 from "../images/circles1.jpg"
import circles2 from "../images/circles2.png"
import gitlet1 from "../images/gitlet1.png"
import pressgo1 from "../images/pressgo1.png"
import pressgo2 from "../images/pressgo2.png"

const HomePage = ({ location }) => {

  const timeofday = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 12) {
      return <p>good morning !</p>
    } else if (hour >= 12 && hour < 20) {
      return <p>good afternoon !</p>
    } else {
      return <p>good night !</p>
    }
  };

  const [gm, setGm] = useState(location.state.firstVisit);
  const gmRef = useRef();
  useEffect(() => {
      if (gm == 0) {
          setTimeout(()=> {
              gmRef.current.style.opacity = 0;
              setTimeout(()=> {
                  setGm(1);
              }, 1000);
          }, 2000);
      }
  }, [gm]);

  const [project, setProject] = useState("");

  return (
    <main>
      <body>
        { gm == 0 ?
          (
            <div className={s.splitScreen}>
              <div className={s.fullScreenWrapper}>
                <div className={s.gmWrapper} ref={gmRef}>
                  <div className={s.gmClock}>
                    <Clock noSun={true}/>
                  </div>
                  <img src={sun} />
                  {timeofday()}
                </div>
              </div>
              <div className={s.leftScreen}></div>
              <div className={s.rightScreen}></div>
            </div>
          )
          : 
          (
            <div className={s.splitScreen}>
              <div className={s.leftScreen}>

                <div className={s.intro} style={{opacity: 1}}>
                  <div className={s.title}>
                    <h1><span className={s.dot}></span>LIZZY WANG</h1>
                    <p>Software Developer & Designer</p>
                  </div>
                  <p className={s.status}><span className={s.dot}></span>trying to see what else i can create...</p>
                </div>
                <div className={s.links}>
                  <Link to={'/aboutme/'}>about me</Link>
                  <a href="https://github.com/lizzyyy" target="_blank">github</a>
                </div>

                <div className={s.projectList}>
                  <div onClick={() => setProject("socketcare")} className={project == "socketcare" ? s.activeProject : ""}>
                    <Project title="SOCKETCARE" company="Socket Mobile, Inc." year="2023" fav={true}
                            desc="Reworking the customer-facing warranty purchase and product return system" />
                  </div>
                  <div onClick={() => setProject("xr")}>
                    <Project title="XR@B ON THE WEB" company="Extended Reality @ Berkeley" year="2023" fav={true}
                              desc="Rebranding the world's largest VR/AR student organization" />
                  </div>
                  <div onClick={() => setProject("innod")}>
                    <Project title="INNOD" company="Innovative Design @ Berkeley" year="2022" fav={true}
                              desc="Web design & development for professional organizations @ UC Berkeley" />
                  </div>
                  <div onClick={() => setProject("circles")}>
                    <Project title="DATA ANALYTICS DASHBOARD" company="Circles.Life" year="2022" fav={false}
                            desc="Research and implementation of a tableu-like UI for data analytics on a national scale" />
                  </div>
                  <div onClick={() => setProject("gitlet")}>
                    <Project title="GITLET" company="Project" year="2021" fav={false}
                            desc="A local version control system mimicking git" />
                  </div>
                  <div onClick={() => setProject("press&go")}>
                    <Project title="PRESS&GO" company="Case Study - Designing for UX" year="2021" fav={true}
                            desc="Creating a beginner friendly clothing alteration tool to minimize fabric waste" />
                  </div>
                </div>
              </div>

              <div className={s.rightScreen}>
                <Clock />
                {project == "" ? (
                  <p className={s.noProject}>What would you like to know?</p>
                ) : ""}
                {project == "socketcare" ? <ProjectItem img1={socketcare1} img2={socketcare2}
                                                        desc="Research, redesign, and coding an intuitive status checker and warranty purchase widget to handle warranty purchase for multiple items at once."
                                                        design="Figma"
                                                        stack="HTML, JavaScript (jQuery), CSS (SCSS), C# (ASP.NET)"
                                                        more="/socketcare/"
                                                        link=""
                                                        github="" /> : ""}
                {project == "xr" ? <ProjectItem img1={xr1} img2={xr2}
                                                        desc="As the Design and Marketing Lead of a UC Berkeley student organization, conduct user interviews and user testing to create a fresh look for the club, then bringing it to life through its website and branding."
                                                        design="Adobe Photoshop, Figma"
                                                        stack="HTML, JavaScript, CSS, React"
                                                        more="/xr/"
                                                        link="https://xr.studentorg.berkeley.edu/"
                                                        github="https://github.com/xratberkeley/website" /> : ""}
                {project == "innod" ? <ProjectItem img1={innod1} img2={innod2}
                                                        desc="Working with professional organizations in UC Berkeley to design and create websites that best showcase who they are; notably, produced sites for Berke1337 (cybersecurity), and SURG (climate & sustainability research)."
                                                        design="Adobe Photoshop, Figma"
                                                        stack="HTML, JavaScript, CSS, React"
                                                        more="/innod/"
                                                        githubmulti={[{link: "https://github.com/lizzyyy/berke1337-x-innod", text: "BERKE1337"}, {link: "https://github.com/sean-she/innod-tisr", text: "SURG"}]} /> : ""}
                {project == "circles" ? <ProjectItem img1={circles1} img2={circles2}
                                                        desc="Designing and implementing a tableu-like UI dashboard for data filtration and analysis, for improved usability and better data comparison. This is an *internal tool* that I cannot show, but I am happy to discuss it verbally. Also designed several views for product delivery management, as shown above."
                                                        design="Figma"
                                                        stack="HTML, JavaScript, CSS, React, Node.js with MongoDB & Snowflake databases" /> : ""}
                {project == "gitlet" ? <ProjectItem img1={gitlet1}
                                                        desc="Designeing and implementing a local version control system mimicking git, including its branching and merge functions, with a focus on optimizing underlying data structures and algorithms."
                                                        design="-"
                                                        stack="Java" /> : ""}
                {project == "press&go" ? <ProjectItem img1={pressgo1} img2={pressgo2}
                                                        desc="Conducting research, user interviews and user testing to create and optimize a beginner friendly, no-sew clothing alteration tool to raise awareness against fast fashion and minimize fabric waste. Modeling and 3D printing a high-fidelity functional prototype."
                                                        design="AutoDesk CAD"
                                                        stack="-" /> : ""}
              </div>
            </div>
          )
        }
      </body>
    </main>
  )
}

export default HomePage

export const Head = () => <title>Lizzy Wang</title>