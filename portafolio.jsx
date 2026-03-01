import React, { useState, useEffect } from 'react';
import imgDulceAntojo from './assets/dulceantojo.png';
import imgTorito from './assets/torito.png';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Cloud
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    'AWS (EC2, S3)', 'Firebase','Hosting y Deploy Web'
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
    tech:["HTML", "CSS", "JavaScript", "Google Analytics", "WhatsApp API"],
    image: imgDulceAntojo, // ruta de tu captura o logo
    link: "https://dulce-antojo-py.vercel.app/" // demo online o GitHub Pages
  },
  {
    type: "Freelance",
    title: "Torito - Prueba Página Web",
    institution: "Proyecto Personal",
    status: "Finalizado",
    description: "Landing page para pedidos deuna hamburguesía con catálogo de productos, con carrito y detectando la ubicación del cliente, calculo automatico y diseño responsivo.",
    highlights: [
      "Diseño atractivo y cálido",
      "Formulario de pedidos con carrito de compras",
      "Integración con Google Maps de parte del cliente"
    ],
    tech:["HTML", "CSS", "PHP", "Google Analytics", "WhatsApp API"],
    image: imgTorito, // ruta de tu captura o logo
    link: "https://modelo-prueba-contacto.vercel.app/" // demo online o GitHub Pages
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl top-1/3 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-96 h-96 bg-violet-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-cyan-500/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              ME
            </div>
            <div className="flex gap-8">
              {['Inicio', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              Estudiante de Análisis de Sistemas
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
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
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Contactar
              </a>
              <a 
                href="#proyectos" 
                className="px-8 py-4 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                Ver Proyectos
              </a>
            </div>
            <div className="flex gap-6 pt-6">
              <a href="https://github.com/matiasespinola2003-netizen" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/matias-espinola-19a2363ab" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:matiasespinola2003@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl font-bold">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold">Matías Espinola</h3>
                  <p className="text-slate-400">22 años</p>
                </div>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-cyan-400" />
                  <span>Paso de Oro/Villa Patricia, Ypané</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-cyan-400" />
                  <span>0986370000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-cyan-400" />
                  <span>matiasespinola2003@gmail.com</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Estudiante del último semestre - tesista en Análisis de Sistemas con conocimientos en programación, 
                  bases de datos e informática. Apasionado por seguir aprendiendo y trabajar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <p className="text-slate-400 text-lg">Trabajos académicos y desarrollo de software</p>
          </div>

          {projects.map((project, idx) => (
            <div key={idx} className="relative group mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-3">
                      {project.type}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400">{project.institution}</p>
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm font-medium self-start md:self-auto">
                    {project.status}
                  </div>
                </div>

                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                 {project.image && (
        <img src={project.image} alt={project.title} className="rounded-lg mb-6 w-full max-w-md object-cover" />
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition" >
          Ver Demo
        </a>
      )}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Características Principales</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-emerald-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-slate-400 text-lg">Tecnologías y herramientas que domino</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Code size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Lenguajes</h3>
                <div className="space-y-3">
                  {skills.languages.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                      <span className="text-cyan-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
             {/* Frameworks */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Layers size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">frameworks</h3>
                <div className="space-y-3">
                  {skills.frameworks.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                      <span className="text-cyan-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>      
            {/* Databases */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Database size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Bases de Datos</h3>
                <div className="space-y-3">
                  {skills.databases.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300">
                      <span className="text-emerald-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                  <Server size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Herramientas</h3>
                <div className="space-y-3">
                  {skills.tools.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors duration-300">
                      <span className="text-violet-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Methodologies */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                 <GitBranch  size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Metodologias</h3>
                <div className="space-y-3">
                  {skills.methodologies.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors duration-300">
                      <span className="text-violet-400">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
               {/* Cloud  */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                 <Cloud size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">Nube</h3>
                <div className="space-y-3">
                  {skills.cloud.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors duration-300">
                      <span className="text-violet-400">▹</span>
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
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Experiencia
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500"></div>
            
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-cyan-500/20"></div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Analista - Pasante</h3>
                    <p className="text-cyan-400 font-semibold">Empresa Cervepar</p>
                  </div>
                  <span className="text-slate-400">Jul 2021 - Ago 2021</span>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    <span>Mantenimiento de computadoras y notebooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    <span>Instalación y configuración de programas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-500/20"></div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">Formación Académica</h3>
                  <p className="text-emerald-400 font-semibold">Universidad Católica Ntra. Sra. de la Asunción</p>
                  <p className="text-slate-400">Analisis de Sistemas | 2022 - Presente</p>
                  <p className="text-slate-500 text-sm mt-2">Cursando el ultimo año culminando la tesis</p>
                </div>
                <div className="mb-4">
                 
                  <p className="text-emerald-400 font-semibold">Colegio Prebisteriano Ceritos</p>
                  <p className="text-slate-400">Bachiller Técnico en Servicios| 2018 - 2021</p>
                  <p className="text-slate-500 text-sm mt-2">Terminado</p>
                </div>
                <div className="pt-4 border-t border-slate-700/50">
                  <h4 className="font-semibold text-cyan-400 mb-2">Certificados Obtenidos:</h4>
                  <ul className="space-y-1 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Mejor alumno por Excelencia Académica</span>
                    </li>
                     <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Mejor Egresado del Nivel Medio</span>
                    </li>
                     <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Técnico en Servicios</span>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Estoy disponible para proyectos de desarrollo, colaboraciones académicas o consultas técnicas.
            No dudes en contactarme.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:matiasespinola2003@gmail.com" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                <Mail className="mx-auto mb-4 text-cyan-400" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-slate-400">matiasespinola2003@gmail.com</p>
              </div>
            </a>

            <a href="tel:0986370000" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
                <Phone className="mx-auto mb-4 text-emerald-400" size={32} />
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-sm text-slate-400">0986370000</p>
              </div>
            </a>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300">
                <MapPin className="mx-auto mb-4 text-violet-400" size={32} />
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-sm text-slate-400">Paso de Oro, Ypané, Paraguay</p>
              </div>
            </div>
          </div>

          <a 
  href="https://wa.me/595986370000?text=Hola%20Matías,%20quiero%20más%20información%20sobre%20tus%20servicios" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
>
  Enviar un mensaje
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
              <a href="https://github.com/matiasespinola2003-netizen" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/matias-espinola-19a2363ab" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:matiasespinola2003@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
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