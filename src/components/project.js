import React, { useState, useEffect } from "react"

import * as s from "../styles/project.module.css"

import EastIcon from '@mui/icons-material/East';
import StarIcon from '@mui/icons-material/Star';

const Project = ({title, company, year, fav = false, desc}) => {

return (
    <section>
        <div className={s.projectItem}>
            <div className={s.itemText}>
                <h2>{title}{fav ? <StarIcon className={s.star} /> : ""}</h2>
                <p className={s.company}>{company}</p>
                <p>{desc}</p>
            </div>
            <p className={s.year}>{year}</p>
            <EastIcon className={s.arrow}/>
        </div>
    </section>
)
}

export default Project

export const Head = () => <title>Lizzy Wang</title>