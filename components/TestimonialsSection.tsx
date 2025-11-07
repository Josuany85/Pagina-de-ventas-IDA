import React from 'react';
import { Icons } from './Icons';

const testimonials = [
    {
        name: "Sofía Pérez",
        title: "Creadora de Contenido",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop",
        quote: "IDA no solo me dio el conocimiento, sino la confianza para lanzar mi propia marca. La comunidad es oro puro, siempre hay alguien dispuesto a ayudar. ¡Mis ingresos se triplicaron en 3 meses!"
    },
    {
        name: "Carlos Mendoza",
        title: "Afiliado y Marketer",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop",
        quote: "Pasé de estar estancado a generar ventas diarias gracias a los embudos que aprendí a construir aquí. Los productos PLR son una mina de oro para empezar a monetizar rápido. 100% recomendado."
    },
    {
        name: "Laura Jiménez",
        title: "Emprendedora E-commerce",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop",
        quote: "Estaba perdida en un mar de información. IDA me dio el mapa exacto, un paso a paso claro. Lo que más valoro es el acceso de por vida, siempre tengo las últimas estrategias a mi alcance."
    },
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, title, avatar, quote }) => (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20 h-full">
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover border-4 border-[#D4AF37]/50" />
        <div className="flex my-4">
            {[...Array(5)].map((_, i) => <Icons.Star key={i} className="text-yellow-400" />)}
        </div>
        <p className="text-gray-300 italic flex-grow">"{quote}"</p>
        <div className="mt-4">
            <h4 className="font-bold text-white text-lg">{name}</h4>
            <p className="text-sm text-[#D4AF37]">{title}</p>
        </div>
    </div>
);


export const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-black text-[#D4AF37] tracking-tight">Lo que Dicen Nuestros Miembros</h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Resultados reales de emprendedores que tomaron acción.</p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard key={i} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}
