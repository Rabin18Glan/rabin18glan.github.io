import FilledButton from '../../../components/Button/FilledButton';
import StrokedButton from '../../../components/Button/StrokedButton';
import useScrollToContext from '../../../context/useScrollToContext';

function Buttons() {
const {handleScrollTo}  = useScrollToContext();
  return (
    <div className={`flex gap-5 justify-center`} >
    <FilledButton onClick={handleScrollTo('contact')} title='Hire Now' />
    <StrokedButton onClick={handleScrollTo('about')} title='About Me' />

</div>

  )
}

export default Buttons