import React, { useState, useEffect } from 'react';

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Server,
  Layers,
  GitBranch,
  Cloud,
  User,
  BookOpen,
  Award,
  Briefcase
} from "lucide-react";

function Carousel({ images, alt }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-amber-500/30 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
        <img
          src={images[current]}
          alt={`${alt} - vista ${current + 1}`}
          className="w-full object-cover transition-all duration-500"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900/80 hover:bg-violet-600 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
            >‹</button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900/80 hover:bg-violet-600 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
            >›</button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-amber-400 w-5' : 'bg-slate-400/60'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const marqueeItems = [
    'Desarrollo Web', 'Análisis de Sistemas', 'Bases de Datos', 'React & Next.js',
    'Java & Python', 'Spring Boot', 'Proyectos Freelance', 'AWS & Firebase',
    'SCRUM & UML', 'APIs REST', 'MySQL & PostgreSQL', 'Trabajo Remoto'
  ];

  const faqItems = [
    {
      question: '¿Estás disponible para proyectos freelance?',
      answer: 'Sí, estoy disponible para proyectos freelance de desarrollo web, sistemas de gestión, landing pages y APIs. Podemos hablar del alcance y acordar tiempos y condiciones sin compromiso.'
    },
    {
      question: '¿Podés trabajar de forma remota?',
      answer: 'Sí, trabajo 100% de forma remota. Me comunico por WhatsApp, correo o videollamada según la preferencia del cliente, y entrego avances periódicos para mantener todo transparente.'
    },
    {
      question: '¿Qué tipo de proyectos buscás?',
      answer: 'Me interesan sistemas web, landing pages, aplicaciones de gestión, APIs REST y proyectos académicos o empresariales que combinen análisis de datos, bases de datos y desarrollo fullstack.'
    },
    {
      question: '¿En qué etapa de tu carrera estás?',
      answer: 'Estoy en el último semestre de Análisis de Sistemas en la Universidad Católica, desarrollando mi tesis sobre rehabilitación muscular con Kinect. Cuento con experiencia práctica en proyectos académicos y freelance.'
    },
    {
      question: '¿Cuánto tiempo tardás en entregar un proyecto?',
      answer: 'Depende del alcance. Una landing page puede estar lista en 1-2 semanas, un sistema de gestión más completo puede llevar 1-2 meses. Siempre defino tiempos claros antes de comenzar.'
    },
    {
      question: '¿Trabajás con empresas o solo con clientes directos?',
      answer: 'Trabajo tanto con clientes directos como con empresas o agencias que necesiten apoyo en desarrollo. Estoy abierto a colaboraciones, proyectos puntuales o contratos a largo plazo.'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Años de formación', value: '4+' },
    { label: 'Proyectos realizados', value: '6+' },
    { label: 'Tecnologías dominadas', value: '15+' },
    { label: 'Certificados obtenidos', value: '4' },
  ];

  const mainSkills = [
    { name: 'HTML / CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'MySQL / PostgreSQL', level: 85 },
    { name: 'Java', level: 75 },
    { name: 'React / Next.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'PHP', level: 70 },
    { name: 'TypeScript', level: 65 },
  ];

  const skills = {
    languages: [
      'Java', 'Python', 'C++', 'HTML', 'CSS', 'PHP', 'JavaScript', 'TypeScript'
    ],
    databases: [
      'MySQL', 'PostgreSQL', 'OracleSQL', 'SQLite', 'phpMyAdmin'
    ],
    tools: [
      'Visual Studio Code', 'GitHub', 'GitLab', 'Node.js', 'Laravel', 'Android Studio',
      'PowerDesigner', 'Knime', 'StarUML', 'Postman'
    ],
    frameworks: [
      'React', 'Next.js', 'Express.js', 'Spring Boot'
    ],
    cloud: [
      'AWS (EC2, S3)', 'Firebase', 'Hosting y Deploy Web'
    ],
    methodologies: [
      'UML',
      'SCRUM',
      'Análisis y Diseño de Sistemas',
      'Modelado Entidad-Relación'
    ]
  };

  const projects = [
    {
      title: "Sistema de Rehabilitación Muscular con Kinect",
      type: "Tesis de Grado",
      description: "Sistema automatizado de seguimiento y análisis del movimiento corporal mediante Microsoft Kinect para supervisión remota de ejercicios terapéuticos.",
      tech: ["Python", "OpenCV", "Kinect SDK", "MySQL", "HTML/CSS"],
      highlights: [
        "Captura de movimiento en tiempo real",
        "Análisis de ángulos articulares",
        "Retroalimentación inmediata al paciente",
        "Supervisión remota por profesionales"
      ],
      status: "En desarrollo - 2025",
      institution: "Universidad Católica Ntra. Sra. de la Asunción"
    },
    {
      title: "Sistema Web de Gestión para Gimnasio ISPORT",
      type: "Proyecto de Investigación Académico",
      description: "Desarrollo de un sistema web para optimizar la gestión de personal trainers y clientes, permitiendo el registro, aprobación y seguimiento de planes de entrenamiento.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3"],
      highlights: [
        "Arquitectura cliente-servidor",
        "Diseño de base de datos relacional",
        "Modelado UML completo",
        "Control de roles (Cliente, Instructor, Secretario)",
        "Implementación en servidor web"
      ],
      status: "Proyecto Final - 2021",
      institution: "Colegio Presbiteriano Cerritos - Paraguay"
    },
    {
      type: "Freelance",
      title: "Dulce Antojo - Página Web",
      institution: "Proyecto Personal",
      status: "Finalizado",
      description: "Landing page para repostería artesanal con catálogo de productos, contacto vía WhatsApp y diseño responsivo.",
      highlights: [
        "Diseño atractivo y cálido",
        "Formulario de pedidos con seña",
        "Integración con Google Maps y redes sociales"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Google Analytics", "WhatsApp API"],
      image: '/images/dulceantojo.png',
      link: "https://dulce-antojo-py.vercel.app/"
    },
    {
      type: "Freelance",
      title: "Torito - Prueba Página Web",
      institution: "Proyecto Personal",
      status: "Finalizado",
      description: "Landing page para pedidos de una hamburguesía con catálogo de productos, con carrito y detectando la ubicación del cliente, cálculo automático y diseño responsivo.",
      highlights: [
        "Diseño atractivo y cálido",
        "Formulario de pedidos con carrito de compras",
        "Integración con Google Maps de parte del cliente"
      ],
      tech: ["HTML", "CSS", "PHP", "Google Analytics", "WhatsApp API"],
      image: '/images/torito.png',
      link: "https://modelo-prueba-contacto.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-violet-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl top-1/3 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-violet-500/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              ME
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Sobre mí', href: '#sobre-mi' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Habilidades', href: '#habilidades' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-violet-400 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium">
              Estudiante de Análisis de Sistemas
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-amber-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
                Matías Ramon
              </span>
              <br />
              <span className="text-slate-200">Espinola Villalba</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Desarrollador en formación especializado en análisis de sistemas, programación y bases de datos.
              Actualmente trabajando en mi tesis sobre rehabilitación muscular con tecnología Kinect.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#contacto"
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-amber-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Contactar
              </a>
              <a
                href="#proyectos"
                className="px-8 py-4 border border-slate-700 rounded-lg font-semibold hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300"
              >
                Ver Proyectos
              </a>
            </div>
            <div className="flex gap-6 pt-6">
              <a href="https://github.com/matiasespinola2003-netizen" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/matias-espinola-19a2363ab" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:matiasespinola2003@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-amber-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-amber-500 rounded-xl flex items-center justify-center text-2xl font-bold">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold">Matías Espinola</h3>
                  <p className="text-slate-400">22 años</p>
                </div>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-violet-400" />
                  <span>Paso de Oro/Villa Patricia, Ypané</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-violet-400" />
                  <span>0986370000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-violet-400" />
                  <span>matiasespinola2003@gmail.com</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Estudiante del último semestre — tesista en Análisis de Sistemas con conocimientos en programación,
                  bases de datos e informática. Apasionado por seguir aprendiendo y trabajar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-violet-700 py-4">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-white font-semibold text-sm tracking-wide flex items-center gap-3">
              {item}
              <span className="text-amber-400 text-lg">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Sobre mí
            </h2>
            <p className="text-slate-400 text-lg">Conoce un poco más sobre mi trayectoria</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <User size={20} />
                </div>
                <h3 className="text-2xl font-bold">Mi historia</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Soy Matías Espinola, estudiante del último año de Análisis de Sistemas en la
                <span className="text-violet-400 font-semibold"> Universidad Católica Ntra. Sra. de la Asunción</span>.
                Mi pasión por la tecnología nació en el colegio, donde me gradué como Mejor Egresado del Nivel Medio.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                A lo largo de mi carrera he desarrollado sistemas web, aplicaciones de gestión y proyectos freelance.
                Actualmente estoy desarrollando mi tesis sobre rehabilitación muscular con tecnología Kinect,
                combinando <span className="text-amber-400 font-semibold">visión artificial y medicina</span> para impactar positivamente la vida de las personas.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Me interesa seguir creciendo en el desarrollo fullstack, el análisis de datos y la computación en la nube.
                Estoy disponible para proyectos freelance, colaboraciones académicas y oportunidades laborales.
              </p>
              <a
                href="https://wa.me/595986370000?text=Hola%20Mat%C3%ADas,%20quiero%20hablar%20contigo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-violet-500 to-amber-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Hablemos por WhatsApp
              </a>
            </div>

            {/* Skill Bars */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                  <Code size={20} />
                </div>
                <h3 className="text-2xl font-bold">Nivel de dominio</h3>
              </div>
              {mainSkills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-violet-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-amber-500 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-violet-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Freelance Projects — Visual Showcase */}
      <section id="proyectos" className="py-16 md:py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">✦ Proyectos freelance ✦</p>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Algunos de mis trabajos
            </h2>
            <p className="text-slate-400 text-lg">Sitios web reales entregados a clientes</p>
          </div>

          {/* Dulce Antojo */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16 md:mb-28">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
                Landing page · Repostería artesanal
              </div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent leading-tight">
                Dulce Antojo
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Diseñé y desarrollé una <strong className="text-white">landing page completa</strong> para una repostería artesanal de Ypané, Paraguay.
                El sitio incluye un catálogo de productos, formulario de pedido con <strong className="text-amber-400">seña del 50%</strong>,
                integración con WhatsApp e Instagram y mapa de ubicación para facilitar el contacto con clientes.
              </p>
              <ul className="space-y-2 text-slate-300">
                {['Catálogo de productos con categorías', 'Formulario de pedido con depósito', 'Integración WhatsApp y Google Maps', 'Diseño responsivo mobile-first'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Google Analytics'].map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300">{t}</span>
                ))}
              </div>
              <a
                href="https://dulce-antojo-py.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-amber-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Ver sitio en vivo →
              </a>
            </div>
            <Carousel
              images={['/images/dulceantojo-1.png', '/images/dulceantojo-2.png', '/images/dulceantojo-3.png']}
              alt="Dulce Antojo"
            />
          </div>

          {/* El Torito */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Carousel
                images={['/images/torito-1.png', '/images/torito-2.png']}
                alt="El Torito"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
                Sistema de pedidos · Hamburguesería
              </div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent leading-tight">
                El Torito
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Sistema de pedidos web para hamburguesería con <strong className="text-amber-400">carrito de compras</strong> y
                una funcionalidad destacada: <strong className="text-white">detección automática de la ubicación del cliente</strong> para
                calcular el costo de delivery según la distancia al local en tiempo real.
              </p>
              <ul className="space-y-2 text-slate-300">
                {['Carrito de compras interactivo', 'Geolocalización automática del cliente', 'Cálculo de delivery por distancia', 'Menú con precios en Guaraníes', 'Envío del pedido por WhatsApp'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-violet-400">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {['HTML', 'CSS', 'PHP', 'Geolocation API', 'WhatsApp API'].map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300">{t}</span>
                ))}
              </div>
              <a
                href="https://modelo-prueba-contacto.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-violet-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Ver sitio en vivo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects — Cards */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-violet-400 font-semibold uppercase tracking-widest text-sm mb-3">✦ Proyectos académicos ✦</p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Desarrollo universitario
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "Tesis de Grado · En desarrollo",
                title: "Sistema de Rehabilitación Muscular con Kinect",
                institution: "Universidad Católica Ntra. Sra. de la Asunción",
                description: "Sistema automatizado de seguimiento corporal con Microsoft Kinect para supervisión remota de ejercicios terapéuticos. Captura de movimiento en tiempo real con análisis de ángulos articulares.",
                tech: ["Python", "OpenCV", "Kinect SDK", "MySQL"],
              },
              {
                type: "Proyecto Final · 2021",
                title: "Sistema Web de Gestión para Gimnasio ISPORT",
                institution: "Colegio Presbiteriano Cerritos",
                description: "Sistema web para gestión de personal trainers y clientes con arquitectura cliente-servidor, modelado UML completo y control de roles (Cliente, Instructor, Secretario).",
                tech: ["PHP", "MySQL", "HTML5", "CSS3"],
              }
            ].map((p, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300 h-full">
                  <div className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-xs font-medium mb-4">
                    {p.type}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                  <p className="text-amber-400 text-sm mb-4">{p.institution}</p>
                  <p className="text-slate-400 leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-xs text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-slate-400 text-lg">Tecnologías y herramientas que domino</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                  <Code size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Lenguajes</h3>
                <div className="space-y-3">
                  {skills.languages.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors duration-300">
                      <span className="text-violet-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                  <Layers size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Frameworks</h3>
                <div className="space-y-3">
                  {skills.frameworks.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors duration-300">
                      <span className="text-violet-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Database size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Bases de Datos</h3>
                <div className="space-y-3">
                  {skills.databases.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors duration-300">
                      <span className="text-amber-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Server size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Herramientas</h3>
                <div className="space-y-3">
                  {skills.tools.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors duration-300">
                      <span className="text-indigo-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Methodologies */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <GitBranch size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Metodologías</h3>
                <div className="space-y-3">
                  {skills.methodologies.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors duration-300">
                      <span className="text-indigo-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Cloud size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Nube</h3>
                <div className="space-y-3">
                  {skills.cloud.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors duration-300">
                      <span className="text-indigo-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Experiencia y Formación
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 to-amber-500"></div>

            {/* Experience Item */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-violet-500 rounded-full ring-4 ring-violet-500/20 z-10"></div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={20} className="text-violet-400" />
                  <h3 className="text-2xl font-bold">Analista — Pasante</h3>
                </div>
                <p className="text-violet-400 font-semibold mb-1">Empresa Cervepar</p>
                <p className="text-slate-400 text-sm mb-4">Jul 2021 — Ago 2021</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>Mantenimiento de computadoras y notebooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>Instalación y configuración de programas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Item */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-amber-500 rounded-full ring-4 ring-amber-500/20 z-10"></div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={20} className="text-amber-400" />
                  <h3 className="text-2xl font-bold">Formación Académica</h3>
                </div>

                <div className="mb-6">
                  <p className="text-amber-400 font-semibold">Universidad Católica Ntra. Sra. de la Asunción</p>
                  <p className="text-slate-300">Análisis de Sistemas</p>
                  <p className="text-slate-400 text-sm">2022 — Presente · Cursando el último año, en proceso de tesis</p>
                </div>

                <div className="mb-6 pt-4 border-t border-slate-700/50">
                  <p className="text-amber-400 font-semibold">Colegio Presbiteriano Cerritos</p>
                  <p className="text-slate-300">Bachiller Técnico en Servicios</p>
                  <p className="text-slate-400 text-sm">2018 — 2021 · Egresado</p>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={18} className="text-violet-400" />
                    <h4 className="font-semibold text-violet-400">Reconocimientos y Certificados</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Mejor alumno por Excelencia Académica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Mejor Egresado del Nivel Medio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Técnico en Servicios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>Certificado de Aplicación — Colegio Presbiteriano Cerritos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Title + WhatsApp card */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  Lo que necesitás saber sobre{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                    mis servicios de desarrollo
                  </span>
                </h2>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-amber-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-2">¿Tenés más preguntas?</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    ¿No encontraste la respuesta que buscabas?<br />
                    Escribime por WhatsApp y te respondo sin compromiso.
                  </p>
                  <a
                    href="https://wa.me/595986370000?text=Hola%20Mat%C3%ADas,%20tengo%20una%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    Escribir a WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Accordion */}
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-slate-700/50 rounded-xl overflow-hidden hover:border-violet-500/30 transition-colors duration-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left bg-gradient-to-br from-slate-800/30 to-slate-900/30 hover:bg-slate-800/50 transition-colors duration-300"
                  >
                    <span className="font-medium text-slate-200 pr-4">{item.question}</span>
                    <span className="text-violet-400 text-xl flex-shrink-0">
                      {openFaq === i ? '−' : '↗'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/30">
                      <p className="text-slate-400 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Estoy disponible para proyectos de desarrollo, colaboraciones académicas o consultas técnicas.
            No dudes en contactarme.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:matiasespinola2003@gmail.com" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-amber-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300">
                <Mail className="mx-auto mb-4 text-violet-400" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-slate-400">matiasespinola2003@gmail.com</p>
              </div>
            </a>

            <a href="tel:0986370000" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-amber-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                <Phone className="mx-auto mb-4 text-amber-400" size={32} />
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-sm text-slate-400">0986370000</p>
              </div>
            </a>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-amber-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                <MapPin className="mx-auto mb-4 text-indigo-400" size={32} />
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-sm text-slate-400">Paso de Oro, Ypané, Paraguay</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/595986370000?text=Hola%20Mat%C3%ADas,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-violet-500 to-amber-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400">
              © 2025 Matías Espinola. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/matiasespinola2003-netizen" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/matias-espinola-19a2363ab" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:matiasespinola2003@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
