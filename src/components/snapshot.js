import React from "react"
import { Link } from "gatsby"

import * as s from "../styles/case.module.css"

import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Snapshot = ({role, scope, tools, outcome}) => {

return (
    <section>
        <div className={s.snapshot}>
            <h1>PROJECT SNAPSHOT</h1>
            <LightbulbIcon className={s.bulb} />
            <div className={s.box}>
                <div><p className={s.brown}>ROLE</p><p>{role}</p></div>
                <div><p className={s.brown}>SCOPE</p><p>{scope}</p></div>
                <div><p className={s.brown}>TOOLS</p><p>{tools}</p></div>
                <div><p className={s.brown}>OUTCOME</p><p>{outcome}</p></div>
            </div>
        </div>
    </section>
)
}

export default Snapshot

export const Head = () => <title>Lizzy Wang</title>