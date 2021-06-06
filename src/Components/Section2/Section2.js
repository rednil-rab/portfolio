import React, { useRef } from 'react';
import './Section2.css';

import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action'
////images////
import interactive from './images/interactive.svg';
import responsive from './images/responsive.svg';
import speed from './images/speed.svg';
import profile from './images/profile.svg';
import cellcom from './images/cellcom.png';
import menora from './images/menora.png';
import isracard from './images/isracard.png';
import bhol from './images/bhol.png';
import susu from './images/susu.png';
import bio from './images/bio.png';
import debounce from 'lodash.debounce';
import { InView, useInView } from 'react-intersection-observer';

export default function Section2() {
    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: 0,
    })

    const handleChange = (element) => {
        if (inView) {
            dispatch({ type: actionTypes.SET_VISIBLE_PAGE, value: 'about' })
        } else {
            return
        }


    }
    return (
        <div className="content-section">
            <h1>ABOUT</h1>
            <div className="img-container">

                <div className="img-div">
                    <img src={interactive}></img>
                    <h2>Interactive</h2>
                    {/* <p>Websites don't have to be static, I <br></br>love making pages come to life.</p> */}
                    <p>Making pages come alive is what i do <br></br>they don't have to be static you know</p>
                </div>
                <div className="img-div">
                    <img src={responsive}></img>
                    <h2>Responsive</h2>
                    {/* <p>My layouts will work on any <br></br>device, big or small.</p> */}
                    <p>My layouts work on any <br></br> screen no matter the size</p>
                    
                </div>
                <div className="img-div">
                    <img src={speed}></img>
                    <h2>interactive</h2>
                    {/* <p>Fast load times and lag free <br></br>interaction, my highest priority.</p> */}
                    <p>Lag free fast loads, I care about interaction</p>
                </div>
            </div>
            <InView inView={inView} onChange={() => handleChange(this)}>
            <div id="about" ref={ref} className="profile-container">
                <img src={profile} />
                <div className="profile-text">
                    I’m a frontend developr at DolphinSoft based in Netanya, Israel. Also a husband and father, an amature videographer and editor.
                    <a href='./bar_cv.pdf'>
                    <div  className="cv-btn">
                        Download resume
            </div>
                    </a>

                </div>
            </div>
            </InView>

            <div className="profile-text center">
                here are some of the companies i've worked with:
            </div>
            <div className="client-grid">
                <img alt='cellcom' src={cellcom}></img>
                <img alt='menora' src={menora}></img>
                <img alt='isracard' src={isracard}></img>
                <img alt='bhol' src={bhol}></img>
                <img alt='susu' src={susu}></img>
                <img alt='biotaste' src={bio}></img>
            </div>


        </div>
    )
}