
export interface ProjectProps
{ id:number,
    name:string,
    type : string,
    technologiesUsed:Array<string>,
    description:string,
    images:Array<string>,
    taskCompleted:Array<string>,
    projectType?:string,
    urlBtnLinks:{
        name:string,
        link:string
    }[],
}


export const ProjectListData:ProjectProps[]=[{
    id:1,
    projectType:'Personal',
    name:"Chat app",
    type:'Chat',
    technologiesUsed:['react','node','mongodb','express','tailwind'],
    images:['/chat.png'],
    description:"This is a simple chat app build using React, Node/Express and MongoDB. This project is for learning React and Socket.io",
    taskCompleted:['frontend development with React','backend with Node/Express','client side and server side validations','Sockect.io connection between client and server'],
    urlBtnLinks:[
        {
            name:"View Code",
            link:'https://github.com/Rabin18Glan/MERN-simple-chat-app'
        },
        {
            name:"More Info",
            link:""
        }
    ]
    
  
  },
  {
    id:2,
    projectType:'Personal',
    name:"Maruni Suppliers",
    type:'Ecommerce Platform',
    technologiesUsed:['react','laravel','mysql','tailwind','php','javascript'],
    images:['/react-laravel.png'],
    description:`This is the ecommerce website `,
    taskCompleted:['frontend development with react','backend with laravel'],
    urlBtnLinks:
    [
        {
            name:'View Code',
            link:'https://github.com/Rabin18Glan/react-laravel-ecom-project'
        },
        {
            name:"More Info",
            link:''
        }
    ]
  
  },{
    id:3,
    projectType:'',
    name:"Laliguras Bee Farm",
    type:'Ecommerce Platform',
    technologiesUsed:['next','react','tailwind'],
    images:['/laliguras.png'],
    description:`This is the ecommerce website for buying Honey `,
    taskCompleted:['frontend development with next','backend with next'],
    urlBtnLinks:
    [
        {
            name:'View Code',
            link:'https://github.com/Rabin18Glan/laliguras'
        },
        {
            name:"Visit Site",
            link:'https://rabin18glan.github.io/laliguras/'
        }
    ]
  
  }];

  