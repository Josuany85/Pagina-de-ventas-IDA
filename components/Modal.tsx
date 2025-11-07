import React, { useEffect, PropsWithChildren } from 'react';
import { Icons } from './Icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative bg-black p-2 rounded-lg shadow-2xl w-full max-w-4xl animate-fade-in"
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition-all z-10"
                    aria-label="Cerrar modal"
                >
                    <Icons.XMark className="w-6 h-6" />
                </button>
                {children}
            </div>
        </div>
    );
};
