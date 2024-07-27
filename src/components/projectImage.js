import React, { useState, useEffect } from "react"

import * as s from "../styles/project.module.css"

const ProjectImage = ({img}) => {

return (
    <div className={s.imgWrapper}>
        <div className={s.imgWindow}>
            <div className={s.redCircle}></div>
            <div className={s.yellowCircle}></div>
            <div className={s.greenCircle}></div>
        </div>
        <img src={img} />
    </div>
)
}

export default ProjectImage

export const Head = () => <title>Lizzy Wang</title>