import React from 'react';
import { Icons } from './Icons';

export const WhatsappButton: React.FC = () => {
    return (
        <a 
            href="https://wa.link/ff36j7" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 z-50">
            <Icons.WhatsApp />
        </a>
    );
};
