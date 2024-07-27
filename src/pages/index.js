import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"

import * as s from "../styles/index.module.css"

const IndexPage = () => {

  const homeRef = useRef();
  useEffect(()=>{ 
      setTimeout(()=> {
        homeRef.current?.click();
      },3000);  
  },[])

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
        <Link to={'/home/'} state={{ firstVisit: 0 }} ref={homeRef}></Link>
      </body>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Lizzy Wang</title>