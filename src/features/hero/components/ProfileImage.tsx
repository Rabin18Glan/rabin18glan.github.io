import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1, 
        type: "spring", 
        bounce: 0.4 
      }}
      className="relative z-20 flex-shrink-0"
    >
      {/* Decorative Outer Rings */}
      <div className="relative p-3 rounded-full border border-primary-500/10 dark:border-primary-500/5">
        <div className="relative p-3 rounded-full border border-primary-500/20 dark:border-primary-500/10">
          <div className="relative p-2 rounded-full border-4 border-primary-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            {/* Main Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl">
              <img 
                alt='Rabin Glan' 
                src={'./profile.png'}
                className="w-full h-full object-cover object-top bg-gray-50 dark:bg-dark-card" 
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Active Status Indicator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-[10%] right-[10%] z-30"
            >
              <div className="relative flex h-6 w-6 md:h-8 md:w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 md:h-8 md:w-8 bg-green-500 border-4 border-white dark:border-dark-bg shadow-xl"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
    </motion.div>
  );
}

export default ProfileImage;
