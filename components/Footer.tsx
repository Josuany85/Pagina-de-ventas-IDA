import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 py-8 px-6 text-center border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                 <h3 className="text-2xl font-black text-gray-500 mb-4">IDA</h3>
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Imperio Digital Academy. Todos los derechos reservados.</p>
                <div className="mt-4 text-xs text-gray-600">
                    <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidad</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="hover:text-gray-400 transition-colors">Términos de Servicio</a>
                </div>
            </div>
        </footer>
    );
};
