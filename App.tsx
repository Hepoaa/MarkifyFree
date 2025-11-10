
import React, { useState, useCallback } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ImageViewer } from './components/ImageViewer';
import { Loader } from './components/Loader';
import { Button } from './components/Button';
import { MagicWandIcon, DownloadIcon, ArrowPathIcon } from './components/icons';
import { removeWatermark } from './services/geminiService';
import { fileToBase64, getMimeType } from './utils/fileUtils';

type AppState = 'idle' | 'image_selected' | 'processing' | 'result' | 'error';

export default function App() {
    const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
    const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
    const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
    const [appState, setAppState] = useState<AppState>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleImageUpload = useCallback((file: File) => {
        setOriginalImageFile(file);
        setOriginalImageUrl(URL.createObjectURL(file));
        setProcessedImageUrl(null);
        setAppState('image_selected');
        setErrorMessage('');
    }, []);

    const handleRemoveWatermark = async () => {
        if (!originalImageFile) return;

        setAppState('processing');
        setErrorMessage('');

        try {
            const mimeType = getMimeType(originalImageFile.name) || originalImageFile.type;
            const base64Data = await fileToBase64(originalImageFile);
            
            const resultBase64 = await removeWatermark(base64Data, mimeType);
            
            if (resultBase64) {
                setProcessedImageUrl(`data:${mimeType};base64,${resultBase64}`);
                setAppState('result');
            } else {
                throw new Error('La IA no pudo procesar la imagen. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error(error);
            const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido.';
            setErrorMessage(message);
            setAppState('error');
        }
    };

    const handleReset = useCallback(() => {
        setOriginalImageFile(null);
        setOriginalImageUrl(null);
        setProcessedImageUrl(null);
        setAppState('idle');
        setErrorMessage('');
    }, []);

    const handleDownload = () => {
        if (!processedImageUrl || !originalImageFile) return;
        const link = document.createElement('a');
        link.href = processedImageUrl;
        const nameParts = originalImageFile.name.split('.');
        const extension = nameParts.pop();
        const name = nameParts.join('.');
        link.download = `${name}-sin-marca-de-agua.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center p-4 sm:p-6 lg:p-8">
            <header className="w-full max-w-5xl text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Eliminador de Marcas de Agua AI
                </h1>
                <p className="mt-4 text-lg text-slate-300">
                    Sube una imagen para eliminar la marca de agua. Gratis, ilimitado y sin necesidad de registrarse.
                </p>
            </header>

            <main className="w-full max-w-5xl flex-grow flex flex-col items-center justify-center bg-slate-800/50 rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-8">
                {appState === 'idle' && <ImageUploader onImageUpload={handleImageUpload} />}
                
                {(appState === 'image_selected' || appState === 'processing' || appState === 'result' || appState === 'error') && (
                    <div className="w-full flex flex-col items-center">
                        {appState === 'processing' ? (
                            <Loader />
                        ) : (
                             <ImageViewer 
                                originalImageUrl={originalImageUrl} 
                                processedImageUrl={processedImageUrl}
                            />
                        )}
                       
                        {errorMessage && (
                            <div className="mt-6 p-4 w-full max-w-2xl text-center bg-red-900/50 border border-red-700 rounded-lg">
                                <p className="font-semibold">Error</p>
                                <p className="text-red-300">{errorMessage}</p>
                            </div>
                        )}

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {appState === 'image_selected' && (
                                <Button onClick={handleRemoveWatermark} disabled={false} variant="primary">
                                    <MagicWandIcon />
                                    Eliminar Marca de Agua
                                </Button>
                            )}

                             {appState === 'result' && (
                                <>
                                    <Button onClick={handleDownload} variant="primary">
                                        <DownloadIcon />
                                        Descargar Imagen
                                    </Button>
                                    <Button onClick={handleReset} variant="secondary">
                                        <ArrowPathIcon />
                                        Procesar Otra
                                    </Button>
                                </>
                            )}

                             {(appState === 'error') && (
                                <Button onClick={handleReset} variant="secondary">
                                    <ArrowPathIcon />
                                    Intentar de Nuevo
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </main>

             <footer className="w-full max-w-5xl text-center mt-8 text-slate-500 text-sm">
                <p>Potenciado por Gemini de Google. Creado con React y Tailwind CSS.</p>
            </footer>
        </div>
    );
}
