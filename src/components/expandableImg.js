import React, { useState, useEffect, useRef } from "react"

import * as s from "../styles/case.module.css"

const ExpandableImg = ({ src }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (open) {
      el.style.maxHeight = `${el.scrollHeight}px`;
    } else {
      el.style.maxHeight = "400px";
    }
  }, [open]);

  return (
    <div
    ref={wrapperRef}
    className={`${s.column} ${s.fade} ${open ? s.open : ""}`}
    onClick={() => setOpen(o => !o)}
    >
    <img src={src} alt="" />
    </div>
  );
}

export default ExpandableImg

export const Head = () => <title>Lizzy Wang</title>