import React, { useState, useEffect } from "react"
import * as s from "../styles/index.module.css"
import { Link } from "gatsby"

import sun from "../images/sun.png"
import Clock from "../components/clock.js";

const AboutPage = () => {

  /*useEffect(()=>{ 
      setTimeout(()=> setLoaded(true),3000);  
  },[])*/

  return (
    <main>
      <body>
        <div className={s.loadWrapper}>
          <div className={s.loadBar}>
            <div className={s.loaded} id="loaded" />
          </div>
          <p className={s.loadText}>
            Loading...
          </p>
        </div>
        <Link
          to={'/home/'}
          state={{ firstVisit: 1 }}
          className={s.link}
        >hi</Link>
      </body>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Lizzy Wang</title>