
import React from 'react';

interface ImageViewerProps {
    originalImageUrl: string | null;
    processedImageUrl: string | null;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ originalImageUrl, processedImageUrl }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-slate-300 mb-3">Original</h3>
                {originalImageUrl && (
                    <img 
                        src={originalImageUrl} 
                        alt="Original" 
                        className="rounded-lg shadow-lg max-w-full h-auto object-contain max-h-[50vh]"
                    />
                )}
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-slate-300 mb-3">Resultado</h3>
                <div className="w-full aspect-square md:aspect-auto h-full flex items-center justify-center bg-slate-700/50 rounded-lg shadow-inner">
                    {processedImageUrl ? (
                        <img 
                            src={processedImageUrl} 
                            alt="Processed" 
                            className="rounded-lg shadow-lg max-w-full h-auto object-contain max-h-[50vh]"
                        />
                    ) : (
                       <div className="text-slate-400">La imagen procesada aparecerá aquí</div>
                    )}
                </div>
            </div>
        </div>
    );
};
