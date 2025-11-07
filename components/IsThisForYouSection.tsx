import React from 'react';
import { Icons } from './Icons';

export const IsThisForYouSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">✅ IDA ES para ti si:</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3"><Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/><span>Buscas acceder a recursos de alto valor sin gastar una fortuna.</span></li>
                      <li className="flex items-start gap-3"><Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/><span>Estás listo para iniciar un negocio que trabaje para ti.</span></li>
                      <li className="flex items-start gap-3"><Icons.CheckCircle className="text-green-400 flex-shrink-0 mt-1"/><span>Quieres aprovechar una oportunidad de ingresos ilimitados.</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-4">❌ IDA NO es para ti si:</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3"><Icons.XCircle className="text-red-400 flex-shrink-0 mt-1"/><span>Ya tienes todos los contenidos que necesitas y no buscas más.</span></li>
                      <li className="flex items-start gap-3"><Icons.XCircle className="text-red-400 flex-shrink-0 mt-1"/><span>Estás cómodo con el negocio que tienes ahora y no quieres crecer.</span></li>
                      <li className="flex items-start gap-3"><Icons.XCircle className="text-red-400 flex-shrink-0 mt-1"/><span>Estás contento con los ingresos que tienes ahora.</span></li>
                  </ul>
                </div>
            </div>
        </section>
    );
};
