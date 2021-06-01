import React, { useRef, useState, useEffect } from 'react';
import './Section4.css'
import OnScreen from '../OnScreen/onScreen';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action'
import debounce from 'lodash.debounce';
import { InView, useInView } from 'react-intersection-observer';
//images
import shape from './images/shape.svg';
import shapeMob from './images/shapemob.svg';
import FeatherIcon from 'feather-icons-react';

export default function Section4() {
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})
    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: 0,
    })

    const handleChange = () => {
        if (inView) {
            dispatch({ type: actionTypes.SET_VISIBLE_PAGE, value: 'contact' })
        } else {
            return
        }
    }

    const handleClick = (string) => {
        window.open(string);
    }
    const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.addEventListener('resize', updateDimensions);
        }
    }, []);

    const icons = dimensions.width > 900 ?<div>
        <div className="contact">
            <a href="tel:0504527530"><FeatherIcon className="icon" icon="phone" /></a>
            <a className="text" href="tel:0504527530">050-4527530</a>
        </div>
        <div className="contact">
            <a href="mailto:bar.linder@gmail.com"><FeatherIcon className="icon" icon="mail" /></a>
            <a className="text" href="mailto:bar.linder@gmail.com">bar.linder@gmail.com</a>
        </div>
        <div className="icon-div">
            <FeatherIcon onClick={() => handleClick('https://www.linkedin.com/in/bar-linder-2242a9166')} className="icon" icon="linkedin" />
            <FeatherIcon onClick={() => handleClick('https://github.com/rednil-rab')} className="icon" icon="github" />
        </div>
    </div> :         <div className="icon-div">
    <a href="tel:0504527530"><FeatherIcon className="icon" icon="phone" /></a>
    <a href="mailto:bar.linder@gmail.com"><FeatherIcon className="icon" icon="mail" /></a>
            <FeatherIcon onClick={() => handleClick('https://www.linkedin.com/in/bar-linder-2242a9166')} className="icon" icon="linkedin" />
            <FeatherIcon onClick={() => handleClick('https://github.com/rednil-rab')} className="icon" icon="github" />
        </div>
    return (
        <div id="contact" ref={ref} className='contact-div' style={{ backgroundImage: dimensions.width < 900 ? `url(${shapeMob})` : `url(${shape})` }}>
           <InView inView={inView} onChange={() => handleChange()}>
           <h1>Let's Talk?</h1>
           </InView>
            


            {icons}
        </div>
    )
}