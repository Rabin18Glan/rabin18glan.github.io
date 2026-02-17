
import { useState } from "react";
import { ProjectListData, ProjectProps } from "../data/projectListData";
import { motion, AnimatePresence } from "framer-motion";

function ProjectList() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All" 
        ? [...ProjectListData].sort((a, b) => {
            const priority: Record<string, number> = { 'Professional': 0, '': 1, 'Other': 1, 'Personal': 2 };
            return (priority[a.projectType || ''] ?? 1) - (priority[b.projectType || ''] ?? 1);
        })
        : ProjectListData.filter(p => (p.projectType || "Other") === activeTab);

    const rawTypes = [...new Set(ProjectListData.map(p => p.projectType || "Other"))];
    const projectTypes = ["All", "Professional", "Personal", ...rawTypes.filter(t => t !== "Professional" && t !== "Personal")];

    return (
        <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto px-4">
            <div className="flex justify-center mb-8 px-4">
                <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    {projectTypes.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2 rounded-xl text-sm font-bold transition-colors ${
                                activeTab === tab ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                            }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary-600 rounded-xl shadow-lg shadow-primary-600/30"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project: ProjectProps) => {
                        return (
                            <motion.div 
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                                className="flex flex-col bg-white dark:bg-dark-card/50 backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-dark-border group hover:border-primary-600/50 transition-all duration-500"
                            >
                                <div className="w-full overflow-hidden relative aspect-[4/3]">
                                    {project.images && project.images.length > 0 ? (
                                        <img 
                                            src={project.images[0]} 
                                            alt={project.name} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-white bg-primary-600">
                                            <span className="text-6xl font-bold opacity-30">{project.name.substring(0,2).toUpperCase()}</span>
                                            <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">{project.type}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {project.urlBtnLinks.map((btn, i) => (
                                            btn.link && (
                                                <a 
                                                    key={i} 
                                                    href={btn.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 rounded-full bg-white text-primary-600 flex items-center justify-center transition-all transform hover:scale-110 hover:bg-primary-600 hover:text-white shadow-xl"
                                                    title={btn.name}
                                                >
                                                    <span className="material-icons text-xl">{i === 0 ? 'visibility' : 'code'}</span>
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="p-8 flex flex-col gap-4 flex-grow">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h2 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-tight">
                                                {project.name}
                                            </h2>
                                            <h3 className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-1">{project.type}</h3>
                                        </div>
                                        {project.projectType && (
                                            <span className={`flex-shrink-0 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${project.projectType === 'Personal' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'} border border-transparent dark:border-white/5`}>
                                                {project.projectType}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2 text-xs leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                        {project.technologiesUsed.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-dark-bg/50 text-gray-500 dark:text-gray-400 rounded-lg text-[9px] font-bold uppercase tracking-wider border border-gray-100 dark:border-dark-border">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default ProjectList;