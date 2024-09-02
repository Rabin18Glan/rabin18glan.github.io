import { AnimationWrapper } from "../../../layouts/wrappers"

function ProfileImage() {
  return (
    <AnimationWrapper className={` w-30 md:w-[700px] lg:w-[1000px] `} animationClass=' opacity-100 animate-slide-in-down md:animate-slide-in-right'>


      <div className="bg-cover shadow-2xl rounded-2xl border-l-2 border-b-4 border-purple-950 dark:border-purple-700">
        <img alt='no image' src="./profile.jpg" className="rounded-xl shadow-2xl" />
      </div>
    </AnimationWrapper>



  )
}

export default ProfileImage

