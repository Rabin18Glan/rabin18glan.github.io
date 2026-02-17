
import TitleUnderLined from '../components/TitleUnderLined';
import Section from '../layouts/wrappers/Section';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <Section id="privacy">
            <div className="max-w-4xl mx-auto py-20 px-4">
                <TitleUnderLined title="Privacy Policy" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Information Collection</h3>
                        <p>
                            I only collect minimum personal information through the contact form, such as your name, email address, and phone number. This information is used strictly to communicate with you regarding your inquiries.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Use of Information</h3>
                        <p>
                            The personal information provided is used solely for the purpose of responding to your messages or providing the services requested. I do not share, sell, or rent your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Data Security</h3>
                        <p>
                            I implement appropriate security measures to protect the information you submit through this website. However, please be aware that no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Cookies</h3>
                        <p>
                            This website may use cookies to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Contact</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact me via the contact form on this website.
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
