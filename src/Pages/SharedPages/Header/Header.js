import React, { useState } from 'react';
import logo from '../../Assets/diucselogo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import logo1 from '../../Assets/diu_logo.png';

const Header = () => {


    const [isOpen, setIsOpen] = useState(false);

    // Toggle the dropdown open/close
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="navbar bg-sky-200 justify-between">
                <div className="navbar-start w-20">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>

                                <div className="dropdown">
                                    <button className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                        About
                                    </button>
                                    {isOpen && (
                                        <ul className="dropdown-content">
                                            <li><Link to={'/mission'}>Mission & Vision</Link></li>
                                            <li><Link to={'/ourteam'}>Our Team</Link></li>
                                            <li><Link to={'/resouces'}>Resources</Link></li>
                                        </ul>
                                    )}
                                </div>


                                {/* <details>
        <summary>about</summary>
        <ul className="p-2">
            <li><Link>Mission & Vision</Link></li>
            <li><Link>Our Team</Link></li>
            <li><Link>Resources</Link></li>
        </ul>
    </details> */}
                            </li>

                            <li>
                                <div className="dropdown">
                                    <button className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                        Research Networking
                                    </button>
                                    {isOpen && (
                                        <ul className="dropdown-content" style={{ minWidth: 186 }}>
                                            <li className='active'><Link to={'/collaborating'}>Collaborating Research</Link></li>
                                            <li><Link to={'/sourceofpublication'}>Sourch of Publication</Link></li>

                                        </ul>
                                    )}
                                </div>


                            </li>


                            <li>
                                <div className="dropdown">
                                    <Link to={'/csespecializedlab'} className="dropdown-btn font-semibold">
                                        CSE Specialized Lab
                                    </Link>

                                </div>


                            </li>


                            <li>
                                <div className="dropdown">
                                    <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                        Research Update
                                    </Link>
                                    {isOpen && (
                                        <ul className="dropdown-content">
                                            <li><Link>Volume 1 No 1</Link></li>
                                            <li><Link>Volume 1 No 2</Link></li>

                                        </ul>
                                    )}
                                </div>


                            </li>


                            <li>
                                <div className="dropdown">
                                    <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                        Publications
                                    </Link>
                                    {isOpen && (
                                        <ul className="dropdown-content">
                                            <li><Link to={''}>Scopus/ISI Article</Link></li>
                                            <li><Link to={''}>DIU Journals</Link></li>

                                        </ul>
                                    )}
                                </div>


                            </li>

                            <li><Link to={''} className='font-semibold'>Research Co-ordinator</Link></li>

                            <li>
                                <div className="dropdown">
                                    <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                        Publishing Agreements
                                    </Link>
                                    {isOpen && (
                                        <ul className="dropdown-content">
                                            <li><Link to={''}>Journals</Link></li>
                                            <li><Link to={''}>Conferance</Link></li>

                                        </ul>
                                    )}
                                </div>


                            </li>

                            <li><Link to={''} className='font-semibold '>Ranking</Link></li>


                            <li>
                                <div className="dropdown ">
                                    <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                        Gallery
                                    </Link>
                                    {isOpen && (
                                        <ul className="dropdown-content">
                                            <li><Link to={''}>Photos</Link></li>
                                            <li><Link to={''}>Videos</Link></li>

                                        </ul>
                                    )}
                                </div>


                            </li>
                        </ul>
                    </div>

                    <img className=' w-44' src={logo} alt=''></img>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className=" hidden lg:flex text-2xl">
                    <ul className="menu menu-horizontal p-5 bg-none ">

                        <li>

                            <div className="dropdown">
                                <button className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                    About
                                </button>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link to={'/mission'}>Mission & Vision</Link></li>
                                        <li><Link to={'/ourteam'}>Our Team</Link></li>
                                        <li><Link to={'/resouces'}>Resources</Link></li>
                                    </ul>
                                )}
                            </div>


                            {/* <details>
                                <summary>about</summary>
                                <ul className="p-2">
                                    <li><Link>Mission & Vision</Link></li>
                                    <li><Link>Our Team</Link></li>
                                    <li><Link>Resources</Link></li>
                                </ul>
                            </details> */}
                        </li>

                        <li>
                            <div className="dropdown">
                                <button className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                    Research Networking
                                </button>
                                {isOpen && (
                                    <ul className="dropdown-content" style={{ minWidth: 186 }}>
                                        <li className='active'><Link to={'/collaborating'}>Collaborating Research</Link></li>
                                        <li><Link to={'/sourceofpublication'}>Sourch of Publication</Link></li>

                                    </ul>
                                )}
                            </div>


                        </li>


                        <li>
                            <div className="dropdown">
                                <Link to={'/csespecializedlab'} className="dropdown-btn font-semibold">
                                    CSE Specialized Lab
                                </Link>

                            </div>


                        </li>


                        <li>
                            <div className="dropdown">
                                <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                    Research Update
                                </Link>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link>Volume 1 No 1</Link></li>
                                        <li><Link>Volume 1 No 2</Link></li>

                                    </ul>
                                )}
                            </div>


                        </li>


                        <li>
                            <div className="dropdown">
                                <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                    Publications
                                </Link>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link to={''}>Scopus/ISI Article</Link></li>
                                        <li><Link to={''}>DIU Journals</Link></li>

                                    </ul>
                                )}
                            </div>


                        </li>

                        <li><Link to={''} className='font-semibold'>Research Co-ordinator</Link></li>

                        <li>
                            <div className="dropdown">
                                <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                    Publishing Agreements
                                </Link>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link to={''}>Journals</Link></li>
                                        <li><Link to={''}>Conferance</Link></li>

                                    </ul>
                                )}
                            </div>


                        </li>

                        <li><Link to={'/ranking'} className='font-semibold '>Ranking</Link></li>


                        <li>
                            <div className="dropdown ">
                                <Link className="dropdown-btn font-semibold" onClick={toggleDropdown}>
                                    Gallery
                                </Link>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link to={''}>Photos</Link></li>
                                        <li><Link to={''}>Videos</Link></li>

                                    </ul>
                                )}
                            </div>


                        </li>

                    </ul>
                </div>
                <div className="navbar-end w-36 items-end">
                    <img src={logo1} alt='' className=' logo-des '></img>
                </div>
            </div>
        </div>
    );
};

export default Header;