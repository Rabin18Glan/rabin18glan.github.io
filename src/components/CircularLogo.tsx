import { motion } from 'framer-motion';

interface CircularLogoProps{
  className?:string,
  logo:string,
}

function CircularLogo({className = '', logo}: CircularLogoProps) {
  const isDevicon = logo.startsWith('devicon-');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 8px var(--primary-color)" }}
      className={`rounded-full flex items-center justify-center h-24 w-24 p-4 bg-white dark:bg-dark-card shadow-xl ${className}`} 
    >
      {isDevicon ? (
        <i className={`${logo} text-5xl`}></i>
      ) : (
        <img className='object-contain w-full h-full drop-shadow-md' src={logo} alt="skill-logo" />
      )}
    </motion.div>
  )
}

export default CircularLogo;