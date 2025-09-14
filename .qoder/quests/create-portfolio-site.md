# Portfolio Site Design Document

## Overview

This document outlines the design for a developer portfolio website built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui components. The portfolio will feature a minimalist, coding-themed design that showcases projects and professional information using only shadcn/ui and Tailwind CSS styling.

**Target User**: Software developers, potential employers, clients
**Design Philosophy**: Minimalist, clean, professional with subtle coding themes
**Primary Goal**: Showcase projects and professional experience effectively

## Technology Stack & Dependencies

### Core Technologies

- **React 19.1.1**: UI library for component-based architecture
- **Vite 7.1.2**: Build tool and development server
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4.1.13**: Utility-first CSS framework
- **shadcn/ui**: Component library based on Radix UI primitives
- **Zustand**: Lightweight state management library

### UI Components & Styling

- **shadcn/ui Components**: Pre-built, accessible components
- **Lucide React**: Icon library
- **Radix UI**: Headless UI primitives
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Utility for merging Tailwind classes

### Current Configuration

- **Style**: new-york variant
- **Base Color**: neutral
- **CSS Variables**: enabled
- **Icons**: Lucide React
- **Dark Mode**: supported via CSS variables

## Component Architecture

### Component Hierarchy

```
App
├── Providers
│   └── ThemeProvider
├── Layout
│   ├── Header (Navigation)
│   ├── Main Content
│   │   ├── HeroSection
│   │   ├── AboutSection
│   │   ├── ProjectsSection
│   │   │   └── ProjectCard[]
│   │   ├── SkillsSection
│   │   └── ContactSection
│   └── Footer
└── UI Components (Reusable)
    ├── AnimatedText
    ├── SkillBadge
    ├── SocialLink
    ├── ContactForm
    └── ThemeToggle
```

### Architecture Layers

```
┌─────────────────────────────────────────┐
│                Presentation             │
│        (React Components)               │
├─────────────────────────────────────────┤
│              Business Logic             │
│         (Custom Hooks)                  │
├─────────────────────────────────────────┤
│             State Management            │
│            (Zustand Stores)             │
├─────────────────────────────────────────┤
│              Data Layer                 │
│        (Services & APIs)                │
├─────────────────────────────────────────┤
│               Types                     │
│        (TypeScript Interfaces)          │
└─────────────────────────────────────────┘
```

### Component Definitions

#### Reusable UI Components (Bottom Layer)

**Button Component (shadcn/ui)**

- Pre-built with variants and sizes
- Props: `variant, size, className, children`

**Card Component (shadcn/ui)**

- Container for content sections
- Props: `className, children`

**Badge Component (shadcn/ui)**

- For skill tags and technology labels
- Props: `variant, className, children`

**ThemeToggle Component**

- Dark/light mode switcher
- Uses theme store
- Props: `className?: string`

**AnimatedText Component**

- Typing animation effect
- Props: `text: string, delay?: number, className?: string`

**SkillBadge Component**

- Skill level indicator with badge
- Props: `skill: Skill, className?: string`

**SocialLink Component**

- Social media link with icon
- Props: `link: SocialLink, className?: string`

#### Layout Components (Middle Layer)

**Header Component**

- Navigation with smooth scroll anchors
- Theme toggle integration
- Responsive hamburger menu for mobile
- Uses navigation store
- Props: `className?: string`

**Footer Component**

- Copyright information
- Social links using SocialLink components
- Contact information
- Props: `className?: string`

#### Section Components (Top Layer)

**HeroSection Component**

- Uses AnimatedText for typing effect
- Call-to-action buttons using Button components
- Professional avatar/image
- Uses portfolio store for data
- Props: `className?: string`

**AboutSection Component**

- Professional summary display
- Experience highlights
- Personal interests
- Uses portfolio store for content
- Props: `className?: string`

**ProjectsSection Component**

- Grid layout of ProjectCard components
- Filter/search functionality
- Uses projects store for data and filtering
- Props: `className?: string`

**ProjectCard Component**

- Project image/screenshot
- Title and description
- Technology stack using Badge components
- Live demo and source code links using Button components
- Props: `project: Project, className?: string`

**SkillsSection Component**

- Technical skills categorized
- Uses SkillBadge components for display
- Technology icons
- Uses skills store for data
- Props: `className?: string`

**ContactSection Component**

- Contact form using ContactForm component
- Contact information
- Social media links using SocialLink components
- Uses contact store for form state
- Props: `className?: string`

**ContactForm Component**

- Form validation and submission
- Uses contact store for state management
- Error handling and success states
- Props: `className?: string`

### Props/State Management

#### Data Types

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  icon?: string;
}

interface AboutContent {
  summary: string;
  experience: string[];
  interests: string[];
}

interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

#### State Management Strategy (Zustand)

**Theme Store**

```typescript
interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}
```

**Portfolio Store**

```typescript
interface PortfolioState {
  personalInfo: PersonalInfo;
  aboutContent: AboutContent;
  isLoading: boolean;
  setPersonalInfo: (info: PersonalInfo) => void;
  setAboutContent: (content: AboutContent) => void;
}
```

**Projects Store**

```typescript
interface ProjectsState {
  projects: Project[];
  filteredProjects: Project[];
  selectedTechnology: string | null;
  searchQuery: string;
  isLoading: boolean;
  setProjects: (projects: Project[]) => void;
  filterByTechnology: (tech: string | null) => void;
  searchProjects: (query: string) => void;
  toggleFeatured: (projectId: string) => void;
}
```

**Skills Store**

```typescript
interface SkillsState {
  skillCategories: SkillCategory[];
  selectedCategory: string | null;
  isLoading: boolean;
  setSkillCategories: (categories: SkillCategory[]) => void;
  selectCategory: (category: string | null) => void;
}
```

**Contact Store**

```typescript
interface ContactState {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  errors: Record<string, string>;
  updateFormData: (data: Partial<ContactFormData>) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
  clearErrors: () => void;
}
```

**Navigation Store**

```typescript
interface NavigationState {
  activeSection: string;
  isMobileMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}
```

### Component Usage Examples

### Reusable Components with Store Integration

**ThemeToggle Component**

```tsx
import { useThemeStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
};
```

**ProjectCard Component**

```tsx
import { Project } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-lg transition-shadow",
        className
      )}
    >
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={project.liveUrl} target="_blank">
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank">
                Source Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
```

**ContactForm Component with Store**

```tsx
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = ({ className }: { className?: string }) => {
  const { formData, updateFormData, handleSubmit, isSubmitting, errors } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => updateFormData({ name: e.target.value })}
        error={errors.name}
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
        error={errors.email}
      />
      <Textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => updateFormData({ message: e.target.value })}
        error={errors.message}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};
```

## Routing & Navigation

### Single Page Application Structure

- **No External Router**: Single-page design with smooth scrolling
- **Anchor Navigation**: Hash-based navigation to sections
- **Scroll Behavior**: Smooth scrolling with offset for fixed header

### Navigation Menu

```
- Home (#hero)
- About (#about)
- Projects (#projects)
- Skills (#skills)
- Contact (#contact)
```

### Mobile Navigation

- Collapsible hamburger menu
- Full-screen overlay on mobile
- Touch-friendly tap targets

## Styling Strategy

### Tailwind CSS Configuration

- **Design System**: Following shadcn/ui design tokens
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Class-based dark mode implementation
- **Typography**: Tailwind typography plugin integration

### Color Scheme (Coding Theme)

```css
/* Light Mode */
--primary: oklch(0.205 0 0)        /* Near black */
--secondary: oklch(0.97 0 0)       /* Light gray */
--accent: oklch(0.646 0.222 41.116) /* Code syntax highlighting accent */

/* Dark Mode */
--primary: oklch(0.922 0 0)        /* Off white */
--secondary: oklch(0.269 0 0)      /* Dark gray */
--accent: oklch(0.488 0.243 264.376) /* Code syntax highlighting accent */
```

### Coding Theme Elements

- **Syntax Highlighting Colors**: Subtle use of code editor colors
- **Monospace Typography**: Code blocks and technical content
- **Terminal-Inspired Elements**: Command prompt styling for call-to-actions
- **Grid Layouts**: Clean, structured layouts reminiscent of code organization

### Component Styling Patterns

```css
/* Card shadows (default shadcn) */
.shadow-xs: box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Hover effects */
.hover\:shadow-lg:hover: box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)

/* Focus states */
.focus-visible\:ring-ring\/50: outline: 2px solid hsl(var(--ring) / 0.5)
```

## API Integration Layer

### Service Layer Architecture

**Service Organization**

```
src/services/
├── portfolioService.ts   # Portfolio data operations
├── contactService.ts     # Email/contact form submission
├── githubService.ts      # GitHub API integration
└── storageService.ts     # Local storage operations
```

**Portfolio Service**

```typescript
interface PortfolioService {
  loadPersonalInfo(): Promise<PersonalInfo>;
  loadAboutContent(): Promise<AboutContent>;
  loadProjects(): Promise<Project[]>;
  loadSkills(): Promise<SkillCategory[]>;
}

export const portfolioService: PortfolioService = {
  async loadPersonalInfo() {
    // Load from static JSON or API
    return await import("@/data/personal-info.json");
  },

  async loadProjects() {
    // Combine static data with GitHub API
    const staticProjects = await import("@/data/projects.json");
    const githubData = await githubService.getUserRepos();
    return mergeProjectData(staticProjects, githubData);
  },
};
```

### Contact Form Integration

- **Email Service**: Integration with EmailJS or Netlify Forms
- **Form Validation**: Zod schema validation
- **Error Handling**: Comprehensive error states in contact store
- **Success States**: User feedback through store state

### External API Integration

- **GitHub API**: Repository information for projects
- **Rate Limiting**: Implement request throttling
- **Caching**: Store API responses in local storage
- **Error Boundaries**: Graceful API failure handling

## Folder Structure & Clean Architecture

### Project Organization

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── badge.tsx
│   ├── reusable/          # Custom reusable components
│   │   ├── ThemeToggle.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── SocialLink.tsx
│   │   └── ContactForm.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── sections/          # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ProjectCard.tsx
│       ├── SkillsSection.tsx
│       └── ContactSection.tsx
├── stores/
│   ├── useThemeStore.ts
│   ├── usePortfolioStore.ts
│   ├── useProjectsStore.ts
│   ├── useSkillsStore.ts
│   ├── useContactStore.ts
│   ├── useNavigationStore.ts
│   └── index.ts
├── hooks/
│   ├── usePortfolioData.ts
│   ├── useProjectFilters.ts
│   ├── useContactForm.ts
│   └── useScrollSpy.ts
├── services/
│   ├── portfolioService.ts
│   ├── contactService.ts
│   ├── githubService.ts
│   └── storageService.ts
├── types/
│   ├── portfolio.ts
│   ├── project.ts
│   ├── skill.ts
│   └── contact.ts
├── data/
│   ├── personal-info.json
│   ├── projects.json
│   ├── skills.json
│   └── about.json
├── lib/
│   ├── utils.ts
│   └── validations.ts
├── App.tsx
├── main.tsx
└── index.css
```

### Clean Architecture Principles

**Separation of Concerns**

- **Presentation Layer**: React components focused on UI rendering
- **Business Logic Layer**: Custom hooks containing application logic
- **State Management Layer**: Zustand stores for state operations
- **Data Layer**: Services for external data operations
- **Types Layer**: TypeScript interfaces and type definitions

**Dependency Inversion**

- Components depend on hooks, not directly on stores
- Hooks depend on services, not directly on external APIs
- Services implement interfaces, allowing easy testing and mocking

**Single Responsibility**

- Each component has one clear purpose
- Stores manage specific domain state
- Services handle specific external operations
- Hooks encapsulate specific business logic

## Testing Strategy

### Unit Testing

- **Vitest**: Testing framework compatible with Vite
- **React Testing Library**: Component testing utilities
- **Coverage Target**: 80% coverage for components

### Component Testing Approach

```typescript
// Example test structure
describe("ProjectCard", () => {
  it("renders project information correctly", () => {
    // Render component with mock data
    // Assert all required elements are present
    // Test interactive elements
  });

  it("handles missing optional props gracefully", () => {
    // Test component with minimal required props
  });
});
```

### Visual Testing

- **Chromatic/Storybook**: Visual regression testing (if budget allows)
- **Manual Testing**: Cross-browser and device testing
- **Accessibility Testing**: WAVE, axe-core integration

### End-to-End Testing

- **Playwright**: Simple E2E tests for user journeys
- **Test Scenarios**: Navigation, form submission, theme switching
- **Mobile Testing**: Touch interactions and responsive behavior

## Accessibility Features

### shadcn/ui Accessibility

- **Radix UI Primitives**: Built-in accessibility features
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Tab order and focus management
- **Color Contrast**: WCAG AA compliance

### Additional Accessibility Considerations

- **Alt Text**: Descriptive alt text for all images
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Focus Indicators**: Visible focus states for all interactive elements
- **Skip Links**: Navigation bypass for screen readers

## Performance Optimization

### Build Optimization

- **Vite Tree Shaking**: Automatic dead code elimination
- **Code Splitting**: Dynamic imports for heavy components
- **Asset Optimization**: Image compression and lazy loading
- **Bundle Analysis**: Regular bundle size monitoring

### Runtime Performance

- **React Optimization**: useMemo, useCallback for expensive operations
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Intersection Observer for images and sections
- **Minimal JavaScript**: Leverage CSS for animations when possible

## Security Considerations

### Data Protection

- **No Sensitive Data**: Portfolio content is public
- **Form Security**: CSRF protection for contact forms
- **Input Validation**: Sanitize all user inputs
- **HTTPS Only**: Force secure connections

### Content Security

- **CSP Headers**: Content Security Policy implementation
- **No Inline Scripts**: All JavaScript in external files
- **Image Security**: Validate and optimize uploaded images
- **Regular Updates**: Keep dependencies up to date

## Deployment Strategy

### Build Process

```bash
npm run build          # TypeScript compilation and Vite build
npm run lint          # ESLint validation
npm run preview       # Local production preview
```

### Hosting Options

- **Vercel**: Optimal for React/Vite projects
- **Netlify**: Simple deployment with form handling
- **GitHub Pages**: Free hosting for static sites
- **Custom Server**: VPS or dedicated hosting

### Environment Configuration

```env
VITE_CONTACT_FORM_ENDPOINT=
VITE_ANALYTICS_ID=
VITE_GITHUB_USERNAME=
```

### Performance Monitoring

- **Core Web Vitals**: Monitor loading performance
- **Error Tracking**: Sentry or similar service
- **Analytics**: User behavior tracking
- **Uptime Monitoring**: Service availability checks
