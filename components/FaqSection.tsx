import React, { useState } from 'react';
import { Icons } from './Icons';

const FaqItem: React.FC<{ title: string; content: string; isOpen: boolean; onClick: () => void }> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/20 last:border-b-0">
            <button onClick={onClick} className="w-full text-left p-5 focus:outline-none transition-colors duration-300 hover:bg-white/10">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-white">{title}</h4>
                    <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <Icons.ChevronDown />
                    </span>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="p-5 pt-0 text-gray-300">{content}</p>
            </div>
        </div>
    );
};

export const FaqSection: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const faqs = [
        {
            q: "¿Qué es MRR?",
            a: "MRR significa 'Master Resell Rights' (Derechos de Reventa Maestros). Es una cláusula legal que te permite revender el curso y quedarte con el 100% de las ganancias."
        },
        {
            q: "¿Cómo puedo pagar desde Cuba?",
            a: "Para Cuba tenemos un precio especial de 6,500 CUP. Este pago único te da acceso completo a la academia y a todos los bonos exclusivos. Aceptamos Enzona/Transfermóvil. Contacta por WhatsApp para darte las instrucciones."
        },
        {
            q: "¿Qué métodos de pago aceptan?",
            a: "Aceptamos una amplia variedad de métodos. El principal es a través de tarjeta de crédito/débito. Adicionalmente, aceptamos Criptomonedas, transferencias, recargas de saldo Etecsa, saldo Qvapay y Payeer. Para Cuba aceptamos Enzona y Transfermóvil. Contáctanos por WhatsApp para coordinar el pago que mejor se te acomode."
        },
        {
            q: "¿Necesito experiencia previa o conocimientos técnicos?",
            a: "¡Para nada! IDA está diseñado para llevarte desde cero. Te guiaremos paso a paso, desde los conceptos más básicos de negocio hasta las estrategias más avanzadas. Si sabes usar un smartphone, tienes todo lo que necesitas para empezar."
        },
        {
            q: "¿Cuánto tiempo tardaré en ver resultados?",
            a: "Los resultados dependen de tu dedicación y acción. Sin embargo, la academia está diseñada para darte 'victorias rápidas'. Con los productos PLR y el sistema de reventa (MRR), tienes la capacidad de generar tus primeros ingresos en cuestión de días o semanas, no meses."
        },
        {
            q: "¿Qué diferencia a IDA de otros cursos online?",
            a: "IDA no es un curso, es un ecosistema completo. La diferencia clave es la combinación de 3 pilares: Educación (+50 cursos), Herramientas (+20,000 productos PLR) y Comunidad (nuestro grupo de apoyo en Skool). No solo aprendes, sino que tienes los productos para vender y la comunidad para apoyarte desde el primer día."
        },
         {
            q: "¿El acceso es realmente de por vida? ¿Qué incluye?",
            a: "Sí, es un único pago para toda la vida. Esto te da acceso ilimitado a todos los cursos actuales, a todas las futuras actualizaciones y a la comunidad de forma permanente. Sin mensualidades ni cargos ocultos, nunca."
        },
        {
            q: "¿Ofrecen reembolsos?",
            a: "No ofrecemos reembolsos. Debido a la naturaleza de los productos digitales y el acceso inmediato que se otorga, todas las ventas son finales."
        }
    ];
    
    return (
        <section className="py-20 px-6 bg-[#1A237E]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-12">Preguntas Frecuentes</h2>
                <div className="bg-black/20 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 overflow-hidden">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            title={faq.q}
                            content={faq.a}
                            isOpen={openFaq === index}
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
