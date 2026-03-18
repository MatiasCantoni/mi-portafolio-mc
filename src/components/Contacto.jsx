export default function Contacto() {
  return (
    <section id="contacto" className="max-w-4xl mx-auto mt-24 px-6 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Trabajemos Juntos</h2>
        <p className="text-slate-600">
          ¿Tienes un proyecto en mente o buscas sumar un desarrollador a tu equipo? Escríbeme.
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <form 
          action="https://formspree.io/f/xqeygjlg"
          method="POST" 
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo Nombre */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="text-sm font-semibold text-slate-700">Nombre</label>
              <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                required 
                placeholder="..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Campo Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                placeholder="..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>

          {/* Campo Mensaje */}
          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje" className="text-sm font-semibold text-slate-700">Mensaje</label>
            <textarea 
              name="mensaje" 
              id="mensaje" 
              rows="5" 
              required 
              placeholder="..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <button 
            type="submit" 
            className="mt-4 bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg transition-all active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}