# Overview

This is a restaurant website application called "Savory Delights" built with React, TypeScript, and Vite on the frontend, with a Flask-based chatbot API backend. The application provides a complete restaurant experience featuring menu browsing, table reservations, customer testimonials, and an AI-powered chatbot assistant. The system uses Supabase for data storage and authentication, with a modern dark-themed UI built using Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built as a Single Page Application (SPA) using React 18 with TypeScript, bundled with Vite for fast development and optimized builds. The application follows a component-based architecture with modular components for different sections (Header, Hero, Menu, About, Testimonials, Contact, Footer, and Chatbot). Styling is handled through Tailwind CSS with a utility-first approach, providing a consistent dark theme throughout the application. The build system uses Vite for hot module replacement during development and optimized production builds.

## Backend Architecture
The backend consists of a lightweight Flask API that serves as a proxy between the frontend and external AI services. The Flask server runs on port 8000 with CORS enabled for cross-origin requests from the React frontend. The API provides RESTful endpoints for chat functionality (`/chat`) and health checks (`/health`). The chatbot integration uses a Gradio client to connect to a hosted AI model at "eyadomi-eyadgpt.hf.space" for processing user queries. Error handling is centralized with appropriate HTTP status codes and JSON responses.

## Data Storage Solutions
The application uses Supabase as the primary database solution, which is built on PostgreSQL. The main data model is the Reservation entity with fields for customer information (name, email), booking details (date, time, guests), and optional special requests. The frontend integrates directly with Supabase using the JavaScript client for database operations. TypeScript interfaces ensure type safety across the application for database entities.

## Authentication and Authorization
The application implements authentication through Supabase Auth with support for user registration, login, and session management. The AuthContext provides centralized authentication state management across components. Users can sign up with email/password and full name, with session persistence handled automatically. The system includes an AuthModal component for login/signup flows. Currently, database operations use anonymous access, which is noted as a security consideration for future improvement.

## Development and Deployment Configuration
The application is configured for development in the Replit environment with specific host allowances for replit.dev domains. The Vite dev server runs on port 5000 with proxy configuration that routes `/api` requests to the Flask backend on port 8000. The setup supports hot module replacement for efficient development. The configuration includes TypeScript compilation settings optimized for React development with strict type checking enabled.

# External Dependencies

## Frontend Dependencies
- **React 18** - Core UI library for component-based architecture
- **TypeScript** - Type safety and enhanced development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for UI elements
- **Supabase JavaScript Client** - Database and authentication integration

## Backend Dependencies
- **Flask** - Lightweight Python web framework for API endpoints
- **Flask-CORS** - Cross-origin resource sharing support
- **Gradio Client** - Integration with external AI model hosting service

## External Services
- **Supabase** - Backend-as-a-Service providing PostgreSQL database and authentication
- **Hugging Face Spaces** - AI model hosting service (eyadomi-eyadgpt.hf.space) for chatbot functionality
- **Unsplash** - Image hosting service for restaurant photos and UI imagery

## Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **TypeScript ESLint** - TypeScript-specific linting rules