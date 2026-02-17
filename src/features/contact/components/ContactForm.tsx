
import { motion } from 'framer-motion';
import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log('Failed to send email:', error.text);
            alert('Failed to send message.');
        });

        e.currentTarget.reset(); 
    };

    return (
        <motion.form 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 w-full max-w-lg mx-auto bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-dark-border" 
            onSubmit={sendEmail}
        >
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full py-4 px-6 rounded-2xl bg-gray-50 dark:bg-dark-card/50 border border-gray-200 dark:border-dark-border focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none transition-all dark:text-white"
                />
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full py-4 px-6 rounded-2xl bg-gray-50 dark:bg-dark-card/50 border border-gray-200 dark:border-dark-border focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none transition-all dark:text-white"
                />
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number (Optional)"
                    className="w-full py-4 px-6 rounded-2xl bg-gray-50 dark:bg-dark-card/50 border border-gray-200 dark:border-dark-border focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none transition-all dark:text-white"
                />
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <textarea
                    name="mes"
                    placeholder="Write your message here..."
                    rows={4}
                    className="w-full py-4 px-6 rounded-2xl bg-gray-50 dark:bg-dark-card/50 border border-gray-200 dark:border-dark-border focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none transition-all dark:text-white resize-none"
                />
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-primary-600 text-white font-bold text-lg shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all duration-300"
            >
                Send Message
            </motion.button>
        </motion.form>
    );
}

export default ContactForm;
