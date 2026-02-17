export interface ProjectProps {
    id: number,
    name: string,
    type: string,
    technologiesUsed: Array<string>,
    description: string,
    images: Array<string>,
    taskCompleted: Array<string>,
    projectType?: string,
    urlBtnLinks: {
        name: string,
        link: string
    }[],
}


export const ProjectListData: ProjectProps[] = [{
    id: 1,
    projectType: 'Personal',
    name: "Chat app",
    type: 'Chat',
    technologiesUsed: ['react', 'node', 'mongodb', 'express', 'tailwind'],
    images: ['/chat.png'],
    description: "This is a simple chat app build using React, Node/Express and MongoDB. This project is for learning React and Socket.io",
    taskCompleted: ['frontend development with React', 'backend with Node/Express', 'client side and server side validations', 'Sockect.io connection between client and server'],
    urlBtnLinks: [
        {
            name: "View Code",
            link: 'https://github.com/Rabin18Glan/MERN-simple-chat-app'
        },
        {
            name: "More Info",
            link: ""
        }
    ]
},
{
    id: 2,
    projectType: 'Personal',
    name: "Maruni Suppliers",
    type: 'Ecommerce Platform',
    technologiesUsed: ['react', 'laravel', 'mysql', 'tailwind', 'php', 'javascript'],
    images: ['/react-laravel.png'],
    description: `This is the ecommerce website `,
    taskCompleted: ['frontend development with react', 'backend with laravel'],
    urlBtnLinks:
        [
            {
                name: 'View Code',
                link: 'https://github.com/Rabin18Glan/react-laravel-ecom-project'
            },
            {
                name: "More Info",
                link: ''
            }
        ]
}, {
    id: 3,
    projectType: '',
    name: "Laliguras Bee Farm",
    type: 'Ecommerce Platform',
    technologiesUsed: ['next', 'react', 'tailwind'],
    images: ['/laliguras.png'],
    description: `This is the ecommerce website for buying Honey `,
    taskCompleted: ['frontend development with next', 'backend with next'],
    urlBtnLinks:
        [
            {
                name: 'View Code',
                link: 'https://github.com/Rabin18Glan/laliguras'
            },
            {
                name: "Visit Site",
                link: 'https://rabin18glan.github.io/laliguras/'
            }
        ]
},
{
    id: 4,
    projectType: 'Professional',
    name: "SmartCare Academy",
    type: 'WordPress Site',
    technologiesUsed: ['WordPress', 'PHP', 'CSS', 'MySQL'],
    images: ['smartcare.png'], // Placeholder
    description: "An educational platform built on WordPress for SmartCare Academy.",
    taskCompleted: ['Full site development', 'Theme customization', 'Plugin integration'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://smartcareacademy.com/" }
    ]
},
{
    id: 5,
    projectType: 'Professional',
    name: "HireLibra",
    type: 'Full Stack Web App',
    technologiesUsed: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
    images: ['hirelibra.png'], // Placeholder
    description: "A comprehensive hiring portal for candidates and recruiters.",
    taskCompleted: ['Full stack development', 'DevOps & Deployment', 'Backend API architecture'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://hirelibra.com/" }
    ]
},
{
    id: 6,
    projectType: 'Professional',
    name: "Royal Vision",
    type: 'WordPress Site Redesign',
    technologiesUsed: ['WordPress', 'Elementor', 'CSS', 'PHP'],
    images: ['royalvision.png'], // Placeholder
    description: "Redesigned the corporate website for Royal Vision to enhance user experience.",
    taskCompleted: ['Website Redesign', 'Performance Optimization', 'SEO Improvements'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://royalvision.ae/" }
    ]
},
{
    id: 7,
    projectType: 'Professional',
    name: "OneFork",
    type: 'Website Maintenance',
    technologiesUsed: ['Web Technologies', 'Maintenance', 'Support'],
    images: ['onefork.png'], // Placeholder
    description: "Ongoing maintenance and support for OneFork's digital presence.",
    taskCompleted: ['Regular updates', 'Content management', 'Performance monitoring'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://onefork.com.au/" }
    ]
},
{
    id: 8,
    projectType: 'Professional',
    name: "SmartBrains Academy",
    type: 'Website Maintenance',
    technologiesUsed: ['WordPress', 'PHP', 'Maintenance'],
    images: ['smartbrains.png'], // Placeholder
    description: "Technical maintenance and support for SmartBrains Academy.",
    taskCompleted: ['Bug fixes', 'Security updates', 'Site reliability'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://smartbrainsacademy.com/" }
    ]
},
{
    id: 9,
    projectType: 'Professional',
    name: "ADO International Transport",
    type: 'Web Application',
    technologiesUsed: ['React', 'Web Technologies', 'Bug Fixes'],
    images: ['ado.png'], // Placeholder
    description: "Maintenance and feature enhancements for the ADO International Transport application.",
    taskCompleted: ['Bug fixes', 'New feature implementation', 'Code optimization'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://app.adointernationaltransport.com/" }
    ]
},
{
    id: 10,
    projectType: 'Professional',
    name: "OmniSubmissions",
    type: 'Talent & Director Dashboard',
    technologiesUsed: ['React', 'Dashboard', 'Management System'],
    images: ['omnisubmission.png'], // Placeholder
    description: "Worked on the dashboard for talents and directors, enhancing the submission and management workflow.",
    taskCompleted: ['Dashboard development', 'Role-based features', 'UI/UX enhancements'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://www.omnisubmissions.com/" }
    ]
}, {
    id: 11,
    projectType: 'Professional',
    name: "Gahana Stores",
    type: 'Website Maintenance',
    technologiesUsed: ['E-commerce', 'Maintenance', 'Support'],
    images: ['gahanastores.png'], // Placeholder
    description: "Ongoing maintenance and support for Gahana Stores, ensuring a smooth e-commerce experience.",
    taskCompleted: ['Security updates', 'Performance optimization', 'Content updates'],
    urlBtnLinks: [
        { name: "Visit Site", link: "https://gahanastores.com/" }
    ]
}, {
    id: 12,
    projectType: 'Professional',
    name: "Nyauli",
    type: 'SaaS Platform (Backend & DevOps)',
    technologiesUsed: ['Microservices', 'GraphQL', 'Apollo Router', 'Express', 'Drizzle', 'MySQL', 'Kubernetes', 'Docker', 'Fission', 'cdk8s'],
    images: ['nyauli.png'],
    description: "Architected the backend and managed DevOps for a SaaS restaurant platform. Implemented a scalable microservices architecture using GraphQL Federation with Apollo Router and handled cloud orchestration via Kubernetes and Fission (Serverless).",
    taskCompleted: ['Backend Microservices Development', 'GraphQL Federation & Apollo Router', 'Infrastructure as Code (cdk8s)', 'Database Management (Drizzle/MySQL)', 'Kubernetes Cluster & Fission Deployment'],
    urlBtnLinks: [
        { name: "Business Dashboard", link: "https://business.dev.retack.ai/" },
        { name: "Storefront Demo", link: "https://truenaryrest-35ff.nyauli.com/" }
    ]
}
];