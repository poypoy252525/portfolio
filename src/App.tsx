import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { portfolioData } from '@/data/portfolio';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <HeroSection
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            description={portfolioData.personal.description}
          />
          
          <AboutSection content={portfolioData.about} />
          
          <ProjectsSection projects={portfolioData.projects} />
          
          <SkillsSection skills={portfolioData.skills} />
          
          <ContactSection contactInfo={portfolioData.contact} />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
