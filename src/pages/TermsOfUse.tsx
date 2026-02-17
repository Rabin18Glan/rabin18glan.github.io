
import TitleUnderLined from '../components/TitleUnderLined';
import Section from '../layouts/wrappers/Section';
import { motion } from 'framer-motion';

export default function TermsOfUse() {
    return (
        <Section id="terms">
            <div className="max-w-4xl mx-auto py-20 px-4">
                <TitleUnderLined title="Terms of Use" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h3>
                        <p>
                            By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Intellectual Property Rights</h3>
                        <p>
                            All content on this website, including text, graphics, logos, images, and code, is the property of Rabin Glan and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Use License</h3>
                        <p>
                            Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Disclaimer</h3>
                        <p>
                            The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Limitations</h3>
                        <p>
                            In no event shall Rabin Glan be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                        </p>
                    </section>

                    <p className="pt-8 text-sm text-gray-500 italic">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
