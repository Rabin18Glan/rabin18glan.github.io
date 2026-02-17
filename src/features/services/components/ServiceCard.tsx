import { motion } from 'framer-motion';
import CircularLogo from '../../../components/CircularLogo';
import Title from '../../../components/Title';
import { ServiceDataProps } from '../data/ServicesData';

function ServiceCard({ title, skills }: ServiceDataProps) {

  const [title1, title2] = title.split(' ');
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className='max-w-xs md:max-w-sm lg:max-w-md w-full px-6 py-8 rounded-3xl h-auto flex flex-col items-center gap-6 shadow-2xl bg-white/5 backdrop-blur-md border border-primary-600/30'
    >
      <div className='flex flex-col items-center mb-4'> 
        <Title fontSize='28px' title={title1} />
        {title2 && <Title fontSize='28px' title={title2} />} 
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {skills.map((logo, index) => {
          return <CircularLogo key={index} logo={logo} className='border border-primary-600/20' />
        })}
      </div>
    </motion.div>
  )
}

export default ServiceCard