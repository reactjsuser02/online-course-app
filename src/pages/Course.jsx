import '../App.css';
import { Link, useLocation } from 'react-router-dom';

import CourseOpenCards from '../components/CourseOpenCards';

import playButton from '../icons/playButton.svg';
import time from '../icons/time.svg';

import web from '../images/web.jpg';
import ux from '../images/ux.jpg';
import mobile from '../images/mobile.jpg';
import graphicDesign from '../images/graphic-design.jpg';
import frontEnd from '../images/front-end.jpg';
import javascript from '../images/javascript.jpg';

import videoImage1 from '../images/web.jpg';
import videoImage2 from '../images/ux.jpg';
import videoImage3 from '../images/mobile.jpg';
import videoImage4 from '../images/graphic-design.jpg';
import videoImage5 from '../images/front-end.jpg';

function Course() {

    const location = useLocation()

    const obj = {
        '/course1': {
            h1: 'Web Design Fundamentals Course',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque quas dicta veritatis voluptates labore minus nisi nulla, praesentium, sunt aliquid accusantium recusandae ea exercitationem nesciunt reiciendis, assumenda eum doloribus odio inventore tempora ipsam? Inventore fuga vitae repudiandae esse hic!',
            videoImage: videoImage1,
            array: [
                {
                    title: 'Introduction to HTML',
                    number: '01',
                    lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                    duration1: '45 Minutes',
                    lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                    duration2: '1 Hour',
                    lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                    duration3: '45 Minutes',
                    color2: false,
                },
                {
                    title: 'Styling with CSS ',
                    number: '02',
                    lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                    duration1: '45 Minutes',
                    lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                    duration2: '1 Hour',
                    lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                    duration3: '45 Minutes',
                    color2: false,
                },
                {
                    title: 'Introduction to Responsive Design',
                    number: '03',
                    lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                    duration1: '45 Minutes',
                    lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                    duration2: '1 Hour',
                    lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                    duration3: '45 Minutes',
                    color2: false,
                },
                {
                    title: 'Design Principles for Web',
                    number: '04',
                    lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                    duration1: '45 Minutes',
                    lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                    duration2: '1 Hour',
                    lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                    duration3: '45 Minutes',
                    color2: false,
                },
                {
                    title: 'Building a Basic Website',
                    number: '05',
                    lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                    duration1: '45 Minutes',
                    lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                    duration2: '1 Hour',
                    lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                    duration3: '45 Minutes',
                    color2: false,
                },
            ]
        },
        '/course2': {
            h1: 'UI/UX Design Course',
            p: 'Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum',
            videoImage: videoImage2,
            array: [
                {
                    title: 'Introduction to UI/UX Design',
                    number: '01',
                    lesson1: 'Understanding UI/UX Design Principles',
                    duration1: '45 Minutes',
                    lesson2: 'Importance of User-Centered Design',
                    duration2: '1 Hour',
                    lesson3: 'Understanding UI/UX Design Principles',
                    duration3: '45 Minutes',
                    color2: true,
                },
                {
                    title: 'User Research and Analysis',
                    number: '02',
                    lesson1: 'Conducting User Research and Interviews',
                    duration1: '1 Hour',
                    lesson2: 'Analyzing User Needs and Behavior',
                    duration2: '1 Hour',
                    lesson3: 'Creating User Personas and Scenarios',
                    duration3: '45 Minutes',
                    color2: false,
                },
                {
                    title: 'Wireframing and Prototyping',
                    number: '03',
                    lesson1: 'Introduction to Wireframing Tools and Techniques',
                    duration1: '1 Hour',
                    lesson2: 'Creating Low-Fidelity Wireframes',
                    duration2: '1 Hour',
                    lesson3: 'Prototyping and Interactive Mockups',
                    duration3: '1 Hour',
                    color2: false,
                },
                {
                    title: 'Visual Design and Branding',
                    number: '04',
                    lesson1: 'Color Theory and Typography in UI Design',
                    duration1: '1 Hour',
                    lesson2: 'Visual Hierarchy and Layout Design',
                    duration2: '1 Hour',
                    lesson3: 'Creating a Strong Brand Identity',
                    duration3: '45 Minutes',
                    color2: false,
                },
                {
                    title: 'Usability Testing and Iteration',
                    number: '05',
                    lesson1: 'Usability Testing Methods and Techniques',
                    duration1: '1 Hour',
                    lesson2: 'Analyzing Usability Test Results',
                    duration2: '45 Minutes',
                    lesson3: 'Iterating and Improving UX Designs',
                    duration3: '45 Minutes',
                    color2: false,
                },
            ],
        },
        '/course3': {
            h1: 'Mobile App Development Course',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque quas dicta veritatis voluptates labore minus nisi nulla, praesentium, sunt aliquid accusantium recusandae ea exercitationem nesciunt reiciendis, assumenda eum doloribus odio inventore tempora ipsam? Inventore fuga vitae repudiandae esse hic!',
            videoImage: videoImage3,
            array: [
            {
                title: 'Introduction to Mobile App Development',
                number: '01',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Fundamentals of Swift Programming (iOS)',
                number: '02',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Fundamentals of Kotlin Programming (Android)',
                number: '03',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Building User Interfaces',
                number: '04',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'App Deployment and Testing ',
                number: '05',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            ],
        },
        '/course4': {
            h1: 'Graphic Design for Beginners Course',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque quas dicta veritatis voluptates labore minus nisi nulla, praesentium, sunt aliquid accusantium recusandae ea exercitationem nesciunt reiciendis, assumenda eum doloribus odio inventore tempora ipsam? Inventore fuga vitae repudiandae esse hic!',
            videoImage: videoImage4,
            array: [
            {
                title: 'Introduction to Graphic Design',
                number: '01',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Typography and Color Theory',
                number: '02',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Layout Design and Composition',
                number: '03',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Image Editing and Manipulation ',
                number: '04',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Designing for Print and Digital Media',
                number: '05',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            ],
        },
        '/course5': {
            h1: 'Front-End Web Development Course',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque quas dicta veritatis voluptates labore minus nisi nulla, praesentium, sunt aliquid accusantium recusandae ea exercitationem nesciunt reiciendis, assumenda eum doloribus odio inventore tempora ipsam? Inventore fuga vitae repudiandae esse hic!',
            videoImage: videoImage5,
            array: [
            {
                title: 'HTML Fundamentals',
                number: '01',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'CSS Styling and Layouts',
                number: '02',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'JavaScript Basics',
                number: '03',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Building Responsive Websites',
                number: '04',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            {
                title: 'Introduction to Bootstrap and React',
                number: '05',
                lesson1: 'Lorem ipsum dolor, sit amet consectetur',
                duration1: '45 Minutes',
                lesson2: 'Lorem ipsum dolor, sit amet consectetur',
                duration2: '1 Hour',
                lesson3: 'Lorem ipsum dolor, sit amet consectetur',
                duration3: '45 Minutes',
                color2: false,
            },
            ],
        }
    }

return (
    <>
    <div className='Container bg-[#F7F7F8] px-20 max-md:px-8'>
        <div className='mb-20 max-md:pt-10'>
            <div className='grid grid-cols-2 pb-10 mb-20 border-b border-[#E4E4E7] max-md:grid-cols-1'>
                <div>
                    <h1 className='text-4xl font-semibold max-md:mb-4'>
                        {obj[location.pathname].h1}
                    </h1>
                </div>
                <div>
                    <p className=''>
                        {obj[location.pathname].p}
                    </p>
                </div>
            </div>
            <div className='Video relative mb-20'>
                <img className='w-full' src={obj[location.pathname].videoImage} alt="" />
                <button className='absolute top-0 left-0 bottom-0 right-0 w-fit m-auto'>
                    <img src={playButton} alt="" />
                </button>
            </div>
            <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1'>
                <CourseOpenCards
                    h1={obj[location.pathname].h1}
                    p={obj[location.pathname].p}
                    videoImage={obj[location.pathname].videoImage}
                    array={obj[location.pathname].array}
                />
            </div>
        </div>
    </div>
    
    </>
);
}

export default Course;


