import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AllProjectsPage } from '@/pages/AllProjectsPage';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
