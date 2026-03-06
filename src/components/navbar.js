import React from "react"
import { Link } from "gatsby"

import * as s from "../styles/button.module.css"

import sun from "../images/sun.png"

const NavBar = ({selected}) => {

    let navClass = s.reg;
    if (selected == "about") {
        navClass = s.aboutNav;
    }
    if (selected == "projects") {
        navClass = s.projectsNav;
    }

return (
    <section>
        <div className={`${navClass} ${s.navWrapper}`}>
            <Link to={`/`} className={s.navImg} ><img src={sun} /></Link>
            <Link to={/projects/}><div className={selected == "projects" ? `${s.active} ${s.navLink}` : s.navLink}>projects</div></Link>
            <Link to={/aboutme/}><div className={selected == "about" ? `${s.active} ${s.navLink}` : s.navLink}>about</div></Link>
            <a href="https://github.com/lizzyyy" target="_blank" className={s.navLink}>github</a>
            {/*<Link to={/resume/}><div className={s.navLink}>resume</div></Link>*/}
        </div>
    </section>
)
}

export default NavBar

export const Head = () => <title>Lizzy Wang</title>