import { on } from 'events';
import React from 'react';

export interface AccordionProps {
    title: string;
    children: React.ReactNode;
    accordionId?: string;
    onTitleClick?: () => void;
    controllClass?: 'collapse-open' | 'collapse-close' | '';
}

const Accordion: React.FunctionComponent<AccordionProps> = ({ children, title, accordionId, controllClass = '', onTitleClick = () => {} }) => {
    console.log(controllClass, controllClass === '');
    return (
        <div className={`group collapse collapse-arrow my-4 bg-neutral ${controllClass} ${controllClass === '' ? '': 'cursor-pointer'}`} onClick={onTitleClick}>
            { controllClass === '' ? <input type="radio" name={accordionId} className='peer'/> : null}
            <div className='collapse-title group-[.collapse-open]:bg-primary/60 peer-checked:bg-primary/60 p-2 rounded-b-none flex text-sm font-semibold'
                
            >
                <div className='pl-2 my-auto'>{title}</div>
            </div>
            <div className='collapse-content cursor-auto mt-2' onClick={(event) => {event.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}

export const ControlledAccordion: React.FunctionComponent<AccordionProps> = ({ children, title, accordionId }) => {
    
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const onTitleClick = () => {
        setIsOpen(() => !isOpen);
    }

    return (
        <Accordion title={title} accordionId={accordionId} onTitleClick={onTitleClick} controllClass={isOpen? 'collapse-open' : 'collapse-close'}>
            {children}
        </Accordion>
    )
}
export default Accordion;