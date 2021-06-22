import React, {useCallback} from 'react';
import './Section3.css';
import list from './ItemList';
import GridItem from './GridItem';
import {useDispatch} from 'react-redux';
import * as actionTypes from '../../store/action'


export default function Section2() {
    const dispatch = useDispatch();

    const items = list.map((item,index) => 
        <GridItem
        key={index}
        image={item.image}
        link={item.link}
        description={item.text}
        />
    )
    const div = useCallback(node => {
        function handleResize() {
            if (node !== null) {
                console.log(node.getBoundingClientRect().height);
                dispatch({ type: actionTypes.SET_SECTION_HEIGHT, value: node.getBoundingClientRect().height, section: 'projects' })
            }

        }
        window.addEventListener("resize", handleResize)
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div ref={div} id="projects" className="content-section">
            
            <h1 >PROJECTS</h1>
            
            
            
            <div  className="work-grid">

                {items}

            </div>
        </div>
    )
}