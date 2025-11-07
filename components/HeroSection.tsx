import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { Modal } from './Modal';

const IdaLogo = () => (
    <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-[#D4AF37]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            <span className="relative">
                I<span className="text-5xl md:text-7xl">D</span>A
                <span className="absolute top-1/2 left-1/2 w-full h-1 bg-[#D4AF37] -translate-y-1/2 -translate-x-1/2 skew-x-[-25deg] rounded-full opacity-75"></span>
            </span>
        </h1>
        <p className="text-lg md:text-2xl font-semibold tracking-widest text-white mt-2">IMPERIO DIGITAL ACADEMY</p>
    </div>
);

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }
    timerComponents.push(
      <div key={interval} className="text-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
        <span className="text-3xl md:text-4xl font-bold text-[#D4AF37]">{String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}</span>
        <span className="block text-xs uppercase text-white/80">{interval}</span>
      </div>
    );
  });
  
  return (
    <div className="flex justify-center gap-3 md:gap-5 mt-8">
      {timerComponents.length ? timerComponents : <span>¡La oferta ha terminado!</span>}
    </div>
  );
};


export const HeroSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-cover bg-center bg-[#1A237E]" style={{backgroundImage: "linear-gradient(rgba(26, 35, 126, 0.8), rgba(26, 35, 126, 1)), url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop')"}}>
                <div className="max-w-4xl mx-auto">
                    <IdaLogo />
                    <h2 className="text-3xl md:text-5xl font-bold mt-8">El Imperio Digital que Estabas Esperando</h2>
                    <p className="text-lg md:text-xl mt-4 text-gray-300">Acceso inmediato a +50 Cursos, +20,000 Productos con Derechos de Reventa y la Comunidad #1 para Emprendedores de Habla Hispana.</p>
                    
                    <div className="my-8 w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-black/50 border-4 border-[#D4AF37]/50 bg-black">
                        <div onClick={() => setIsModalOpen(true)} className="w-full h-full cursor-pointer relative flex items-center justify-center aspect-video">
                            <img src="https://i.ytimg.com/vi/vCQ7teXC4Jc/maxresdefault.jpg" alt="Video Thumbnail" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Icons.PlayCircle />
                            </div>
                        </div>
                    </div>

                    <CountdownTimer />

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <a href="https://wa.link/6jmgct" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B35] text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300">
                            Únete Ahora - $37 USD
                        </a>
                        <a href="https://wa.link/ff36j7" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-[#D4AF37] hover:text-[#1A237E] transition-all duration-300">
                            Información Detallada
                        </a>
                    </div>
                </div>
            </section>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="aspect-video w-full">
                    <iframe 
                        className="w-full h-full" 
                        src="https://www.youtube-nocookie.com/embed/vCQ7teXC4Jc?autoplay=1&rel=0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </Modal>
        </>
    );
};
