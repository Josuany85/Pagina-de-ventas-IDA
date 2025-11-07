import React from 'react';

export const ClosingSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(26, 35, 126, 0.9), rgba(26, 35, 126, 1))"}}>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-black text-[#D4AF37]">¿Listo para Llevar tu Negocio al Siguiente Nivel?</h2>
                <p className="text-xl text-gray-300 mt-6">Has tomado una de las mejores decisiones para tu futuro digital. Recuerda, la diferencia entre los que lo logran y los que no, es la <span className="font-bold text-white underline decoration-[#D4AF37] decoration-4">acción</span>. ¡Vamos con todo!</p>
                <a href="https://wa.link/6jmgct" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block bg-[#FF6B35] text-white font-bold text-2xl py-5 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300">
                   ¡ESTOY PREPARADO!
                </a>
            </div>
        </section>
    );
};
