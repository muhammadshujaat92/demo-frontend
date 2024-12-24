import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";

const Accordian = ({ AccordianData }) => {
    return (
        <Accordion variant="splitted">
            {
                AccordianData?.map((data) => {
                    const { questionText, answerText } = data || {}
                    return (
                        <AccordionItem key={data.id} aria-label={`Accordion ${data.id}`} title={questionText} indicator={({ isOpen }) => (isOpen ? <FiMinusCircle className='text-[25px] text-red-600 rotate-90' /> : <GoPlusCircle className='text-[25px] text-gray-600' />)} className='bg-gray-100 relative'>
                            {answerText}
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}

export default Accordian