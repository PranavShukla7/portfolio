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
            "A sophisticated full-stack cabin reservation platform for a luxury resort. Features a seamless guest experience with cabin browsing, real-time availability checks, and secure booking management via Google OAuth and Supabase.",
        tags: ["Next.js", "Supabase", "Tailwind CSS"],
        repoUrl: "https://github.com/PranavShukla7/the-wild-oasis-website",
        content: `
## Overview
The Wild Oasis is a sophisticated web application designed for a luxury cabin resort. It provides a seamless experience for guests to browse, book, and manage their stays.

## Key Features
- **Cabin Browsing**: Explore luxury cabins with detailed descriptions and high-quality imagery.
- **Reservation System**: Real-time booking with instant availability verification.
- **Secure Authentication**: Integrated Google OAuth via NextAuth.js for a smooth login experience.
- **Guest Dashboard**: Comprehensive view for guests to manage their bookings and profiles.

## Tech Stack
Built with Next.js 15, React, Supabase, Tailwind CSS, and NextAuth.js.
    `,
    },
    {
        slug: "worldwise",
        title: "Worldwise",
        description:
            "An interactive travel tracking application that allows users to document their global adventures on a dynamic map. Built with React and Leaflet, featuring geolocation and secure authentication.",
        tags: ["React", "Leaflet", "Vite"],
        demoUrl: "https://worldwise-blond.vercel.app",
        repoUrl: "https://github.com/PranavShukla7/Worldwise",
        content: `
## Overview
Worldwise is an interactive travel tracking app that lets users mark cities they've visited on an interactive map and manage their travel history.

## Key Features
- **Interactive Map**: Visualize your global journeys using Leaflet-powered dynamic maps.
- **Geolocation**: Automatically detect and log your current position into your travel history.
- **Travel Journal**: Log specific details about each visit, including dates and personal notes.
- **Authentication**: Secure per-user travel data storage and retrieval.

## Tech Stack
React, Vite, Leaflet, and React Context API for state management.
    `,
    },
    {
        slug: "assignly",
        title: "Assignly",
        description:
            "A modern task management and team collaboration platform designed for streamlined project workflows. Features intuitive UI/UX for efficient task assignment and progress tracking.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        repoUrl: "https://github.com/PranavShukla7/Assignly",
        content: `
## Overview
Assignly is a project management and task assignment application designed to provide a clean and intuitive interface for teams to manage their workflows efficiently.

## Development Status
Currently under active development, focusing on core task tracking mechanics and team collaborative features.

## Tech Stack
Built with Next.js, TypeScript, and Tailwind CSS.
    `,
    },
    {
        slug: "toolmesh",
        title: "ToolMesh",
        description:
            "A decentralized trust layer for verified AI tool discovery and Model Context Protocol (MCP) configuration. Provides a secure registry for AI agents to integrate verified tools.",
        tags: ["TypeScript", "Next.js", "Vercel"],
        demoUrl: "https://toolmesh-mcp.vercel.app",
        repoUrl: "https://github.com/PranavShukla7/ToolMesh",
        content: `
## Overview
ToolMesh is a decentralized trust layer for verified AI tool discovery and MCP (Model Context Protocol) configuration. It provides a secure and transparent way for AI agents to discover and use verified tools.

## The Problem
As AI agents become more prevalent, they need a reliable way to discover and verify the tools they use. ToolMesh addresses this by providing a decentralized registry.

## Tech Stack
Built with TypeScript and deployed on Vercel.
    `,
    },
    {
        slug: "the-wild-oasis",
        title: "The Wild Oasis (Admin)",
        description:
            "A comprehensive hotel management system designed for internal operations. Enables staff to manage cabin inventories, guest bookings, and real-time dashboard analytics.",
        tags: ["React", "Supabase", "Styled Components"],
        repoUrl: "https://github.com/PranavShukla7/The-Wild-Oasis",
        content: `
## Overview
The Wild Oasis is a full-featured hotel management system that allows hotel employees to manage cabins, bookings, and guests with a powerful administrative interface.

## Key Features
- **Operational Dashboard**: Real-time overview of bookings, sales, and occupancy rates via interactive charts.
- **Inventory Management**: Complete CRUD functionality for hotel cabins and guest data.
- **Check-in/Check-out Workflows**: Streamlined guest arrival and departure processing.
- **Data Synchronization**: Real-time updates powered by Supabase.

## Tech Stack
Built with React, Supabase, and styled-components.
    `,
    },
    {
        slug: "usepopcorn",
        title: "usePopcorn",
        description:
            "A React-powered movie search and discovery application integrated with the OMDb API. Features a personalized watchlist, star ratings, and persistent data storage.",
        tags: ["React", "OMDb API", "Custom Hooks"],
        demoUrl: "https://use-popcorn-eight-plum.vercel.app",
        repoUrl: "https://github.com/PranavShukla7/usePopcorn",
        content: `
## Overview
usePopcorn is a movie discovery and rating application that allows users to search for movies, view detailed information, and maintain a personal watchlist.

## Key Features
- **Global Search**: Search for movies by title using the OMDB API.
- **Rating System**: Custom star rating component for personal evaluations.
- **Persistence**: Managed watchlist with local storage persistence.
- **UX Hooks**: Custom React hooks for keyboard shortcuts and responsive states.

## Tech Stack
React with custom hooks, OMDb API, and CSS Modules.
    `,
    },
    {
        slug: "blog-website",
        title: "Django Blog Platform",
        description:
            "A robust, full-featured blogging platform built with Django. Supports complete CRUD operations for articles, administrative content control, and a responsive experience.",
        tags: ["Python", "Django", "SQLite"],
        repoUrl: "https://github.com/PranavShukla7/blog-website",
        content: `
## Overview
A full-featured blog platform built with Django, featuring article creation, editing, and a clean professional reading experience.

## Key Features
- **Content Management**: Robust CRUD operations for blog posts and categories.
- **Admin Interface**: User-friendly backend for content moderation and management.
- **Responsive Reading**: Optimized typography and layout for readability across devices.

## Tech Stack
Python, Django, and SQLite.
    `,
    },
    {
        slug: "eat-n-split",
        title: "Eat-N-Split",
        description:
            "A practical expense-sharing utility built with React for tracking shared costs among friends. Simplifies bill splitting and balance management with an intuitive interface.",
        tags: ["React", "JavaScript", "CSS"],
        repoUrl: "https://github.com/PranavShukla7/eat-n-split",
        content: `
## Overview
Eat-N-Split is a handy utility for tracking shared expenses between friends, perfect for dining out or shared living costs.

## Key Features
- **Dynamic Balancing**: Real-time calculation of who owes whom.
- **Friend Management**: Quick entry for shared participants with personalized markers.
- **Simple UI**: Minimalist interface focused on high-speed expense entry.

## Tech Stack
Developed with React and vanilla CSS.
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
