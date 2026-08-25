interface Project {
  category: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  logoIcon?: string;
  logoSrc?: string;
  badges: {
    type: string;
    title: string;
  }[];
  images: string[];
  logoWidth?: number;
  logoHeight?: number;
  aosDelay?: string;
  codeUrl?: string;
}

export const proyectos: Project[] = [
  {
    category: "mobile",
    titleEs: "App Movil Financiera",
    titleEn: "Financial App",
    subtitleEs: "Proyecto Personal",
    subtitleEn: "Personal Project",
    descriptionEs: "Es una aplicación móvil que permite manejar las finanzas personales de forma rápida y eficiente, con herramientas como transacciones, gastos, ingresos, préstamos, salarios, formas de registrar transaciones con IA y más funciones en desarrollo.",
    descriptionEn: "It is a mobile application that allows users to manage their personal finances quickly and efficiently, with tools such as transactions, expenses, income, loans, salaries, ways to register transations with AI and more functions in development.",
    logoIcon: "ph ph-wallet text-6xl text-primary-600",
    logoSrc: "",
    badges: [
      { type: "typescript", title: "TypeScript" },
      { type: "reactnative", title: "React Native" },
      { type: "expo", title: "Expo" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "nativewind", title: "NativeWind" },
      { type: "react", title: "React.js" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/FinantialApp/1.png",
      "/src/assets/images/FinantialApp/2.png",
      "/src/assets/images/FinantialApp/3.png",
      "/src/assets/images/FinantialApp/4.png",
      "/src/assets/images/FinantialApp/5.png",
      "/src/assets/images/FinantialApp/6.png",
      "/src/assets/images/FinantialApp/7.png",
      "/src/assets/images/FinantialApp/8.png",
      "/src/assets/images/FinantialApp/9.png",
      "/src/assets/images/FinantialApp/10.png",
      "/src/assets/images/FinantialApp/11.png",
      "/src/assets/images/FinantialApp/12.png"
    ]
  },
  {
    category: "mobile",
    titleEs: "Nextti IA",
    titleEn: "Nextti AI",
    subtitleEs: "Nextti Solutions",
    subtitleEn: "Nextti Solutions",
    descriptionEs: "Es una aplicación móvil que sirve como consultor usando inteligencia artificial para el manejo de tu negocio, permitiendo saber cosas de tus ventas, inventario, gastos y mucho más en segundos.",
    descriptionEn: "It is a mobile application that serves as a consultant using artificial intelligence for the management of your business, allowing you to know things about your sales, inventory, expenses and much more in seconds.",
    logoIcon: "",
    logoSrc: "/src/assets/images/NexttiAI/icon.png",
    badges: [
      { type: "typescript", title: "TypeScript" },
      { type: "reactnative", title: "React Native" },
      { type: "expo", title: "Expo" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "nativewind", title: "NativeWind" },
      { type: "react", title: "React.js" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/NexttiAI/01.png",
      "/src/assets/images/NexttiAI/022.png",
      "/src/assets/images/NexttiAI/02.png",
      "/src/assets/images/NexttiAI/03.png",
      "/src/assets/images/NexttiAI/04.png",
      "/src/assets/images/NexttiAI/05.png",
      "/src/assets/images/NexttiAI/06.png",
    ]
  },
  {
    category: "mobile",
    titleEs: "Despachos App",
    titleEn: "Dispatch App",
    subtitleEs: "Nextti Solutions",
    subtitleEn: "Nextti Solutions",
    descriptionEs: "Es una aplicación móvil cuyo propósito es ofrecer a las empresas retail de nuestro ecosistema Odoo una solución para gestionar sus despachos de forma rápida y eficiente.",
    descriptionEn: "It is a mobile application whose purpose is to offer retail companies within our Odoo ecosystem a solution to manage their dispatches quickly and efficiently.",
    logoIcon: "ph ph-truck text-6xl text-primary-600",
    badges: [
      { type: "typescript", title: "TypeScript" },
      { type: "reactnative", title: "React Native" },
      { type: "expo", title: "Expo" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "nativewind", title: "NativeWind" },
      { type: "react", title: "React.js" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/DespachosApp/1.png",
      "/src/assets/images/DespachosApp/2.png",
      "/src/assets/images/DespachosApp/3.png",
      "/src/assets/images/DespachosApp/4.png",
      "/src/assets/images/DespachosApp/5.png",
      "/src/assets/images/DespachosApp/6.png",
      "/src/assets/images/DespachosApp/7.png",
      "/src/assets/images/DespachosApp/8.png",
      "/src/assets/images/DespachosApp/9.png",
      "/src/assets/images/DespachosApp/10.png",
    ]
  },
  {
    category: "mobile",
    titleEs: "Tienda Nextti",
    titleEn: "Tienda Nextti",
    subtitleEs: "Nextti Solutions",
    subtitleEn: "Nextti Solutions",
    descriptionEs: "Es una aplicación white-label cuyo propósito es ofrecer a las empresas retail de nuestro ecosistema Odoo una solución para lanzar su propia aplicación de e-commerce móvil de forma rápida, eficiente y personalizable a su marca.",
    descriptionEn: "It is a white-label application whose purpose is to offer retail companies within our Odoo ecosystem a solution to launch their own mobile e-commerce application quickly, efficiently, and customizable to their brand.",
    logoIcon: "ph ph-device-mobile-camera text-6xl text-primary-600",
    badges: [
      { type: "typescript", title: "TypeScript" },
      { type: "reactnative", title: "React Native" },
      { type: "expo", title: "Expo" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "nativewind", title: "NativeWind" },
      { type: "react", title: "React.js" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/TiendaNextti/1.png",
      "/src/assets/images/TiendaNextti/2.png",
      "/src/assets/images/TiendaNextti/3.png",
      "/src/assets/images/TiendaNextti/4.0.png",
      "/src/assets/images/TiendaNextti/4.1.png",
      "/src/assets/images/TiendaNextti/5.png",
      "/src/assets/images/TiendaNextti/6.png",
      "/src/assets/images/TiendaNextti/7.png",
      "/src/assets/images/TiendaNextti/8.png",
      "/src/assets/images/TiendaNextti/9.png",
      "/src/assets/images/TiendaNextti/10.png",
      "/src/assets/images/TiendaNextti/11.png",
      "/src/assets/images/TiendaNextti/12.png",
      "/src/assets/images/TiendaNextti/13.png",
      "/src/assets/images/TiendaNextti/14.png",
      "/src/assets/images/TiendaNextti/15.png",
      "/src/assets/images/TiendaNextti/16.png",
      "/src/assets/images/TiendaNextti/17.png",
      "/src/assets/images/TiendaNextti/18.png",
      "/src/assets/images/TiendaNextti/19.png"
    ]
  },
  {
    category: "mobile",
    titleEs: "Sales Force V2",
    titleEn: "Sales Force V2",
    subtitleEs: "Nextti Solutions",
    subtitleEn: "Nextti Solutions",
    descriptionEs: "Es la versión actual y el rediseño completo de la aplicación móvil para la gestión de negocios basados en el ERP Odoo. También se le agregaron nuevas carecteristicas como herramientas de inteligencia artificial, un sistema de notificaciones push y mucho más.",
    descriptionEn: "It is the current version and the redesign of the mobile application for the management of businesses based on the Odoo ERP. It also has new artificial intelligence features, a push notification system and much more.",
    logoIcon: "ph ph-device-mobile-camera text-6xl text-primary-600",
    badges: [
      { type: "typescript", title: "TypeScript" },
      { type: "reactnative", title: "React Native" },
      { type: "expo", title: "Expo" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "nativewind", title: "NativeWind" },
      { type: "react", title: "React.js" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/SalesForceV2/0.png",
      "/src/assets/images/SalesForceV2/1.png",
      "/src/assets/images/SalesForceV2/2.png",
      "/src/assets/images/SalesForceV2/3.png",
      "/src/assets/images/SalesForceV2/4.png",
      "/src/assets/images/SalesForceV2/5.png",
      "/src/assets/images/SalesForceV2/6.png",
      "/src/assets/images/SalesForceV2/7.png",
      "/src/assets/images/SalesForceV2/8.png",
      "/src/assets/images/SalesForceV2/9.png",
      "/src/assets/images/SalesForceV2/10.png",
      "/src/assets/images/SalesForceV2/11.png",
      "/src/assets/images/SalesForceV2/12.png",
      "/src/assets/images/SalesForceV2/13.png",
      "/src/assets/images/SalesForceV2/14.png",
      "/src/assets/images/SalesForceV2/15.png",
      "/src/assets/images/SalesForceV2/16.png",
      "/src/assets/images/SalesForceV2/17.png"
    ]
  },
  {
    category: "mobile",
    titleEs: "Sales Force",
    titleEn: "Sales Force",
    subtitleEs: "Nextti Solutions",
    subtitleEn: "Nextti Solutions",
    descriptionEs: "Fué la primera versión de la aplicación móvil de ventas para la gestión de negocios basados en el ERP Odoo de nuestros clientes, permite la gestión de ventas, compras, pagos, clientes, visitas, y mucho más.",
    descriptionEn: "It was the first version of the mobile sales application for managing businesses based on the Odoo ERP of our clients. It allow the management of sales, purchases, payments, clients, visits, and much more.",
    logoIcon: "ph ph-device-mobile-camera text-6xl text-primary-600",
    badges: [
      { type: "typescript", title: "TypeScript" },
      { type: "reactnative", title: "React Native" },
      { type: "react", title: "React.js" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/SalesForce/1.png",
      "/src/assets/images/SalesForce/2.png",
      "/src/assets/images/SalesForce/3.png",
      "/src/assets/images/SalesForce/4.png",
      "/src/assets/images/SalesForce/5.png",
      "/src/assets/images/SalesForce/6.png",
      "/src/assets/images/SalesForce/7.png",
      "/src/assets/images/SalesForce/8.png",
      "/src/assets/images/SalesForce/9.png",
      "/src/assets/images/SalesForce/10.0.png",
      "/src/assets/images/SalesForce/10.1.png",
      "/src/assets/images/SalesForce/11.png",
      "/src/assets/images/SalesForce/12.png",
      "/src/assets/images/SalesForce/13.png",
      "/src/assets/images/SalesForce/14.png",
      "/src/assets/images/SalesForce/15.png",
      "/src/assets/images/SalesForce/16.png",
      "/src/assets/images/SalesForce/17.png",
      "/src/assets/images/SalesForce/18.png",
      "/src/assets/images/SalesForce/19.png",
      "/src/assets/images/SalesForce/20.png",
      "/src/assets/images/SalesForce/21.png"
    ]
  },
  {
    category: "mobile",
    titleEs: "Rates App",
    titleEn: "Rates App",
    subtitleEs: "Proyecto Personal",
    subtitleEn: "Personal Project",
    descriptionEs: "Aplicación que sirve como referencia para ver el precio oficial del Dólar, del Euro y del USDT.",
    descriptionEn: "An application that serves as a reference for viewing the official prices of the Dollar, the Euro, and USDT.",
    logoSrc: "/src/assets/images/icons/projects/rates_logo.png",
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "reactnative", title: "React Native" },
      { type: "react", title: "React.js" },
      { type: "reactquery", title: "React Query" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/ratesapp/1.png",
      "/src/assets/images/ratesapp/2.png",
      "/src/assets/images/ratesapp/3.png",
      "/src/assets/images/ratesapp/4.png",
      "/src/assets/images/ratesapp/5.png",
      "/src/assets/images/ratesapp/6.png"
    ]
  },
  {
    category: "backend",
    titleEs: "Rates API",
    titleEn: "Rates API",
    subtitleEs: "Proyecto Personal",
    subtitleEn: "Personal Project",
    descriptionEs: "Backend realizado en nodejs para obtener la tasa oficial de las monedas más usadas en Venezuela (Dólar, Euro y USDT). Se obtienen mediante web scraping de la página del Banco Central de Venezuela y por medio de una API de terceros en el caso del USDT. Los valores se van actualizando automaticamente cada día por medio de un cron job y se guardan en una Base de datos MongoDB para no congestionar la página del BCV ni la API, cuenta también con un limitador de peticiones por IP del cliente para que no excedan los recursos del servidor.",
    descriptionEn: "Backend developed in Node.js to obtain the official rate of the most used currencies in Venezuela (Dollar, Euro, and USDT). The rates are obtained through web scraping from the Central Bank of Venezuela's website and via a third-party API in the case of USDT. The values are automatically updated daily through a cron job and stored in a MongoDB database to avoid congesting the BCV website or the API, it also has a request limiter per client IP so that they do not exceed the server's resources.",
    logoSrc: "/src/assets/images/icons/projects/rates_logo.png",
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "node.js", title: "Node.js" },
      { type: "expressjs", title: "Express" },
      { type: "mongodb", title: "MongoDB" },
      { type: "vercel", title: "Vercel" }
    ],
    images: []
  },
  {
    category: "frontend",
    titleEs: "Imago",
    titleEn: "Imago",
    subtitleEs: "Akronym",
    subtitleEn: "Akronym",
    descriptionEs: "Sistema de gestión de ordenes e inventario de una empresa de alquiler de equipos para eventos, con el cual se puede gestionar los equipos, las ordenes, los clientes, los proveedores, entre otros.",
    descriptionEn: "Inventory and order management system for a company that rents equipment for events, with which you can manage the equipment, the orders, the customers, the suppliers, among other.",
    logoSrc: "/src/assets/images/icons/projects/imago_logo.png",
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "svelte", title: "Svelte" },
      { type: "sveltekit", title: "SvelteKit" },
      { type: "supabase", title: "Supabase" },
      { type: "vercel", title: "Vercel" }
    ],
    images: [
      "/src/assets/images/imago/1.png",
      "/src/assets/images/imago/2.png",
      "/src/assets/images/imago/3.png",
      "/src/assets/images/imago/3.1.png",
      "/src/assets/images/imago/3.2.png",
      "/src/assets/images/imago/4.png",
      "/src/assets/images/imago/5.png",
      "/src/assets/images/imago/6.png",
      "/src/assets/images/imago/6.1.png",
      "/src/assets/images/imago/7.png"
    ]
  },
  {
    category: "fullstack",
    titleEs: "ACPublishing",
    titleEn: "ACPublishing",
    subtitleEs: "Akronym",
    subtitleEn: "Akronym",
    descriptionEs: "Sistema de ventas de libros online y sistema administrativo para la gestión de ventas, clientes, inventario, entre otros. Me dediqué a la corrección de bugs y mejora del sistema de inventario agregando mas funcionalidades.",
    descriptionEn: "Online book sales system and administrative system for managing sales, customers, inventory, among other. I dedicated myself to fixing bugs and improving the inventory system by adding more features.",
    logoSrc: "/src/assets/images/icons/projects/acp_logo.png",
    logoWidth: 270,
    logoHeight: 80,
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "bootstrapcss", title: "Bootstrapcss" },
      { type: "php", title: "PHP" },
      { type: "mysql", title: "MySQL" }
    ],
    images: [
      "/src/assets/images/acp/1.png",
      "/src/assets/images/acp/2.png",
      "/src/assets/images/acp/3.png",
      "/src/assets/images/acp/4.png",
      "/src/assets/images/acp/5.png",
      "/src/assets/images/acp/6.png",
      "/src/assets/images/acp/7.png",
      "/src/assets/images/acp/7.1.png",
      "/src/assets/images/acp/8.png",
      "/src/assets/images/acp/8.1.png",
      "/src/assets/images/acp/8.2.png"
    ]
  },
  {
    category: "fullstack",
    titleEs: "Sistema administrativo de Lelevier Plastic",
    titleEn: "Lelevier Plastic Administration System",
    subtitleEs: "Akronym",
    subtitleEn: "Akronym",
    descriptionEs: "Sistema administrativo para la clínica de cirugía plástica Lelevier Plastic, con el cual se puede gestionar los pacientes, los procedimientos, los seguimintos post operatorios, las citas, los pagos, entre otros.",
    descriptionEn: "Administrative system for Lelevier Plastic, with which you can manage the patients, the procedures, the postoperative follow-ups, the appointments, the payments, among other.",
    logoSrc: "/src/assets/images/icons/projects/lelevier_logo.png",
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "node.js", title: "Node.js" },
      { type: "expressjs", title: "Express" },
      { type: "mongodb", title: "MongoDB" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "sveltekit", title: "SvelteKit" },
      { type: "vercel", title: "Vercel" }
    ],
    images: [
      "/src/assets/images/lelevier/1.png",
      "/src/assets/images/lelevier/2.png",
      "/src/assets/images/lelevier/3.png",
      "/src/assets/images/lelevier/4.png",
      "/src/assets/images/lelevier/5.png",
      "/src/assets/images/lelevier/6.png",
      "/src/assets/images/lelevier/7.png"
    ]
  },
  {
    category: "frontend",
    titleEs: "Landing Page de Lelevier Plastic",
    titleEn: "Lelevier Plastic Landing Page",
    subtitleEs: "Akronym",
    subtitleEn: "Akronym",
    descriptionEs: "Página web informativa para la clínica de cirugias plásticas Lelevier Plastic.",
    descriptionEn: "Informative web page for Lelevier Plastic clinic.",
    logoSrc: "/src/assets/images/icons/projects/lelevier_logo.png",
    badges: [
      { type: "html", title: "HTML" },
      { type: "css", title: "CSS" },
      { type: "javascript", title: "Javascript" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "vercel", title: "Vercel" }
    ],
    images: [
      "/src/assets/images/lelevierLanding/1.png",
      "/src/assets/images/lelevierLanding/2.png",
      "/src/assets/images/lelevierLanding/3.png",
      "/src/assets/images/lelevierLanding/4.png",
      "/src/assets/images/lelevierLanding/5.png",
      "/src/assets/images/lelevierLanding/6.png",
      "/src/assets/images/lelevierLanding/7.png",
      "/src/assets/images/lelevierLanding/8.png",
      "/src/assets/images/lelevierLanding/9.png"
    ]
  },
  {
    category: "frontend",
    titleEs: "Landing page de Akronym",
    titleEn: "Akronym Landing Page",
    subtitleEs: "Akronym",
    subtitleEn: "Akronym",
    descriptionEs: "Landing page para la empresa de desarrollo de software Akronym, con el cual se puede conocer más sobre la empresa y sus servicios.",
    descriptionEn: "Landing page for the Akronym software development company, with which you can know more about the company and its services.",
    logoSrc: "/src/assets/images/icons/projects/akronym_logo.png",
    logoWidth: 200,
    logoHeight: 80,
    badges: [
      { type: "html", title: "HTML" },
      { type: "css", title: "CSS" },
      { type: "javascript", title: "Javascript" },
      { type: "astro", title: "Astro" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "vercel", title: "Vercel" }
    ],
    images: [
      "/src/assets/images/akronymLanding/1.png",
      "/src/assets/images/akronymLanding/2.png",
      "/src/assets/images/akronymLanding/3.png",
      "/src/assets/images/akronymLanding/4.png",
      "/src/assets/images/akronymLanding/5.png",
      "/src/assets/images/akronymLanding/6.png",
      "/src/assets/images/akronymLanding/7.png",
      "/src/assets/images/akronymLanding/8.png"
    ]
  },
  {
    category: "backend",
    titleEs: "Bela API",
    titleEn: "Bela API",
    subtitleEs: "Akronym",
    subtitleEn: "Akronym",
    descriptionEs: "API para la app Bela y su sistema de gestión administrativo. En este proyecto me dediqué a finalizar la API y a corregir bugs y agregar nuevas características.",
    descriptionEn: "API for the Bela app and its administrative system. In this project I dedicated myself to finishing the API and fixing bugs and adding new features.",
    logoIcon: "ph ph-database text-6xl text-primary-600",
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "node.js", title: "Node.js" },
      { type: "expressjs", title: "Express" },
      { type: "mongodb", title: "MongoDB" },
      { type: "vercel", title: "Vercel" }
    ],
    images: []
  },
  {
    category: "mobile",
    titleEs: "Aplicación de reservas de servicios de una torre de viviendas",
    titleEn: "Application for booking services of a tower of apartments",
    subtitleEs: "10 Code Software Design",
    subtitleEn: "10 Code Software Design",
    descriptionEs: "App móvil destinada a ser usada por los propietarios de viviendas para hacer reservas de servicios ofrecidos por Málaga Towers que es un proyecto de viviendas de lujo en Málaga España.",
    descriptionEn: "Mobile app for apartment owners to book services offered by Málaga Towers, a luxury apartment project in Málaga, Spain.",
    logoSrc: "/src/assets/images/icons/projects/malaga_towers_metrovacesa.png",
    logoWidth: 270,
    logoHeight: 80,
    badges: [
      { type: "reactnative", title: "React Native" },
      { type: "gluestack", title: "GlueStack UI" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/metrovacesa/app/1.png",
      "/src/assets/images/metrovacesa/app/2.png",
      "/src/assets/images/metrovacesa/app/3.png",
      "/src/assets/images/metrovacesa/app/4.png",
      "/src/assets/images/metrovacesa/app/5.png",
      "/src/assets/images/metrovacesa/app/6.png",
      "/src/assets/images/metrovacesa/app/7.png",
      "/src/assets/images/metrovacesa/app/8.png",
      "/src/assets/images/metrovacesa/app/9.png",
      "/src/assets/images/metrovacesa/app/10.png",
      "/src/assets/images/metrovacesa/app/11.png",
      "/src/assets/images/metrovacesa/app/12.png",
      "/src/assets/images/metrovacesa/app/13.png"
    ]
  },
  {
    category: "frontend",
    titleEs: "Sistema Administrativo de Metrovacesa",
    titleEn: "Metrovacesa Administration System",
    subtitleEs: "10 Code Software Design",
    subtitleEn: "10 Code Software Design",
    descriptionEs: "Sistema web administrativo para gestionar las viviendas, los propietarios y los servicios que se proporcionan en la app móvil Metrovacesa.",
    descriptionEn: "Web admin system for managing the apartments, the owners and the services provided in the mobile app Metrovacesa.",
    logoSrc: "/src/assets/images/icons/projects/malaga_towers_metrovacesa.png",
    logoWidth: 270,
    logoHeight: 80,
    badges: [
      { type: "react", title: "React.js" },
      { type: "next.js", title: "Next.js" },
      { type: "tailwindcss", title: "Tailwindcss" },
      { type: "javascript", title: "Javascript" }
    ],
    images: [
      "/src/assets/images/metrovacesa/web/1.png",
      "/src/assets/images/metrovacesa/web/2.png",
      "/src/assets/images/metrovacesa/web/3.png",
      "/src/assets/images/metrovacesa/web/4.png",
      "/src/assets/images/metrovacesa/web/5.png",
      "/src/assets/images/metrovacesa/web/6.png",
      "/src/assets/images/metrovacesa/web/7.png",
      "/src/assets/images/metrovacesa/web/8.png",
      "/src/assets/images/metrovacesa/web/9.png"
    ]
  },
  {
    category: "fullstack",
    titleEs: "Reservatum",
    titleEn: "Reservatum",
    subtitleEs: "10 Code Software Design",
    subtitleEn: "10 Code Software Design",
    descriptionEs: "Es una herramienta para reservar propiedades como casas vacacionales, villas de lujo y apartamentos en Mayorca, España. Tuve la responsabilidad de diseñar el landing page, mejorar el módulo de blogs, terminar la interfaz para editar reservas, buscar y corregir bugs y agregar validaciones a nivel de frontend en los formularios faltantes.",
    descriptionEn: "It is a tool to reserve properties such as vacation homes, luxury villas and apartments in Mallorca, Spain. I was responsible for designing the landing page, improving the blogs module, finishing the interface for editing reservations, searching and correcting bugs and adding validations at frontend level in the missing forms.",
    logoSrc: "/src/assets/images/icons/projects/reservatum_logo.png",
    badges: [
      { type: "vuetify", title: "Vuetify" },
      { type: "vue", title: "Vue.js" },
      { type: "laravel", title: "Laravel" },
      { type: "php", title: "PHP" },
      { type: "javascript", title: "JavaScript" }
    ],
    images: [
      "/src/assets/images/reservatum/1.png",
      "/src/assets/images/reservatum/2.png",
      "/src/assets/images/reservatum/3.png",
      "/src/assets/images/reservatum/4.png",
      "/src/assets/images/reservatum/5.png",
      "/src/assets/images/reservatum/6.png",
      "/src/assets/images/reservatum/7.png",
      "/src/assets/images/reservatum/8.png",
      "/src/assets/images/reservatum/9.png",
      "/src/assets/images/reservatum/10.png",
      "/src/assets/images/reservatum/11.png",
      "/src/assets/images/reservatum/12.png",
      "/src/assets/images/reservatum/13.png",
      "/src/assets/images/reservatum/14.png"
    ],
    aosDelay: "200"
  },
  {
    category: "mobile",
    titleEs: "Mouth 2 Mouth App",
    titleEn: "Mouth 2 Mouth App",
    subtitleEs: "NextStation",
    subtitleEn: "NextStation",
    descriptionEs: "Aplicación que permite al usuario encontrar tiendas afines a sus intereses personales dándole la posibilidad de ganar puntos si hace match con otros usuarios de la app en base a sus intereses.",
    descriptionEn: "App that allows the user to find stores with the interests of the personales of the user giving them the possibility of winning points if they match with other users of the app in base to their interests.",
    logoSrc: "/src/assets/images/icons/projects/m2m_logo.webp",
    logoWidth: 50,
    logoHeight: 50,
    badges: [
      { type: "javascript", title: "Javascript" },
      { type: "react", title: "React.js" },
      { type: "reactnative", title: "React Native" },
      { type: "firebase", title: "Firebase Push Notifications" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/m2m/Screenshot_1677978167.png",
      "/src/assets/images/m2m/m2mapp_2.png",
      "/src/assets/images/m2m/Screenshot_1677978173.png",
      "/src/assets/images/m2m/Screenshot_1677978404.png",
      "/src/assets/images/m2m/m2mapp_3.png",
      "/src/assets/images/m2m/m2mapp_8.png",
      "/src/assets/images/m2m/m2mapp_9.png",
      "/src/assets/images/m2m/Screenshot_1677978449.png",
      "/src/assets/images/m2m/Screenshot_1677978495.png",
      "/src/assets/images/m2m/m2mapp_10.png",
      "/src/assets/images/m2m/m2mapp_4.png",
      "/src/assets/images/m2m/m2mapp_5.png",
      "/src/assets/images/m2m/m2mapp_6.png",
      "/src/assets/images/m2m/m2mapp_7.png",
      "/src/assets/images/m2m/Screenshot_1677978429.png"
    ],
    aosDelay: "400"
  },
  {
    category: "backend",
    titleEs: "Mouth 2 Mouth API",
    titleEn: "Mouth 2 Mouth API",
    subtitleEs: "NextStation",
    subtitleEn: "NextStation",
    descriptionEs: "Logica de negocios para la app M2M y para el sistema web administrativo desarrollado en PHP con Laravel, y un microservicio en Node.js.",
    descriptionEn: "Business logic for the M2M app and the web admin system developed in PHP with Laravel, and a microservice in Node.js.",
    logoSrc: "/src/assets/images/icons/projects/m2m_logo.webp",
    logoWidth: 50,
    logoHeight: 50,
    badges: [
      { type: "nodejs", title: "Node.js" },
      { type: "laravel", title: "Laravel" },
      { type: "php", title: "PHP" },
      { type: "javascript", title: "Javascript" },
      { type: "mysql", title: "MySQL" }
    ],
    images: [],
    aosDelay: "400"
  },
  {
    category: "mobile",
    titleEs: "Halaken",
    titleEn: "Halaken",
    subtitleEs: "NextStation",
    subtitleEn: "NextStation",
    descriptionEs: "Aplicación móvil para clientes de una clinica que gestiona la toma de medicamentos y actividades recetadas por su doctor para que estos sean menos propensos a olvidarlos.",
    descriptionEn: "App for clients of a clinic that manages the taking of medications and activities prescribed by their doctor so that these are less likely to be forgotten.",
    logoSrc: "/src/assets/images/icons/projects/halakenlogo.webp",
    logoWidth: 50,
    logoHeight: 50,
    badges: [
      { type: "reactnative", title: "React Native" },
      { type: "react", title: "React.js" },
      { type: "firebase", title: "Firebase Push Notifications" },
      { type: "javascript", title: "Javascript" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/halaken/Screenshot_1677955415.png",
      "/src/assets/images/halaken/Screenshot_1677955411.png",
      "/src/assets/images/halaken/Screenshot_1677953899.png",
      "/src/assets/images/halaken/Screenshot_1677953903.png",
      "/src/assets/images/halaken/Screenshot_1677953936.png",
      "/src/assets/images/halaken/Screenshot_1677953942.png",
      "/src/assets/images/halaken/Screenshot_1677955298.png",
      "/src/assets/images/halaken/Screenshot_1677955305.png",
      "/src/assets/images/halaken/Screenshot_1677955318.png",
      "/src/assets/images/halaken/Screenshot_1677955344.png",
      "/src/assets/images/halaken/Screenshot_1677955388.png"
    ],
    aosDelay: "600"
  },
  {
    category: "backend mobile",
    titleEs: "Miekipo",
    titleEn: "Miekipo",
    subtitleEs: "NextStation",
    subtitleEn: "NextStation",
    descriptionEs: "Sistema web y aplicación móvil con el cual se gestionan los jugadores, membresias, entrenamientos, miembros, etc, de un equipo de futbol. Mi rol durante mi estancia en el proyecto ha sido apoyar en el desarrollo del backend y hacer una integración del método de pago Transbank para la app móvil.",
    descriptionEn: "Web and mobile app for managing players, memberships, trainings, members, etc, of a football team. My role during my stay in the project was to support in the development of the backend and make an integration of the Transbank payment method for the mobile app.",
    logoIcon: "ph ph-database text-6xl text-orange-600",
    badges: [
      { type: "laravel", title: "Laravel" },
      { type: "reactnative", title: "React Native" },
      { type: "react", title: "React.js" },
      { type: "php", title: "PHP" },
      { type: "javascript", title: "Javascript" },
      { type: "mysql", title: "MySQL" },
      { type: "transbank", title: "Transbank" }
    ],
    images: [
      "/src/assets/images/miekipo/Screenshot_1677974901.png",
      "/src/assets/images/miekipo/Screenshot_1677974972.png"
    ],
    aosDelay: "800"
  },
  {
    category: "mobile",
    titleEs: "Promar TV",
    titleEn: "Promar TV",
    subtitleEs: "NextStation",
    subtitleEn: "NextStation",
    descriptionEs: "Aplicación móvil minimalista que integra un componente webview para mostrar la transmisión en vivo del canal de noticias venezolano Promar TV.",
    descriptionEn: "Minimalist mobile app that integrates a webview component to display the live broadcast of the Venezuelan news channel Promar TV.",
    logoSrc: "/src/assets/images/icons/projects/promartv_logo.png",
    logoWidth: 100,
    logoHeight: 100,
    badges: [
      { type: "reactnative", title: "React Native" },
      { type: "react", title: "React.js" },
      { type: "javascript", title: "Javascript" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/promartv/promartv.png"
    ],
    aosDelay: "800"
  },
  {
    category: "mobile",
    titleEs: "Tierra por tierra",
    titleEn: "Tierra por tierra",
    subtitleEs: "NextStation",
    subtitleEn: "NextStation",
    descriptionEs: "Aplicación móvil netamente informativa que muestra el contenido de su web, con un diseño minimalista y un estilo visual atractivo basado en su pagina web.",
    descriptionEn: "Minimalist mobile app that displays the content of its web, with a minimalist design and an attractive visual style based on its web page.",
    logoSrc: "/src/assets/images/icons/projects/tierraxtierra_logo.jpg",
    logoWidth: 70,
    logoHeight: 70,
    badges: [
      { type: "reactnative", title: "React Native" },
      { type: "react", title: "React.js" },
      { type: "javascript", title: "Javascript" },
      { type: "android", title: "Android" },
      { type: "ios", title: "iOS" }
    ],
    images: [
      "/src/assets/images/tierraXtierra/Screenshot_1677958523.png",
      "/src/assets/images/tierraXtierra/Screenshot_1677958526.png",
      "/src/assets/images/tierraXtierra/Screenshot_1677958598.png",
      "/src/assets/images/tierraXtierra/Screenshot_1677958609.png",
      "/src/assets/images/tierraXtierra/Screenshot_1677958613.png",
      "/src/assets/images/tierraXtierra/Screenshot_1677958668.png"
    ],
    aosDelay: "800"
  },
  {
    category: "fullstack",
    titleEs: "Software Educativo",
    titleEn: "Educational Software",
    subtitleEs: "Proyecto Freelance",
    subtitleEn: "Freelance Project",
    descriptionEs: "Herramienta creada para el profesor de una materia y sus estudiantes, con el objetivo de subir información relevante de las clases presenciales a la plataforma para que los esudiantes puedan visualizarla, hacer pruebas, tener acceso a herramientas usadas por el profesor, interactuar con el docente y los demás estudiantes en un chat grupal, responder asignaciones que el profesor les envie, entre otras funciones.",
    descriptionEn: "Tool created for the professor of a subject and his students, with the objective of uploading relevant information from the face-to-face classes to the platform so that the students can view it, take tests, have access to tools used by the teacher, interact with the teacher and other students in a group chat, respond to assignments that the teacher sends them, among other functions.",
    logoIcon: "ph ph-book-open-text text-6xl text-teal-600",
    badges: [
      { type: "php", title: "PHP" },
      { type: "codeigniter", title: "CodeIgniter 3" },
      { type: "javascript", title: "Javascript" },
      { type: "jquery", title: "jQuery" },
      { type: "mysql", title: "MySQL" },
      { type: "bootstrapcss", title: "Bootstrap CSS" }
    ],
    images: [
      "/src/assets/images/SistemaEducativo/SE_Login.png",
      "/src/assets/images/SistemaEducativo/SE_Inicio.png",
      "/src/assets/images/SistemaEducativo/SE_Profesor_Contenido.png",
      "/src/assets/images/SistemaEducativo/SE_Profesor_Crear_Evaluacion.png",
      "/src/assets/images/SistemaEducativo/SE_Estudiante_Evaluacion.png",
      "/src/assets/images/SistemaEducativo/SE_Estudiante_Evaluacion_Resultado.png",
      "/src/assets/images/SistemaEducativo/SE_Profesor_Asignaciones.png",
      "/src/assets/images/SistemaEducativo/SE_Chat.png",
      "/src/assets/images/SistemaEducativo/SE_Perfil.png"
    ],
    codeUrl: "https://github.com/jose1937JS/hipermedia",
    aosDelay: "1000"
  },
  {
    category: "fullstack",
    titleEs: "Sistema Administrativo - E-Commerce Simple",
    titleEn: "Administrative System - Simple Ecommerce",
    subtitleEs: "Proyecto Freelance",
    subtitleEn: "Freelance Project",
    descriptionEs: "Sistema de administración de ventas y productos para una floristeria.",
    descriptionEn: "Administrative system for sales and products for a flower shop.",
    logoIcon: "ph ph-shopping-cart text-6xl text-teal-600",
    badges: [
      { type: "php", title: "PHP" },
      { type: "laravel", title: "Laravel" },
      { type: "javascript", title: "Javascript" },
      { type: "jquery", title: "jQuery" },
      { type: "mysql", title: "MySQL" },
      { type: "bootstrapcss", title: "Bootstrap CSS" }
    ],
    images: [
      "/src/assets/images/RosasDeAmerica/Rosas_De_America_Inicio.jpg",
      "/src/assets/images/RosasDeAmerica/Rosas_De_America_Productos.png",
      "/src/assets/images/RosasDeAmerica/Rosas_De_America_Carrito_de_Compra.png"
    ],
    codeUrl: "https://github.com/jose1937JS/RosasDeAmerica",
    aosDelay: "1200"
  }
];