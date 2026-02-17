
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import Buttons from './Buttons';

function ProfileInfo() {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-bold text-primary-600 mb-2 uppercase tracking-widest"
            >
                Hello, I'm
            </motion.p>
            
            <motion.div
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.3, type: "spring" }}
            >
                <Title title="Rabin Glan" />
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-4xl font-black text-gray-800 dark:text-gray-100 mt-2 mb-6 uppercase tracking-tight"
            >
                Full Stack Developer
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-xl text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium italic"
            >
                "Join me on this digital odyssey, where creativity meets functionality, and every project is a testament to my commitment to excellence. Let's build something extraordinary together!"
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
               <Buttons />
            </motion.div>
        </motion.div>
    )
}

export default ProfileInfo