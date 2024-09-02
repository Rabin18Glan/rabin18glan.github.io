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
            <Timeline position="alternate" className='  w-full h-auto'>
                {timeline.map((data, index) => {
                    return <TimelineItem key={index} >
                            <TimelineOppositeContent
                                sx={{
                                     my:2
                                 }}
                                 
                                align="right"
                                variant="body2">
                                {data.date}
                            </TimelineOppositeContent>
                        <TimelineSeparator>

                                {/* <TimelineConnector /> */}
                          
                                {data.timelineDot}
                                  <TimelineConnector />
                         
                        </TimelineSeparator>
                            <TimelineContent sx={{ 
                              my:10
                             }}>
                                <Typography variant="h6" component="span">
                                    {data.title}
                                </Typography>
                                <Typography>{data.taskDone}</Typography>
                            </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
            <AnimationWrapper className='font-bold' animationClass='animate-slide-in-down opacity-100' >To be continued ...</AnimationWrapper>
        </>
    )
}

export default TimelineMapping