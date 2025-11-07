import React from 'react';
import { Icons } from './Icons';

export const WhatYouGetSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="transform transition-transform duration-500 hover:scale-105">
                    <img 
                        src="https://storage.googleapis.com/aistudio-marketplace/project-ada/ida-devices-mockup.png" 
                        alt="IDA Academy on multiple devices"
                        className="rounded-lg shadow-2xl shadow-black/50"
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Tu Acceso Completo al <span className="text-[#D4AF37]">Ecosistema IDA</span></h2>
                    <p className="mt-4 text-lg text-gray-300">Esto no es solo un curso. Es una plataforma integral de lanzamiento para tu negocio digital.</p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3">
                            <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                            <span><span className="font-bold text-white">+50 Cursos de Negocios Digitales:</span> Desde cero hasta experto en marketing, ventas, IA y más.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                            <span><span className="font-bold text-white">+20,000 Productos PLR:</span> Un arsenal de productos listos para que los vendas y te quedes con el 100% de las ganancias.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                            <span><span className="font-bold text-white">Comunidad #1 en Skool:</span> Soporte 24/7, networking y alianzas estratégicas con emprendedores como tú.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                            <span><span className="font-bold text-white">Derechos de Reventa (MRR):</span> No solo aprendes, también tienes un negocio de alto margen listo para vender desde el primer día.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                            <span><span className="font-bold text-white">Acceso de por Vida:</span> Un único pago te da acceso ilimitado a todo el contenido actual y futuro. Sin mensualidades.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
