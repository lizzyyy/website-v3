import React, { useState, useEffect } from "react"
import * as s from "../styles/about.module.css"
import { Link } from "gatsby"

import sun from "../images/sun.png"
import Clock from "../components/clock.js";

const AboutPage = () => {

  /*useEffect(()=>{ 
      setTimeout(()=> setLoaded(true),3000);  
  },[])*/

  return (
    <main>
      <body className={s.bodyWrapper}>
        <Clock />
        <div className={s.topHalf}>
          <div className={s.textbox}>
            <h1>ABOUT ME // MOTIVATION</h1>
            <p>Hi! My name is Lizzy. I'm a <b>designer, developer, creator</b>. Currently, I'm a developer at <a href="https://www.socketmobile.com/" target="_blank">Socket Mobile</a>. I spend most of my time dabbling in web design and development, always researching, always learning.</p>
            <p>I enjoy treading the fine line between <mark>&nbsp;art and technology&nbsp;</mark>, making use of Human Centered Design to improve the user experience, then bringing these ideas to life. Outside of work, I enjoy <mark>&nbsp;creating&nbsp;</mark>, trying my hand at all sorts of art projects, from graphic design to fashion design, to jewelry making, to crochet.</p>
            <p>Maintaining and upgrading this website is a passion project of mine, a playground with no set rules, no client guidelines, to <mark>&nbsp;test my own limits&nbsp;</mark>. See version 1 here.</p>
            <p>See my other, recent project - an official website for a university organization I co-led: XR @ Berkeley</p>
            <h2 className={s.boxTitle}>ABOUT ME</h2>
          </div>

          <div className={s.images}>
            <img src={sun} />
            <img src={sun} />
          </div>
        </div>

        <div className={s.bottomHalf}>
          <div className={s.textbox}>
            <div className={s.section}>
              <h1>CREDENTIALS // WHAT I DO</h1>
              <p><b>BSc with High Honors</b> and a 3.97 GPA in <mark>&nbsp;Electrical Engineering and Computer Sciences&nbsp;</mark> from University of California, Berkeley (May 2020 - Dec 2023)</p>
              <p>Awarded the <mark>&nbsp;Berkeley Certificate in Design Innovation&nbsp;</mark>, and part of the UC Berkeley National Engineering and Computer Science Honor Society and the Engineering Honor Society in 2021, 2022, 2023</p>         
              <h2 className={s.boxTitle}>EDUCATION</h2>
            </div>

            <div className={s.section}>
              <p><b>Web development stack:</b><br/>HTML, CSS, JavaScript, jQuery, React (+ frameworks), Node.js, ASP.NET, database operations</p>
              <p><b>General programming stack:</b><br/>Python, Java, C, C#, SQL</p>  
              <h2 className={s.boxTitle}>TECH STACK</h2>            
            </div>

            <div className={s.section}>
              <p><b>Web design:</b><br/>Figma, wireframing, prototyping</p>
              <p><b>Graphic design:</b><br/>Graphic Design: Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)</p>
              <h2 className={s.boxTitle}>DESIGN SKILLS</h2>
            </div>
          </div>

          <div className={s.images}>
            <img src={sun} />
          </div>
        </div>
        {/*Link
          to={'/home/'}
          state={{ firstVisit: 1 }}
          className={s.link}
        >hi</Link>*/}
      </body>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Lizzy Wang</title>