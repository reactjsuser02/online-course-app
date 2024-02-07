import '../App.css';

import time from '../icons/time.svg';


function CourseOpenCards(props) {
    const result = props.array.map(card => {
        return (
            <>
            <div className='bg-white px-8 py-4 rounded-xl'>
                <span className='block text-5xl font-bold w-fit ml-auto mb-4'>{card.number}</span>
                <h5 className='mb-6 text-lg font-semibold'>{card.title}</h5>
                <div className='p-4 mb-4 rounded-lg border border-[#F1F1F3]'>
                    <div className='inline-block w-8/12 max-md:w-full max-md:mb-4'>
                        <span className='block font-medium'>{card.lesson1}</span>
                        <p className='text-[#59595A]'>Lesson 01</p>
                    </div>
                    <div className='inline-block float-right max-md:float-none max-md:block'>
                        <div className='inline-block px-3 py-2 rounded-md font-semibold bg-[#F7F7F8]'>
                            <img className='inline mr-1' src={time} alt="" />
                            {card.duration1}
                        </div>
                    </div>
                </div>
                <div className={card.color2 ? 'p-4 mb-4 rounded-lg border border-[#FFD599]' : 'p-4 mb-4 rounded-lg border border-[#F1F1F3]'}>
                    <div className='inline-block w-8/12 max-md:w-full max-md:mb-4'>
                        <span className='block font-medium'>{card.lesson2}</span>
                        <p className='text-[#59595A]'>Lesson 02</p>
                    </div>
                    <div className='inline-block float-right max-md:float-none max-md:block'>
                        <div className={card.color2 ? 'inline-block px-3 py-2 rounded-md font-semibold bg-[#FFEACC]' : 'inline-block px-3 py-2 rounded-md font-semibold bg-[#F7F7F8]'}>
                            <img className='inline mr-1' src={time} alt="" />
                            {card.duration2}
                        </div>
                    </div>
                </div>
                <div className='p-4 rounded-lg border border-[#F1F1F3]'>
                    <div className='inline-block w-8/12 max-md:w-full max-md:mb-4'>
                        <span className='block font-medium'>{card.lesson3}</span>
                        <p className='text-[#59595A]'>Lesson 03</p>
                    </div>
                    <div className='inline-block float-right max-md:float-none max-md:block'>
                        <div className='inline-block px-3 py-2 rounded-md font-semibold bg-[#F7F7F8]'>
                            <img className='inline mr-1' src={time} alt="" />
                            {card.duration3}
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    })
    return <>{result}</>
}

export default CourseOpenCards;


