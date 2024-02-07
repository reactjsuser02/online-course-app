import '../App.css';

import { Link } from 'react-router-dom';

function CourseCard(props) {
return (
    <>
    <div className='bg-white p-10 mb-10 rounded-lg'>
        <div className='mb-6'>
            <div className='inline-block w-8/12 max-md:w-full'>
                <h2 className='mb-4 text-3xl font-semibold'>{props.title}</h2>
                <p className='text-[#4C4C4D]'>{props.text}</p>
            </div>
            <div className='inline-block float-right pt-6 max-md:float-none max-md:block'>
                <Link to={props.url} className='rounded-lg font-semibold bg-[#FCFCFD] border border-[#F1F1F3] py-2 px-4'>View Course</Link>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
            <img className='rounded-lg' src={props.image1} alt="" />
            <img className='rounded-lg' src={props.image2} alt="" />
            <img className='rounded-lg' src={props.image3} alt="" />
        </div>
        <div className='text-[#4C4C4D] py-6'>
            <span className='inline-block rounded-lg border border-[#F1F1F3] p-1 mr-2'>{props.weeks} Weeks</span>
            <span className='inline-block rounded-lg border border-[#F1F1F3] p-1'>{props.classification}</span>
            <span className='inline-block p-1 text-black text-lg font-semibold float-right'>{props.byWho}</span>
        </div>
        <div className='w-full p-4 rounded-t-[10px] border border-[#F1F1F3]'>
            Curriculum
        </div>
        <div className='grid grid-cols-5 rounded-b-[10px] border border-[#F1F1F3] max-md:grid-cols-1'>
            <div className='px-8 pt-4 pb-10 border-r'>
                {/* <div className='border-r'>
                    <span className='block mb-3 text-5xl font-bold'>01</span>
                    <p>Introduction to HTML</p>
                </div> */}
                <span className='block mb-3 text-5xl font-bold'>01</span>
                <p>{props.section1}</p>
            </div>
            <div className='px-8 pt-4 pb-10 border-r'>
                <span className='block mb-3 text-5xl font-bold'>02</span>
                <p>{props.section2}</p>
            </div>
            <div className='px-8 pt-4 pb-10 border-r'>
                <span className='block mb-3 text-5xl font-bold'>03</span>
                <p>{props.section3}</p>
            </div>
            <div className='px-8 pt-4 pb-10 border-r'>
                <span className='block mb-3 text-5xl font-bold'>04</span>
                <p>{props.section4}</p>
            </div>
            <div className='px-8 pt-4 pb-10 border-r'>
                <span className='block mb-3 text-5xl font-bold'>05</span>
                <p>{props.section5}</p>
            </div>
        </div>
    </div>
    
    </>
);
}

export default CourseCard;


