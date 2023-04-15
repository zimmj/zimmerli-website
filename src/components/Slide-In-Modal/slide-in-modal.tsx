import React from 'react';


const SlideInModal: React.FunctionComponent<SlideInModalProps> = ({ children, isOpen, onClose }) => {

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <div className={`slide-in ${isOpen ? 'fixed' : 'hidden'} h-screen w-screen bg-slate-400/60 top-0 left-0 z-30`} onClick={onClose}>
            <section className='bg-primary fixed h-full w-full right-0 lg:w-5/6 xl:w-4/6 2xl:w-3/6' >
                <div className='btn btn-sm btn-circle right-5 top-5 absolute' onClick={onClose}>✕</div>
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