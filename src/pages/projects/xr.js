import React, { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Clock from "../../components/clock.js";
import NavBar from "../../components/navbar.js";
import Snapshot from "../../components/snapshot.js";
import Accordion from "../../components/accordion.js";
import ExpandableImg from "../../components/expandableImg.js";

import * as s from "../../styles/case.module.css"
import 'swiper/css';
import 'swiper/css/pagination';

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ForwardIcon from '@mui/icons-material/Forward';
import LensIcon from '@mui/icons-material/Lens';
import EastIcon from '@mui/icons-material/East';

import buttons from "../../images/xr buttons.png"
import neon from "../../images/xr neon.png"
import ui from "../../images/xr ui.png"
import motion from "../../images/xr motion.png"
import btn1 from "../../images/xr btn1.png"
import btn2 from "../../images/xr btn2.png"
import p1 from "../../images/xr p1.png"
import p2 from "../../images/xr p2.png"
import p3 from "../../images/xr p3.png"
import p4 from "../../images/xr p4.png"
import decal from "../../images/xr decal.png"


const XR = () => {

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
          <Snapshot role="Executive Board Member, Lead Designer & Developer"
                    scope="Brand strategy, UX design, UI design, front-end development"
                    tools="Figma, HTML, CSS, JavaScript, React"
                    outcome="Stronger brand identity, increased engagement and growth in club membership"/>

          <Accordion heading="TL;DR (45 SECOND READ)">
            <p>During the pandemic, Extended Reality @ Berkeley lost visibility, identity, and recruitment momentum. As the <b>Lead Designer on the club's Executive Board</b>, I led a <b>full website redesign</b> as part of a broader rebrand to rebuild our external presence.</p>
            <p>The old site was outdated, difficult to navigate, and not mobile-friendly — despite most students discovering us via QR codes at campus events. I redesigned it with a futuristic, sci-fi-inspired aesthetic that reflected AR/VR's immersive nature, while restructuring content around <b>clear user paths and bold calls to action</b>.</p>
            <p>The new homepage prioritized projects, events, and immediate <b>entry into the community</b> (especially Discord), reducing friction from curiosity to participation. Post-launch, the site contributed to increased Discord growth, stronger recruitment engagement, and higher infosession attendance, thus helping restore the club's identity and momentum.</p>
          </Accordion>

          <h2>PROJECT OVERVIEW</h2>
          <div className={s.box}>
            <p><a href="https://xr.studentorg.berkeley.edu/" target="_blank">Extended Reality @ Berkeley</a> is the <mark>world's largest</mark> student-led AR/VR organization, with over 60 active members and hundreds of alumni. During the pandemic, remote learning disrupted recruitment, culture, and visibility. The organization lost much of its identity and external presence. As part of the Executive Board, I helped <mark>rebuild the club from the ground up</mark>. This project was very personal to me as the club had given me a lot of unforgettable experiences, and I truly wanted to see it grow.</p>
            <p>I started with a <mark>full rebrand and complete website redesign</mark>. It was our primary connection to the outside world, serving as:</p>
            <ul>
              <li><p>A recruitment funnel for new members</p></li>
              <li><p>A credibility signal for industry partners</p></li>
              <li><p>A public showcase of projects and culture</p></li>
              <li><p>A resource hub for a student-led VR course</p></li>
            </ul>
            <p>As such, redesigning it was foundational to restoring the club's identity and growth.</p>
          </div>

          {/* RESEARCH */} 

          <h2>RESEARCH & PAIN POINTS</h2>
          <div className={s.box}>
            <p>I conducted interviews and user testing to determine the key pain points of the club's current website:</p>
            <br/>
            <p><mark>OUTDATED, NON-DISTINCT DESIGN</mark> &mdash; the <a href="https://web.archive.org/web/20230130020513/https://xr.berkeley.edu/" target="_blank">previous site</a> was built years earlier in plain HTML and resembled a generic blog</p>
            <ul>
              <li><p>No strong brand identity</p></li>
              <li><p><b>Visually indistinguishable</b> from other student organizations</p></li>
              <li><p>Did not reflect the <b>futuristic, cutting-edge</b> nature of AR/VR</p></li>
              <li><p>Failed to communicate club culture or ambition</p></li>
            </ul>
            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;For an organization centered around immersive technology, the experience felt dated and uninspired</p>
            </div>

            <p><mark>Difficult Navigation & Fragmented Information</mark> &mdash; members and prospective applicants struggled to find relevant information</p>
            <ul>
              <li><p>Project descriptions were <b>buried</b> at the bottom of the page</p></li>
              <li><p>Each team wrote its own description with no standardized format</p></li>
              <li><p><b>Inconsistent detail</b> and messaging across teams</p></li>
              <li><p><b>No clear call to action</b> for students interested in joining</p></li>
            </ul>
            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;If a visitor found a project interesting, the site gave them <b>no obvious next step</b></p>
            </div>

            <p><mark>POOR MOBILE EXPERIENCE</mark> &mdash; most traffic came from QR codes at campus events, meaning most visitors were on mobile devices</p>
            <ul>
              <li><p><b>Unresponsive, broken layouts</b> on smaller screens</p></li>
              <li><p>Difficult navigation and excessive scrolling leading to a <b>frustrating first impression</b></p></li>
            </ul>
            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;The first interaction many students had with the club was <b>clunky and outdated</b></p>
            </div>
          </div>

          <div className={`${s.box} ${s.centerBox} ${s.blackBox}`}>
            <h2 className={s.brown}>THE PROBLEM</h2>
            <p>The existing website failed to represent the <b>scale, innovation, and creativity</b> of the organization. Instead of attracting students and partners, it <b>undersold the club</b> and created friction in recruitment</p>
          </div>

          <KeyboardDoubleArrowDownIcon className={s.downArrow} />

          <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
            <h2 className={s.brown}>END GOAL</h2>
            <p>To design a <b>unique, future-forward</b> website that showcases the creative identity of the club while presenting information in a <b>structured and compelling way</b>, attracting potential members and industry partners</p>
          </div>

         {/* DESIGN */}

          <h2>VISUAL DIRECTION & BRANDING</h2>
          <div className={s.box}>
            <p>I leaned into a <mark>sci-fi aesthetic</mark> inspired by futuristic interface design seen in games and films. As AR and VR are still niche technologies,  many people's first associations come from science fiction. I leaned into that perception to give a <mark>stronger first impression</mark>.</p>
            <br/>
            <p className={s.link}><a onClick={() => setOpen(!open)}>design elements and inspiration +</a></p>
            <div className={s.images} ref={panelRef}>
              <div className={s.image}>
                <img src={buttons} />
                <p>Futuristic game interface-inspired buttons</p>
              </div>
              <div className={s.image}>
                <img src={neon} />
                <p>Neon accents and high-contrast color palettes</p>
              </div>
              <div className={s.image}>
                <img src={motion} />
                <p>Subtle motion and interaction cues for a smooth experience</p>
              </div>
              <div className={s.image}>
                <img src={ui} />
                <p>Layered UI elements that feel immersive and dimensional</p>
              </div>
            </div>

            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;I wanted to communicated instantly: <b>we are building the future</b></p>
            </div>
            <p>The bold visuals set us apart from other student organizations and appealed to students curious about immersive technology, even if they had no prior experience.</p>
          </div>

          <h2>SIMPLIFYING THE USER EXPERIENCE</h2>
          <div className={`${s.row} ${s.numberedRow}`}>
            <div className={s.column}>
              <div className={`${s.box} ${s.greyBox} ${s.centerText}`}>
                <p style={{textAlign: "left"}}>We wanted to emphasize <b>what we offer</b> with a simple model</p>
                <span className={s.brown}><ForwardIcon className={s.thickArrow} /></span>
              </div>
            </div>
            <div className={s.column}>
              <div className={s.stackedBox}>
                <div className={`${s.box} ${s.number}`}>
                  <p>1</p>
                </div>
                <div className={s.box}>
                  <p><b>Grab attention</b> with a distinctive visual identity</p>
                </div>
              </div>
              <div className={s.stackedBox}>
                <div className={`${s.box} ${s.number}`}>
                  <p>2</p>
                </div>
                <div className={s.box}>
                  <p><b>Convert interest</b> with clarity and opportunity</p>
                </div>
              </div>
              <div className={s.stackedBox}>
                <div className={`${s.box} ${s.number}`}>
                  <p>3</p>
                </div>
                <div className={s.box}>
                  <p>Showcase our <b>lucrative opportunities</b> and workshops</p>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL */ }

          <div className={s.box}>
            <p>I split the homepage into 4 prominent sections to highlight, at a glance, what we offer:</p>
            <div className={`${s.row} ${s.flow}`}>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Active project teams</b></p>
                <LensIcon className={s.dot} />
                <p>what we do</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Workshops & events</b></p>
                <LensIcon className={s.dot} />
                <p>how to get involved</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Industry partnerships</b></p>
                <LensIcon className={s.dot} />
                <p>who it's for</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Student-led VR course</b></p>
                <LensIcon className={s.dot} />
                <p>what you can learn</p>
              </div>
            </div>

            <p>Each section included succinct summaries so visitors could scan and understand what we offer without needing to click into multiple pages. This <b>minimized friction</b> and <b>reduced unnecessary navigation</b>.</p>
            <p>To reduce hesitation and guide new members, I introduced <b>bold, high-contrast calls to actions</b>:</p>
            <div className={s.shownImages} style={{display: "flex"}}>
              <img src={btn1} />
              <img src={btn2} />
            </div>
            <p>Discord was (and still is) the club's primary communication hub. Joining the Discord server was effectively the first step into the organization — where prospective members could attend info sessions, talk to project leads, and decide whether to apply.</p>
            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;By visually prioritizing this action, we streamlined the onboarding process from <b>curiosity <EastIcon className={s.inlineIcon} /> community</b></p>
            </div>
            <p>Instead of plain HTML and CSS, I implemented the site in React to take advantage of component-based architecture and dynamic modules. This allowed for <b>scalable design and richer interactivity</b> to help created a more futuristic interface.</p>

            <Swiper pagination={true} modules={[Pagination]} className={s.swiper}>
              <SwiperSlide className={`${s.slide} ${s.landscape}`}>
                <ExpandableImg src={p1} />
                <div className={s.centerText}>
                  <p className={s.brown}>Strong landing page to invoke curiosity</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${s.slide} ${s.landscape}`}>
                <ExpandableImg src={p2} />
                <div className={s.centerText}>
                  <p className={s.brown}>Landing page with CTAs and summaries</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${s.slide} ${s.landscape}`}>
                <ExpandableImg src={p3} />
                <div className={s.centerText}>
                  <p className={s.brown}>Concise and easy to read project information</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${s.slide} ${s.landscape}`}>
                <ExpandableImg src={p4} />
                <div className={s.centerText}>
                  <p className={s.brown}>Simple about page</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <p>The refreshed site can be found <a href="https://xr.studentorg.berkeley.edu/" target="_blank">here</a> (and <a href="https://web.archive.org/web/20231102053232/https://xr.berkeley.edu/" target="_blank">here</a>, at the time of publishing).</p>
          </div>

          <h2>BALANCING DIFFERENT NEEDS</h2>
          <div className={s.box}>
            <p>Part of the website hosted materials for a <a href="https://xr.studentorg.berkeley.edu/decal/" target="_blank">student-led course on virtual reality</a>, including homework assignments, project documentation, and course resources. This section required a different design balance &mdash; it needed to be <mark>clean, readable, and academically structured</mark>, while still fitting within the <mark>futuristic aesthetic</mark> of the broader site.</p>
            <div className={s.noSlide}><ExpandableImg src={decal} /></div>
            <p>I simplified layouts, increased white space, and <b>prioritized clarity and hierarchy</b>, ensuring students could easily navigate coursework <b>without visual overload</b>. This allowed the site to function both as a marketing tool and an operational resource.</p>
          </div>

          {/* RESULTS */}

          <h2>RESULTS <span className={s.brown}>*</span></h2>
          <div className={s.box}>
            <p>Following the redesign, we found: </p>
            <ul>
              <li><p><b>Increased traffic and engagement</b> during recruitment cycles</p></li>
              <li><p><b>Higher growth</b> in Discord membership following tabling events and QR scans</p></li>
              <li><p><b>Higher attendance</b> at infosessions and pre-application events</p></li>
              <li><p>Stronger alignment between the club's external presence and its internal culture</p></li>
            </ul>
            <p>The website became a <mark>central driver of recruitment and identity rebuilding</mark>. Most importantly, it repositioned XR @ Berkeley as a forward-looking, innovative organization, restoring the sense of <mark>excitement and legitimacy</mark> that had diminished during remote learning.</p>
            <br />
            <p className={s.brown}>* compared to previous semesters</p>
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

export default XR

export const Head = () => <title>Lizzy Wang</title>