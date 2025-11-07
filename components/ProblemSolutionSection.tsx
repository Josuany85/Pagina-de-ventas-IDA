import React from 'react';
import { Icons } from './Icons';

export const ProblemSolutionSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-slate-100">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">¿Atrapado en el Ciclo del Emprendedor Solitario?</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">Es una lucha común. Has invertido tiempo y sueños, pero los resultados no llegan. La buena noticia: no estás solo y esta es la salida.</p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-200 hover:border-[#FF6B35] transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
                        <div className="bg-red-100 rounded-full p-3">
                          <Icons.XCircle className="text-red-500 w-12 h-12"/>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-slate-900">Cursos sin Fin, Resultados Cero</h3>
                        <p className="mt-2 text-slate-600 flex-grow">Saltas de un curso a otro, acumulando información pero sin un plan de acción claro que te dé resultados.</p>
                    </div>
                   <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-200 hover:border-[#FF6B35] transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
                        <div className="bg-red-100 rounded-full p-3">
                          <Icons.XCircle className="text-red-500 w-12 h-12"/>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-slate-900">Monetización Fantasma</h3>
                        <p className="mt-2 text-slate-600 flex-grow">Tienes grandes ideas, pero la falta de un método probado y el miedo a invertir miles te paralizan.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-200 hover:border-[#FF6B35] transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
                        <div className="bg-red-100 rounded-full p-3">
                          <Icons.XCircle className="text-red-500 w-12 h-12"/>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-slate-900">La Isla del Emprendedor</h3>
                        <p className="mt-2 text-slate-600 flex-grow">Te sientes solo, sin una comunidad que entienda tus luchas y te impulse a seguir adelante.</p>
                    </div>
                </div>
                
                <div className="my-16 flex justify-center">
                    <Icons.BouncingChevronDown />
                </div>

                <div className="bg-[#1A237E] p-8 md:p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full"></div>
                   <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-[#D4AF37]/10 rounded-full"></div>
                   <div className="relative">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">Con IDA, Rompes el Ciclo y Construyes tu Imperio.</h3>
                        <p className="mt-4 text-xl text-gray-300">Convertimos cada obstáculo en un pilar de tu éxito:</p>
                        <div className="mt-8 space-y-6 text-left max-w-3xl mx-auto">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                                <div>
                                    <h4 className="font-bold text-white text-lg">De la Confusión a la Acción</h4>
                                    <p className="text-gray-300">Olvídate de la parálisis por análisis. Obtén acceso a +50 cursos enfocados en resultados y un camino claro para aplicar lo que aprendes.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                                 <div>
                                    <h4 className="font-bold text-white text-lg">De la Incertidumbre a los Ingresos</h4>
                                    <p className="text-gray-300">Te entregamos +20,000 productos PLR y los derechos de reventa (MRR) para que empieces a monetizar desde el día uno, sin grandes inversiones.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                <Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/>
                                 <div>
                                    <h4 className="font-bold text-white text-lg">De la Soledad a la Sinergia</h4>
                                    <p className="text-gray-300">Únete a una comunidad vibrante en Skool. Aquí encontrarás apoyo 24/7, alianzas estratégicas y la energía de cientos de emprendedores como tú.</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    );
};
