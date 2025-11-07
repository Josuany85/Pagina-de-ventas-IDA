import React from 'react';

// NOTA: Reemplaza esta URL con la imagen real del fundador.
const instructorImage = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop";

export const InstructorSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2 transform transition-transform duration-500 hover:scale-105">
                    <img 
                        src={instructorImage}
                        alt="Josuany, fundador de Imperio Digital Academy"
                        className="rounded-lg shadow-2xl shadow-black/50 aspect-[4/5] object-cover w-full"
                    />
                </div>
                <div className="md:col-span-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Conoce a tu Mentor: <span className="text-[#D4AF37]">Josuany</span></h2>
                    <p className="mt-4 text-lg font-semibold text-[#D4AF37]">Fundador de Imperio Digital Academy</p>
                    <p className="mt-6 text-gray-300">
                        "Hace años, yo estaba exactamente donde tú estás ahora: lleno de ideas, pero sin un camino claro y con el presupuesto justo. Frustrado por la falta de recursos accesibles y prácticos para emprendedores de habla hispana, decidí crear la plataforma que siempre quise tener."
                    </p>
                    <p className="mt-4 text-gray-300">
                        Mi misión con IDA es simple: democratizar el éxito en el mundo digital. Quiero darte no solo el conocimiento, sino las herramientas y la comunidad para que transformes tus ideas en un negocio real y rentable. No estás comprando un curso, estás invirtiendo en un atajo probado hacia tu libertad financiera.
                    </p>
                    <p className="mt-4 text-gray-300">
                        ¡Estoy aquí para guiarte en cada paso del camino. Tu éxito es mi éxito."
                    </p>
                </div>
            </div>
        </section>
    );
};
