import React from 'react';
import { Icons } from './Icons';

const bonuses = [
    { icon: <Icons.Robot />, title: "Autorreponder de WhatsApp Pro", desc: "Automatiza tu seguimiento y ventas 24/7.", value: "97 USD" },
    { icon: <Icons.ChartBar />, title: "Autopublicador para Facebook", desc: "Programa meses de contenido en minutos.", value: "77 USD" },
    { icon: <Icons.ChatBubble />, title: "Bot de WhatsApp Offline", desc: "Tu negocio sigue vendiendo, incluso sin conexión.", value: "47 USD" },
    { icon: <Icons.BookOpen />, title: "Libro de Finanzas Personales", desc: "Aprende a gestionar tu nuevo flujo de ingresos.", value: "27 USD" },
    { icon: <Icons.Sparkles />, title: "Guía de 15 Herramientas IA", desc: "Ahorra 20+ horas a la semana con IA gratuita.", value: "99 USD" },
    { icon: <Icons.Rocket />, title: "Sistema 'Copia y Pega' de $100/semana", desc: "Un método probado para tu primera victoria rápida.", value: "150 USD" },
];

export const BonusesSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-slate-100 text-slate-800">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] flex items-center justify-center gap-3">
                   <Icons.Gift />
                   Recibe +$497 USD en Bonos de Acción Rápida
                </h2>
                <p className="mt-4 text-lg text-slate-600">Estos no son simples extras. Son herramientas diseñadas para acelerar tus resultados desde el primer día. Tuyos GRATIS al unirte hoy.</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {bonuses.map((bonus, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg text-left border border-slate-200 shadow-lg flex flex-col h-full">
                            <div className="flex items-start gap-4">
                                <div className="text-white bg-[#1A237E] p-3 rounded-full flex-shrink-0">{bonus.icon}</div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-900">{bonus.title}</h3>
                                    <p className="text-slate-600 mt-1">{bonus.desc}</p>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 text-right">
                                <span className="inline-block bg-[#D4AF37] text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                                    VALOR: ${bonus.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
