import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Accordion from '../components/Accordion';

import lightning from '../icons/lightning.svg';
import playButton from '../icons/playButton.svg';
import topRightArrow from '../icons/topRightArrow.svg';
import rightArrow from '../icons/rightArrow.svg';
import checked from '../icons/checked.svg';
import plus from '../icons/plus.svg';
import close from '../icons/close.svg';
import unchecked from '../icons/unchecked.svg';
import rightArrowBlack from '../icons/rightArrowBlack.svg';

import videoImage from '../images/videoImage.png';
import zapier from '../images/zapier.png';
import spotify from '../images/spotify.png';
import zoom from '../images/zoom.png';
import amazon from '../images/amazon.png';
import adobe from '../images/adobe.png';
import notion from '../images/notion.png';
import netflix from '../images/netflix.png';

import web from '../images/web.jpg';
import ux from '../images/ux.jpg';
import mobile from '../images/mobile.jpg';
import graphicDesign from '../images/graphic-design.jpg';
import frontEnd from '../images/front-end.jpg';
import javascript from '../images/javascript.jpg';

import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import card4 from '../images/card4.jpg';


function Home() {

    const [openAccordion, setOpenAccordion] = useState({
        accordion1: true,
        accordion2: false,
        accordion3: false,
        accordion4: false,
        accordion5: false,
        isOpen: true,
    })

    function onAccordionClick(event) {
        // event.target.id
        if(openAccordion['accordion' + event.target.id]) {
            const newObj = {
                accordion1: false,
                accordion2: false,
                accordion3: false,
                accordion4: false,
                accordion5: false,
            }
            setOpenAccordion(newObj)
            return
        }
        const newObj = {
            accordion1: false,
            accordion2: false,
            accordion3: false,
            accordion4: false,
            accordion5: false,
        }
        newObj['accordion' + event.target.id] = true
        console.log(newObj)
        setOpenAccordion(newObj)
    }

return (
    <>
    <div className='Container bg-[#F7F7F8] md:bg-[#F7F7F8] md:px-20 lg:px-26 pb-32 max-md:px-8'>
    <div className='md:pt-20 lg:pt-20 md:mb-20 max-md:pt-14'>
        <div className='text-center w-fit m-auto max-md:mb-10'>
            <div className='inline-block p-4 rounded-[11px] text-4xl font-semibold bg-white mb-4 max-md:text-lg max-md:p-2'>
                <img className='relative top-[-1px] p-2 mr-2 inline rounded-md bg-[#FFF4E5]' src={lightning} alt="" />
                <span className='text-[#FF9500]'>Unlock</span> Your Creative Potential
            </div>
            <h2 className='text-3xl font-medium mb-3 max-md:text-xl max-md:w-4/6 w-fit m-auto'>with Online Design and Development Courses</h2>
            <p className='mb-8'>Learn from Industry Experts and Enhance Your Skills.</p>
            <div className='w-fit m-auto'>
                <Link className='px-4 py-2 mr-2 rounded-lg bg-[#FF9500] text-white' to="/courses">Explore Courses</Link>
                <Link className='px-4 py-2 rounded-lg bg-white border border-[#F1F1F3]' to="/pricing">View Pricing</Link>
            </div>
        </div>
    </div>
    <div className='flex justify-between py-10 px-20 rounded-lg bg-white mb-20 max-md:px-12'>
        <img className='w-14' src={zapier} alt="" />
        <img className='w-14' src={spotify} alt="" />
        <img className='w-14' src={zoom} alt="" />
        <img className='w-14 max-md:hidden' src={amazon} alt="" />
        <img className='w-14 max-md:hidden' src={adobe} alt="" />
        <img className='w-14 max-md:hidden' src={notion} alt="" />
        <img className='w-14 max-md:hidden' src={netflix} alt="" />
        {/* <img src={zapier} alt="" />
        <img src={zapier} alt="" />
        <img src={zapier} alt="" />
        <img src={zapier} alt="" />
        <img src={zapier} alt="" />
        <img src={zapier} alt="" /> */}

    </div>
    <div className='Video relative mb-20'>
        <img className='w-full' src={videoImage} alt="" />
        <button className='absolute top-0 left-0 bottom-0 right-0 w-fit m-auto'>
            <img src={playButton} alt="" />
        </button>
    </div>

    <div className=''>
        <div className='inline-block w-8/12 max-md:w-full'>
            <h2 className='text-3xl font-semibold'>Benefits</h2>
            <p className='text-[#4C4C4D]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <div className='inline-block float-right pt-6 max-md:block max-md:float-none'>
            <button className='font-semibold bg-white py-2 px-4'>View All</button>
        </div>
        <div className='grid grid-cols-3 gap-10 pt-20 max-md:grid-cols-1'>
            <div className='bg-white p-4 rounded-xl'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-6'>01</span>
                <h5 className='mb-2 text-lg font-semibold'>Flexible Learning Schedule</h5>
                <p className='text-[#4C4C4D] mb-10'>Fit your coursework around your existing commitments and obligations.</p>
                <button className='float-right p-2 bg-[#FCFCFD] rounded-[6px] border mb-6'>
                    <img src={topRightArrow} alt="" />
                </button>
            </div>
            <div className='bg-white p-4 rounded-xl'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-6'>02</span>
                <h5 className='mb-2 text-lg font-semibold'>Expert Instruction</h5>
                <p className='text-[#4C4C4D] mb-10'>Learn from industry experts who have hands-on experience in design and development.</p>
                <button className='float-right p-2 bg-[#FCFCFD] rounded-[6px] border mb-6'>
                    <img src={topRightArrow} alt="" />
                </button>
            </div>
            <div className='bg-white p-4 rounded-xl'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-6'>03</span>
                <h5 className='mb-2 text-lg font-semibold'>Diverse Course Offerings</h5>
                <p className='text-[#4C4C4D] mb-10'>Explore a wide range of design and development courses covering various topics.</p>
                <button className='float-right p-2 bg-[#FCFCFD] rounded-[6px] border mb-6'>
                    <img src={topRightArrow} alt="" />
                </button>
            </div>
            <div className='bg-white p-4 rounded-xl max-md:mb-10'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-6'>04</span>
                <h5 className='mb-2 text-lg font-semibold'>Updated Curriculum</h5>
                <p className='text-[#4C4C4D] mb-10'>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                <button className='float-right p-2 bg-[#FCFCFD] rounded-[6px] border mb-6'>
                    <img src={topRightArrow} alt="" />
                </button>
            </div>
            <div className='bg-white p-4 rounded-xl max-md:hidden'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-6'>05</span>
                <h5 className='mb-2 text-lg font-semibold'>Practical Projects and Assignments</h5>
                <p className='text-[#4C4C4D] mb-10'>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                <button className='float-right p-2 bg-[#FCFCFD] rounded-[6px] border mb-6'>
                    <img src={topRightArrow} alt="" />
                </button>
            </div>
            <div className='bg-white p-4 rounded-xl max-md:hidden'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-6'>06</span>
                <h5 className='mb-2 text-lg font-semibold'>Interactive Learning Environment</h5>
                <p className='text-[#4C4C4D] mb-10'>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                <button className='float-right p-2 bg-[#FCFCFD] rounded-[6px] border mb-6'>
                    <img src={topRightArrow} alt="" />
                </button>
            </div>
            
        </div>
    </div>
    <div className='mb-20'>
        <div className='inline-block w-8/12 max-md:w-full'>
            <h2 className='text-3xl font-semibold'>Our Courses</h2>
            <p className='text-[#4C4C4D]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <div className='inline-block float-right pt-6 max-md:float-none max-md:block'>
            <Link to='courses' className='font-semibold bg-white py-2 px-4'>View All</Link>
        </div>
        <div className='grid grid-cols-2 pt-10 max-md:grid-cols-1'>
            <div className='bg-white p-8 rounded-lg max-md:mb-10'>
                <img src={web} alt="" />
                <div className='text-[#4C4C4D] py-6'>
                    <span className='inline-block border border-[#F1F1F3] p-1 mr-2'>4 Weeks</span>
                    <span className='inline-block border border-[#F1F1F3] p-1'>Beginner</span>
                    <span className='inline-block p-1 text-black text-lg font-semibold float-right'>By John Smith</span>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>Web Design Fundamentals</h5>
                    <p className='text-[#4C4C4D] mb-4'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <button className='w-full py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Get it Now</button>
                </div>
            </div>
            <div className='bg-white p-8 rounded-lg max-md:mb-10'>
                <img src={ux} alt="" />
                <div className='text-[#4C4C4D] py-6'>
                    <span className='inline-block border border-[#F1F1F3] p-1 mr-2'>6 Weeks</span>
                    <span className='inline-block border border-[#F1F1F3] p-1'>Intermediate</span>
                    <span className='inline-block p-1 text-black text-lg font-semibold float-right'>By Emily Johnson</span>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>UI/UX Design</h5>
                    <p className='text-[#4C4C4D] mb-4'>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                    <button className='w-full py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Get it Now</button>
                </div>
            </div>
            <div className='bg-white p-8 rounded-lg max-md:mb-10'>
                <img src={mobile} alt="" />
                <div className='text-[#4C4C4D] py-6'>
                    <span className='inline-block border border-[#F1F1F3] p-1 mr-2'>8 Weeks</span>
                    <span className='inline-block border border-[#F1F1F3] p-1'>Intermediate</span>
                    <span className='inline-block p-1 text-black text-lg font-semibold float-right'>By David Brown</span>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>Mobile App Development</h5>
                    <p className='text-[#4C4C4D] mb-4'>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                    <button className='w-full py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Get it Now</button>
                </div>
            </div>
            <div className='bg-white p-8 rounded-lg max-md:mb-10'>
                <img src={graphicDesign} alt="" />
                <div className='text-[#4C4C4D] py-6'>
                    <span className='inline-block border border-[#F1F1F3] p-1 mr-2'>10 Weeks</span>
                    <span className='inline-block border border-[#F1F1F3] p-1'>Beginner</span>
                    <span className='inline-block p-1 text-black text-lg font-semibold float-right'>By Sarah Thompson</span>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>Graphic Design for Beginnerss</h5>
                    <p className='text-[#4C4C4D] mb-4'>Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
                    <button className='w-full py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Get it Now</button>
                </div>
            </div>
            <div className='bg-white p-8 rounded-lg max-md:mb-10'>
                <img src={frontEnd} alt="" />
                <div className='text-[#4C4C4D] py-6'>
                    <span className='inline-block border border-[#F1F1F3] p-1 mr-2'>10 Weeks</span>
                    <span className='inline-block border border-[#F1F1F3] p-1'>Intermediate</span>
                    <span className='inline-block p-1 text-black text-lg font-semibold float-right'>By Michael Adams</span>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>Front-End Web Development</h5>
                    <p className='text-[#4C4C4D] mb-4'>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
                    <button className='w-full py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Get it Now</button>
                </div>
            </div>
            <div className='bg-white p-8 rounded-lg max-md:mb-10'>
                <img src={javascript} alt="" />
                <div className='text-[#4C4C4D] py-6'>
                    <span className='inline-block border border-[#F1F1F3] p-1 mr-2'>6 Weeks</span>
                    <span className='inline-block border border-[#F1F1F3] p-1'>Advance</span>
                    <span className='inline-block p-1 text-black text-lg font-semibold float-right'>By Jennifer Wilson</span>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'>Advanced JavaScript</h5>
                    <p className='text-[#4C4C4D] mb-4'>Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</p>
                    <button className='w-full py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Get it Now</button>
                </div>
            </div>
        </div>
    </div>
    <div className='mb-20'>
        <div className='inline-block w-8/12 mb-10 max-md:w-full max-md:mb-2'>
            <h2 className='text-3xl font-semibold'>Our Testimonials</h2>
            <p className='text-[#4C4C4D]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <div className='inline-block float-right pt-6 max-md:float-none max-md:block max-md:mb-10'>
            <button className='font-semibold bg-white py-2 px-4'>View All</button>
        </div>
        <div className='grid grid-cols-2 gap-8 max-md:max-md:grid-cols-1'>
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
            <div className='rounded-xl border border-[#F1F1F3]'>
                <div className='rounded-t-xl p-8 pb-0 bg-white'>
                    <p className='text-[#4C4C4D] pb-8'>The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!</p>
                </div>
                <div className='w-full p-8 pt-4 rounded-b-xl border-t border-[#F1F1F3] bg-[#FCFCFD]'>
                    <img className='w-10 rounded-lg inline mr-4' src={card2} alt="" />
                    <span className='font-semibold'>Jason M</span>
                    <button className='float-right px-4 py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Read Full Story</button>
                </div>
            </div>
            <div className='rounded-xl border border-[#F1F1F3]'>
                <div className='rounded-t-xl p-8 pb-0 bg-white'>
                    <p className='text-[#4C4C4D] pb-8'>The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</p>
                </div>
                <div className='w-full p-8 pt-4 rounded-b-xl border-t border-[#F1F1F3] bg-[#FCFCFD]'>
                    <img className='w-10 rounded-lg inline mr-4' src={card3} alt="" />
                    <span className='font-semibold'>Emily R</span>
                    <button className='float-right px-4 py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Read Full Story</button>
                </div>
            </div>
            <div className='rounded-xl border border-[#F1F1F3]'>
                <div className='rounded-t-xl p-8 pb-0 bg-white'>
                    <p className='text-[#4C4C4D] pb-8'>I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!</p>
                </div>
                <div className='w-full p-8 pt-4 rounded-b-xl border-t border-[#F1F1F3] bg-[#FCFCFD]'>
                    <img className='w-10 rounded-lg inline mr-4' src={card4} alt="" />
                    <span className='font-semibold'>Michael K</span>
                    <button className='float-right px-4 py-3 rounded-lg font-semibold bg-[#F1F1F3]'>Read Full Story</button>
                </div>
            </div>

        </div>
    </div>
    <div className='mb-20'>
        <div className='inline-block w-8/12 mb-10 max-md:w-full'>
            <h2 className='text-3xl font-semibold'>Our Pricing</h2>
            <p className='text-[#4C4C4D]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <div className='inline-block float-right p-2 bg-white max-md:float-none max-md:block max-md:mb-20 max-md:m-auto max-md:w-fit'>
            <div className='Active inline-block px-4 py-2 rounded-lg bg-[#FF9500] text-white font-semibold cursor-pointer'>Monthly</div>
            <div className='inline-block px-4 py-2 rounded-lg font-semibold cursor-pointer'>Yearly</div>
            {/* <button className='font-semibold bg-white py-2 px-4'>View All</button> */}
        </div>
        <div className='bg-white p-10'>
            <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1'>
                <div className='bg-[#FCFCFD] p-6 border border-[#F1F1F3] rounded-xl'>
                    <div className='text-center font-semibold py-2 bg-[#FFF9F0] border border-[#FFEACC] rounded-md'>Free Plan</div>
                    <div className='text-center py-6'>
                        <span className='text-5xl font-semibold'>$0</span>/month
                    </div>
                    <div className='px-12 bg-white border border-[#F1F1F3] rounded-t-[14px]'>
                        <h6 className='py-6 w-fit m-auto text-lg font-medium'>Available Features</h6>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Access to selected free courses.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Limited course materials and resources.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Basic community support.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            No certification upon completion.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Ad-supported platform.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-white border border-[#F1F1F3] rounded-md p-1 inline mr-4' src={unchecked} alt="" />
                            Access to exclusive Pro Plan community forums.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-white border border-[#F1F1F3] rounded-md p-1 inline mr-4' src={unchecked} alt="" />
                            Early access to new courses and updates.
                        </div>
                    </div>
                    <button className='w-full bg-[#FF9500] py-3 text-white rounded-b-[14px]'>
                        Get Started
                    </button>
                </div>
                <div className='bg-[#FCFCFD] p-6 border border-[#F1F1F3] rounded-xl'>
                    <div className='text-center font-semibold py-2 bg-[#FFF9F0] border border-[#FFEACC] rounded-md'>Pro Plan</div>
                    <div className='text-center py-6'>
                        <span className='text-5xl font-semibold'>$79</span>/month
                    </div>
                    <div className='px-12 bg-white border border-[#F1F1F3] rounded-t-[14px]'>
                        <h6 className='py-6 w-fit m-auto text-lg font-medium'>Available Features</h6>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Access to selected free courses.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Limited course materials and resources.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Basic community support.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            No certification upon completion.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Ad-supported platform.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Access to exclusive Pro Plan community forums.
                        </div>
                        <div className='p-2 text-[#4C4C4D] rounded-lg border border-[#F1F1F3] mb-4'>
                            <img className='bg-[#FFF4E5] rounded-md p-1 inline mr-4' src={checked} alt="" />
                            Early access to new courses and updates.
                        </div>
                    </div>
                    <button className='w-full bg-[#FF9500] py-3 text-white rounded-b-[14px]'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-6 py-14 px-16 gap-20 bg-white max-md:grid-cols-1'>
        <div className='col-span-2 max-md:col-span-1'>
            <h2 className='text-3xl font-medium max-md:mb-4'>Frequently Asked Questions</h2>
            <p className='mb-10'>Still you have any questions? Contact our Team via support@skillbridge.com</p>
            <button className='px-4 py-2 border border-[#F1F1F3] font-medium'>See All FAQ's</button>
        </div>
        <div className='col-span-4 p-8 border border-[#F1F1F3] rounded-xl inline-block max-md:col-span-1'>
            <Accordion
                title='Can I enroll in multiple courses at once?'
                text='Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.'
                isOpen={openAccordion.accordion1}
                id='1'
                onAccordionClick={onAccordionClick}
                url={
                    <div className='p-6 rounded-lg bg-[#F7F7F8] font-medium border border-[#F1F1F3] cursor-pointer'>
                        Enrollment Process for Different Courses
                        <img className='relative top-[-4px] inline p-1 float-right bg-white rounded-[40px]' src={rightArrowBlack} alt="" />
                    </div>
                }
            />
            <Accordion
                title='What kind of support can I expect from instructors?'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque asperiores blanditiis iste nesciunt eos minus minima fuga. Minima, odio.'
                isOpen={openAccordion.accordion2}
                id='2'
                onAccordionClick={onAccordionClick}
            />
            <Accordion
                title='Are the courses self-paced or do they have specific start and end dates?'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque asperiores blanditiis iste nesciunt eos minus minima fuga. Minima, odio.'
                isOpen={openAccordion.accordion3}
                id='3'
                onAccordionClick={onAccordionClick}
            />
            <Accordion
                title='Are there any prerequisites for the courses?'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque asperiores blanditiis iste nesciunt eos minus minima fuga. Minima, odio.'
                isOpen={openAccordion.accordion4}
                id='4'
                onAccordionClick={onAccordionClick}
            />
            <Accordion
                title='Can I download the course materials for offline access?'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque asperiores blanditiis iste nesciunt eos minus minima fuga. Minima, odio.'
                isOpen={openAccordion.accordion5}
                id='5'
                onAccordionClick={onAccordionClick}
                BorderBottomAbsent={true}
            />
           
        </div>
    </div>
    </div>
    </>
);
}

export default Home;


