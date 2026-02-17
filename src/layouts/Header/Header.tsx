
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ChangeModeButton from '../../components/Button/ChangeModeButton';
import { pageList } from '../../pageList';
import useScrollToContext from '../../context/useScrollToContext';
import Title from '../../components/Title';

function Header() {
  const { handleScrollTo } = useScrollToContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer" onClick={(e: any) => handleScrollTo('home')(e)}>
           <Title title="RG" fontSize="2.75rem" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {pageList.filter(p => p.showInHeader).map((page) => (
            <button
              key={page.id}
              onClick={handleScrollTo(page.page)}
              className="hover:scale-110 transition-transform relative group px-2 py-1"
            >
              <Title title={page.title} fontSize="1.5rem" />
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          ))}
          <div className="pl-4">
            <ChangeModeButton />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <ChangeModeButton />
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="text-gray-700 dark:text-gray-200 focus:outline-none"
           >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
              </svg>
           </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border"
        >
            <div className="px-4 pt-2 pb-6 space-y-2">
                {pageList.filter(p => p.showInHeader).map((page) => (
                    <button
                        key={page.id}
                        onClick={(e) => {
                            handleScrollTo(page.page)(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-card/50 transition-colors"
                    >
                        <Title title={page.title} fontSize="1.5rem" />
                    </button>
                ))}
            </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;