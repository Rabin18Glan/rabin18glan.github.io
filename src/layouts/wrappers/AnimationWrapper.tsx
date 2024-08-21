"use client"
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimationWrapperProps{
  children?:ReactNode,
  className?:string,
  animationClass?:string,
  duration?:string,
  threshold?:number
}
function AnimationWrapper({ children, className = '', animationClass = '', duration = '1000', threshold = 0.1 }:AnimationWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-opacity duration-${duration} ${inView ? animationClass+' opacity-100' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimationWrapper;
