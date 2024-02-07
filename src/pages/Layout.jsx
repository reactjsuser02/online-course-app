import '../App.css';
import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import logo from '../icons/logo.svg';
import largeRightArrow from '../icons/largeRightArrow.svg';
import hamburgerMenu from '../icons/hamburgerMenu.svg';
import close from '../icons/close.svg';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import linkedin from '../icons/linkedin.svg';

function Authentication(props) {
    console.log(localStorage.getItem('formData'))
    if(!localStorage.getItem('formData')) {
        return (
            <div className='inline-block float-right pt-2'>
                <Link className='px-4 py-2 rounded-lg' to="signup">Sign Up</Link>
                <Link className='px-4 py-2 ml-2 text-white rounded-lg bg-[#FF9500]' to="signin">Login</Link>
                <img className='CloseModal hidden cursor-pointer max-md:inline-block' onClick={props.handleMenuClick} src={hamburgerMenu} alt="" />
            </div>
        )
    } else {
        return (
            <div className='inline-block float-right pt-2'>
                <button className='inline-block float-right' onClick={props.logout}>Log Out</button>
            </div>
        )
    }
}

function Layout() {
    const location = useLocation()
    const navigate = useNavigate()
    const [reload, setReload] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    function logout() {
        console.log('clearing')
        localStorage.clear()
        setReload(!reload)
        // navigate('/')
    }
    function handleMenuClick(event) {
        console.log(event.currentTarget)
        if(!event.target.classList.contains('CloseModal')) {
            console.log('1')
            return
        }
        setIsMenuOpen(!isMenuOpen)
    }
    function check(path) {
        console.log(location.pathname.slice(0,9))
        if(path == 'homePage' && location.pathname == '/') {
            return 'bg-[#F1F1F3] px-4 py-2 mr-1 rounded-lg'
        } else if(location.pathname.startsWith(path) && path !== 'homePage') {
            return 'bg-[#F1F1F3] px-4 py-2 mr-1 rounded-lg'
        } else {
            return 'px-4 py-2 mr-1 rounded-lg'
        }
    }
return (
    <>
    {/* {loggedIn ? <Redirect push to="/" /> : null} */}
    <div
    className={isMenuOpen ? 'Menu CloseModal fixed z-50 bg-[#000000]/40 w-full h-full top-0 left-0' : 'hidden'}
    onClick={handleMenuClick}
    id="modal">
        <div className='absolute right-0 w-1/2 h-full px4 py-4 text-2xl bg-white' onClick={handleMenuClick}>
            <div className='CloseModal px-1 border-t border-b hover:bg-[#F1F1F3]'>
                <img className='CloseModal relative top-[4px] w-18 px-4 mb-4' src={close} alt="" />
            </div>
            <Link className='block px-4 py-2 hover:bg-[#F1F1F3]' to="/">Home</Link>
            <Link className='block px-4 py-2 hover:bg-[#F1F1F3]' to="courses">Courses</Link>
            <Link className='block px-4 py-2 hover:bg-[#F1F1F3]' to="about">About Us</Link>
            <Link className='block px-4 py-2 hover:bg-[#F1F1F3]' to="contact">Contact</Link>
        </div>
    </div>
    <div className='p-2 pb-0 bg-[#F7F7F8]'>
        <div className='w-full py-2 text-center text-white lg:bg-[#FF9500] md:bg-[#FF9500] max-md:bg-[#FF9500]'>
            <a href="#">
                Free Courses 🌟 Sale Ends Soon, Get It Now
                <img className='inline ml-4' src={largeRightArrow} alt="" />
            </a>
        </div>
    </div>
    <div className='Header relative md:px-20 lg:px-26 py-4 bg-[#F7F7F8] max-md:px-8'>
        
        <div className='inline-block'>
            <img className='relative inline top-[-2px] w-10 mr-6' src={logo} alt="" />
            <div className='inline max-md:hidden'>
                <Link className={check('homePage')} to="/">Home</Link>
                <Link className={check('/course')} to="courses">Courses</Link>
                <Link className={check('/about')} to="about">About Us</Link>
                <Link className={check('/contact')} to="contact">Contact</Link>
            </div>
            <div className='hidden max-md:block'>
                <div></div>
            </div>
        </div>
        <Authentication
        check={check}
        logout={logout}
        handleMenuClick={handleMenuClick}
        />
    </div>
    <Outlet />
    <div className='Footer px-20 bg-white max-md:px-8'>
        <div className='grid grid-cols-6 py-4 pt-8 border-b border-[#F1F1F3] max-md:block'>
            <div className='col-span-3 font-medium max-md:mb-4'>
                <img src={logo} alt="" />
                <a className='block' href="#">hello@skillbridge.com</a>
                <a className='block' href="#">+91 91813 23 2309</a>
                <a className='block' href="#">Somewhere in the World</a>
            </div>
            <div className='cols-span-1 max-md:grid max-md:grid-cols-2 mb-4'>
                <div className=''>
                    <h5 className='font-medium text-lg'>Home</h5>
                    <ul className='text-[#59595A]'>
                        <li className=''>
                            <a href="#">Benefits</a>
                        </li>
                        <li className=''>
                            <a href="#">Our Courses</a>
                        </li>
                        <li className=''>
                            <a href="#">Our Testimonials</a>
                        </li>
                        <li className=''>
                            <a href="#">Our FAQ</a>
                        </li>
                    </ul>
                </div>
                {/* <div className=''>
                    <h5 className='font-medium text-lg'>About Us</h5>
                    <ul className='text-[#59595A]'>
                        <li className=''>
                            <a href="#">Company</a>
                        </li>
                        <li className=''>
                            <a href="#">Achievements</a>
                        </li>
                        <li className=''>
                            <a href="#">Our Goals</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className=''>
                <h5 className='font-medium text-lg'>About Us</h5>
                <ul className='text-[#59595A]'>
                    <li className=''>
                        <a href="#">Company</a>
                    </li>
                    <li className=''>
                        <a href="#">Achievements</a>
                    </li>
                    <li className=''>
                        <a href="#">Our Goals</a>
                    </li>
                </ul>
            </div>
            <div className='max-md:block'>
                <h5 className='font-medium text-lg mb-2'>Social Profiles</h5>
                <a href="#">
                    <img className='inline-block p-2 bg-[#F7F7F8] border border-[#F1F1F3] rounded-[6px] mr-4' src={facebook} alt="" />
                </a>
                <a href="#">
                    <img className='inline-block p-2 bg-[#F7F7F8] border border-[#F1F1F3] rounded-[6px] mr-4' src={twitter} alt="" />
                </a>
                <a href="#">
                    <img className='inline-block p-2 bg-[#F7F7F8] border border-[#F1F1F3] rounded-[6px] mr-4' src={linkedin} alt="" />
                </a>
            </div>
        </div>
        <div className='py-4 text-center'>
        © 2023 Skillbridge. All rights reserved.
        </div>
        
    </div>
    </>
);
}

export default Layout;


