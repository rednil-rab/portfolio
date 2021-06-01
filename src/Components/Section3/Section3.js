import React, {useRef} from 'react';
import './Section3.css';
import list from './ItemList';
import GridItem from './GridItem';
import {useDispatch} from 'react-redux';
import * as actionTypes from '../../store/action'
import { InView, useInView } from 'react-intersection-observer';

export default function Section2() {
    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: 0,
    })

    const handleChange = () => {
        if (inView) {
            dispatch({ type: actionTypes.SET_VISIBLE_PAGE, value: 'projects' })
        } else {
            return
        }
    }
    const items = list.map((item,index) => 
        <GridItem
        key={index}
        image={item.image}
        link={item.link}
        description={item.text}
        />
    )
    return (
        <div id="projects" className="content-section">
            <InView inView={inView} onChange={() => handleChange(this)}>
            <h1 ref={ref}>PROJECTS</h1>
            </InView>
            
            
            <div  className="work-grid">
                {items}
            </div>
        </div>
    )
}