import { AnimationWrapper } from '../../../layouts/wrappers'

function ContactForm() {
    return (
        <form className=" flex flex-col justify-center" >
            <AnimationWrapper className='flex flex-col' animationClass=' animate-slide-in-right opacity-100' >
                <label htmlFor="name" className="hidden">
                    Full Name
                </label>
                <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className={`w-100 mt-2 py-3 px-3 rounded-xl font-semibold bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400 focus:border-purple-500 focus:bg-white dark:focus:bg-gray-950 focus:outline-none`}
                />
            </AnimationWrapper>

            <AnimationWrapper className='flex flex-col mt-2 ' animationClass='animate-slide-in-right opacity-100' >
                <label htmlFor="email" className="hidden">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className={`w-100 mt-2 py-3 px-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400  focus:bg-white dark:focus:bg-gray-950  font-semibold focus:border-purple-500 focus:outline-none`}
                />
            </AnimationWrapper>

            <AnimationWrapper className='flex flex-col mt-2' animationClass='animate-slide-in-right opacity-100'>
                <label htmlFor="tel" className="hidden">
                    Number
                </label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className={`w-100 mt-2 py-3 px-3 rounded-xl  bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400  focus:bg-white dark:focus:bg-gray-950  font-semibold focus:border-purple-500 focus:outline-none`}
                />
            </AnimationWrapper>
            <AnimationWrapper className='flex flex-col mt-2' animationClass='animate-slide-in-right opacity-100' >
                <label htmlFor="mes" className="hidden">
                    Message
                </label>
                <textarea

                    name="mes"
                    id="mes"
                    placeholder="Message"
                    className={`w-100 mt-2 py-3 px-3 rounded-xl  bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400  focus:bg-white dark:focus:bg-gray-950  font-semibold focus:border-purple-500 focus:outline-none`}
                />
            </AnimationWrapper>

            <AnimationWrapper animationClass='animate-slide-in-up opacity-100'>
                <button
                    type="submit"
                    className='btn w-32 mt-5 self-center lg:self-start bg-purple-950 dark:bg-purple-700 text-gray-200'
                >
                    Submit
                </button>
            </AnimationWrapper>
        </form>
    )
}

export default ContactForm