
import { timeline } from '../../timeline/data/timeline';
import { ProjectListData } from '../../projects/data/projectListData';

const CVContent = () => {
    return (
        <div id="cv-content" className="p-12 bg-white text-gray-900 w-[800px] mx-auto min-h-[1100px] flex flex-col">
            {/* Header - Professional Grayscale */}
            <header className="border-b-4 border-gray-900 pb-8 mb-10 flex justify-between items-end">
                <div>
                    <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Rabin Glan</h1>
                    <h2 className="text-xl font-bold text-gray-600 mt-2 uppercase tracking-[0.3em]">Full Stack Developer</h2>
                </div>
                <div className="text-right text-[13px] space-y-1 font-bold text-gray-500 uppercase tracking-wider">
                    <p>Hetauda, Nepal</p>
                    <p>+977 9840469397</p>
                    <p>robinjsl321@gmail.com</p>
                    <p>github.com/Rabin18Glan</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-12 flex-grow">
                {/* Left Column */}
                <div className="col-span-8 space-y-10">
                    {/* Experience */}
                    <section>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 border-b-2 border-gray-900 pb-2 mb-6">Experience</h3>
                        <div className="space-y-8">
                            {timeline.filter(item => item.title.toLowerCase().includes('kutumba') || item.title.toLowerCase().includes('truenary') || item.title.toLowerCase().includes('us tech')).reverse().map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l-[3px] border-gray-200">
                                    <div className="absolute -left-[10px] top-1 w-[18px] h-[18px] rounded-full bg-gray-900 border-4 border-white" />
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">{exp.title}</h4>
                                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{exp.date}</span>
                                    </div>
                                    <p className="text-[13px] text-gray-700 leading-relaxed font-medium">{exp.taskDone}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Featured Projects */}
                    <section>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 border-b-2 border-gray-900 pb-2 mb-6">Key Contributions</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {ProjectListData.filter(p => p.projectType === 'Professional' || p.name === 'Nyauli').slice(0, 4).map((project, index) => (
                                <div key={index} className="border-l-2 border-gray-100 pl-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide">{project.name}</h4>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{project.type}</span>
                                    </div>
                                    <p className="text-[12px] text-gray-600 leading-normal">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="col-span-4 space-y-10">
                    {/* Education */}
                    <section>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 border-b-2 border-gray-900 pb-2 mb-6">Education</h3>
                        <div className="bg-gray-50 p-4 border-l-4 border-gray-300">
                            <h4 className="font-black text-gray-900 text-sm uppercase">Bachelor in CS & IT</h4>
                            <p className="text-xs text-gray-500 font-bold mt-1">Computer Science & Information Technology</p>
                        </div>
                    </section>

                    {/* Skills - Grayscale Tags */}
                    <section>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 border-b-2 border-gray-900 pb-2 mb-6">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'Flutter', 'Node.js', 'GraphQL', 'Kubernetes', 'Docker', 'Drizzle', 'MySQL', 'Rust', 'ASP.NET'].map((skill, index) => (
                                <span key={index} className="px-3 py-1.5 border-2 border-gray-900 text-gray-900 text-[10px] font-black rounded-md uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Contact Disclaimer */}
                    <section className="bg-gray-900 text-white p-6 mt-10">
                        <h3 className="text-sm font-black uppercase tracking-widest mb-4 border-b border-white/20 pb-2">Availability</h3>
                        <p className="text-[11px] leading-relaxed opacity-80 font-medium tracking-tight">
                            Available for high-impact fullstack roles and architectural consulting. Focused on delivering production-grade software with modern technology stacks.
                        </p>
                    </section>
                </div>
            </div>
            
            <footer className="mt-12 pt-8 border-t-2 border-gray-100 flex justify-between items-center">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">
                    Validated Portfolio Build 2024
                </p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    rabinglan.github.io
                </p>
            </footer>
        </div>
    );
};

export default CVContent;
