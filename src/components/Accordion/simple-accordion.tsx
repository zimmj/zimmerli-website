import React, { useId } from 'react';
import Accordion, { ControlledAccordion } from './accordion';

export interface SimpleAccordionProps {
    accordions: AccordionContent[];
    multiOpen?: boolean;
}

export interface AccordionContent {
    title: string;
    content: React.ReactNode;
}


const SimpleAccordion: React.FunctionComponent<SimpleAccordionProps> = ({ accordions, multiOpen}) => {

    const accordionId = useId();

    return (
        <div className='join join-vertical w-full'>
            {accordions.map((accordion, index) => {
                return (
                    multiOpen ?
                    <ControlledAccordion
                        key={index}
                        title={accordion.title}
                        accordionId={'acoordion-' + index}
                    >
                        {accordion.content}
                    </ControlledAccordion>
                    :
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