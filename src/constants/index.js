import {
    backend,
    frontend,
    web,
    image,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    springboot,
    docker,
    jenkins,
    meta,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    facebook,
    instagram,
    github1,
    linkedin,
    prestige,
    klerq,
    mysuperacademia,
    edidact,
    afia,
    yellowpage,
    training,
    makeup,
    thread,
    tasty,
    task,
    kubernetes,
    prometheus,
    grafana,
    okaybrunch,
    mysuperacademiaProject,
    montagevideo,
    popteybrunch,
    generatepost,
    precarre,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: image,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "springboot",
      icon: springboot,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },

      /*{
        name: "kubernetes",
        icon: kubernetes,
      },
      {
        name: "prometheus",
        icon: prometheus,
      },
      {
        name: "grafana",
        icon: grafana,
      },*/
  ];
  
  const experiences = [
    {
      id: 'mysuperacademia',
      company_name: "MY Super Academia",
      icon: mysuperacademia,
      iconBg: "rgb(15, 2, 25)",
      startDate:   '2026-02-01',
      endDate:     null,
    },
    {
      id: 'klerq',
      company_name: "KLERQ",  
      icon: klerq,
      iconBg: "rgb(15, 2, 25)",
      startDate:   '2024-10-01',
      endDate:     '2025-10-31', 
    },
    {
      id: 'prestige',
      company_name: "Prestige Formation & Consulting",
      icon: prestige,
      iconBg: "rgb(15, 2, 25)",
      startDate: '2023-06-01',
      endDate:   '2023-09-30',
    },
    {
      id: 'edidact',
      company_name: "Edidact",
      icon: edidact,
      iconBg: "rgb(15, 2, 25)",
      startDate: '2022-06-01',
      endDate:   '2022-09-30',
    },
    {
      id: 'afia',
      company_name: "AfiaTech",
      icon: afia,
      iconBg: "rgb(15, 2, 25)",
      startDate: '2021-02-01',
      endDate:   '2021-06-30',
    },
  ];
  
  const projects = [
    {
      id: "mySuperAcademia",
      tags: [
        { name: "next.js 15",   color: "violet-text-gradient" },
        { name: "nestjs",       color: "pink-text-gradient"   },
        { name: "postgresql",   color: "blue-text-gradient"   },
        { name: "stripe",       color: "green-text-gradient"  },
      ],
      image: mysuperacademiaProject,
      source_code_link: null,
      live_link: "https://my-super-academia.com/",
    },
    {
      id: "precarre",
      tags: [
        { name: "next.js 14",  color: "violet-text-gradient" },
        { name: "nestjs",      color: "pink-text-gradient"   },
        { name: "supabase",    color: "blue-text-gradient"   },
        { name: "claude api",  color: "green-text-gradient"  },
      ],
      image: precarre,
      source_code_link: null,
      live_link: null,
    },
    {
      id: "popteyBrunch",
      tags: [
        { name: "react 18",     color: "violet-text-gradient" },
        { name: "medusa.js v2", color: "pink-text-gradient"   },
        { name: "stripe",       color: "blue-text-gradient"   },
        { name: "postgresql",   color: "green-text-gradient"  },
      ],
      image: popteybrunch,
      source_code_link: null,
    },
    {
      id: "newsJacking",
      tags: [
        { name: "python",    color: "violet-text-gradient" },
        { name: "fastapi",   color: "pink-text-gradient"   },
        { name: "n8n",       color: "blue-text-gradient"   },
        { name: "temporal",  color: "green-text-gradient"  },
      ],
      image: montagevideo,
      source_code_link: null,
    },
    {
      id: "pipelineRSS",
      tags: [
        { name: "python",   color: "violet-text-gradient" },
        { name: "fastapi",  color: "pink-text-gradient"   },
        { name: "qdrant",   color: "blue-text-gradient"   },
        { name: "n8n",      color: "green-text-gradient"  },
      ],
      image: generatepost,
      source_code_link: null,
    },
    {
      id: "okayBrunch",
      tags: [
        {
          name: "nextjs",
          color: "violet-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        },
        
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        
      ],
      image: okaybrunch,
      source_code_link: null,
    },
    {
      id: "threads",
      tags: [
        {
          name: "nextjs13",
          color: "violet-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "clerk",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: thread,
      source_code_link: "https://github.com/hadil-kortas/threads",
    },
    {
      id: "tastySwift",
      tags: [
        {
          name: "nextjs13",
          color: "violet-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
      ],
      image: tasty,
      source_code_link: "https://github.com/hadil-kortas/tastyswift",
    },
    {

      id: "yellowPage",
      tags: [
        {
          name: "nodejs",
          color: "violet-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        
      ],
      image: yellowpage,
      source_code_link: "https://github.com/hadil-kortas/yellow_page",
    },
    {
      id: "trainingCenter",
      tags: [
        {
          name: "php",
          color: "violet-text-gradient",
        },
        {
          name: "symfony5",
          color: "pink-text-gradient",
        },
        {
          name: "twig",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
      ],
      image: training,
      source_code_link: "https://github.com/hadil-kortas/Gestion-des-formations",
    },
    {
      id: "beautyLover",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        
      ],
      image: makeup,
      source_code_link: "https://github.com/hadil-kortas/Makeup-Storage",
    },

    {
      id: "taskManagement",
      tags: [
        {
          name: "spring boot",
          color: "violet-text-gradient",
        },
        {
          name: "thymleaf",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "thailwind css",
          color: "green-text-gradient",
        },
      ],
      image: task,
      source_code_link: "https://github.com/hadil-kortas/taskmanagement",
    }
    
  ];

  const contacts = [
    
    {
      name: "linkedin",
      image: linkedin,
      source_link:"https://www.linkedin.com/in/kortas-hadil-a87834210/"
    },
    {
      name: "github",
      image: github1,
      source_link:"https://github.com/hadil-kortas"
    },
    {
      name: "facebook",
      image: facebook,
      source_link:"https://www.facebook.com/hadoula.kortas.3/"
    },
    {
      name: "instagram",
      image: instagram,
      source_link:"https://www.instagram.com/hadil.kortas/"
    }



    




  ]
  
  export { services, technologies, experiences, projects, contacts };