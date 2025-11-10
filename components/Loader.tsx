
import React from 'react';
import { MagicWandIcon } from './icons';

export const Loader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="relative">
                <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <MagicWandIcon className="w-10 h-10 text-purple-400" />
                </div>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-200">La IA está haciendo su magia...</h3>
            <p className="mt-2 text-slate-400 max-w-sm">
                Esto puede tomar unos segundos. Estamos analizando tu imagen y reconstruyendo el fondo para un resultado perfecto.
            </p>
        </div>
    );
};
