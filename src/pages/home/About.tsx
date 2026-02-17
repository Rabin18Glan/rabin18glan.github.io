import { AboutButtons, AboutMe } from '../../features/about';
import { PageWrapper } from '../../layouts/wrappers';

function About() {
  return (
    <PageWrapper id={'about'} title={'About Me'}>
      <AboutMe />
      <AboutButtons />
    </PageWrapper>
  )
}

export default About