import FilledButton from '../../../components/Button/FilledButton'
import StrokedButton from '../../../components/Button/StrokedButton'
import Title from '../../../components/Title'
import { AnimationWrapper } from '../../../layouts/wrappers'

function ProfileInfo() {
    return (
        <AnimationWrapper className={`flex flex-col items-center `} animationClass=' opacity-100 animate-slide-in-down ' >
            <h1 className='hidden text-2xl font-bold md:block'>
                Hi! I'm
            </h1>
            <AnimationWrapper animationClass=' opacity-100'>
                <Title title='Rabin' /><span> </span>
                <Title title='Glan' />
            </AnimationWrapper>
            <AnimationWrapper animationClass=' animate-slide-in-up opacity-100'>
                <p className="py-6 font-cursive font-bold p-10 dark:text-gray-200 text-gray-700">
                    "Join me on this digital odyssey, where creativity meets functionality, and every project is a testament to my commitment to excellence. Let's build something extraordinary together!"
                </p>
                <div className={`flex gap-5 justify-center`} >
                    <FilledButton onClick={() => { }} title='Hire Now' />
                    <StrokedButton onClick={() => { }} title='About Me' />

                </div>

            </AnimationWrapper>
        </AnimationWrapper>
    )
}

export default ProfileInfo