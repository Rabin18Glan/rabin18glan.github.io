import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationWrapperProps{
  children?:ReactNode,
  className?:string,
  animationClass?:string,
  duration?:string,
  threshold?:number
}

function AnimationWrapper({ children, className = '', animationClass = '', threshold = 0.1 }:AnimationWrapperProps) {
  
  let initial: any = { opacity: 0 };
  let animate: any = { opacity: 1 };
  
  if (animationClass.includes('slide-in-right')) {
     initial = { x: 100, opacity: 0 };
     animate = { x: 0, opacity: 1 };
  } else if (animationClass.includes('slide-in-left')) {
     initial = { x: -100, opacity: 0 };
     animate = { x: 0, opacity: 1 };
  } else if (animationClass.includes('slide-in-up')) {
     initial = { y: 100, opacity: 0 };
     animate = { y: 0, opacity: 1 };
  } else if (animationClass.includes('slide-in-down')) {
     initial = { y: -100, opacity: 0 };
     animate = { y: 0, opacity: 1 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimationWrapper;
