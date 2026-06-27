import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  ShieldCheck
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Journey", href: "#ai-journey" },
  { label: "Contact", href: "#contact" }
];

export const metrics = [
  { value: "06+", label: "Core engineering areas" },
  { value: "08", label: "Portfolio platform modules" },
  { value: "03", label: "Deployment surfaces" },
  { value: "AI", label: "Future-ready direction" }
];

export const skills = [
  { name: ".NET", category: "Backend", icon: Code2, level: 90 },
  { name: "React", category: "Frontend", icon: Layers3, level: 82 },
  { name: "Blazor", category: "Frontend", icon: Rocket, level: 78 },
  { name: "Azure", category: "Cloud", icon: Cloud, level: 80 },
  { name: "SQL Server", category: "Database", icon: Database, level: 86 },
  { name: "Microservices", category: "Architecture", icon: GitBranch, level: 76 },
  { name: "JWT Auth", category: "Security", icon: ShieldCheck, level: 74 },
  { name: "AI/RAG", category: "Learning", icon: BrainCircuit, level: 58 }
];

export const projects = [
  {
    title: "AI Career Coach",
    type: "AI Product",
    description:
      "A guided assistant concept that helps professionals map skill gaps, resume positioning, and project roadmaps.",
    stack: [".NET", "React", "LLM", "RAG"],
    featured: true
  },
  {
    title: "Cab Fare Intelligence Platform",
    type: "Data Platform",
    description:
      "Fare analysis experience for comparing route patterns, demand changes, and pricing behavior.",
    stack: ["React", "API", "PostgreSQL", "Analytics"],
    featured: true
  },
  {
    title: "Portfolio Platform",
    type: "Full Stack",
    description:
      "This platform: public portfolio, admin CMS, clean API, deployment pipeline, and AI assistant foundation.",
    stack: ["Next.js", ".NET 8", "Supabase", "JWT"],
    featured: true
  }
];

export const timeline = [
  {
    phase: "01",
    title: "Full Stack Foundation",
    body: "Build production-minded UI and APIs with .NET, React, Blazor, SQL Server, and Azure."
  },
  {
    phase: "02",
    title: "Portfolio Platform",
    body: "Turn professional experience, skills, projects, blogs, and contact workflows into a living system."
  },
  {
    phase: "03",
    title: "AI Assistant Layer",
    body: "Add Ask Adithya AI using curated knowledge, embeddings, retrieval, and model orchestration."
  }
];

export const adminModules = [
  "Projects",
  "Skills",
  "Experience",
  "Blog Posts",
  "Profile Settings",
  "AI Knowledge Base"
];

export const aiPrompts = [
  "Tell me about Adithya's Azure experience",
  "What React projects has he built?",
  "What technologies does he know?",
  "Show me AI-related projects"
];

export const architecture = [
  { label: "Next.js", detail: "App Router frontend" },
  { label: "ASP.NET Core", detail: ".NET 8 Web API" },
  { label: "Supabase", detail: "PostgreSQL storage" },
  { label: "JWT", detail: "Admin authentication" },
  { label: "Vercel", detail: "Frontend hosting" },
  { label: "Render", detail: "Backend hosting" }
];

export const roleHighlights = [
  { icon: BriefcaseBusiness, label: "Professional portfolio website" },
  { icon: Bot, label: "Foundation for AI-powered features" },
  { icon: Rocket, label: "Learning lab for Next.js and .NET" }
];

