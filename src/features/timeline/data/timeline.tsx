import { HtmlRounded } from "@mui/icons-material";
import { TimelineDot } from "@mui/lab";
import 'devicon/devicon.min.css';
import Icon from "../../../components/Icon";

export const timeline = [
    {
      date: '2022 january',
      title: 'Started Coding',
      taskDone: 'Started to learn C and C++ programming',
      timelineDot: <TimelineDot variant='outlined' color='secondary'>

        {/* <CircularLogo  logo='react.png' className="h-10 w-10 p-0"/> */}
        <Icon name="devicon-cplusplus-plain text-3xl" className="text-blue-900" />

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
        <Icon name="devicon-react-plain" className="text-blue-600" />
      </TimelineDot>
    },
    {
      date: '2023 may',
      title: 'Started Doing Flutter',
      taskDone: 'Dark, Flutter with Getx,MVVM arkchitecture,etc',
      timelineDot: <TimelineDot color="grey" variant="outlined">
        <Icon name="devicon-flutter-plain" className="text-blue-500 " />
      </TimelineDot>
    },
    {
      date: '2023 october',
      title: 'Started Backend with Node Js',
      taskDone: 'Learn backend concepts and databases',
      timelineDot: <TimelineDot color="primary" variant="outlined">
        <Icon name="devicon-nodejs-plain" className=" text-green-500"></Icon>
      </TimelineDot>
    }, {
      date: '2024 february',
      title: 'Started Laravel Development',
      taskDone: 'Learn backend concepts and databases',
      timelineDot: <TimelineDot color="primary" variant='outlined'>
        <Icon name="devicon-laravel-plain " className=" text-red-500" />
      </TimelineDot>
    },
    {
      date: '2024 August',
      title: 'Started Next',
      taskDone: 'Learned Full Stack Development with Next, AuthNext,Server side rending,etc',
      timelineDot: <TimelineDot color="primary" variant='outlined'>
        <Icon name="devicon-nextjs-plain" className="text-black-500 " />
      </TimelineDot>
    },
  ]