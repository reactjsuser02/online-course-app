import '../App.css';

import logo from '../icons/logo.svg';
import plus from '../icons/plus.svg';
import close from '../icons/close.svg';
import rightArrowBlack from '../icons/rightArrowBlack.svg';

function Accordion(props) {
if(props.isOpen) {
    return (
    <div>
        <div className=' '>
            <p className='py-4 border-b border-[#F1F1F3] font-medium'>
                {props.title}
                <img className='inline-block float-right bg-[#FFF4E5] cursor-pointer' src={close} onClick={props.onAccordionClick} id={props.id} alt="" />
            </p>
        </div>
        <div className='pt-4 text-[#4C4C4D] mb-6'>
            {props.text}
        </div>
        {props.url}
    </div>
    );
} else {
    return (
    <div>
        <div className=' '>
            <p className='py-4 font-medium border-b border-[#F1F1F3]'>
                {props.title}
                <img className='inline-block float-right bg-[#FFF4E5] cursor-pointer' src={plus} onClick={props.onAccordionClick} id={props.id} alt="" />
            </p>
        </div>
    </div>
    );
}
}

export default Accordion;


