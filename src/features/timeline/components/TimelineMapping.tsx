import { 
    Timeline,
    TimelineConnector, 
    TimelineContent, 
    TimelineItem, 
    TimelineOppositeContent, 
    TimelineSeparator 
      } from '@mui/lab'
import { Typography } from '@mui/material'
import { timeline } from '../data/timeline'
import { AnimationWrapper } from '../../../layouts/wrappers'

function TimelineMapping() {
    return (
        <>
            <AnimationWrapper className='font-bold' animationClass='animate-slide-in-down opacity-100' >Start</AnimationWrapper>
            <Timeline position="alternate" className='w-full h-auto'>
                {timeline.map((data, index) => {
                    return <TimelineItem key={index} >
                        {/* <AnimationWrapper animationClass='animate-slide-in-up'> */}
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2">
                                {data.date}
                            </TimelineOppositeContent>
                        {/* </AnimationWrapper> */}
                        <TimelineSeparator>
                            {/* <AnimationWrapper animationClass='animate-slide-in-down'> */}
                                <TimelineConnector />
                            {/* </AnimationWrapper> */}
                            {/* <AnimationWrapper animationClass='ease-in-out'> */}
                                {data.timelineDot}
                            {/* </AnimationWrapper> */}

                            {/* <AnimationWrapper animationClass='animate-slide-in-down'> */}
                                <TimelineConnector />
                            {/* </AnimationWrapper> */}
                        </TimelineSeparator>
                        {/* <AnimationWrapper animationClass={(index % 2 == 0) ? ' animate-slide-in-right' : 'animate-slide-in-left'} > */}
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    {data.title}
                                </Typography>
                                <Typography>{data.taskDone}</Typography>
                            </TimelineContent>
                        {/* </AnimationWrapper> */}
                    </TimelineItem>
                })}
            </Timeline>

        </>
    )
}

export default TimelineMapping