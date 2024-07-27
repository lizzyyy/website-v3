import React from "react"
import { Link } from "gatsby"

import * as s from "../styles/button.module.css"

import GitHubIcon from '@mui/icons-material/GitHub';

const Button = ({type, link, text=""}) => {

    let btnClass = s.light;
    if (type == "more") {
        btnClass = s.dark;
        text = "more details";
    } else if (type == "website") {
        text = "see it for yourself";
    }
    if (type == "github" && text != "") {
        btnClass = btnClass + " " + s.iconText;
    }

return (
    <section>
        {type == "more" ? 
        <Link to={link}><div className={btnClass}>{text}</div></Link>
        :
        <a className={btnClass} href={link}>
            {type == "github" ? <span className={s.icon}><GitHubIcon /></span> : ""}
            {text}
        </a>
        }
    </section>
)
}

export default Button

export const Head = () => <title>Lizzy Wang</title>