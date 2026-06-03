# MMDBanking Frontend

An in-progress Angular frontend prototype for a banking application. This project demonstrates Angular routing, component-based UI development, API service organization, login page structure, user dashboard layout, and banking account detail components.

## Overview

MMDBanking Frontend is a TypeScript and Angular project designed as the client-side companion to the MMDBanking backend prototype.

The goal of this project is to demonstrate frontend application structure using Angular, including reusable components, page-level routing, service files for API communication, and a basic user-facing banking dashboard layout.

This is a prototype project and is not intended to represent a production-ready banking application.

## Current Features

* Angular application structure
* Login page and login footer components
* Home page and jumbotron components
* Navbar component
* User home/dashboard area
* User home navbar and banner components
* Banking account details component
* API service files for login and user-related requests
* Angular routing setup
* Component-level CSS organization
* Unit test/spec file structure
* Server-side rendering related setup files

## In Progress / Not Yet Implemented

* Complete authentication flow
* Complete backend API integration
* Production-ready route guards
* Form validation improvements
* Error handling and loading states
* State management for authenticated users
* Responsive UI polish across all screens
* Accessibility audit
* Expanded test coverage
* Deployment configuration

## Tech Stack

**Language:** TypeScript
**Framework:** Angular
**Frontend:** HTML, CSS
**Architecture:** Component-based SPA structure
**API Layer:** Angular service files
**Testing:** Angular spec files
**Build Tooling:** Angular CLI / npm
**SSR Setup:** Angular server-side rendering files included

## Project Structure

```text
mmdbanking-front/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── login-api.ts
│   │   │   └── user-api.ts
│   │   ├── home/
│   │   ├── jumbotron/
│   │   ├── login/
│   │   │   └── login-footer/
│   │   ├── navbar/
│   │   ├── user-home/
│   │   │   ├── banking-account-details/
│   │   │   ├── user-home-banner/
│   │   │   └── user-home-navbar/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.config.server.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
├── server.ts
├── tsconfig.json
└── README.md
```

## Application Structure

The project is organized around page-level and reusable UI components.

### Core App Files

The main Angular application files define routing, application configuration, and root component structure.

Key files include:

* `app.component.ts`
* `app-routing.module.ts`
* `app.routes.ts`
* `app.config.ts`
* `app.config.server.ts`

### API Layer

The `api/` directory contains service-style files intended to organize backend communication.

Current API files include:

* `login-api.ts`
* `user-api.ts`

These files are intended to separate HTTP/API logic from presentation components.

### Login Area

The login feature includes a main login component and footer component.

Current login components include:

* `login.component.ts`
* `login-footer.component.ts`

### User Dashboard Area

The `user-home/` directory contains components for the authenticated user experience and banking account display.

Current user dashboard components include:

* `user-home.component.ts`
* `user-home-navbar.component.ts`
* `user-home-banner.component.ts`
* `banking-account-details.component.ts`

## Architecture

The frontend follows a component-based Angular structure:

```text
User Interface
      ↓
Angular Components
      ↓
API Service Files
      ↓
Backend API
```

The intended application flow is:

```text
Login Page
      ↓
User Authentication
      ↓
User Home / Dashboard
      ↓
Banking Account Details
```

## Getting Started

### Prerequisites

* Node.js
* npm
* Angular CLI

### Clone the Repository

```bash
git clone git@github.com:Ccastril/mmdbanking-front.git
cd mmdbanking-front
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm start
```

Or:

```bash
ng serve
```

Then open the app in your browser at:

```text
http://localhost:4200
```

## Testing

Run the Angular test suite with:

```bash
npm test
```

## Build

Create a production build with:

```bash
npm run build
```

## Skills Demonstrated

* Angular application structure
* TypeScript frontend development
* Component-based UI architecture
* Angular routing organization
* API service layer organization
* Login page layout
* User dashboard component structure
* Banking/account UI modeling
* Component-scoped styling
* Angular testing file structure
* Frontend/backend separation of concerns

## Future Improvements

* Complete backend API integration
* Add authentication route guards
* Add reactive forms for login and user inputs
* Add validation and user-friendly error states
* Add loading states for API calls
* Improve responsive design
* Add accessibility improvements
* Add stronger unit and integration tests
* Add environment-based API configuration
* Add CI workflow for build and test validation
* Connect to the MMDBanking Spring Boot backend prototype

## Related Project

This frontend was designed to pair with the MMDBanking backend prototype:

* `mmdbanking-server`
