export interface WorkExperience {
    dateRange: string;
    company: string;
    org?: string;
    role: string;
    description: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags?: string[];
    demoUrl?: string;
    repoUrl?: string;
    content: string;
}

export interface OSSContribution {
    name: string;
    description: string;
    url: string;
}

// ===== Work Experience =====
export const workExperience: WorkExperience[] = [
    {
        dateRange: "2024 - Present",
        company: "Open Source Contributor",
        role: "Frontend & Full Stack",
        description:
            "Contributing to production-grade open source projects including Wagtail CMS and IntelOwl. Working on UI components, documentation improvements, and bug fixes across large-scale codebases.",
    },
    {
        dateRange: "2024 - Present",
        company: "Independent Developer",
        role: "Full Stack Developer",
        description:
            "Designing and building full-stack web applications end-to-end — from UI/UX to database design. Shipping production apps with React, Next.js, Django, Supabase, and Tailwind CSS.",
    },
];

// ===== Projects =====
export const projects: Project[] = [
    {
        slug: "the-wild-oasis-website",
        title: "The Wild Oasis Website",
        description:
            "Full-stack cabin reservation platform with real-time booking, Google OAuth, and server-side rendering.",
        tags: ["Next.js", "Supabase", "Tailwind CSS"],
        repoUrl: "https://github.com/PranavShukla7/the-wild-oasis-website",
        content: `
## Overview
The customer-facing website for The Wild Oasis resort, allowing guests to browse cabins, make reservations, and manage their bookings.

## Features
- Browse available cabins with detailed information
- Real-time booking management
- User authentication with Google OAuth
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js

## Tech Stack
Next.js, React, Supabase, Tailwind CSS, and NextAuth.js.
    `,
    },
    {
        slug: "worldwise",
        title: "Worldwise",
        description:
            "Travel tracking app with interactive maps, geolocation, and authentication built with React and Leaflet.",
        tags: ["React", "Leaflet", "Vite"],
        repoUrl: "https://github.com/PranavShukla7/Worldwise",
        content: `
## Overview
Worldwise is a travel tracking application that helps users keep a visual record of all the cities and countries they have visited.

## Features
- Interactive world map with city markers
- Geolocation support for automatic position detection
- City and country data management
- Authentication system
- Travel history timeline

## Tech Stack
Built with React, Vite, Leaflet for maps, and CSS Modules for styling.
    `,
    },
    {
        slug: "assignly",
        title: "Assignly",
        description:
            "Task management application designed for efficient team collaboration and tracking.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        repoUrl: "https://github.com/PranavShukla7/assignly",
        content: `
## Overview
Assignly is a project management and task assignment application currently under active development. It aims to provide a clean and intuitive interface for teams to manage their workflows.

## Status
This project is currently in the early stages of development.

## Tech Stack
Built with Next.js, TypeScript, and Tailwind CSS.
    `,
    },
    {
        slug: "toolmesh",
        title: "ToolMesh",
        description:
            "Decentralized trust layer for verified AI tool discovery and MCP configuration.",
        tags: ["TypeScript", "Next.js", "Vercel"],
        demoUrl: "https://toolmesh-mcp.vercel.app",
        repoUrl: "https://github.com/PranavShukla7/ToolMesh",
        content: `
## Overview
ToolMesh is a decentralized trust layer for verified AI tool discovery and MCP (Model Context Protocol) configuration. It provides a secure and transparent way for AI agents to discover and use verified tools.

## The Problem
As AI agents become more prevalent, they need a reliable way to discover and verify the tools they use. Current solutions lack decentralization and transparency.

## Solution
ToolMesh provides a decentralized registry where tool providers can publish verified tool configurations, and AI agents can discover and integrate them with confidence.

## Tech Stack
Built with TypeScript and deployed on Vercel.
    `,
    },
    {
        slug: "the-wild-oasis",
        title: "The Wild Oasis",
        description:
            "Resort management dashboard with cabin bookings, guest check-ins, analytics, dark mode, and auth.",
        tags: ["React", "Supabase", "Styled Components"],
        repoUrl: "https://github.com/PranavShukla7/The-Wild-Oasis",
        content: `
## Overview
The Wild Oasis is a comprehensive resort management application designed for hotel staff to efficiently manage day-to-day operations.

## Features
- Cabin booking and management
- Guest check-in and check-out workflows
- Dashboard with analytics and key metrics
- Dark mode support
- User authentication and settings management

## Tech Stack
Built with React, Supabase for the backend, and styled-components for the UI.
    `,
    },
    {
        slug: "usepopcorn",
        title: "usePopcorn",
        description:
            "Movie search and rating app with OMDb API integration, personal watchlist, and stats tracking.",
        tags: ["React", "OMDb API", "Custom Hooks"],
        repoUrl: "https://github.com/PranavShukla7/usePopcorn",
        content: `
## Overview
usePopcorn is a movie discovery and rating application that allows users to search for movies, view details, and maintain a personal watchlist with ratings.

## Features
- Movie search powered by OMDb API
- Detailed movie information display
- Personal rating and watchlist management
- Watched movie statistics

## Tech Stack
React with custom hooks, OMDb API integration.
    `,
    },
    {
        slug: "blog-website",
        title: "Blog Website",
        description:
            "Full-featured blog platform with CRUD operations built on Django and Python.",
        tags: ["Python", "Django", "SQLite"],
        repoUrl: "https://github.com/PranavShukla7/blog-website",
        content: `
## Overview
A full-featured blog platform built with Django, featuring article creation, editing, and a clean reading experience.

## Features
- Create, read, update, and delete blog posts
- Clean and responsive design
- Django admin integration
- User-friendly content management

## Tech Stack
Python, Django, HTML/CSS, SQLite.
    `,
    },
    {
        slug: "eat-n-split",
        title: "Eat-N-Split",
        description:
            "Expense splitting utility for tracking shared costs between friends, built with React.",
        tags: ["React", "JavaScript", "CSS"],
        repoUrl: "https://github.com/PranavShukla7/eat-n-split",
        content: `
## Overview  
Eat-N-Split is a handy utility app for splitting expenses with friends after dining out or shared activities.

## Features
- Add friends to your list
- Track who owes whom
- Simple and intuitive bill splitting interface

## Tech Stack
React, JavaScript, CSS.
    `,
    },
];


// ===== OSS Contributions =====
export const ossContributions: OSSContribution[] = [
    {
        name: "Wagtail",
        description:
            "A Django content management system focused on flexibility and user experience.",
        url: "https://github.com/wagtail/wagtail",
    },
    {
        name: "IntelOwl",
        description:
            "Open source intelligence platform to manage threat intelligence at scale.",
        url: "https://github.com/intelowlproject/IntelOwl",
    },
    {
        name: "ToolMesh",
        description:
            "Decentralized trust layer for verified AI tool discovery and MCP configuration.",
        url: "https://github.com/PranavShukla7/ToolMesh",
    },
];

// ===== Social Links =====
export const socialLinks = {
    github: "https://github.com/PranavShukla7",
    x: "https://x.com/Pranav__Shukla",
    email: "mailto:shuklapranav789@gmail.com",
    resume: "/Pranav_Shukla_Resume.pdf",
};
