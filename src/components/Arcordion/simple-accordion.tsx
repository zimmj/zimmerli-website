import React, { useId } from 'react';
import Accordion from './accordion';

export interface SimpleAccordionProps {
    accordions: AccordionContent[];
}

export interface AccordionContent {
    title: string;
    content: React.ReactNode;
}


const SimpleAccordion: React.FunctionComponent<SimpleAccordionProps> = ({ accordions}) => {

    const accordionId = useId();

    return (
        <div className='join join-vertical w-full'>
            {accordions.map((accordion, index) => {
                return (
                    <Accordion
                        key={index}
                        title={accordion.title}
                        accordionId={accordionId}
                    >
                        {accordion.content}
                    </Accordion>
                )
            })}
        </div>
    )
}

export default SimpleAccordion;