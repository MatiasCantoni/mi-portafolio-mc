"use client";

import { useState } from "react";

export default function TarjetaProyecto({ 
  titulo, 
  descripcion, 
  tecnologias, 
  imagen, 
  video, 
  linkDemo, 
  linkCodigo 
}) {
  // Aquí creamos la "memoria" del componente. Por defecto, no está ampliado (false).
  const [ampliado, setAmpliado] = useState(false);

  return (
    <>
      {/* --- TARJETA NORMAL --- */}
      <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
        
        {/* Zona Visual (Ahora es clickeable) */}
        <div 
          className="w-full aspect-video bg-slate-900 relative overflow-hidden border-b border-slate-100 cursor-pointer group"
          onClick={() => setAmpliado(true)} // Al hacer click, cambiamos la memoria a "true"
        >
          {video ? (
            <video 
              src={video} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
          ) : (
            <img 
              src={imagen || "https://via.placeholder.com/600x400?text=Proyecto"} 
              alt={`Vista previa de ${titulo}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          
          {/* Cartelito flotante que aparece al pasar el mouse */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 font-semibold bg-black/60 px-5 py-2 rounded-full backdrop-blur-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Ver en pantalla completa
            </span>
          </div>
        </div>

        {/* Zona de Texto y Botones (Queda igual que antes) */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{titulo}</h3>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{descripcion}</p>
          
          <div className="mb-6">
            <span className="inline-block bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs">
              {tecnologias}
            </span>
          </div>

          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
            {linkDemo && (
              <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Ver Demo
              </a>
            )}
            {linkCodigo && (
              <a href={linkCodigo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white text-slate-700 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors border border-slate-300">
                Código
              </a>
            )}
          </div>
        </div>
      </div>

      {/* --- MODAL DE PANTALLA COMPLETA --- */}
      {/* Si "ampliado" es true, dibujamos esta ventana gigante encima de todo */}
      {ampliado && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setAmpliado(false)} // Si haces clic en el fondo oscuro, se cierra
        >
          {/* Contenedor del multimedia */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Evita que al hacer clic en el video se cierre
          >
            {/* Botón de cerrar (la X) */}
            <button 
              className="absolute -top-12 right-0 text-white/70 hover:text-white font-bold text-lg px-4 py-2 bg-white/10 hover:bg-red-500 rounded-full transition-colors"
              onClick={() => setAmpliado(false)}
            >
              Cerrar ✕
            </button>

            {video ? (
              // ¡Aquí está la magia del video! Agregamos "controls" para que el usuario pueda pausar, subir volumen, etc.
              <video 
                src={video} 
                controls 
                autoPlay 
                className="w-full max-h-[85vh] rounded-xl shadow-2xl object-contain bg-black"
              />
            ) : (
              <img 
                src={imagen} 
                alt={titulo} 
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" 
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}