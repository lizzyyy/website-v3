import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"

import * as s from "../styles/case.module.css"

import AddIcon from '@mui/icons-material/Add';

const Accordion = ({heading, children}) => {

    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);

    useEffect(() => {
        if (!panelRef.current) return;
        if (open) {
            panelRef.current.style.height = `${panelRef.current.scrollHeight}px`;
            const onTransitionEnd = () => {
                panelRef.current.style.height = "auto";
            };
            panelRef.current.addEventListener("transitionend", onTransitionEnd);
            return () => panelRef.current.removeEventListener("transitionend", onTransitionEnd);
            } else {
                panelRef.current.style.height = `${panelRef.current.scrollHeight}px`;
                requestAnimationFrame(() => {
                    panelRef.current.style.height = "0px";
                });
            }
    }, [open]);

return (
    <section>
        <div className={`${s.accordion} ${open ? s.open : ""}`}>
            <div className={s.accordionHeading} onClick={() => setOpen(!open)}>
                <h3>{heading}</h3>
                <AddIcon className={s.accordionMore} />
            </div>
            <div className={s.accordionPanel} ref={panelRef}>
                {children}
            </div>
        </div>
    </section>
)
}

export default Accordion

export const Head = () => <title>Lizzy Wang</title>