import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  showGlow?: boolean;
  fullHeight?: boolean;
  contentWidth?: 'constrained' | 'full';
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  showGlow = false,
  fullHeight = false,
  contentWidth = 'constrained'
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden transition-colors duration-500 bg-white dark:bg-dark-bg ${fullHeight ? 'min-h-screen flex items-center' : 'py-24 md:py-32'} ${className}`}
    >
      {showGlow && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
      )}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full ${contentWidth === 'constrained' ? 'max-w-7xl mx-auto px-6 md:px-12 lg:px-16' : 'px-0'} ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
