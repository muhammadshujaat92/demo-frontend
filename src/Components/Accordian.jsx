import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Icon from './Icons';

const Accordian = ({ AccordianData }) => {
    return (
        <Accordion variant="splitted">
            {
                AccordianData?.map((data) => {
                    const { questionText, answerText } = data || {}
                    return (
                        <AccordionItem
                            key={data.id}
                            aria-label={`Accordion ${data.id}`}
                            title={questionText}
                            as="div" // Renders as a <div> instead of <h2>
                            indicator={({ isOpen }) =>
                                isOpen ? (
                                    <Icon name="minus" className="text-[25px] text-red-600 rotate-90" />
                                ) : (
                                    <Icon name="plus" className="text-[25px] text-gray-600" />
                                )
                            }
                            className="relative"
                        >
                            {answerText}
                        </AccordionItem>

                    )
                })
            }
        </Accordion>
    )
}

export default Accordian