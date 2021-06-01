import React, {useState, useEffect } from 'react';
import './Section1.css';
import OnScreen from '../OnScreen/onScreen'
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action';
import debounce from 'lodash.debounce';
//images
import BarAvatar from './images/avatar.svg';
import bg from './images/background.jpeg'
import mobg from './images/backgroundmob.svg'
import searchLight from './images/searchLight.svg'
import searchLightMob from './images/searchLightmob.svg';
import { InView, useInView } from 'react-intersection-observer';

export default function Section1() {
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})
    const dispatch = useDispatch();
    const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.addEventListener('resize', updateDimensions);
        }
    }, []);

    const [ref, inView] = useInView({
        threshold: 0,
      })

    const handleChange = (element) => {
       if (inView) {
        dispatch({ type: actionTypes.SET_VISIBLE_PAGE, value: 'home' })
       } else {
           return
       }
        
        
    }
      
return (
    <div  style={{ backgroundImage: dimensions.width < 900 ? `url(${mobg})` : `url(${bg})` }} className="top-section">
        <div className="column-div">
            <InView inView={inView} onChange={() => handleChange(this)}>
            <h1 id="home" ref={ref} ><span><span className="white">BAR </span>LINDER <br></br></span>
                Frontend Developer</h1>
            </InView>

        </div>
        <div className="column-div">
            <img src={BarAvatar}></img>
            <div style={{backgroundImage: dimensions.width < 900 ? `url(${searchLightMob})` : `url(${searchLight})`}} className="cone">



            </div>
        </div>
    </div>
)
}