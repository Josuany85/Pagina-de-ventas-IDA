import React from 'react';

export const MetricsSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-slate-50 text-slate-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                   <h3 className="text-7xl font-black text-[#1A237E]">#1</h3>
                   <p className="mt-2 text-xl font-bold">Comunidad en Skool</p>
                   <p className="text-slate-600">La más grande y activa para emprendedores hispanos.</p>
                </div>
                <div className="p-4">
                   <h3 className="text-7xl font-black text-[#1A237E]">50+</h3>
                   <p className="mt-2 text-xl font-bold">Cursos de Negocios</p>
                   <p className="text-slate-600">Desde branding hasta IA, todo lo que necesitas.</p>
                </div>
                 <div className="p-4">
                   <h3 className="text-7xl font-black text-[#1A237E]">20K+</h3>
                   <p className="mt-2 text-xl font-bold">Productos PLR</p>
                   <p className="text-slate-600">Listos para que los revendas y generes ingresos.</p>
                </div>
            </div>
        </section>
    );
};
