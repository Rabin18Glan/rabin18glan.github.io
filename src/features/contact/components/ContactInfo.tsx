import { AnimationWrapper } from '../../../layouts/wrappers'

function ContactInfo() {
    return (
        <AnimationWrapper className={`p-8 md:p-12 bg-gray-50 dark:bg-dark-card/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-dark-border shadow-xl h-full flex flex-col justify-center`} animationClass='ease-in-out opacity-100'>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white uppercase">
                Get in touch
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-medium mt-4">
                Fill in the form to start a conversation directly
            </p>

            <div className="space-y-8 mt-12">
                <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg
                            fill="none" 
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="ml-6 text-lg tracking-wide font-bold text-gray-700 dark:text-gray-200">
                        Hetauda, Nepal
                    </div>
                </div>

                <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div className="ml-6 text-lg tracking-wide font-bold text-gray-700 dark:text-gray-200">
                        +977 9840469397
                    </div>
                </div>

                <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="ml-6 text-lg tracking-wide font-bold text-gray-700 dark:text-gray-200">
                        robinjsl321@gmail.com
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default ContactInfo