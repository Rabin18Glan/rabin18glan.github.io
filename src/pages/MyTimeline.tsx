import { TimelineMapping } from '../features/timeline';
import { PageWrapper } from '../layouts/wrappers';

export default function MyTimeline() {
  return (
    <PageWrapper id='timeline' title={'Timeline'}>
      <TimelineMapping />
    </PageWrapper>
  )
}

