import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";

const Accordian = ({ key, title, answerText }) => {
    return (
        <Accordion variant="splitted">
            <AccordionItem key={key} aria-label="Accordion 1" title={title} indicator={({ isOpen }) => (isOpen ? <FiMinusCircle className='text-[25px] text-gray-600' /> : <GoPlusCircle className='text-[25px] text-gray-600' />)} className='bg-gray-100 relative'>
                <div className='bg-white border-t-2 absolute w-full left-0 p-[1rem] rounded-b-2xl z-10 mb-2'>{answerText}</div>
            </AccordionItem>
        </Accordion>
    )
}

export default Accordian