import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css';



export default function Navbar() {
    const menu = useSelector(state => state.menu);

    window.addEventListener('scroll', function () {
        let bar = document.getElementById('nav_bar');
        if (bar.getBoundingClientRect().top <= 0) {
            bar.style.position = 'sticky';
            bar.style.top = '-0.5vh';
        }
    });
    const initScroll = (string) => {
        document.getElementById(string).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }

    return (
        <div id="nav_bar" className='nav-bar'>
            <div>
                <h2 onClick={() => initScroll('home')} className={menu.home ? 'selectd' : ''}>Home</h2>
            </div>
            <div>
                <h2 onClick={() => initScroll('about')} className={menu.about ? 'selectd' : ''}>About</h2>
            </div>
            <div>
                <h2 onClick={() => initScroll('projects')} className={menu.projects ? 'selectd' : ''}>Projects</h2>
            </div>
            <div>
            <h2 onClick={() => initScroll('contact')} className={menu.contact ? 'selectd' : ''}>Contact</h2>
            </div>
        </div>
    )
}