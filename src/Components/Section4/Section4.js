import React, {useCallback} from 'react';
import './Section4.css'
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action'

//images
import shape from './images/shape.svg';
import shapeMob from './images/shapemob.svg';
import FeatherIcon from 'feather-icons-react';
import useWindowSize from '../utils/useWindowSize';

export default function Section4() {
    const size = useWindowSize();

    const dispatch = useDispatch();
    const div = useCallback(node => {
        function handleResize() {
            if (node !== null) {
                console.log(node.getBoundingClientRect().height);
                dispatch({ type: actionTypes.SET_SECTION_HEIGHT, value: node.getBoundingClientRect().height, section: 'contact' })
            }

        }
        window.addEventListener("resize", handleResize)
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (string) => {
        window.open(string);
    }


    const icons = size.width > 900 ?<div id="contact">
        <div  className="contact">
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
    </div> :         <div className="icon-div" id="contact">
    <a href="tel:0504527530"><FeatherIcon className="icon" icon="phone" /></a>
    <a href="mailto:bar.linder@gmail.com"><FeatherIcon className="icon" icon="mail" /></a>
            <FeatherIcon onClick={() => handleClick('https://www.linkedin.com/in/bar-linder-2242a9166')} className="icon" icon="linkedin" />
            <FeatherIcon onClick={() => handleClick('https://github.com/rednil-rab')} className="icon" icon="github" />
        </div>
    return (
        <div ref={div}  className='contact-div' style={{ backgroundImage: size.width < 900 ? `url(${shapeMob})` : `url(${shape})` }}>
           <h1>Let's Talk?</h1>
            {icons}
        </div>
    )
}