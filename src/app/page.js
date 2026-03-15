import TarjetaProyecto from "@/components/TarjetaProyecto";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* HEADER */}
      <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-sm">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">MC.</div>
        <div className="space-x-6 text-sm font-semibold text-slate-600">
          <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <main className="max-w-4xl mx-auto mt-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hola, soy <span className="text-blue-600">Matias Cantoni</span>
        </h1>
        <p className="text-xl text-slate-500 mb-10">
          Desarrollador Web enfocado en construir aplicaciones rápidas y funcionales.
        </p>
      </main>

      {/* SECCIÓN DE PROYECTOS */}
      <section id="proyectos" className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-slate-200 pb-2">
          Mis Trabajos
        </h2>
        
        {/* Aquí llamamos a nuestro componente varias veces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <TarjetaProyecto 
            titulo="Che Oficios" 
            descripcion="Plataforma web desarrollada para conectar profesionales de oficios con clientes que requieren servicios específicos." 
            tecnologias="Laravel / PHP" 
          />

          <TarjetaProyecto 
            titulo="Plataforma de Streaming" 
            descripcion="Interfaz web dinámica tipo Netflix con filtrado en tiempo real, guardado de favoritos en localStorage y CSS moderno (Glassmorphism, CSS Grid)." 
            tecnologias="Vanilla JS / HTML / CSS3"
            imagen="/proyectos/streaming.png"
            linkDemo="https://matiascantoni.github.io/plataforma-streaming/"
            linkCodigo="https://github.com/MatiasCantoni/plataforma-streaming"
          />

          <TarjetaProyecto 
            titulo="TriviaGo" 
            descripcion="Pagina con juego similar a Preguntados con sistema de usuarios, rankings, panel de administrador, sugerencia de preguntas, reportes y 3 roles." 
            tecnologias="PHP / Mustache / MySQL / Vanilla JS / Bootstrap / W3school" 
            video="/proyectos/triviago.mp4"
            linkCodigo="https://github.com/MatiasCantoni/TP-Final-PW2"
          />

        </div>
      </section>
      {/* SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="max-w-4xl mx-auto mt-24 px-6 mb-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-slate-200 pb-2">
          Sobre Mí
        </h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-600 leading-relaxed space-y-6 text-lg">
          <p>
            Soy un desarrollador web al que le apasiona resolver problemas reales a través del código. Me enfoco en crear plataformas que sean funcionales, rápidas y que aporten valor real a los usuarios.
          </p>
          <p>
            Tengo experiencia trabajando en el backend estructurando bases de datos y lógica compleja, pero también disfruto mucho armando interfaces visuales limpias y modernas en el frontend. La adaptabilidad y el trabajo en equipo son habilidades que he pulido en mis experiencias laborales previas y que aplico a mi forma de programar.
          </p>
          <p>
            Cuando no estoy frente a la pantalla depurando código o investigando nuevas tecnologías, es muy probable que me encuentres moliendo granos para prepararme un buen café, leyendo algún libro de desarrollo personal para seguir mejorando mis hábitos, o buscando algo de inspiración en el diseño de interiores.
          </p>
        </div>
      </section>

    </div>
  );
}