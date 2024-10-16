import React, { useState } from 'react';
import logo from '../../Assets/diucselogo.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {


    const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div>
            <div className="navbar bg-sky-200">
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <img className=' w-24' src={logo} alt=''></img>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>

                        <div className="dropdown">
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
                                About
                                </Link>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link>Mission & Vision</Link></li>
                                        <li><Link>Our Team</Link></li>
                                        <li><Link>Resources</Link></li>
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
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
                                    Research Networking
                                </Link>
                                {isOpen && (
                                    <ul className="dropdown-content">
                                        <li><Link>Collaborating Research</Link></li>
                                        <li><Link>Sourch of Publication</Link></li>
                                        
                                    </ul>
                                )}
                            </div>
                            

                        </li>


                        <li>
                            <div className="dropdown">
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
                                    CSE Specialized Lab
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
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
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
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
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

                        <li><Link to={''}>Research Co-ordinator</Link></li>

                        <li>
                            <div className="dropdown">
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
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

                        <li><Link to={''}>Ranking</Link></li>
                        <li><Link to={''}>Events</Link></li>

                        <li>
                            <div className="dropdown">
                                <Link className="dropdown-btn" onClick={toggleDropdown}>
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
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;