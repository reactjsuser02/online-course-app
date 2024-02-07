import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import showPassword from '../icons/showPassword.svg';
import google from '../icons/google.svg';
import smallTopRightArrow from '../icons/smallTopRightArrow.svg';
import leftArrowNavigate from '../icons/leftArrowNavigate.svg';
import rightArrowNavigate from '../icons/rightArrowNavigate.svg';

import card1 from '../images/card1.jpg';

function SignIn() {

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
        } else {
            if(formData.password === '') return
            console.log('true')
            if(formData.name !== '' && formData.password !== '') {
                localStorage.setItem('formData', formData)
            }
        }
    }
    useEffect(() => {
        redirectIfAuthenticated()
    }, [])
    function redirectIfAuthenticated() {
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
    <div className='Container bg-[#F7F7F8] px-20 pb-20 max-md:px-8'>
        <div className='grid grid-cols-5 gap-14 max-md:grid-cols-1 max-md:block max-md:pt-10'>
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
            <div className='col-span-2 p-6 text-center bg-white max-md:cols-span-1'>
                <span className='block mb-4 text-4xl font-semibold'>Login</span>
                <p>Welcome back! Please log in to access your account.</p>

                <div className='text-left'>
                    <div>
                    <label htmlFor="">Email</label>
                    <input className='block w-full p-4 bg-[#FCFCFD]' type="text" onChange={handleChange} value={formData.email} id='email' placeholder='Enter your Email' />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="">Password</label>
                        <input className='block w-full p-4 bg-[#FCFCFD]' type={passwordVisible ? 'text' : 'password'} onChange={handleChange} value={formData.password} id='password' placeholder='Enter your Password' />
                        <a className='block my-4 float-right' href="#">Forgot Password?</a>
                        <img className='absolute right-2 top-10 cursor-pointer' onClick={togglePassword} src={showPassword} alt="" />
                    </div>

                    <div className=''>
                        <input className='mr-2' type="checkbox" id='checkbox' />
                        <label htmlFor="checkbox">Remember Me</label>
                    </div>

                    <button className='block w-full py-4 mb-4 text-white rounded-[10px] bg-[#FF9500]' onClick={submit}>Login</button>
                    <div className='mb-4'>
                        <hr className='inline-block w-[45%]' />
                        OR
                        <hr className='inline-block w-[45%]' />
                    </div>
                    <button className='block w-full py-4 rounded-[10px] bg-[#F7F7F8]'>
                        <img className='inline w-6' src={google} alt="" />    
                        Login with Google
                    </button>
                    <div className='text-center pt-4'>
                    Don’t have an account? <a className='underline text-semibold' href="#">
                        Sign Up
                        <img className='inline' src={smallTopRightArrow} alt="" />
                    </a>
                    </div>
                </div>
            </div>
            <div className='hidden pt-10 max-md:block'>
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
    </div>
    
    </>
);
}

export default SignIn;


