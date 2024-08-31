import FilledButton from '../../../components/Button/FilledButton'
import StrokedButton from '../../../components/Button/StrokedButton'
import useScrollToContext from '../../../context/useScrollToContext'
import useDownload from '../../../hooks/useDownload';
import { AnimationWrapper } from '../../../layouts/wrappers'

function AboutButtons() {
  const {handleScrollTo} = useScrollToContext();
 const download = useDownload();
  return (
    <AnimationWrapper animationClass="animate-slide-in-up opacity-100">
    <div className="flex gap-5 font-semibold">
      <FilledButton onClick={handleScrollTo('projects')} title="See Projects" />
      <StrokedButton onClick={download('/ser.png')} title="Download CV" />
    </div>
  </AnimationWrapper>
  )
}

export default AboutButtons