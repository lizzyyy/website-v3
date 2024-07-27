import React, { useState, useEffect } from "react"

import * as s from "../styles/project.module.css"
import ProjectImage from "./projectImage.js"
import Button from "./button.js"

const ProjectItem = ({img1, img2, desc, design, stack, more, link, github, githubmulti}) => {

return (
    <section className={s.projectItemWrapper}>
        <div className={s.images}>
            <ProjectImage img={img1} />
            {img2 ? 
            <div className={s.image2}>
                <ProjectImage img={img2} />
            </div> : ""}
        </div>

        <div className={s.projectInfo}>
            <p>{desc}</p>
            <div className={s.stack}>
                <p>Design: {design}</p>
                <p>Stack: {stack}</p>
            </div>
            <div className={s.buttons}>
                {more ? <Button type="more" link={more} /> : ""}
                {link ? <Button type="website" link={link} /> : ""}
                {github ? <Button type="github" link={github} /> : ""}
                {githubmulti ?
                    githubmulti.map((glink, index) => {
                        return <Button type="github" link={glink.link} text={glink.text} />
                    }) : ""}
            </div>
        </div>
    </section>
)
}

export default ProjectItem

export const Head = () => <title>Lizzy Wang</title>