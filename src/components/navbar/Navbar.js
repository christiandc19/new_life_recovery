import React, { useState } from 'react'
import {FaTimes } from 'react-icons/fa'
import { RiMenu3Fill } from "react-icons/ri";
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-wh.png'
import {BsFillCaretDownFill } from "react-icons/bs";


import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
        <>
        <div className='navbar' name='top'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} alt="New Life Recovery Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className="hover-underline-animation"><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows"> <Link to={`/substance-abuse`}> Addiction <BsFillCaretDownFill /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cocaine`}> Cocaine Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/fentanyl`}> Fentanyl Addiction</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/heroin`}> Heroin Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/kratom`}> Kratom Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mdma`}> MDMA Addiction</NavLink> </li>
                           <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/meth`}> Meth Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opiate`}> Opiate Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opioid`}> Opioid Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/oxycodone`}> Oxycodone Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prescriptions`}> Prescriptions Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/xanax`}> Xanax Addiction</NavLink> </li>
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`/mental-health`}> Mental Health <BsFillCaretDownFill /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> Acute Stress Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/adhd`}> ADHD</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anger-disorder`}> Anger Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anxiety`}> Anxiety Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/bipolar-disorder`}> Bipolar Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/depression`}> Depression </NavLink> </li>
                             <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/panic-disorder`}> Panic Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ptsd`}> PTSD </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizoaffective`}> Schizoaffective Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizophrenia`}> Schizophrenia Disorder</NavLink> </li>
                        </ul>

                    </li>



                    <li className="hover-underline-animation"><Link to='/treatment'>Treatment</Link> </li>






                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> about us <BsFillCaretDownFill /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mission`}> Our Mission</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/team`}> Our Team</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/testimonials`}> Testimonials </NavLink> </li>
                        </ul>
                    </li>





                    <li className="hover-underline-animation"><Link to='/residence'>Residence</Link> </li>
                    <li className="hover-underline-animation"><Link to='/jobs'>Jobs Program</Link> </li>
                    <li className="hover-underline-animation"><Link to='/insurance'>Insurance</Link></li>
                    <li className="hover-underline-animation"><Link to='/community-links'>Community Links</Link></li>
                    <li className="hover-underline-animation"><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<RiMenu3Fill className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
