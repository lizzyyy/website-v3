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

import logitech from "../../images/sm-apple logitech.png"
import faq from "../../images/sm-apple faq.png"
import ram from "../../images/sm-apple ram.png"
import apple from "../../images/sm-apple apple.png"

import timeline from "../../images/socketcare timeline.png"
import data from "../../images/socketcare data.png"
import bulk from "../../images/socketcare bulk.png"
import summary from "../../images/socketcare summary.png"


const Socketcare = () => {

  /*useEffect(()=>{ 
      setTimeout(()=> setLoaded(true),3000);  
  },[])*/

  return (
    <main>
      <body className={s.bodyWrapper}>
        <Clock />
        <NavBar selected={null} />
        <div className={s.content}>
          <Snapshot role="UI/UX Designer & Full-Stack Developer"
                    scope="Research, UX, UI, full-stack development"
                    tools="Figma, HTML, CSS, JavaScript, ASP.NET, C#"
                    outcome="Refactor and redesign product warranty portal"/>

          <h2>PROJECT OVERVIEW: WHAT IS SOCKETCARE?</h2>
          <div className={s.box}>
            <p><a href="https://www.socketmobile.com/support/warranty-registration" target="_blank">SocketCare</a> is a warranty and exchange program for Socket Mobile products. The SocketCare program allows customers to register their products, purchase or upgrade their warranties, and request support or exchanges if the product is faulty.</p>
          </div>

          <h2>PAIN POINTS</h2>
          <div className={s.box}>
            <p><mark>Bulk purchases lead to tedious repetition</mark></p>
            <p>Businesses that purchase products in bulk for commercial use have to register and purchase warranty <b>one product at a time</b>. </p>
            <br/>
            <p><mark>User interface is not user friendly (2)</mark></p>
            <p>Users frequently contacted Support because the old SocketCare program was unintuitve and outdated. Support requested a facelift for the portal.</p>
            <br/>
            <p><mark>Too many pages (1)</mark></p>
            <p>Multiple different warranty-related pages (status checking, registering, purchasing and upgrading) scattered about the site can be condensed to one portal.</p>
          </div>

          <KeyboardDoubleArrowDownIcon className={s.downArrow} />

          <div className={`${s.box} ${s.centerBox} ${s.tealBox}`}>
            <h2 className={s.brown}>END GOAL</h2>
            <p>To design a <b>simplistic all-in-one portal</b> that presented users with information in a step-by-step, easy to digest way, so as to not overwhelm the user while providing even more functions.</p>
          </div>

         {/* RESEARCH */} 

          <h2>MY SOLUTION</h2>
          <div className={s.box}>
            <p><mark>Design choices</mark></p>
            <ul>
                <li><p>A white box on a light blue background to highlight the portal. Only information in the box changes, so the focus of the page is clear</p></li>
                <li><p>Clean lines, familiar icons and bright colors to <b>draw attention to important parts</b> of the process (such as the item status, identification number, and price).</p></li>
                <li><p>Clearly labelled 4 step process to <b>keep users on task</b></p></li>
            </ul>
            <img src={timeline} className={s.boxImg} />
            <p>I drew inspiration from the standard purchase processes offered by many e-commerce sites, which also aids in the familiarity aspect. Clean and simple icons tell users more about each step by resembling what they are familiar with (e.g. “Summary” represented as a shopping cart, hinting that there is some sort of checkout process). Users know, at a glance, the <b>steps they have to go through</b> and <b>which step they are at</b>.</p>
            <br />
            <p><mark>Digestible data</mark></p>
            <img src={data} className={s.boxImg} />
            <p>Combining the warranty status check and warranty purchase allows users to check and update the status of <b>multiple devices in one single place</b>. This results in a lot of data being retrieved and presented at once. I packaged the data <b>easy-to-understand formats</b> with colors and icons to tell users what they can do at a glance, even if there are a lot of devices or if the users are not familiar with the technical terms.</p>
            <br/>
            <p><mark>Simplifying bulk upgrades</mark></p>
            <img src={bulk} className={s.boxImg} />
            <p>Allowing users to upgrade all devices at once simplifies the procedure for <b>commercial bulk orders</b>. A maximum of 10 items can be shown on a page so as to not overcrowd the page, should the user choose to upgrade items individually.</p>
            <p>Each item is displayed in a <b>similar format</b> as the summary on the previous page and in the <b>same order</b>, to minimize the information that the user has to read and assess. A total cost is displayed and changes with each addition so the user can keep track of their spending.</p>
            <br />
            <p><mark>Finishing touches</mark></p>
            <img src={summary} className={s.boxImg} />
            <p>The user's new choices are summarized before they are brought to a checkout page hosted in Shopify, where all their choices are already added to the cart in the backend. <b>This further simplifies the process for the user.</b></p>
          </div>
          
          <h2>RESULTS</h2>
          <div className={s.box}>
            <p>With the streamlined warranty purchase procedure (found <a href="https://www.socketmobile.com/support/warranty-registration" target="_blank">here</a>), the Support team reported <mark>fewer ticekts submitted</mark> for help with warranty matters, as well as an <mark>uptick in warranty activations</mark>. The refactored portal was beneficial for not just customers, but the internal Support team as well.</p>
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

export default Socketcare

export const Head = () => <title>Lizzy Wang</title>