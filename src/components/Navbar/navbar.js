import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    return (
        <nav className="navbar">
            <div className="logo">SJ - She<span className="eja">eja</span></div>
            <div className="menu">
                <div className="menu">
                    <Link activeclass='active' to='blog' dpy={true} smooth={true} offset={-100} duration={500} className="menu-item">Home</Link>
                    <Link activeclass='active' to='education' dpy={true} smooth={true} offset={-50} duration={500} className="menu-item">Education</Link>
                    <Link activeclass='active' to='skills' dpy={true} smooth={true} offset={-50} duration={500} className="menu-item">Skill</Link>
                    <Link activeclass='active' to='project' dpy={true} smooth={true} offset={-50} duration={500} className="menu-item">Project</Link>
                </div>
            </div>
            <button className="desktopMenubtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={`${process.env.PUBLIC_URL}/images/contact.png`} alt="Contact Icon" className="desktopMenuImg" />Contact Me
            </button>

            <img src={`${process.env.PUBLIC_URL}/images/menu.png`} alt="menu" className="mobMenu" onClick={()=>setshowMenu(!showMenu)}/>
            <div className="navmenu" style={{display: showMenu? 'flex' : 'none'}}>
                    <Link activeclass='active' to='blog' dpy={true} smooth={true} offset={-100} duration={500} className="list-item" onClick={()=>setshowMenu(false)}>Home</Link>
                    <Link activeclass='active' to='education' dpy={true} smooth={true} offset={-50} duration={500} className="list-item" onClick={()=>setshowMenu(false)}>Education</Link>
                    <Link activeclass='active' to='skills' dpy={true} smooth={true} offset={-50} duration={500} className="list-item" onClick={()=>setshowMenu(false)}>Skill</Link>
                    <Link activeclass='active' to='project' dpy={true} smooth={true} offset={-50} duration={500} className="list-item" onClick={()=>setshowMenu(false)}>Project</Link>
                    <Link activeclass='active' to='contact' dpy={true} smooth={true} offset={-50} duration={500} className="list-item" onClick={()=>setshowMenu(false)}>Contact</Link>
            </div>


        </nav>   
    );
}

export default Navbar;
