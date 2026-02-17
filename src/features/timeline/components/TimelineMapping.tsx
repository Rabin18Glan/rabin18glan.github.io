
import { timeline } from '../data/timeline';
import { motion } from 'framer-motion';

function TimelineMapping() {
    return (
        <div className="relative flex flex-col gap-12 py-10 w-full max-w-7xl mx-auto px-4">
             {/* Vertical Line - Standardized Primary */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-900 transform md:-translate-x-1/2 rounded-full"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8 relative z-20"
            >
               <span className="inline-block px-4 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200 text-sm font-bold uppercase tracking-widest">
                 My Journey
               </span>
            </motion.div>

            {timeline.map((data, index) => {
                const isLeft = index % 2 === 0;
                return (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                        className={`relative flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                         {/* Content Card Side */}
                        <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                             <div className={`p-6 bg-white dark:bg-dark-card/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border hover:border-primary-600/50 transition-all duration-300 group`}>
                                 <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-primary-600 uppercase bg-primary-50 dark:bg-primary-900/20 rounded-full">
                                    {data.date}
                                 </span>
                                 <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {data.title}
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {data.taskDone}
                                 </p>
                             </div>
                        </div>
                        
                        {/* Dot */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-dark-bg border-4 border-primary-100 dark:border-primary-900 z-10 flex items-center justify-center shadow-lg shadow-primary-600/10 transition-all duration-300 group-hover:border-primary-600">
                           <div className="transform scale-75 group-hover:scale-90 transition-transform duration-300">
                             {data.icon}
                           </div>
                        </div>

                         {/* Empty Space for alignment on Desktop */}
                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                        
                    </motion.div>
                )
            })}

             <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mt-8 relative z-20"
            >
               <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">To be continued</span>
            </motion.div>
        </div>
    )
}
export default TimelineMapping;