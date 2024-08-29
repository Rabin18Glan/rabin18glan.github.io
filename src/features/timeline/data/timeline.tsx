import { TimelineDot } from "@mui/lab";
import CircularLogo from "../../../components/CircularLogo";
import { HtmlRounded, Javascript, PendingActionsRounded } from "@mui/icons-material";

export const timeline = [
    {
      date: '2022 january',
      title: 'Started Coding',
      taskDone: 'Started to learn C and C++ programming',
      timelineDot: <TimelineDot variant='outlined' color='secondary'>

        <CircularLogo size='30px'  logo='react.png' />

      </TimelineDot>
    },
    {
      date: '2022 april',
      title: 'Started Web Development',
      taskDone: 'First I learn html,Css and Javascript and Jumped into the React',
      timelineDot: <TimelineDot color="secondary">
        <HtmlRounded />
      </TimelineDot>
    },

    {
      date: '2023 january',
      title: 'Started Doing own Projects',
      taskDone: 'Using React I started building some simple projects',
      timelineDot: <TimelineDot variant='outlined' color="secondary">
        <PendingActionsRounded />
      </TimelineDot>
    },
    {
      date: '2023 may',
      title: 'Started Doing Flutter',
      taskDone: 'Dark, Flutter with Getx,MVVM arkchitecture,etc',
      timelineDot: <TimelineDot color="secondary">
        <PendingActionsRounded />
      </TimelineDot>
    },
    {
      date: '2023 october',
      title: 'Started Backend with Node Js',
      taskDone: 'Learn backend concepts and databases',
      timelineDot: <TimelineDot color="primary" variant="outlined">
        <Javascript />
      </TimelineDot>
    }, {
      date: '2024 february',
      title: 'Started Laravel Development',
      taskDone: 'Learn backend concepts and databases',
      timelineDot: <TimelineDot variant='outlined'>
        <CircularLogo size='30px'  logo='laravel.png' />
      </TimelineDot>
    },
  ]