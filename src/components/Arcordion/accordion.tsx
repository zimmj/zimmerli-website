import React from 'react';

export interface AccordionProps {
    title: string;
    children: React.ReactNode;
    accordionId?: string;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({ children, title, accordionId }) => {

    return (
        <div className='collapse collapse-arrow my-4 bg-neutral'>
            <input type="radio" name={accordionId} className='peer'/>
            <div className='collapse-title peer-checked:bg-primary/60 open:text-neutral open:shadow-lg p-2 rounded-b-none flex text-sm font-semibold'>
                <div className='pl-2 my-auto'>{title}</div>
            </div>
            <div className='collapse-content cursor-auto mt-2'>
                {children}
            </div>
        </div>
    )
}

export default Accordion;