// Todo el contenido del portafolio vive acá: editar este archivo basta
// para cambiar textos, niveles, proyectos o la postulación activa.

export type Level = 1 | 2 | 3 | 4;

export const LEVEL_LABEL: Record<Level, string> = {
  1: "Básico",
  2: "Intermedio",
  3: "Avanzado",
  4: "Experto",
};

export interface Link {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: Level;
}

export const profile = {
  name: "Israel Andersen",
  headline: "Platform Engineer Full",
  roles: [
    "Programador Senior Golang",
    "Backend & Full Stack",
    "Multi-cloud",
    "IA y bots conversacionales",
    "Creador de Asterion",
    "Modelado 3D",
  ],
  summary:
    "Soy programador senior especializado en Go (Golang), con experiencia en desarrollo backend, APIs, herramientas CLI y plataformas de gestión. Construyo productos desde su arquitectura hasta su implementación y despliegue, combinando desarrollo de software, infraestructura cloud y automatización.",
  focus:
    "Mi trabajo abarca tanto herramientas para desarrolladores como aplicaciones empresariales orientadas a resolver necesidades operativas concretas.",
  location: "Chile",
  email: "israel.ing99@gmail.com",
  phone: "+56 9 5683 4949",
  phoneHref: "tel:+56956834949",
  whatsapp: "https://wa.me/56956834949",
  github: "https://github.com/Tarafagat",
  asterion: "https://www.asterioncloud.com",
  fuelity: "https://www.fuelityx.com",
};

// ── Postulación activa ──────────────────────────────────────────────
// Poner en null para ocultar la sección (por ejemplo, al postular a otro
// cargo con el mismo portafolio).

export interface JobRequirement {
  requirement: string;
  skills: Skill[];
  evidence: string;
  links?: Link[];
}

export interface JobApplication {
  title: string;
  company: string;
  client: string;
  modality: string;
  pitch: string;
  requirements: JobRequirement[];
}

export const jobApplication: JobApplication | null = {
  title: "Desarrollador Golang",
  company: "3IT",
  client: "Tanner",
  modality: "Híbrida",
  pitch:
    "Desarrollo en Go a diario: Asterion Core —CLI, runtime, agentes y motor multi-nube— está escrito en Go. Documento mis APIs con OpenAPI, he integrado firma electrónica con certificados digitales para el SII y opero en las principales nubes, incluida Azure. Estos son los requisitos del cargo y dónde está mi experiencia en cada uno.",
  requirements: [
    {
      requirement: "Al menos 3 años desarrollando con Go",
      skills: [{ name: "Go / Golang", level: 4 }],
      evidence:
        "Asterion Core está construido en Go: CLI, runtime local, agentes de estado y métricas, sistema de plugins y motor de aprovisionamiento multi-nube. También AGCA, mi arquitectura cognitiva para bots (grafo, agentes concurrentes con goroutines, contratos de herramientas), el contrato de plugins y el servidor que publica este portafolio.",
      links: [
        { label: "asterion-core", href: "https://github.com/Tarafagat/asterion-core" },
        { label: "AGCA", href: "https://github.com/Tarafagat/asterion-graph-cognitive-architecture" },
        { label: "asterion-plugin-contract", href: "https://github.com/Tarafagat/asterion-plugin-contract" },
      ],
    },
    {
      requirement: "Node.js",
      skills: [
        { name: "Node.js", level: 3 },
        { name: "TypeScript", level: 3 },
      ],
      evidence:
        "Ecosistema JavaScript/TypeScript sobre Node.js: aplicaciones React + TypeScript con Vite y pnpm en Asterion Cloud, Fuelity, Botillerías y R&B Auto Parts, además del tooling de build de los plugins de Asterion.",
    },
    {
      requirement: "Metodología ágil",
      skills: [{ name: "Metodologías ágiles", level: 3 }],
      evidence:
        "Entregas iterativas y versionadas: cada repositorio mantiene CHANGELOG por versión, y los productos crecen por incrementos (Fuelity Plus → Fuelity X → Fuelity H).",
    },
    {
      requirement: "Integración con E-Cert",
      skills: [{ name: "Firma electrónica y certificados digitales", level: 3 }],
      evidence:
        "En Asterion SII implementé la gestión de certificados digitales PFX/PKCS#12 (X.509), la firma XMLDSig, el timbre TED y el envío de documentos al SII. Es el mismo tipo de certificado de firma electrónica que emite E-Cert.",
      links: [{ label: "asterion-sii", href: "https://github.com/Tarafagat/asterion-sii" }],
    },
    {
      requirement: "MongoDB",
      skills: [
        { name: "MongoDB", level: 2 },
        { name: "Redis", level: 3 },
        { name: "MySQL / PostgreSQL", level: 3 },
      ],
      evidence:
        "Modelado de datos relacional y NoSQL en producción: MySQL y Redis en Fuelity Plus, PostgreSQL en Asterion SII y Firebase en Botillerías y R&B Auto Parts.",
    },
    {
      requirement: "Microsoft Azure: API Management, Application Insights, Azure Functions y Service Bus",
      skills: [
        { name: "API Management", level: 3 },
        { name: "Azure Functions", level: 3 },
        { name: "Service Bus", level: 3 },
        { name: "Application Insights", level: 3 },
      ],
      evidence:
        "Asterion Core incluye un motor de aprovisionamiento multi-nube (AWS, Azure, GCP y OCI). Trabajo con APIs gestionadas, funciones serverless, mensajería y observabilidad, y traduzco una arquitectura de una nube a otra (ver la sección Multi-cloud).",
      links: [{ label: "asterion-core", href: "https://github.com/Tarafagat/asterion-core" }],
    },
    {
      requirement: "Azure DevOps, Git/Gitflow y Swagger/OpenAPI",
      skills: [
        { name: "Swagger / OpenAPI", level: 4 },
        { name: "Git / Gitflow", level: 4 },
        { name: "Azure DevOps", level: 2 },
      ],
      evidence:
        "Creé «asterion plugin from-openapi», que transforma una especificación OpenAPI en un plugin de Asterion, y cada plugin publica su api/openapi.yaml; en FastAPI documento con Swagger UI. Todo mi código vive en Git con CI en GitHub Actions, que se traslada directo a Azure Pipelines.",
      links: [
        { label: "Contrato OpenAPI", href: "https://github.com/Tarafagat/asterion-plugin-contract" },
        { label: "GitHub", href: "https://github.com/Tarafagat" },
      ],
    },
  ],
};

// ── Proyectos y sus propuestas ──────────────────────────────────────

export interface Project {
  name: string;
  tagline: string;
  description: string;
  proposal: string;
  features: string[];
  tech: string[];
  links: Link[];
  badge?: string;
}

export const projects: Project[] = [
  {
    name: "Asterion Core",
    tagline: "Runtime y herramientas de infraestructura en Go",
    description:
      "Núcleo del ecosistema Asterion. Reúne una interfaz de línea de comandos, un runtime local y adaptadores para conectar aplicaciones e infraestructura con proveedores cloud.",
    proposal:
      "Simplificar la ejecución, configuración y administración de proyectos desde una base extensible.",
    features: [
      "CLI para administrar proyectos, configuración y servicios",
      "Runtime para ejecutar aplicaciones localmente",
      "Integraciones con Google Cloud y Oracle Cloud; aprovisionamiento en AWS, Azure, GCP y OCI",
      "Agentes que reportan estado y métricas",
      "Plugins con contrato propio (asterion.plugin/v1) y generación desde OpenAPI",
    ],
    tech: ["Go", "Python", "Linux", "APIs cloud", "CLI"],
    links: [
      { label: "GitHub", href: "https://github.com/Tarafagat/asterion-core" },
      { label: "Plugin Contract", href: "https://github.com/Tarafagat/asterion-plugin-contract" },
      { label: "asterioncloud.com", href: "https://www.asterioncloud.com" },
    ],
    badge: "Go",
  },
  {
    name: "AGCA — Asterion Graph Cognitive Architecture",
    tagline: "Arquitectura cognitiva en Go para montar bots",
    description:
      "Arquitectura donde un grafo cognitivo, neuronas intercambiables, agentes especializados y la experiencia acumulada cooperan como una sola inteligencia, declarada desde un archivo .asterion. Es la base sobre la que se montan bots como Fuelity Bot.",
    proposal:
      "Bots que deciden de forma trazable y aprenden de sus resultados, sin ejecutar nada fuera de lo que su contrato autoriza.",
    features: [
      "Grafo cognitivo con nodos y relaciones tipadas, confianza y procedencia",
      "Contrato de neuronas independiente del modelo: el cerebro se cambia sin tocar el resto",
      "Agentes concurrentes con goroutines y concurrencia acotada",
      "Contratos de herramientas cerrados: solo se ejecuta lo declarado",
      "Cada decisión queda explicada: candidatos, puntajes y motivo",
      "Aprendizaje por experiencia y roles con herencia (deny siempre gana)",
    ],
    tech: ["Go", "Asterion Language", "Grafos", "Agentes"],
    links: [{ label: "GitHub", href: "https://github.com/Tarafagat/asterion-graph-cognitive-architecture" }],
    badge: "Go · IA",
  },
  {
    name: "Asterion Cloud",
    tagline: "Plataforma de administración",
    description:
      "Complementa Asterion Core con una interfaz web para administrar cuentas, proyectos e infraestructura.",
    proposal:
      "Conectar la ejecución local con la administración cloud y ofrecer una experiencia coherente para operar aplicaciones.",
    features: [
      "Gestión de usuarios y cuentas",
      "Asociación de instancias",
      "Facturación",
      "Funciones administrativas",
    ],
    tech: ["Python", "FastAPI", "React", "Integraciones externas"],
    links: [{ label: "asterioncloud.com", href: "https://www.asterioncloud.com" }],
  },
  {
    name: "Asterion SII",
    tagline: "Facturación electrónica y firma digital para Chile",
    description:
      "Motor tributario autocontenido: Documentos Tributarios Electrónicos (DTE), CAF, folios, timbre TED, firma XML y envío al SII, como plugin de Asterion o como servicio independiente.",
    proposal:
      "Que cualquier POS, ERP o ecommerce facture electrónicamente sin implementar el protocolo del SII desde cero.",
    features: [
      "Gestión de certificados digitales PFX/PKCS#12 (X.509)",
      "Firma XMLDSig y timbre TED",
      "Reserva atómica de folios y gestión de CAF",
      "Bóveda de secretos cifrada y archivo inmutable de XML",
      "Dashboard en React + TypeScript",
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "React"],
    links: [{ label: "GitHub", href: "https://github.com/Tarafagat/asterion-sii" }],
    badge: "Firma electrónica",
  },
  {
    name: "Fuelity",
    tagline: "Software para operaciones empresariales",
    description:
      "Conjunto de productos para digitalizar procesos de faenas: combustible, seguridad, salud y medio ambiente, y recursos humanos.",
    proposal:
      "Reunir en un mismo ecosistema la operación diaria de una faena: riesgos, combustible y personas.",
    features: [
      "Fuelity Plus: prevención de riesgos y gestión de faenas (incidentes y hallazgos, checklists, trabajadores, acciones y cierres con evidencias)",
      "Permisos por rol, notificaciones y paneles de administración",
      "Fuelity X: gestión de combustibles",
      "Fuelity H: recursos humanos (en desarrollo)",
    ],
    tech: ["Python", "FastAPI", "React", "MySQL", "Redis", "Firebase Hosting", "Cloudflare Tunnel"],
    links: [{ label: "fuelityx.com", href: "https://www.fuelityx.com" }],
  },
  {
    name: "Fuelity Bot",
    tagline: "Chat conversacional con IA local, basado en AGCA",
    description:
      "Asistente conversacional para Fuelity Plus construido sobre AGCA. Usa embeddings para entender cada mensaje y elegir la herramienta adecuada, y un cerebro Qwen 2.5 0.5B que corre localmente para procesar las solicitudes.",
    proposal:
      "Que el equipo de una faena consulte y gestione sus reportes conversando, con una IA que corre en infraestructura propia.",
    features: [
      "Consulta, creación y cierre de reportes GR, hallazgos e incidentes en español",
      "Embeddings para seleccionar las herramientas más relevantes antes de llamar al modelo",
      "Cerebro Qwen 2.5 0.5B vía Ollama: liviano, rápido y sin APIs externas",
      "Aislamiento por rol, empresa y faena, con autenticación JWT",
      "Si los embeddings fallan, sigue operando con todas las herramientas",
      "Desplegado como plugin de Asterion",
    ],
    tech: ["Python", "FastAPI", "AGCA", "Qwen 2.5 0.5B", "Ollama", "Embeddings", "MySQL", "Redis"],
    links: [
      { label: "AGCA", href: "https://github.com/Tarafagat/asterion-graph-cognitive-architecture" },
      { label: "fuelityx.com", href: "https://www.fuelityx.com" },
    ],
    badge: "IA",
  },
  {
    name: "Botillerías App",
    tagline: "Punto de venta y gestión para botillerías",
    description:
      "Sistema en producción para Botillería Druben, desplegado sobre la infraestructura de Asterion Cloud.",
    proposal:
      "Llevar un negocio de barrio a un sistema completo: venta, stock y reparto en una sola aplicación.",
    features: [
      "Caja, caja chica y control de cajas abiertas",
      "Ventas de mostrador y mayoristas, con reportes por categoría",
      "Inventario, stock y proveedores",
      "Delivery y despacho con repartidores",
      "Ofertas y combos",
    ],
    tech: ["React", "Firebase", "Asterion Cloud"],
    links: [{ label: "Abrir app", href: "https://botilleriasapp.asterioncloud.com/" }],
  },
  {
    name: "R&B Auto Parts Japan",
    tagline: "Catálogo de repuestos JDM",
    description:
      "Catálogo digital de repuestos importados de Japón para mecánicos, talleres y entusiastas, con información de piezas y disponibilidad.",
    proposal:
      "Acercar el inventario de un importador a sus clientes con un catálogo web rápido y siempre disponible.",
    features: ["Catálogo de piezas JDM", "Consulta de disponibilidad", "Información técnica por pieza"],
    tech: ["React", "Firebase Hosting"],
    links: [{ label: "Abrir app", href: "https://rybautoparts.web.app/" }],
  },
];

// ── Niveles de experticia ───────────────────────────────────────────

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes",
    skills: [
      { name: "Go / Golang", level: 4 },
      { name: "Python", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "JavaScript / Node.js", level: 3 },
      { name: "SQL", level: 3 },
      { name: "Bash", level: 3 },
    ],
  },
  {
    title: "Backend y APIs",
    skills: [
      { name: "APIs REST", level: 4 },
      { name: "Swagger / OpenAPI", level: 4 },
      { name: "Herramientas CLI", level: 4 },
      { name: "FastAPI", level: 3 },
      { name: "Lógica de negocio e integraciones", level: 3 },
      { name: "Firma electrónica (X.509, XMLDSig)", level: 3 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Vite / pnpm", level: 3 },
    ],
  },
  {
    title: "Datos",
    skills: [
      { name: "MySQL", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "Redis", level: 3 },
      { name: "Firebase", level: 3 },
      { name: "MongoDB", level: 2 },
    ],
  },
  {
    title: "Plataforma e infraestructura",
    skills: [
      { name: "Linux", level: 4 },
      { name: "Aprovisionamiento multi-nube", level: 4 },
      { name: "Docker", level: 3 },
      { name: "CI/CD (GitHub Actions)", level: 3 },
      { name: "Git / Gitflow", level: 4 },
      { name: "Azure DevOps", level: 2 },
      { name: "Observabilidad (agentes y métricas)", level: 3 },
    ],
  },
  {
    title: "Arquitectura y forma de trabajo",
    skills: [
      { name: "Sistemas modulares y plugins", level: 4 },
      { name: "Automatización", level: 4 },
      { name: "Control de acceso por roles", level: 3 },
      { name: "Metodologías ágiles", level: 3 },
    ],
  },
  {
    title: "IA y bots",
    skills: [
      { name: "Arquitecturas cognitivas (AGCA)", level: 4 },
      { name: "Bots conversacionales", level: 3 },
      { name: "Embeddings y búsqueda semántica", level: 3 },
      { name: "LLMs locales (Qwen, Ollama)", level: 3 },
    ],
  },
  {
    title: "3D",
    skills: [
      { name: "Modelado 3D", level: 3 },
      { name: "Three.js / WebGL", level: 3 },
    ],
  },
];

// ── Nubes ───────────────────────────────────────────────────────────

export interface Cloud {
  name: string;
  short: string;
  level: Level;
  note: string;
}

export const clouds: Cloud[] = [
  { name: "Amazon Web Services", short: "AWS", level: 3, note: "Cómputo, redes, IAM y almacenamiento; aprovisionamiento desde Asterion Core." },
  { name: "Microsoft Azure", short: "Azure", level: 3, note: "API Management, Azure Functions, Service Bus y Application Insights; aprovisionamiento desde Asterion Core." },
  { name: "Google Cloud", short: "GCP", level: 4, note: "Integración nativa en Asterion Core: conexión de cuentas, instancias y despliegue." },
  { name: "Oracle Cloud", short: "OCI", level: 4, note: "Integración nativa en Asterion Core: conexión de cuentas, instancias y despliegue." },
  { name: "Vercel", short: "Vercel", level: 3, note: "Proveedor de despliegue en la API de Asterion Cloud." },
  { name: "Cloudflare", short: "Cloudflare", level: 3, note: "Tunnel y DNS para exponer servicios de forma segura (Fuelity Plus)." },
  { name: "Firebase", short: "Firebase", level: 3, note: "Hosting y servicios para Fuelity Plus, Botillerías y R&B Auto Parts." },
];

// Mismo concepto, distinto nombre: así leo una arquitectura en cualquier nube.
export const cloudEquivalences: { concept: string; aws: string; azure: string; gcp: string; oci: string }[] = [
  { concept: "Gateway de APIs", aws: "API Gateway", azure: "API Management", gcp: "API Gateway / Apigee", oci: "API Gateway" },
  { concept: "Funciones serverless", aws: "Lambda", azure: "Azure Functions", gcp: "Cloud Run functions", oci: "OCI Functions" },
  { concept: "Mensajería", aws: "SQS / SNS", azure: "Service Bus", gcp: "Pub/Sub", oci: "Queue / Streaming" },
  { concept: "Observabilidad", aws: "CloudWatch", azure: "Application Insights", gcp: "Cloud Monitoring", oci: "Monitoring" },
  { concept: "Base de datos NoSQL", aws: "DynamoDB", azure: "Cosmos DB (API MongoDB)", gcp: "Firestore", oci: "NoSQL Database" },
];

// ── Modelado 3D ─────────────────────────────────────────────────────

export const modelingServices = [
  "Modelado low-poly y de piezas mecánicas",
  "Visualización de producto",
  "Escenas 3D interactivas para web (Three.js / WebGL)",
  "Optimización de modelos para tiempo real",
];
