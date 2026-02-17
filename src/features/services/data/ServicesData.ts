export interface ServiceDataProps {
  title: string;
  skills: Array<string>;
}

export const ServicesData: ServiceDataProps[] = [{
  title: 'Mobile Development',
  skills: ['devicon-flutter-plain colored', 'devicon-react-original colored'],
},
{
  title: 'Frontend Development',
  skills: [
    'devicon-html5-plain colored',
    'devicon-css3-plain colored',
    'devicon-javascript-plain colored',
    'devicon-bootstrap-plain colored',
    'devicon-tailwindcss-plain colored',
    'devicon-react-original colored',
    'devicon-materialui-plain colored',
    'devicon-nextjs-plain colored'
  ]
},
{
  title: 'Backend Development',
  skills: [
    'devicon-nodejs-plain colored',
    'devicon-express-original-wordmark colored',
    'devicon-mongodb-plain colored',
    'devicon-mysql-plain colored',
    'devicon-laravel-plain colored',
    'devicon-django-plain colored'
  ]
},
{
  title: 'DevOps & AI',
  skills: [
    'devicon-graphql-plain colored',
    'devicon-docker-plain colored',
    'devicon-git-plain colored',
    'devicon-linux-plain colored',
    'devicon-amazonwebservices-plain-wordmark colored',
    'https://avatars.githubusercontent.com/u/126733545?s=200&v=4'
  ]
}
]