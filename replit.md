# Overview

This is a restaurant website application called "Savory Delights" built with React, TypeScript, and Vite on the frontend, with a Flask-based chatbot API backend. The application provides a complete restaurant experience including menu display, reservation system, customer testimonials, and an AI-powered chatbot for customer support. The frontend uses Tailwind CSS for styling and Supabase for data persistence, while the backend integrates with a Gradio-hosted AI model for chatbot functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built as a Single Page Application (SPA) using React 18 with TypeScript, bundled with Vite. The application follows a component-based architecture with the main App component orchestrating several feature components:

- **Component Structure**: Modular components for Header, Hero, Menu, About, Testimonials, Contact, Footer, and Chatbot
- **Styling Framework**: Tailwind CSS for utility-first styling with custom configuration
- **Build System**: Vite for fast development and optimized production builds
- **TypeScript Integration**: Full type safety across components and data models

## Backend Architecture
The backend consists of a lightweight Flask API serving as a proxy between the frontend and external AI services:

- **Flask Server**: Simple REST API with CORS enabled for cross-origin requests
- **AI Integration**: Gradio client connecting to hosted AI model at "eyadomi-eyadgpt.hf.space"
- **API Design**: RESTful endpoints for chat functionality and health checks
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

## Data Storage Solutions
The application uses Supabase as the primary database solution:

- **Database Provider**: Supabase (PostgreSQL-based)
- **Data Models**: Reservation entity with fields for customer information, booking details, and special requests
- **Client Integration**: Supabase JavaScript client for direct database operations from frontend
- **Type Safety**: TypeScript interfaces for database entities ensuring type consistency

## Authentication and Authorization
Currently implements a basic setup without user authentication:

- **Public Access**: All features accessible without login requirements
- **Supabase Configuration**: Uses anonymous key for database access
- **Security Consideration**: Database credentials exposed in client-side code (noted for future improvement)

## Development and Deployment Configuration
The application is configured for development in Replit environment:

- **Dev Server**: Vite dev server on port 5000 with proxy configuration
- **API Proxy**: Frontend proxies `/api` requests to Flask backend on port 8000
- **Host Configuration**: Configured for Replit.dev hosting with specific allowed hosts
- **Hot Reload**: Development setup supports hot module replacement

## State Management
Uses React's built-in state management:

- **Local State**: useState hooks for component-level state (form inputs, UI toggles, chat messages)
- **Props Drilling**: Data passed between components via props
- **No Global State**: No Redux or Context API implementation for this application size

# External Dependencies

## Frontend Dependencies
- **React Ecosystem**: React 18, React DOM for UI framework
- **Supabase**: Database client for PostgreSQL operations
- **Lucide React**: Icon library for UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling

## Backend Dependencies
- **Flask**: Lightweight Python web framework for API server
- **Flask-CORS**: Cross-Origin Resource Sharing support
- **Gradio Client**: Integration with external AI model hosting platform

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking and enhanced IDE support
- **ESLint**: Code linting and quality enforcement
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

## External Services
- **Supabase Database**: PostgreSQL database hosting and management
- **Gradio AI Model**: External AI service hosted at "eyadomi-eyadgpt.hf.space"
- **Unsplash Images**: External image hosting for restaurant photos and testimonials
- **Replit Hosting**: Development and deployment platform

## Third-party Integrations
- **AI Chatbot**: Integration with external Gradio-hosted language model for customer support
- **Image CDN**: Unsplash for high-quality restaurant and food imagery
- **Email Handling**: Reservation system collects email addresses (no email service integrated yet)