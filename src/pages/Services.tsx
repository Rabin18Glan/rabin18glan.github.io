import { ServiceList } from '../features/services';
import { PageWrapper } from '../layouts/wrappers';

function Services() {
  return (
    <PageWrapper id='services' title={'Services'}>
      <ServiceList />
      
    </PageWrapper>
  )
}

export default Services