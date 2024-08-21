import FilledButton from '../../../components/Button/FilledButton'
import StrokedButton from '../../../components/Button/StrokedButton'
import { AnimationWrapper } from '../../../layouts/wrappers'

function AboutButtons() {
  return (
    
    <AnimationWrapper animationClass="animate-slide-in-up opacity-100">
    <div className="flex gap-5 font-semibold">
      <FilledButton onClick={() => {}} title="See Projects" />
      <StrokedButton onClick={()=>{}} title="Download CV" />
    </div>
  </AnimationWrapper>
  )
}

export default AboutButtons