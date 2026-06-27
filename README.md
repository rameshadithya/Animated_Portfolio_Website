# Adithya Portfolio Platform

A modern portfolio platform for Adithya, designed as a professional website, a React/Next.js learning project, and a foundation for future AI-powered features.

## Structure

- `frontend` - Next.js App Router, TypeScript, Tailwind CSS, Framer Motion
- `backend` - ASP.NET Core Clean Architecture skeleton
- `docs` - architecture notes and implementation roadmap

## Local Development

Frontend:

```powershell
cd frontend
npm install
npm run dev
```

Backend:

```powershell
cd backend
dotnet restore
dotnet build
dotnet run --project src/Portfolio.API
```

## Deployment Targets

- Frontend: Vercel
- Backend: Render
- Database: Supabase PostgreSQL

