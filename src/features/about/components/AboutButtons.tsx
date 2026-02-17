import FilledButton from '../../../components/Button/FilledButton'
import StrokedButton from '../../../components/Button/StrokedButton'
import useScrollToContext from '../../../context/useScrollToContext'
import { AnimationWrapper } from '../../../layouts/wrappers'
import { generateCV } from '../../cv/services/pdfService';

function AboutButtons() {
  const {handleScrollTo} = useScrollToContext();
  
  return (
    <AnimationWrapper animationClass="animate-slide-in-up opacity-100">
    <div className="flex gap-5 font-semibold">
      <FilledButton onClick={handleScrollTo('projects')} title="See Projects" />
      <StrokedButton onClick={() => generateCV('cv-content')} title="Download CV" />
    </div>
  </AnimationWrapper>
  )
}

export default AboutButtons