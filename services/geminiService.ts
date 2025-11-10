
import { GoogleGenAI, Modality } from "@google/genai";

export async function removeWatermark(base64ImageData: string, mimeType: string): Promise<string | null> {
    if (!process.env.API_KEY) {
        throw new Error("API key no está configurada. Asegúrate de que la variable de entorno API_KEY esté definida.");
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Actúa como un editor de fotos profesional. Tu tarea es eliminar meticulosamente cualquier marca de agua, logotipo, superposición de texto y otros elementos gráficos que distraigan de la imagen proporcionada. El objetivo es producir una versión limpia de la imagen que parezca como si la marca de agua nunca hubiera existido. Por favor, asegúrate de reconstruir cuidadosamente el fondo detrás de la marca de agua para mantener la integridad y calidad originales de la imagen. No agregues ningún elemento nuevo a la imagen. Devuelve solo la imagen editada.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64ImageData,
                            mimeType: mimeType,
                        },
                    },
                    {
                        text: prompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        // Loop through parts to find the image data
        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                return part.inlineData.data;
            }
        }
        
        return null; // Return null if no image part is found

    } catch (error) {
        console.error("Error al llamar a la API de Gemini:", error);
        throw new Error("No se pudo comunicar con el servicio de IA. Revisa la consola para más detalles.");
    }
}
