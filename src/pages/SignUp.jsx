import '../App.css';
import { useState, useEffect } from 'react';
// import { redirect } from 'react-router-dom';
import { Link, useNavigate  } from "react-router-dom";


import showPassword from '../icons/showPassword.svg';
import google from '../icons/google.svg';
import smallTopRightArrow from '../icons/smallTopRightArrow.svg';
import leftArrowNavigate from '../icons/leftArrowNavigate.svg';
import rightArrowNavigate from '../icons/rightArrowNavigate.svg';

import card1 from '../images/card1.jpg';

function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        checkbox: false,
    })
    const [passwordVisible, setPasswordVisible] = useState(false)
    const navigate = useNavigate()

    function handleChange(event) {
        console.log(event.target.value)
        const newFormData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            checkbox: formData.checkbox,
        }
        console.log(newFormData)
        newFormData[event.target.id] = event.target.value
        console.log(newFormData)
        setFormData(newFormData)
    }
    function handleCheckboxChange(event) {
        console.log(event.target.value)
        console.log(formData)
        const newFormData = formData
        newFormData.checkbox = !newFormData.checkbox
        setFormData(newFormData)
    }
    function togglePassword() {
        setPasswordVisible(!passwordVisible)
    }
    function submit() {
        console.log(formData.email.slice(-4, -1))
        const email = formData.email
        if(email.slice(-4).includes('.') && !email.slice(-2).includes('.')) {
            console.log('false')
            console.log('true')
            if(formData.name !== '' && formData.password !== '') {
                localStorage.setItem('formData', JSON.stringify(formData))
                navigate('/')
            }
        } else {
            return
        }
    }
    useEffect(() => {
        redirectIfAuthenticated()
    }, [])
    function redirectIfAuthenticated() {
        // console.log("localStorage.getItem('formData')")
        // console.log(localStorage.getItem('formData')) 
        if(localStorage.getItem('formData')) {
            console.log('true')
            navigate('/')
        } else {
            return
        }
    }
return (
    <>
    {/* <RedirectIfAuthenticated /> */}
    <div className='Container bg-[#F7F7F8] px-20 max-md:px-8'>
        <div className='grid grid-cols-5 gap-14 pb-20 max-md:grid-cols-1 max-md:block max-md:pt-10'>
            <div className='col-span-3 pt-32 max-md:pt-10 max-md:hidden'>
                <div className=''>
                    <h2 className='text-4xl mb-2'>Students Testimonials</h2>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <div className='rounded-xl border border-[#F1F1F3]'>
                        <div className='rounded-t-xl p-8 pb-0 bg-white'>
                            <p className='text-[#4C4C4D] pb-8'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                        </div>
                        <div className='w-full p-8 pt-4 rounded-b-xl border-t border-[#F1F1F3] bg-[#FCFCFD]'>
                            <img className='w-10 rounded-lg inline mr-4' src={card1} alt="" />
                            <span className='font-semibold'>Sarah L</span>
                            <button className='float-right px-4 py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Read Full Story</button>
                        </div>
                    </div>

                </div>
                <div className='float-right mt-6'>
                    <button className=''>
                        <img className='bg-white p-2' src={leftArrowNavigate} alt="" />
                    </button>
                    <button className=''>
                        <img className='bg-white p-2 ml-4' src={rightArrowNavigate} alt="" />
                    </button>
                </div>
            </div>
            <div className='col-span-2 p-6 text-center bg-white max-md:mb-10'>
                <span className='block mb-4 text-4xl font-semibold'>Sign Up</span>
                <p className='mb-4'>Create an account to unlock exclusive features.</p>

                <div className='text-left'>
                    <div className=''>
                    <label className='max-md:mb-4' htmlFor="">Full Name</label>
                    <input className='block w-full p-4 bg-[#FCFCFD]' type="text" onChange={handleChange} value={formData.name} id='name' placeholder='Enter your Name' />
                    </div>
                    <div>
                    <label className='max-md:mb-4' htmlFor="">Email</label>
                    <input className='block w-full p-4 bg-[#FCFCFD]' type="text" onChange={handleChange} value={formData.email} id='email' placeholder='Enter your Email' />
                    </div>
                    <div className='relative mb-4'>
                        <label className='max-md:mb-4' htmlFor="">Password</label>
                        <input className='block w-full p-4 bg-[#FCFCFD]' type={passwordVisible ? 'text' : 'password'} onChange={handleChange} value={formData.password} id='password' placeholder='Enter your Password' />
                        <img className='absolute right-2 top-10 cursor-pointer' onClick={togglePassword} src={showPassword} alt="" />
                    </div>
                    <div className='mb-4'>
                        <input className='rounded p-2 bg-[#F7F7F8] mr-2' onChange={handleCheckboxChange} type="checkbox" id='checkbox' />
                        I agree with <a className='underline' href="#">Terms of Use</a> and <a className='underline' href="#">Privacy Policy</a>
                    </div>

                    <button className='block w-full py-4 mb-4 text-white rounded-[10px] bg-[#FF9500]' onClick={submit}>Sign Up</button>
                    <div className='mb-4'>
                        <hr className='inline-block w-[45%]' />
                        OR
                        <hr className='inline-block w-[45%]' />
                    </div>
                    <button className='block w-full py-4 rounded-[10px] bg-[#F7F7F8]'>
                        <img className='inline w-6' src={google} alt="" />    
                        Sign Up with Google
                    </button>
                    <div className='text-center pt-4'>
                        Already have an account? <Link className='underline text-semibold' to='/login'>
                            Login
                            <img className='inline' src={smallTopRightArrow} alt="" />
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className='hidden max-md:block max-md:col-span-1'>
                    <h2 className='text-4xl mb-2'>Students Testimonials</h2>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <div className='rounded-xl border border-[#F1F1F3]'>
                        <div className='rounded-t-xl p-8 pb-0 bg-white'>
                            <p className='text-[#4C4C4D] pb-8'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                        </div>
                        <div className='w-full p-8 pt-4 rounded-b-xl border-t border-[#F1F1F3] bg-[#FCFCFD]'>
                            <img className='w-10 rounded-lg inline mr-4' src={card1} alt="" />
                            <span className='font-semibold'>Sarah L</span>
                            <button className='float-right px-4 py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Read Full Story</button>
                        </div>
                    </div>
                    <div className='float-right mt-6 max-md:float-none max-md:block max-md:w-fit max-md:m-auto max-md:mt-4'>
                        <button className=''>
                            <img className='bg-white p-2' src={leftArrowNavigate} alt="" />
                        </button>
                        <button className=''>
                            <img className='bg-white p-2 ml-4' src={rightArrowNavigate} alt="" />
                        </button>
                    </div>

                </div>

        </div>
    </div>
    
    </>
);
}

export default SignUp;


