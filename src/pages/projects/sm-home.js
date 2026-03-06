import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
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

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import EastIcon from '@mui/icons-material/East';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ForwardIcon from '@mui/icons-material/Forward';
import SouthIcon from '@mui/icons-material/South';
import LensIcon from '@mui/icons-material/Lens';

import adidas from "../../images/sm-home adidas.png"
import cf from "../../images/sm-home cf.png"
import cf2 from "../../images/sm-home cf2.png"
import ps from "../../images/sm-home ps.png"
import rei from "../../images/sm-home rei.png"
import rei2 from "../../images/sm-home rei2.png"
import reiv1 from "../../images/sm-home rei v1.png"
import reiv2 from "../../images/sm-home rei v2.png"
import porschev1 from "../../images/sm-home porsche v1.png"
import porschev2 from "../../images/sm-home porsche v2.png"
import results1 from "../../images/sm-home results1.png"
import results2 from "../../images/sm-home results2.png"


const SMHome = () => {

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
                    scope="Research, UX, UI, front-end development"
                    tools="Figma, HTML, CSS, JavaScript"
                    outcome="Improved product discovery, increased product sales, higher first-time purchases"/>

          <Accordion heading="TL;DR (45 SECOND READ)">
            <p>I redesigned Socket Mobile's homepage to shift it from a developer-focused site to a <b>product-driven e-commerce experience</b>.</p>
            <p>Through user interviews, data analysis, and competitive research, I identified that users were overwhelmed by technical content and unsure what to buy. I restructured the homepage around <b>clear user paths</b>, prioritized the S720 flagship product, and reduced product discovery to <b>two clicks</b>.</p>
            <p>Then, I built and deployed the final homepage. Post-launch analytics showed increased engagement with key CTAs, increased sales for the S720, and an <b>all-time high in first-time purchases</b>.</p>
          </Accordion>

          <h2>PROJECT OVERVIEW</h2>
          <div className={s.box}>
            <p><a href="https://www.socketmobile.com" target="_blank">Socket Mobile</a> is a multinational manufacturer of barcode scanners and NFC readers, offering both hardware products and supporting SDKs.</p>
            <p>Following a company-wide strategic shift, I was asked to help reposition the public website. Historically, the site catered primarily to developers and business partners. The new goal was to focus on <mark>end-users and buyers</mark>, making the homepage feel like a modern e-commerce experience rather than a technical resource.</p>
            <p>This required a full redesign of the website, <mark>with the homepage as the most critical touchpoint</mark>, since it shapes first impressions and purchasing behavior.</p>
          </div>

          <div className={`${s.box} ${s.centerBox} ${s.blackBox}`}>
            <h2 className={s.brown}>THE PROBLEM</h2>
            <p>Users needed to <b>quickly understand</b> what Socket Mobile offers and <b>confidently choose</b> the right product, but the existing homepage was dense, technical, and optimized for developers, not shoppers.</p>
          </div>

          <KeyboardDoubleArrowDownIcon className={s.downArrow} />

          <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
            <h2 className={s.brown}>END GOAL</h2>
            <p>To design a <b>clear</b>, <b>visually engaging</b>, and <b>conversion-focused</b> homepage that helped users feel confident making a purchase without feeling overwhelmed</p>
          </div>
        
          <div className={s.row}>
            <div className={s.column}>
              <h2>KEY CHALLENGES</h2>
              <div className={s.box}>
                <ul className={s.condensed}>
                  <li><p>Large catalog of "equally important" products</p></li>
                  <li><p>Heavy use of technical terminology unfamiliar to first-time customers</p></li>
                  <li><p>A homepage that explained <mark>how things work</mark> instead of <mark>what to buy</mark></p></li>
                </ul>
              </div>
            </div>

            <MultipleStopIcon className={s.colSeparator} />

            <div className={s.column}>
              <h2>SUCCESS METRICS</h2>
              <div className={s.box}>
                <ul className={s.condensed}>
                  <li><p>First-time visitors reach a product page within <mark>30 seconds</mark> and <mark>2 clicks</mark></p></li>
                  <li><p>Increase weekly revenue from $50k to <mark>$100k</mark></p></li>
                  <li><p>Elevate visibility and sales of the flagship S720 scanner, while propositioning its upgrade, the S740</p></li>
                </ul>
              </div>
            </div>
          </div>

         {/* RESEARCH */} 

          <h2>RESEARCH & INSIGHT</h2>
          <div className={s.box}>
            <p><mark>User Interviews</mark> &mdash; mix of experienced customers & first-time visitors to understand how different audiences perceived the site</p>
            <ul>
              <li><p>The site felt like a <b>B2B developer</b> platform rather than an online store</p></li>
              <li><p>Technical copy made product selection intimidating</p></li>
              <li><p>Product discovery tools existed but were <b>visually buried</b> <span className={s.brown}><EastIcon className={s.inlineIcon} /> new users didn't realize products could be purchased directly</span></p></li>
              <li><p>Several users commented they would rather “just buy it on Amazon” because the <b>site felt overwhelming</b></p></li>
            </ul>

            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;This feedback made it clear that the homepage wasn't just cluttered, it was actively pushing users away</p>
            </div>

            <p><mark>Audience & Product Analysis</mark> &mdash; of historical sales data to understand buying patterns and growth opportunities</p>
            <ul>
              <li><p><span className={s.brown}>RETAIL</span>&nbsp;&nbsp;&nbsp;&nbsp;<b>44.5%</b> of total sales</p></li>
              <li><p><span className={s.brown}>GENERAL-USE SCANNERS</span>&nbsp;&nbsp;&nbsp;&nbsp;<b>85%</b> of direct sales</p></li>
              <li><p><span className={s.brown}>INDUSTRIAL SCANNERS</span>&nbsp;&nbsp;&nbsp;&nbsp;smaller volume but high-value growth potential</p></li>
              <li><p><span className={s.brown}>BEST-SELLING PRODUCT</span>&nbsp;&nbsp;&nbsp;&nbsp;<b>S720</b> (~40% of total sales)</p></li>
            </ul>
            <p>With these insights, I devised a plan to prioritize everyday scanners while still creating a clear path to higher-ticket industrial products.</p>
            <br/>
            <p><mark>Competitive Analysis</mark> &mdash; of direct competitors (Zebra, Honeywell etc.) as well as other e-commerce retailers (Amazon, Nike etc.)</p>
            <p>My goal was to understand how they <b>simplified complex product lines</b>, <b>built trust</b> through clarity and reassurance, and <b>reduced friction</b> in product discovery.</p>
            <br/>

            <p className={s.link}><a onClick={() => setOpen(!open)}>some notable findings +</a></p>
            <div className={s.images} ref={panelRef}>
              <div className={s.image}>
                <img src={cf} />
                <img src={cf2} />
                <p><a href="https://www.crutchfield.com/" target="_blank">Crutchfield</a> &mdash; user-friendly presentation of selection guides help users narrow down products</p>
              </div>
              <div className={s.image}>
                <img src={ps} />
                <p><a href="https://www.playstation.com/en-us/" target="_blank">PlayStation</a> &mdash; heavy promotion of flagship product</p>
                <img src={rei2} />
                <p><a href="https://www.rei.com/" target="_blank">REI</a> &mdash; convinces users why they should choose REI over competitors</p>
              </div>
              <div className={s.image}>
                <img src={rei} />
                <p><a href="https://www.rei.com/" target="_blank">REI</a> &mdash; shows users what they can do with the products</p>
              </div>
              <div className={s.image}>
                <img src={adidas} />
                <p><a href="https://www.adidas.com/us" target="_blank">Adidas</a> &mdash; short tagline under category link tells users what to expect</p>
              </div>
            </div>

            <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
              <p><PriorityHighIcon className={s.inlineIcon} />&nbsp;&nbsp;&nbsp;&nbsp;This reinforced the idea that users don't just buy products, but also confidence and clarity (or, the <b>brand</b>)</p>
            </div>
          </div>

          {/* DESIGN */}

          <h2>DESIGN APPROACH</h2>
          <div className={s.row}>
            <div className={s.column}>
              <div className={`${s.box} ${s.greyBox} ${s.centerText}`}>
                <p style={{textAlign: "left"}}>We kicked off the design phase with a collaborative workshop that aligned stakeholders around <b>3 core principles</b></p>
                <span className={s.brown}><ForwardIcon className={s.thickArrow} /></span>
              </div>
            </div>
            <div className={s.column}>
              <div className={`${s.box} ${s.stackedBox}`}>
                <p><mark>Clarity over cleverness</mark> &mdash; users shouldn't have to think to understand what we sell</p>
              </div>
              <div className={`${s.box} ${s.stackedBox}`}>
                <p><mark>Fewer steps = higher conversion</mark> &mdash; every extra click introduces friction</p>
              </div>
              <div className={`${s.box} ${s.stackedBox}`}>
                <p><mark>Trust drives purchasing decisions</mark> &mdash; reassurance matters as much as features</p>
              </div>
            </div>
          </div>

          <div className={`${s.flow} ${s.centerText}`}>
            <h2>USER JOURNEY</h2>
            <div className={`${s.box} ${s.centerBox} ${s.blackBox}`}>
              <p><b>Flagship product</b> &mdash; this is what we think is best</p>
            </div>

            <SouthIcon className={s.downArrow} />
            <p className={s.brown}>3 primary journeys</p>
            <div className={s.row}>
              <div className={`${s.box} ${s.column} ${s.tealBox} ${s.centerText}`}>
                <p><b>SMBs & retailers</b></p>
                <LensIcon className={s.dot} />
                <p>SocketScan, DuraScan lines</p>
                <p>(fast, afforable, reliable)</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.tealBox} ${s.centerText}`}>
                <p><b>Industrial & logistics</b></p>
                <LensIcon className={s.dot} />
                <p>DuraScan, XtremeScan lines</p>
                <p>(rugged, high-performance scanners)</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.tealBox} ${s.centerText}`}>
                <p><b>Developers</b></p>
                <LensIcon className={s.dot} />
                <p>SDK & dedicated portal</p>
                <p>(documentation, tools, support)</p>
              </div>
            </div>

            <SouthIcon className={s.downArrow} />
            <p className={s.brown}>Not sure what applies to you more?</p>
            <div className={`${s.row} ${s.thinRow}`}>
              <div className={`${s.box} ${s.column} ${s.centerText}`}>
                <p><b>Product selection tool</b></p>
                <p>for users with specific needs</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.centerText}`}>
                <p><b>Products in use</b></p>
                <p>familiar sights for first-time shoppers &mdash; is this you?</p>
              </div>
            </div>

            <SouthIcon className={s.downArrow} />
            <p className={s.brown}>Still not convinced?</p>
            <div className={s.row}>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Bestsellers</b></p>
                <p>(see what everyone else is buying)</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Sales & promotions</b></p>
                <p>(take advantage of our offers)</p>
              </div>
              <div className={`${s.box} ${s.column} ${s.yellowBox} ${s.centerText}`}>
                <p><b>Brand guarantees</b></p>
                <p>(why choose us over another brand)</p>
              </div>
            </div>

            <SouthIcon className={s.downArrow} />
            <p className={s.brown}>Help! I've scrolled all the way down and I'm lost</p>
            <div className={`${s.box} ${s.centerBox} ${s.blackBox}`}>
              <p>Resources & support</p>
            </div>
          </div>

          <div className={s.box}>
            <p>This allowed <b>different user types</b> to immediately see themselves reflected on the page, and allowed the site to focus on <b>end-users</b> without neglecting the developer-facing side of our business.</p>
          </div>

          {/* FINAL */}

          <h2>VISUAL DIRECTION & FINAL DESIGN</h2>
          <div className={s.box}>
            <p>I explored 2 design directions:</p>
            <Swiper pagination={true} modules={[Pagination]} className={s.swiper}>
              <SwiperSlide className={s.slide}>
                <div className={s.row}>
                  <ExpandableImg src={porschev1} />
                  <EastIcon className={s.colSeparator} />
                  <ExpandableImg src={porschev2} />
                </div>
                <div className={s.centerText}>
                  <p><mark>PRODUCT-LED APPROACH</mark> inspired by <a href="https://www.porsche.com/usa/" target="_blank">Porsche</a></p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={s.slide}>
                <div className={s.row}>
                  <ExpandableImg src={reiv1} />
                  <EastIcon className={s.colSeparator} />
                  <ExpandableImg src={reiv2} />
                </div>
                <div className={s.centerText}>
                  <p><mark>INFORMATION-LED APPROACH</mark> inspired by <a href="https://www.rei.com/" target="_blank"></a>REI</p>
                </div>
              </SwiperSlide>
            </Swiper>

            <p>After usability testing with both new shoppers and experienced users, the <b>product-led approach performed significantly better</b>. Users found it <mark>easier to scan, faster to navigate, and more confidence-inspiring</mark>.</p>
            <p>I refined the selected design based on user feedback and implemented the final homepage using HTML, CSS, and JavaScript, deploying it to the <a href="https://www.socketmobile.com/" target="_blank">live site</a>. <a href="https://web.archive.org/web/20251114111258/https://www.socketmobile.com/" target="_blank">This</a> is how it looked at the point of deployment.</p>
          </div>

          {/* RESULTS */}

          <h2>RESULTS <span className={s.brown}>*</span></h2>
          <div className={s.row}>
            <div className={`${s.box} ${s.column} ${s.results}`}>
              <div className={`${s.blackBox} ${s.centerText}`}>
                <h2 className={s.brown}>OLD PAGE</h2>
              </div>
              <div>
                <p><b>19,343</b> sessions started
                  <br/>
                <b>1,991</b> users reaching a product page</p>
                <div style={{display:"flex"}}>
                  <p><EastIcon className={s.inlineIcon} /></p>
                  <p><mark><b>10.3%</b> conversion rate</mark>
                    <br/>
                  <b>~46h</b> to reach a product page (median)</p>
                </div>
              </div>
            </div>

            <div className={`${s.box} ${s.column} ${s.results}`}>
              <div className={`${s.blackBox} ${s.centerText}`}>
                <h2 className={s.brown}>NEW PAGE</h2>
              </div>
              <div>
                <p><b>57,207</b> sessions started
                  <br/>
                <b>12,656</b> users reaching a product page</p>
                <div style={{display:"flex"}}>
                  <p><EastIcon className={s.inlineIcon} /></p>
                  <p><mark><b>22.1%</b> conversion rate</mark>
                    <br/>
                  <b>~7h 40min</b> to reach a product page (median)</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.box}>
            <p>i.e. with the redesign...</p>
            <ul>
              <li><p>users take <b>83%</b> less time to reach a product page</p></li>
              <li><p>there is a <b>114.6%</b> increase in conversion rate <EastIcon className={s.inlineIcon} /> <mark>more users felt confident in making a purchase</mark> with the information on the site</p></li>
            </ul>
            <p>The images below show users' paths after visiting the homepage:</p>
            <div className={s.row}>
              <div className={`${s.column} ${s.resultsImg}`} style={{maxWidth:"33%"}}>
                <img src={results1} />
                <div className={s.tealBox}>
                  <p>Most-clicked CTAs directly highlight our flagship product lines</p>
                </div>
              </div>
              <div className={`${s.column} ${s.resultsImg}`} style={{maxWidth:"66%"}}>
                <img src={results2} />
                <div className={s.tealBox}>
                  <p>Users frequently navigated from category pages to product pages, meeting the 2-click goal</p>
                </div>
              </div>
            </div>
            <p>This resulted in an <b>increase in sales</b> of the flagship S720, as well as <b>first-time purchases</b> reaching an all-time-high.</p>
            <p>The homepage redesign successfully <mark>removed unnecessary navigation friction</mark>, allowing more users to find product pages substantially faster. This confirms that the new homepage structure is more <mark>intuitive and goal-oriented</mark>.</p>

            <Accordion heading="MY IMPACT">
              <ul>
                <li><p>Led user research, UX strategy, UI design, and front-end development</p></li>
                <li><p>Repositioned the homepage from developer-focused to product-driven e-commerce</p></li>
                <li><p>Reduced cognitive load and improved product discovery</p></li>
                <li><p>Delivered measurable business impact through increased engagement and sales</p></li>
              </ul>
            </Accordion>
            
            <p className={s.brown}>* comparing Google Analytics data from the 3 months before the redesign with the 3 months following the redesign </p>
          </div>

          <h2>REFLECTION & NEXT STEPS</h2>
          <div className={s.box}>
            <p>This project reinforced how powerful <mark>clarity and prioritization</mark> can be in e-commerce design. Besides just improving usability, <mark>reducing cognitive load</mark> also directly impacted revenue.</p>
            <p>With this in mind, these are a few steps I want to take to further improve the user experience:</p>
            <ul>
              <li><p>Introduce a <b>short hero video</b> to strengthen brand storytelling</p></li>
              <li><p><b>Streamline secondary pages</b> based on real user navigation paths</p></li>
              <li><p>Conduct A/B testing upon <b>repositioning partnered apps</b> on the homepage to emphasize the brand’s collaboration and trustworthiness</p></li>
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

export default SMHome

export const Head = () => <title>Lizzy Wang</title>