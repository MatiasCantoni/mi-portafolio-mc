"use client";
import TarjetaProyecto from "@/components/TarjetaProyecto";
import { motion } from "framer-motion";
import Contacto from '../components/Contacto';

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
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} className="max-w-4xl mx-auto mt-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hola, soy <span className="text-blue-600">Matias Cantoni</span>
        </h1>
        <p className="text-xl text-slate-500 mb-10">
          Desarrollador Web enfocado en construir aplicaciones rápidas y funcionales.
        </p>
      </motion.main>

      {/* SECCIÓN DE PROYECTOS */}
      <section id="proyectos" className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b-2 border-slate-200 pb-2">
          Mis Trabajos
        </h2>

        {/* Aquí llamamos a nuestro componente varias veces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TarjetaProyecto
            titulo="Che Oficios"
            descripcion="Start-UP de una plataforma web desarrollada para conectar profesionales de oficios con clientes que requieren servicios específicos."
            tecnologias="Laravel / PHP / Tailwind / MySQL"
            imagen="/proyectos/che.png"
            linkDemo="https://cheoficios.com.ar/"
          />

          <TarjetaProyecto
            titulo="Pet Tracker"
            descripcion="Aplicación para el control y seguimiento de mascotas mediante collar inteligente."
            tecnologias="JAVA / Spring Boot / MySQL / Tailwind / Mockito / Docker"
            video="/proyectos/pettracker-mod.mp4"
            linkCodigo="https://github.com/DavidLuques/web-base"
          />

          <TarjetaProyecto
            titulo="BNV Travel"
            descripcion="Plataforma de reservas para agencia de viajes."
            tecnologias="Next.js / React / Tailwind"
            imagen="/proyectos/bnv.png"
            linkDemo="https://www.bnvtravel.com.ar/"
          />

          <TarjetaProyecto
            titulo="TriviaGo"
            descripcion="Pagina con juego similar a Preguntados con sistema de usuarios, rankings, panel de administrador, sugerencia de preguntas, reportes y 3 roles."
            tecnologias="PHP / Mustache / MySQL / Vanilla JS / Bootstrap / W3school"
            video="/proyectos/triviago.mp4"
            linkCodigo="https://github.com/MatiasCantoni/TP-Final-PW2"
          />

          <TarjetaProyecto
            titulo="Entre Mates"
            descripcion="E-Commerce para venta de productos relacionados con la temática de los mates."
            tecnologias="WooCommerce / WordPress / PHP / MySQL"
            imagen="/proyectos/entremates.png"
            linkDemo="https://tiendaentremates.com/"
          />

          <TarjetaProyecto
            titulo="CasaMingo"
            descripcion="Landing para un equipo de Diseñadoras gráficas. Lanzamiento oficial en 1 semana."
            tecnologias="Next.js / React / Tailwind"
            imagen="/proyectos/home.png"
            linkDemo="https://muestra-mingo.vercel.app/"
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
            titulo="Gimnasio"
            descripcion="landing page de un gimnasio"
            tecnologias="Next.js / React / Tailwind"
            imagen="/proyectos/gym.png"
            linkDemo="/gym"
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
            Soy Desarrollador Web Full-Stack y estudiante de la Tecnicatura en Desarrollo Web en la UNLaM. Me especializo en diseñar y construir plataformas digitales y soluciones web completas, abarcando desde la arquitectura de bases de datos y lógica de backend robusta hasta interfaces intuitivas y modernas.            
            <br />
            Mi stack abarca el desarrollo backend tanto en PHP (Laravel) como en Java, ecosistemas frontend con JavaScript (React, Next.js), y diseño de datos relacionales en MySQL. Además, complemento el ciclo técnico con herramientas como Docker, Laravel Forge y Cloudflare, aplicando pruebas unitarias y buenas prácticas de arquitectura para entregar software escalable y listo para producción.          </p>
        </div>
      </section>
      <Contacto />
    </div>
  );
}