import React, { useState, useEffect, useRef } from "react"

import Clock from "../../components/clock.js";
import NavBar from "../../components/navbar.js";
import Snapshot from "../../components/snapshot.js";
import Accordion from "../../components/accordion.js";
import ExpandableImg from "../../components/expandableImg.js";

import * as s from "../../styles/case.module.css"

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SouthIcon from '@mui/icons-material/South';

import logitech from "../../images/sm-apple logitech.png"
import faq from "../../images/sm-apple faq.png"
import ram from "../../images/sm-apple ram.png"
import apple from "../../images/sm-apple apple.png"


const SMApple = () => {

  /*useEffect(()=>{ 
      setTimeout(()=> setLoaded(true),3000);  
  },[])*/

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
    <main>
      <body className={s.bodyWrapper}>
        <Clock />
        <NavBar selected={null} />
        <div className={s.content}>
          <Snapshot role="UI/UX Designer & Full-Stack Developer"
                    scope="Research, UX, UI, full-stack development"
                    tools="Figma, HTML, CSS, JavaScript, ASP.NET, C#"
                    outcome="Informative but concise landing page catered to Apple users"/>

          <Accordion heading="TL;DR (45 SECOND READ)">
            <p>Socket Mobile was developing a partnership with Apple, but there was no dedicated experience for Apple users to easily discover which Socket Mobile products worked with their devices.</p>
            <p>I designed and built a <b>clean, Apple-inspired landing page</b> that guides users from the Apple device they already own to the most compatible Socket Mobile products without overwhelming them with technical details.</p>
            <p>By <b>prioritizing simplicity, clear user paths, and a familiar Apple-like UI</b>, the page helps non-technical Apple customers quickly understand their options and make informed purchasing decisions. I handled the project end-to-end, from research and UX design to front-end implementation and ASP.NET backend integration.</p>
            <p>The page was later showcased by Apple during a data capture seminar and received strong positive feedback.</p>
          </Accordion>

          <h2>PROJECT OVERVIEW</h2>
          <div className={s.box}>
            <p>Following early discussions around a partnership with Apple, where <a href="https://www.socketmobile.com" target="_blank">Socket Mobile</a> would act as a premier reseller of iPhones for data capture use cases, we identified a gap in the user experience. There was <b>no dedicated landing page</b> for Apple customers to easily discover which Socket Mobile products were compatible with their devices.</p>
            <p>The goal was to create a landing page <b>tailored specifically to Apple users</b> that would be promoted by Apple and linked from their own site. it should be <mark>informative yet concise</mark>, allowing visitors to quickly understand what applies to them and <mark>confidently move toward purchase</mark>. </p>
          </div>

          <div className={`${s.box} ${s.centerBox} ${s.blackBox}`}>
            <h2 className={s.brown}>THE PROBLEM</h2>
            <p>Apple customers were <b>unfamiliar</b> with Socket Mobile's products and unsure of where to start, as <b>no dedicated page exists</b>.</p>
          </div>

          <KeyboardDoubleArrowDownIcon className={s.downArrow} />

          <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
            <h2 className={s.brown}>END GOAL</h2>
            <p>To design a <b>clean, intuitive landing page</b> for Apple users that highlights Socket Mobile's <b>most compatible products</b> and guides them toward <b>informed purchasing decisions</b> with minimal friction</p>
          </div>

         {/* RESEARCH */} 

          <h2>RESEARCH & INSIGHT</h2>
          <div className={s.box}>
            <p><mark>Stakeholder interviews</mark></p>
            <p>I collaborated closely with the Outreach team, who were in active discussions with Apple, to understand their priorities. The primary takeaway was that <b>simplicity was essential</b>.</p>
            <br/>

            <p><mark>Audience & product analysis</mark></p>
            <div className={`${s.centerBox} ${s.blackBox}`} style={{marginBottom:"12px"}}>
                <h2 className={s.brown}>TARGET AUDIENCE</h2>
                <p>Apple customers that are often <b>less familiar</b> with specialized hardware like barcode scanners</p>
            </div>
            <p className={`${s.brown} ${s.centerText}`}>DESIGNATED APPROACHES</p>
            <div className={`${s.row} ${s.flow}`}>
                <div className={`${s.box} ${s.column} ${s.centerText}`}>
                    <p>Page should be easy to understand <b>at a glance</b></p>
                </div>
                <div className={`${s.box} ${s.column} ${s.centerText}`}>
                    <p>Information should <b>avoid technical jargon</b></p>
                </div>
                <div className={`${s.box} ${s.column} ${s.centerText}`}>
                    <p>Gently <b>guide users</b> to the right product without overwhelming them</p>
                </div>
            </div>

            <p><mark>Competitor analysis</mark></p>
            <p>To align with Apple's expectations, I analyzed landing pages from companies with established Apple partnerships, such as Logitech and RAM Mounts.</p>
            <p>These pages shared common themes: <b>minimal layouts</b>, <b>clear product categorization</b>, and a strong focus on <b>user clarity</b>. Given Apple's approval of these experiences, they served as strong reference points for both structure and tone.</p>
            <br/>
            <p className={s.link}><a onClick={() => setOpen(!open)}>some notable findings +</a></p>
            <div className={s.images} ref={panelRef}>
              <div className={s.image}>
                <img src={logitech} />
                <p><a href="https://www.logitech.com/en-us/apple.html" target="_blank">Logitech</a> &mdash; emphasis on how well Logitech products work with users' existing devices, to reduce friction</p>
              </div>
              <div className={s.image}>
                <img src={faq} />
                <p><a href="https://www.logitech.com/en-us/apple.html" target="_blank">Logitech</a> &mdash; accessible support section</p>
              </div>
              <div className={s.image}>
                <img src={ram} />
                <p><a href="https://rammount.com/pages/apple" target="_blank">RAM Mounts</a> &mdash; clear start point for users with different devices</p>
              </div>
            </div>
          </div>

          {/* DESIGN */}

          <h2>DESIGN APPROACH</h2>
          <div className={`${s.box} ${s.flow} ${s.appleFlow}`}>
            <p>To reduce friction and decision fatigue, i created a clear, guided flow:</p>
            <div className={`${s.box} ${s.tealBox} ${s.centerBox}`}>
                <p><b>Start with the Apple device they already own</b>
                    <br/>
                    Provide an easy starting point to engage with users
                </p>
            </div>
            <SouthIcon className={s.downArrow} />
            <div className={`${s.box} ${s.centerBox}`}>
                <p><b>Present compatible products with concise labels</b>
                    <br/>
                    Rather than dense descriptions, concise labels provide essential information at a glance
                </p>
            </div>
            <SouthIcon className={s.downArrow} />
            <div className={`${s.box} ${s.yellowBox} ${s.centerBox}`}>
                <p><b>Recommend suitable accessories based on product</b>
                    <br/>
                    Help to fill the gap between users' Apple devices and Socket Mobile hardware
                </p>
            </div>
            <SouthIcon className={s.downArrow} />
            <div className={`${s.box} ${s.blackBox} ${s.centerBox}`}>
                <p><b>Simple, no frills support form</b>
                    <br/>
                    Direct line to outreach & sales in case of any further questions
                </p>
            </div>
          </div>

          {/* FINAL */}

          <h2>VISUAL DIRECTION & FINAL DESIGN</h2>
          <div className={s.box}>
            <p>For visual inspiration, I closely studied Apple's own website. Apple's design language is defined by restraint: <mark>generous white space, subtle hierarchy, and minimal UI elements</mark>.</p>
            <p>Because the page would be linked directly from Apple's site, I designed it to feel like a <b>natural extension of Apple's ecosystem</b> while still incorporating Socket Mobile's brand colors and product styling. This allowed the page to act as a <b>visual bridge</b> between the two brands.</p>
            <div className={`${s.box} ${s.tealBox} ${s.listBox}`}>
                <p>Key implementation details:</p>
                <ul>
                    <li><p>Apple-inspired layout with clean typography and white backgrounds</p></li>
                    <li><p>Socket Mobile branding integrated through color and product cards</p></li>
                    <li><p>A support form modeled after Apple's own support experience</p></li>
                    <li><p>Backend integration using ASP.NET to route inquiries directly to the Sales team</p></li>
                </ul>
            </div>

            <div className={s.noSlide}><ExpandableImg src={apple} /></div>
            <p>After refining the design based on user feedback, I implemented the final landing page using HTML, CSS, and JavaScript, and deployed it to the <a href="https://www.socketmobile.com/apple" target="_blank">live site</a>.</p>
          </div>

          {/* RESULTS */}

          <h2>RESULTS</h2>
          <div className={s.box}>
            <ul>
                <li><p>Launched Socket Mobile's first Apple-specific landing page, filling a <b>key gap</b> in the customer journey</p></li>
                <li><p>Enabled Apple users &mdash; many of whom were unfamiliar with barcode scanning hardware &mdash; to quickly identify compatible products with <b>minimal friction</b></p></li>
                <li><p>The page was showcased by Apple during a data capture seminar and <mark>received positive feedback from both Apple and Socket Mobile stakeholders</mark>, bolstering the budding partnership</p></li>
                <li><p>At the same time, <mark>reduced reliance</mark> on Sales and Support for basic compatibility questions by clearly surfacing recommended products and accessories</p></li>
            </ul>
          </div>     
        </div>
        {/*Link
          to={'/home/'}
          state={{ firstVisit: 1 }}
          className={s.link}
        >hi</Link>*/}
      </body>
    </main>
  )
}

export default SMApple

export const Head = () => <title>Lizzy Wang</title>