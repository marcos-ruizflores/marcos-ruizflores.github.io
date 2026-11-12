export type Lang = 'en' | 'es';

export interface Project {
  label: string;
  title: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  visual: 'torii' | 'cripto' | 'thesis';
  // Alt text for the two screenshots: the main one and the smaller detail on top
  alt?: [string, string];
}

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  place: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

const toriiLinks = (live: string, source: string) => [
  { label: live, href: 'https://www.toriitravel.com' },
  { label: source, href: 'https://github.com/marcos-ruizflores/Torii' },
];

const en = {
  meta: {
    title: 'Marcos Ruiz-Flores · Backend Software Engineer',
    description:
      'Backend software engineer in Barcelona. Java, Spring Boot and microservices in production at Allianz Technology.',
  },
  skip: 'Skip to content',
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
  langLabel: 'Language',
  menu: 'Menu',
  hero: {
    badge: 'Open to new opportunities',
    role: 'Backend Software Engineer',
    intro:
      'I build Java and Spring Boot services that run in production, and I like owning them end to end: from the first design to fixing them when something breaks.',
    primary: 'See my work',
    cv: 'Download CV',
    photoAlt: 'Photo of Marcos Ruiz-Flores',
    typed: ['Java and Spring Boot in production', 'Event-driven services with Kafka', 'APIs other teams enjoy using', 'Owning services end to end'],
    stat: { value: '1 year', label: 'of backend at Allianz' },
    location: 'Barcelona, Spain',
  },
  about: {
    tag: 'About me',
    title: 'Backend developer focused on Java',
    lead: 'Computer engineer from Barcelona. I spend my days building microservices at Allianz Technology and part of my free time building my own products.',
    body: 'I care about code that is easy to change: simple designs, good tests and services you can actually debug when something goes wrong in production. I also use AI coding tools every day, and I enjoy figuring out where they help and where they need a human eye.',
    facts: [
      { value: '1+ year', label: 'building services in production' },
      { value: 'Torii', label: 'my own product, live and running' },
      { value: '3', label: 'languages: Spanish, Catalan, English' },
    ],
    timeline: [
      { period: 'Nov 2025 – now', title: 'Software Engineer at Allianz Technology', detail: 'Backend · Java and Spring Boot', current: true },
      { period: '2024 – 2026', title: 'Teaching Assistant at La Salle', detail: 'Operating Systems, Systems Administration, Databases', current: false },
      { period: '2020 – 2026', title: 'BSc in Computer Engineering', detail: 'La Salle Campus Barcelona', current: false },
    ],
  },
  experience: {
    tag: 'Experience',
    title: "Where I've worked",
    current: 'Current',
    jobs: [
      {
        id: 'allianz',
        company: 'Allianz Technology',
        role: 'Software Engineer (Backend)',
        period: 'Nov 2025 – now',
        place: 'Barcelona',
        current: true,
        bullets: [
          'Build and maintain Java and Spring Boot microservices for an enterprise insurance pricing platform, from technical design to production support.',
          'Design REST APIs and integrations with internal and external systems, plus event-driven messaging with Kafka, ActiveMQ and Apache Camel.',
          'Track down and fix production issues across distributed services.',
          'Write unit and integration tests with JUnit and Mockito and take part in code reviews.',
          'Ship containerized services to Kubernetes and AWS through Jenkins pipelines, in an international Scrum team that works in English.',
        ],
        tech: ['Java', 'Spring Boot', 'Kafka', 'ActiveMQ', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      },
      {
        id: 'lasalle',
        company: 'La Salle Campus Barcelona',
        role: 'Teaching Assistant',
        period: 'Sep 2024 – Jul 2026',
        place: 'Barcelona',
        current: false,
        bullets: [
          'Helped students in Operating Systems, Systems Administration and Databases: C, concurrency, Linux, Bash, PostgreSQL, Oracle and MongoDB.',
          'Reviewed assignments, debugged code with students and explained concepts to people with very different levels.',
        ],
        tech: ['C', 'Linux', 'Bash', 'PostgreSQL', 'Oracle', 'MongoDB'],
      },
    ] satisfies Job[],
  },
  projects: {
    tag: 'Projects',
    title: 'Selected work',
    items: [
      {
        label: 'Personal project · Live',
        title: 'Torii · flight deal search engine',
        description:
          'Finds the cheapest flights across a whole range of holiday dates. A sliding-window engine checks hundreds of date combinations in parallel with Java 21 virtual threads, switches provider automatically when one fails, and caches results for longer the further away the trip is. It also has accounts, usage plans and price history. I designed, built and run it on my own.',
        tech: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'React', 'TypeScript'],
        links: toriiLinks('Live site', 'Source'),
        visual: 'torii',
        alt: [
          'Torii search form and departures board for Barcelona to Tokyo, with price verdicts',
          'Torii route map and 30-day price history chart',
        ],
      },
      {
        label: 'Personal project',
        title: 'CriptoBalance · crypto portfolio tracker',
        description:
          'Log your buys and sells and see what each position is worth right now, with profit and loss calculated from live Binance prices. It has price and profit alerts by email, history charts, CSV import and export, and a small command-line version.',
        tech: ['Python', 'FastAPI', 'MongoDB', 'React', 'Vite'],
        links: [
          { label: 'Live demo', href: 'https://marcos-ruizflores.github.io/criptoBalance/' },
          { label: 'Source', href: 'https://github.com/marcos-ruizflores/criptoBalance' },
        ],
        visual: 'cripto',
        alt: [
          'CriptoBalance overview with portfolio value, positions with profit and loss per coin, and allocation',
          'CriptoBalance three-month Bitcoin price chart with a hover tooltip',
        ],
      },
      {
        label: "Bachelor's thesis",
        title: 'Quantum computing vs. today’s cryptography',
        description:
          'I ran Shor’s and Grover’s algorithms on real 156-qubit IBM Quantum processors and benchmarked the NIST post-quantum algorithms (ML-KEM, ML-DSA, SLH-DSA) against RSA-2048, to measure what moving to post-quantum cryptography really costs.',
        tech: ['Python', 'Qiskit', 'IBM Quantum', 'Cryptography'],
        links: [],
        visual: 'thesis',
        alt: [
          'Title slide of my thesis: Impact of quantum computing on cybersecurity',
          'Thesis slide: Grover success rate in an ideal simulator, a noisy simulator and real IBM hardware',
        ],
      },
    ] satisfies Project[],
  },
  skills: {
    tag: 'Skills',
    title: 'What I work with',
    groups: [
      { code: 'SRV', name: 'Backend', items: ['Java 17/21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices'] },
      { code: 'DB', name: 'Data and messaging', items: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Redis', 'Flyway', 'Kafka', 'ActiveMQ', 'Apache Camel'] },
      { code: 'OPS', name: 'Cloud and delivery', items: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'GitHub Actions', 'Git', 'Linux'] },
      { code: 'QA', name: 'Quality', items: ['JUnit', 'Mockito', 'Integration tests', 'Clean Code', 'SOLID', 'Code reviews'] },
      { code: 'UI', name: 'Frontend', items: ['React', 'TypeScript', 'Vue.js', 'Tailwind', 'HTML', 'CSS'] },
      { code: 'ETC', name: 'Other', items: ['Python', 'C', 'Claude Code', 'Agile / Scrum'] },
    ],
  },
  education: {
    tag: 'Education',
    title: 'Education',
    degree: 'BSc in Computer Engineering',
    school: 'La Salle Campus Barcelona',
    period: '2020 – 2026',
    thesis: 'Thesis: Impact of Quantum Computing on Cybersecurity.',
    status: 'Completed',
  },
  contact: {
    tag: 'Contact',
    title: "Let's talk",
    text: 'I’m open to new backend roles. The quickest way to reach me is by email, but LinkedIn works too.',
    email: 'Send an email',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: { built: 'Built with Astro', rights: 'Marcos Ruiz-Flores' },
};

export type Content = typeof en;

const es: Content = {
  meta: {
    title: 'Marcos Ruiz-Flores · Desarrollador Backend',
    description:
      'Desarrollador backend en Barcelona. Java, Spring Boot y microservicios en producción en Allianz Technology.',
  },
  skip: 'Saltar al contenido',
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    education: 'Formación',
    contact: 'Contacto',
  },
  theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
  langLabel: 'Idioma',
  menu: 'Menú',
  hero: {
    badge: 'Abierto a nuevas oportunidades',
    role: 'Desarrollador Backend',
    intro:
      'Construyo servicios con Java y Spring Boot que funcionan en producción, y me gusta hacerme cargo de ellos de principio a fin: desde el primer diseño hasta arreglarlos cuando algo falla.',
    primary: 'Ver proyectos',
    cv: 'Descargar CV',
    photoAlt: 'Foto de Marcos Ruiz-Flores',
    typed: ['Java y Spring Boot en producción', 'Servicios por eventos con Kafka', 'APIs fáciles de usar', 'Servicios de principio a fin'],
    stat: { value: '1 año', label: 'de backend en Allianz' },
    location: 'Barcelona, España',
  },
  about: {
    tag: 'Sobre mí',
    title: 'Desarrollador backend centrado en Java',
    lead: 'Ingeniero informático de Barcelona. Paso el día construyendo microservicios en Allianz Technology y parte de mi tiempo libre creando mis propios productos.',
    body: 'Me importa que el código sea fácil de cambiar: diseños sencillos, buenos tests y servicios que se puedan depurar cuando algo falla en producción. También uso herramientas de IA para programar a diario, y me gusta descubrir dónde ayudan y dónde hace falta el criterio de una persona.',
    facts: [
      { value: '+1 año', label: 'construyendo servicios en producción' },
      { value: 'Torii', label: 'mi propio producto, en marcha' },
      { value: '3', label: 'idiomas: castellano, catalán e inglés' },
    ],
    timeline: [
      { period: 'Nov. 2025 – hoy', title: 'Software Engineer en Allianz Technology', detail: 'Backend · Java y Spring Boot', current: true },
      { period: '2024 – 2026', title: 'Profesor ayudante en La Salle', detail: 'Sistemas Operativos, Administración de Sistemas, Bases de Datos', current: false },
      { period: '2020 – 2026', title: 'Grado en Ingeniería Informática', detail: 'La Salle Campus Barcelona', current: false },
    ],
  },
  experience: {
    tag: 'Experiencia',
    title: 'Dónde he trabajado',
    current: 'Actual',
    jobs: [
      {
        id: 'allianz',
        company: 'Allianz Technology',
        role: 'Software Engineer (Backend)',
        period: 'Nov. 2025 – hoy',
        place: 'Barcelona',
        current: true,
        bullets: [
          'Desarrollo y mantengo microservicios Java y Spring Boot para una plataforma de tarificación de seguros, desde el diseño técnico hasta el soporte en producción.',
          'Diseño APIs REST e integraciones con sistemas internos y externos, y mensajería orientada a eventos con Kafka, ActiveMQ y Apache Camel.',
          'Localizo y corrijo errores en producción entre servicios distribuidos.',
          'Escribo tests unitarios y de integración con JUnit y Mockito y participo en las code reviews.',
          'Despliego servicios en contenedores en Kubernetes y AWS con pipelines de Jenkins, en un equipo Scrum internacional que trabaja en inglés.',
        ],
        tech: ['Java', 'Spring Boot', 'Kafka', 'ActiveMQ', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      },
      {
        id: 'lasalle',
        company: 'La Salle Campus Barcelona',
        role: 'Profesor ayudante',
        period: 'Sep. 2024 – jul. 2026',
        place: 'Barcelona',
        current: false,
        bullets: [
          'Ayudé a estudiantes en Sistemas Operativos, Administración de Sistemas y Bases de Datos: C, concurrencia, Linux, Bash, PostgreSQL, Oracle y MongoDB.',
          'Corregía prácticas, depuraba código con los alumnos y explicaba conceptos a personas de niveles muy distintos.',
        ],
        tech: ['C', 'Linux', 'Bash', 'PostgreSQL', 'Oracle', 'MongoDB'],
      },
    ],
  },
  projects: {
    tag: 'Proyectos',
    title: 'Trabajo destacado',
    items: [
      {
        label: 'Proyecto personal · En producción',
        title: 'Torii · buscador de ofertas de vuelos',
        description:
          'Encuentra los vuelos más baratos dentro de todo un rango de fechas de vacaciones. Un motor de ventana deslizante comprueba cientos de combinaciones de fechas en paralelo con los virtual threads de Java 21, cambia de proveedor automáticamente cuando uno falla y guarda en caché los resultados más tiempo cuanto más lejano es el viaje. También tiene cuentas, planes de uso e histórico de precios. Lo he diseñado, desarrollado y lo mantengo yo solo.',
        tech: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'React', 'TypeScript'],
        links: toriiLinks('Ver web', 'Código'),
        visual: 'torii',
        alt: [
          'Formulario de búsqueda de Torii y panel de salidas de Barcelona a Tokio, con el veredicto de precio',
          'Mapa de la ruta y gráfico del histórico de precios de 30 días en Torii',
        ],
      },
      {
        label: 'Proyecto personal',
        title: 'CriptoBalance · seguimiento de criptomonedas',
        description:
          'Registras tus compras y ventas y ves cuánto vale cada posición en este momento, con las ganancias y pérdidas calculadas con precios en directo de Binance. Tiene alertas de precio y de beneficio por email, gráficos de histórico, importación y exportación en CSV y una pequeña versión de terminal.',
        tech: ['Python', 'FastAPI', 'MongoDB', 'React', 'Vite'],
        links: [
          { label: 'Ver demo', href: 'https://marcos-ruizflores.github.io/criptoBalance/' },
          { label: 'Código', href: 'https://github.com/marcos-ruizflores/criptoBalance' },
        ],
        visual: 'cripto',
        alt: [
          'Resumen de CriptoBalance con el valor de la cartera, las posiciones con la ganancia de cada moneda y la distribución',
          'Gráfico del precio de Bitcoin en los últimos tres meses en CriptoBalance',
        ],
      },
      {
        label: 'Trabajo de fin de grado',
        title: 'Computación cuántica frente a la criptografía actual',
        description:
          'Ejecuté los algoritmos de Shor y Grover en procesadores reales de IBM Quantum de 156 cúbits y comparé los algoritmos post-cuánticos del NIST (ML-KEM, ML-DSA, SLH-DSA) con RSA-2048, para medir lo que cuesta de verdad migrar a criptografía post-cuántica.',
        tech: ['Python', 'Qiskit', 'IBM Quantum', 'Criptografía'],
        links: [],
        visual: 'thesis',
        alt: [
          'Portada de mi TFG: Impacto de la computación cuántica en la ciberseguridad',
          'Diapositiva del TFG: acierto de Grover en simulador ideal, simulador con ruido y hardware real de IBM',
        ],
      },
    ],
  },
  skills: {
    tag: 'Habilidades',
    title: 'Con qué trabajo',
    groups: [
      { code: 'SRV', name: 'Backend', items: ['Java 17/21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'APIs REST', 'Microservicios'] },
      { code: 'DB', name: 'Datos y mensajería', items: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Redis', 'Flyway', 'Kafka', 'ActiveMQ', 'Apache Camel'] },
      { code: 'OPS', name: 'Cloud y despliegue', items: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'GitHub Actions', 'Git', 'Linux'] },
      { code: 'QA', name: 'Calidad', items: ['JUnit', 'Mockito', 'Tests de integración', 'Clean Code', 'SOLID', 'Code reviews'] },
      { code: 'UI', name: 'Frontend', items: ['React', 'TypeScript', 'Vue.js', 'Tailwind', 'HTML', 'CSS'] },
      { code: 'ETC', name: 'Otros', items: ['Python', 'C', 'Claude Code', 'Agile / Scrum'] },
    ],
  },
  education: {
    tag: 'Formación',
    title: 'Formación',
    degree: 'Grado en Ingeniería Informática',
    school: 'La Salle Campus Barcelona',
    period: '2020 – 2026',
    thesis: 'TFG: Impacto de la computación cuántica en la ciberseguridad.',
    status: 'Completado',
  },
  contact: {
    tag: 'Contacto',
    title: 'Hablemos',
    text: 'Estoy abierto a nuevas oportunidades como desarrollador backend. Lo más rápido es escribirme un email, pero también me encuentras en LinkedIn.',
    email: 'Enviar un email',
    copy: 'Copiar email',
    copied: 'Copiado',
  },
  footer: { built: 'Hecha con Astro', rights: 'Marcos Ruiz-Flores' },
};

export const content: Record<Lang, Content> = { en, es };
