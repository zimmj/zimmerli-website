import React from 'react';


const SlideInModal: React.FunctionComponent<SlideInModalProps> = ({ children, isOpen, onClose }) => {

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <div className={`slide-in transition-all ${isOpen ? 'duration-0' : 'duration-300'} ${isOpen ? 'w-full' : 'w-0'} fixed h-screen w-screen bg-slate-400/60 top-0 right-0 z-30`} onClick={onClose}>
            <section onClick={(event) => event.stopPropagation()} className={`transition-all duration-300 ${isOpen ? 'w-full right-0 lg:w-5/6 xl:w-4/6 2xl:w-3/6' : 'w-0'}  bg-primary fixed h-full `} >
                <div className={`${isOpen ? 'absolute' : ' hidden'} btn btn-sm btn-circle right-5 top-5`} onClick={onClose}>✕</div>
                {children}
            </section>
        </div>
    )
}

export default SlideInModal;

export interface SlideInModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}