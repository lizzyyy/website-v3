import React, { useState, useEffect } from "react"

import * as s from "../styles/default.module.css"

import sun from "../images/sun.png"

const Clock = (noSun = false) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timerID = setInterval(() => tick(), 10000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

return (
    <section>
        <div className={s.clock}>
            <div className={s. time}>
                <p>{time}</p>
                {!noSun ? <img src={sun} /> : ""}
            </div>
            <p>{new Date().toLocaleDateString([], { day: 'numeric' })} {new Date().toLocaleDateString([], { month: 'short', year: 'numeric' })}</p>
        </div>
    </section>
)
}

export default Clock

export const Head = () => <title>Lizzy Wang</title>