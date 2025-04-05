
import { AnimationWrapper } from "../../../layouts";

function ProfileImage() {

  
  return (
    <AnimationWrapper className={` w-30 md:w-[700px] lg:w-[1000px] `} animationClass=' opacity-100 animate-slide-in-down md:animate-slide-in-right'>
        <div className="relative">
          <img 
            alt='no image' 
            src={'./profile.png'}
            className="rounded-xl w-full h-auto bg-transparent" 
          />
          <div className={`absolute  inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-black to-white  rounded-xl`}></div>
        </div>
    </AnimationWrapper>
  )
}

export default ProfileImage

