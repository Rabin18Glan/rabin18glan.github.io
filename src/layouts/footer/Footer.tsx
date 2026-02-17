
import useScrollToContext from '../../context/useScrollToContext';
import Title from '../../components/Title';
import { motion } from 'framer-motion';

export default function Footer() {
    const { handleScrollTo } = useScrollToContext();

    return (
        <footer className="border-t border-gray-100 dark:border-dark-border bg-white dark:bg-dark-bg w-full pt-20 pb-10 transition-colors duration-500">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                
                {/* Upper Section: CTA & About */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="cursor-pointer inline-block" onClick={(e: any) => handleScrollTo('home')(e)}>
                            <Title title="RG" fontSize="3rem" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                            Crafting high-performance digital experiences with a focus on clean architecture, 
                            scalability, and user-centric design. Let's build the future together.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="mailto:robinjsl321@gmail.com" 
                                className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <span className="material-icons">email</span>
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="tel:+9779840469397" 
                                className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <span className="material-icons">phone</span>
                            </motion.a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
                        <FooterColumn title="Navigation">
                            <FooterLink onClick={handleScrollTo('home')}>Home</FooterLink>
                            <FooterLink onClick={handleScrollTo('about')}>About Me</FooterLink>
                            <FooterLink onClick={handleScrollTo('projects')}>Portfolio</FooterLink>
                            <FooterLink onClick={handleScrollTo('contact')}>Contact</FooterLink>
                        </FooterColumn>
                        
                        <FooterColumn title="Connect">
                            <ExternalLink href="https://www.linkedin.com/in/rabin-glan-95ba41303/">LinkedIn</ExternalLink>
                            <ExternalLink href="https://github.com/Rabin18Glan">GitHub</ExternalLink>
                            <ExternalLink href="https://www.upwork.com/freelancers/~01593d9f2913e8f562">Upwork</ExternalLink>
                            <ExternalLink href="https://www.facebook.com/profile.php?id=61551905339042">Facebook</ExternalLink>
                        </FooterColumn>
 
                        <FooterColumn title="Information">
                            <FooterLink onClick={handleScrollTo('privacy')}>Privacy Policy</FooterLink>
                            <FooterLink onClick={handleScrollTo('terms')}>Terms of Use</FooterLink>
                            <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest pt-4">Based in</p>
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-300">Hetauda, Nepal</p>
                        </FooterColumn>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Built With */}
                <div className="pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wide">
                            AVAILABLE FOR NEW OPPORTUNITIES
                         </span>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium text-center">
                        © {new Date().getFullYear()} <span className="text-primary-600 font-bold">Rabin Glan</span>. 
                        Handcrafted with React & Tailwind.
                    </p>

                    <div className="flex gap-6">
                        <span className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.4em]">
                            Ver v2.4.0
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
function FooterColumn({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 mb-4">{title}</h4>
            <ul className="text-gray-600 dark:text-gray-400 font-bold text-sm space-y-4">
                {children}
            </ul>
        </div>
    );
}
 
interface LinkProps { onClick?: React.MouseEventHandler<HTMLButtonElement>, href?: string, children: React.ReactNode }
 
function FooterLink({ onClick, children }: LinkProps) {
    return (
        <li>
            <button 
                onClick={onClick} 
                className="hover:text-primary-600 transition-all duration-300 text-left relative group"
            >
                {children}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
        </li>
    );
}
 
function ExternalLink({ href, children }: LinkProps) {
    return (
        <li>
            <a 
                href={href} 
                className="hover:text-primary-600 transition-all duration-300 relative group flex items-center gap-2" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {children}
                <span className="material-icons text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
            </a>
        </li>
    );
}
