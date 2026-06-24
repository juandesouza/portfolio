export interface Project {
  id: string
  name: string
  url: string
  screenshot: string
  tech: {
    frontend: string
    backend: string
    db: string
    mobile: string
  }
}

export const projects: Project[] = [
  {
    id: 'nexo',
    name: 'Nexo',
    url: 'https://nexoride.netlify.app/',
    screenshot: '/projects/printnexo.png',
    tech: {
      frontend: 'Next.js · React · TypeScript · Tailwind',
      backend: 'NestJS · Node.js',
      db: 'PostgreSQL · Prisma · Redis',
      mobile: 'React Native',
    },
  },
  {
    id: 'yamma',
    name: 'Yamma',
    url: 'https://yamma-web.vercel.app/',
    screenshot: '/projects/printyamma.png',
    tech: {
      frontend: 'Next.js · React · TypeScript · Tailwind',
      backend: 'NestJS · Node.js',
      db: 'PostgreSQL · Drizzle',
      mobile: 'React Native',
    },
  },
  {
    id: 'matcher',
    name: 'Matcher',
    url: 'https://matcher-m0o4.onrender.com/',
    screenshot: '/projects/printmatcher.png',
    tech: {
      frontend: 'SvelteKit · Svelte · Tailwind',
      backend: 'SvelteKit · Node.js',
      db: 'PostgreSQL · Prisma',
      mobile: 'React Native',
    },
  },
  {
    id: 'agendax',
    name: 'AgendaX',
    url: 'https://myagendax.netlify.app/',
    screenshot: '/projects/printagendax.png',
    tech: {
      frontend: 'Next.js · React · TypeScript · Tailwind',
      backend: 'Express · Node.js',
      db: 'MongoDB · Mongoose',
      mobile: 'React Native',
    },
  },
  {
    id: 'shopaholic',
    name: 'Shopaholic',
    url: 'https://shopaholic-one.vercel.app/',
    screenshot: '/projects/printshopaholic.png',
    tech: {
      frontend: 'Next.js · React · TypeScript · Tailwind',
      backend: 'Next.js · Node.js',
      db: 'Supabase · PostgreSQL',
      mobile: 'React Native',
    },
  },
  {
    id: 'bluevetclinic',
    name: 'Blue Vet Clinic',
    url: 'https://vetclinic-rzx2.vercel.app/',
    screenshot: '/projects/printbluevetclinic.png',
    tech: {
      frontend: 'Next.js · React · TypeScript · Tailwind',
      backend: 'Next.js API Routes',
      db: '—',
      mobile: 'React Native',
    },
  },
]
