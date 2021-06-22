import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import './NavBar.css';



export default function Navbar() {
    const height = useSelector(state => state.height);
    const [tab, setTab] = useState('home');

    window.addEventListener('scroll', debounce(function () {
        
        let bar = document.getElementById('nav_bar');
        if (bar.getBoundingClientRect().top <= 0) {
            bar.style.position = 'sticky';
            bar.style.top = '-0.5vh';
        }

        // console.log(window.scrollY);
        if (tab !== 'home') {
            if (window.scrollY < height.home) {
                setTab('home');
            }
        }
        if (tab !== 'about') {
            if (window.scrollY > height.home && window.scrollY < height.home + height.about) {
                setTab('about');
            }
        }
        if (tab !== 'projects') {
            if (window.scrollY > height.home + height.about && window.scrollY < height.home + height.about + height.projects - 200) {
                setTab('projects');
            }
        }

        if (tab !== 'contact') {
            if (window.scrollY > height.home + height.about + height.projects - 200) {
                setTab('contact');
            }
        }
    },200));
    const initScroll = (string) => {
        document.getElementById(string).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    return (
        <div id="nav_bar" className='nav-bar'>
            <div>
                <h2 onClick={() => initScroll('home')} className={tab === 'home' ? 'selectd' : ''}>Home</h2>
            </div>
            <div>
                <h2 onClick={() => initScroll('about')} className={tab === 'about' ? 'selectd' : ''}>About</h2>
            </div>
            <div>
                <h2 onClick={() => initScroll('projects')} className={tab === 'projects' ? 'selectd' : ''}>Projects</h2>
            </div>
            <div>
                <h2 onClick={() => initScroll('contact')} className={tab === 'contact' ? 'selectd' : ''}>Contact</h2>
            </div>
        </div>
    )
}