import { ProjectList } from '../../features/projects';
import { PageWrapper } from '../../layouts/wrappers';

function Projects() {
  return (
    <PageWrapper id='projects' title={'Projects'}>
      <ProjectList />

    </PageWrapper>
  )
}

export default Projects