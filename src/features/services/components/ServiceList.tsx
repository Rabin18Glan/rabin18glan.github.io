import { ServiceDataProps, ServicesData } from '../data/ServicesData';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

function ServiceList() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" 
    >
      {ServicesData.map((service: ServiceDataProps, index) => {
        const { skills, title } = service;
        return (
            <motion.div key={index} variants={item} className="w-full flex justify-center">
                <ServiceCard {...{ skills, title }} />
            </motion.div>
        );
      })}
    </motion.div>
  )
}

export default ServiceList