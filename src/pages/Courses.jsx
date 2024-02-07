import '../App.css';

import CourseCard  from '../components/CourseCard';

import web1 from '../images/web-1.jpg';
import web2 from '../images/web-2.jpg';
import web3 from '../images/web-3.jpg';
import ux1 from '../images/ux-1.jpg';
import ux2 from '../images/ux-2.jpg';
import ux3 from '../images/ux-3.jpg';
import mobile1 from '../images/mobile-1.jpg';
import mobile2 from '../images/mobile-2.jpg';
import mobile3 from '../images/mobile-3.jpg';
import graphicDesign1 from '../images/graphic-design-1.jpg';
import graphicDesign2 from '../images/graphic-design-2.jpg';
import graphicDesign3 from '../images/graphic-design-3.jpg';
import frontend1 from '../images/frontend-1.jpg';
import frontend2 from '../images/frontend-2.jpg';
import frontend3 from '../images/frontend-3.jpg';

function Courses() {
return (
    <>
    <div className='Container bg-[#F7F7F8] px-20 lg:px-26 max-md:px-8'>
        <div className='mb-20 pt-20'>
            <div className='grid grid-cols-2 pb-10 mb-20 border-b border-[#E4E4E7] max-md:grid-cols-1'>
                <div>
                    <h1 className='text-4xl font-semibold max-md:mb-6'>Online Courses on Design and Development</h1>
                </div>
                <div>
                    <p className=''>
                    Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
                    </p>
                </div>
            </div>
            <CourseCard
            title="Web Design Fundamentals"
            text="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
            weeks="4"
            classification="Beginner"
            byWho="By John Smith"
            section1="Introduction to HTML"
            section2="Styling with CSS"
            section3="Introduction to Responsive Design"
            section4="Design Principles for Web"
            section5="Building a Basic Website"
            image1={web1}
            image2={web2}
            image3={web3}
            url="/course1"
            />
            <CourseCard
            title="UI/UX Design"
            text="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
            weeks="6"
            classification="Intermediate"
            byWho="By Emily Johnson"
            section1="Introduction to UI/UX Design"
            section2="User Research and Personas"
            section3="Wireframing and Prototyping"
            section4="Visual Design and Branding"
            section5="Usability Testing and Iteration"
            image1={ux1}
            image2={ux2}
            image3={ux3}
            url="/course2"
            />
            <CourseCard
            title="Mobile App Development"
            text="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
            weeks="8"
            classification="beginner"
            byWho="By David Brown"
            section1="Introduction to Mobile App Development to HTML"
            section2="Fundamentals of Swift Programming (iOS)"
            section3="Fundamentals of Kotlin Programming (Android)"
            section4="Building User Interfaces"
            section5="App Deployment and Testing"
            image1={mobile1}
            image2={mobile2}
            image3={mobile3}
            url="/course3"
            />
            <CourseCard
            title="Graphic Design for Beginners"
            text="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media. "
            weeks="10"
            classification="Beginner"
            byWho="By Sarah Thompson"
            section1="Introduction to Graphic Design"
            section2="Typography and Color Theory"
            section3="Layout Design and Composition"
            section4="Image Editing and Manipulation"
            section5="Designing for Print and Digital Media"
            image1={graphicDesign1}
            image2={graphicDesign2}
            image3={graphicDesign3}
            url="/course4"
            />
            <CourseCard
            title="Front-End Web Development"
            text="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
            weeks="10"
            classification="Intermediate"
            byWho="By Michael Adams"
            section1="HTML Fundamentals"
            section2="CSS Styling and Layouts"
            section3="JavaScript Basics"
            section4="Building Responsive Websites"
            section5="Introduction to Bootstrap and React"
            image1={frontend1}
            image2={frontend2}
            image3={frontend3}
            url="/course5"
            />
            {/* <div className='inline-block w-8/12'>
                <h2 className='text-3xl font-semibold'>Our Courses</h2>
                <p className='text-[#4C4C4D]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div> */}
        </div>
    </div>
    
    </>
);
}

export default Courses;


