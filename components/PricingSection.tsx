import React from 'react';
import { Icons } from './Icons';

export const PricingSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-slate-50 text-gray-800">
            <div className="max-w-lg mx-auto text-center bg-white p-8 rounded-2xl shadow-2xl border-4 border-[#1A237E]">
                <h2 className="text-3xl font-black text-[#1A237E]">Garantiza tu Acceso Inmediato A:</h2>
                
                <ul className="text-left my-8 space-y-3">
                    <li className="flex items-center gap-3"><Icons.CheckCircle className="text-green-500 flex-shrink-0" /><span>Más de 50 cursos de negocios.</span></li>
                    <li className="flex items-center gap-3"><Icons.CheckCircle className="text-green-500 flex-shrink-0" /><span>+20,000 productos PLR listos para vender.</span></li>
                    <li className="flex items-center gap-3"><Icons.CheckCircle className="text-green-500 flex-shrink-0" /><span>Webinars semanales y entrenamientos en ventas.</span></li>
                    <li className="flex items-center gap-3"><Icons.CheckCircle className="text-green-500 flex-shrink-0" /><span>Sin suscripciones mensuales ni tarifas ocultas.</span></li>
                     <li className="flex items-center gap-3"><Icons.CheckCircle className="text-green-500 flex-shrink-0" /><span>Tu compra única te da acceso a todos los cursos y materiales.</span></li>
                    <li className="flex items-center gap-3"><Icons.CheckCircle className="text-green-500 flex-shrink-0" /><span>Comunidad exclusiva en Skool.</span></li>
                </ul>

                <div className="my-8 bg-slate-100 p-6 rounded-lg">
                     <p className="text-lg text-gray-600">Inversión Única. Acceso de por vida.</p>
                    <span className="text-7xl font-extrabold text-[#1A237E]">$37</span>
                    <span className="text-2xl font-bold text-gray-500">USD</span>
                </div>
               
                <a href="https://wa.link/6jmgct" target="_blank" rel="noopener noreferrer" className="w-full inline-block bg-[#FF6B35] text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300">
                   <Icons.LockClosed className="inline-block mr-2" />
                    DESBLOQUEA EL ACCESO
                   <Icons.LockClosed className="inline-block ml-2" />
                </a>

                <div className="mt-8 border-t pt-6">
                    <p className="font-bold text-gray-700 mb-4">Métodos de Pago Flexibles:</p>
                    <div className="flex justify-center items-center gap-4">
                       <Icons.Crypto />
                       <Icons.Etecsa />
                       <Icons.Qvapay />
                       <Icons.Payeer />
                    </div>
                </div>
            </div>
        </section>
    );
};
