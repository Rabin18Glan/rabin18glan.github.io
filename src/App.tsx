
import { Footer, Header, Main } from './layouts';
import { ColorModeProvider } from './context/colorModeContext'
import SEO from './components/SEO';
import CVContent from './features/cv/components/CVContent';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivacyPolicy, TermsOfUse } from './pages';
import ScrollToTop from './hooks/ScrollToTop';
import ScrollToProvider from './context/ScrollToProvider';

function Root() { 
  return (
    <HelmetProvider>
      <ColorModeProvider>
        <Router>
          <ScrollToProvider>
            <ScrollToTop />
            <SEO />
            <div className="bg-white dark:bg-dark-bg min-h-screen transition-colors duration-500">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfUse />} />
                </Routes>
              </main>
              <Footer/>
            </div>
            
            {/* Off-screen CV for PDF generation */}
            <div className="fixed -left-[9999px] top-0">
              <CVContent />
            </div>
          </ScrollToProvider>
        </Router>
      </ColorModeProvider>
    </HelmetProvider>
  );
}

export default Root;
