import React, { useCallback } from 'react';
import './Section1.css';

import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action';

//images
import BarAvatar from './images/avatar.svg';
import bg from './images/background.jpeg'
import mobg from './images/backgroundmob.svg'
import searchLight from './images/searchLight.svg'
import searchLightMob from './images/searchLightmob.svg';

import useWindowSize from '../utils/useWindowSize';

export default function Section1() {
    const size = useWindowSize();
    const dispatch = useDispatch();

    const div = useCallback(node => {
        function handleResize() {
            if (node !== null) {
                console.log(node.getBoundingClientRect().height);
                dispatch({ type: actionTypes.SET_SECTION_HEIGHT, value: node.getBoundingClientRect().height, section: 'home' })
            }

        }
        window.addEventListener("resize", handleResize)
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div ref={div} style={{ backgroundImage: size.width < 900 ? `url(${mobg})` : `url(${bg})` }} className="top-section">
            <div className="column-div">

                    <h1 id="home"  ><span><span className="white">BAR </span>LINDER <br></br></span>
                        Frontend Developer</h1>


            </div>
            <div className="column-div">

                <div style={{ backgroundImage: size.width < 900 ? `url(${searchLightMob})` : `url(${searchLight})` }} className="cone">
                    <img src={BarAvatar}></img>


                </div>
            </div>
        </div>
    )
}