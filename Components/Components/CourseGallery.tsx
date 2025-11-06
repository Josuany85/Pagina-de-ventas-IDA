import React from 'react';

const courses = [
  { title: "EMPIEZA AQUÍ", description: "Introducción y guía inicial para comenzar en IDA." },
  { title: "BASES DEL NEGOCIO", description: "Cimientos y herramientas esenciales para emprender." },
  { title: "REVENDER IDA", description: "Cómo revender la academia y vender sus productos." },
  { title: "BASES DEL BRANDING", description: "Diseño y posicionamiento de marca." },
  { title: "MENTALIDAD MILLONARIA", description: "Establece tu 'mindset' para el éxito." },
  { title: "INSTAGRAM", description: "Clave para crecer en Instagram y generar tráfico orgánico." },
  { title: "MENTALIDAD PARA VENTAS", description: "Desarrolla habilidades para cerrar ventas y confianza." },
  { title: "PINTEREST", description: "Tráfico orgánico masivo para tus ventas." },
  { title: "IDA 3.0", description: "Acceso exclusivo a estrategias avanzadas personalizadas." },
  { title: "MINI CURSOS DE NEGOCIOS", description: "Cursos rápidos para nichos específicos." },
  { title: "LLC EN USA", description: "Estructura legal para escalar tu negocio internacionalmente." },
  { title: "NOTION", description: "Organización y productividad para emprendedores digitales." },
  { title: "PLANIFICACIÓN DE TIEMPO", description: "Gestiona tu negocio de manera eficiente." },
  { title: "CLASES GRABADAS", description: "Acceso a entrenamientos exclusivos." },
  { title: "FACEBOOK", description: "Estrategias de tráfico." },
  { title: "VIDEOS DE STOCK", description: "Biblioteca de videos listos para usar en tu contenido." },
  { title: "MÉTODOS DE PAGO", description: "Opciones y estrategias para cobrar a nivel internacional." },
  { title: "PÁGINAS WEBS", description: "Tu sitio web profesional sin complicarte." },
  { title: "AUTOMATIZACIONES CON MANYCHAT", description: "Lleva tu negocio al siguiente nivel con el poder de los chatbots." },
  { title: "SEO", description: "Posicionamiento en buscadores." },
  { title: "CHATGPT", description: "Automatiza, crea contenido y optimiza tu negocio con IA." },
  { title: "LEAD MAGNET", description: "Atrae clientes con contenido de alto valor." },
  { title: "EMAIL MARKETING", description: "Construye listas y vende con correos estratégicos." },
  { title: "CANVA", description: "Diseño fácil y atractivo para tu negocio." },
  { title: "CPA", description: "Monetización con tráfico si vender." },
  { title: "MARKETING DE AFILIADOS", description: "Gana dinero recomendando productos estratégicos." },
  { title: "UGC", description: "User Generated Content, monetiza sin ser influencer." },
  { title: "SYSTEME.IO Y FUNNELS", description: "Crea embudos de venta efectivos y automatizados." },
  { title: "VAULT DE PLR", description: "Acceso a miles de productos listos para vender." },
];

const CourseCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center flex flex-col items-center justify-start transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
    <div className="w-10 h-10 mb-3 bg-gray-700 rounded-full flex items-center justify-center font-bold text-xs text-[#D4AF37] border-2 border-[#D4AF37]/50">
      IDA
    </div>
    <h3 className="font-bold text-white leading-tight mb-2">{title}</h3>
    <p className="text-xs text-gray-400 flex-grow">{description}</p>
  </div>
);

export const CourseGallery: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-[#1A237E]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-black text-[#D4AF37] tracking-tight">Dale un Vistazo al Interior</h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Esto, y mucho más, es lo que encontrarás dentro de Imperio Digital Academy.</p>
                
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {courses.map((course, i) => (
                        <CourseCard key={i} title={course.title} description={course.description} />
                    ))}
                </div>
                
                <p className="text-center text-lg text-gray-400 mt-12 font-semibold">...y el contenido se actualiza constantemente para mantenerte a la vanguardia.</p>
            </div>
        </section>
    );
};
