import { ReactNode } from "react"

export interface ProjectProps
{ id:number,
    name:string,
    type : string,
    technologiesUsed:Array<string>,
    description:string,
    images:Array<string>,
    taskCompleted:Array<string>,
    urlBtnLinks:{
        name:string,
        link:string
    }[],
}


export const ProjectListData:ProjectProps[]=[{
    id:1,
    name:"Maruni Suppliers",
    type:'Ecommerce Platform',
    technologiesUsed:['react','laravel','mysql'],
    images:['/react-laravel.png'],
    description:"asdfadsfa",
    taskCompleted:[],
    urlBtnLinks:[
        {
            name:"View Code",
            link:''
        },
        {
            name:"Visit Site",
            link:''
        }
    ]
    
  
  },
  {
    id:2,
    name:"Maruni Suppliers",
    type:'Ecommerce Platform',
    technologiesUsed:['react','laravel','mysql'],
    images:['/react-laravel.png'],
    description:`This is the ecommerce website `,
    taskCompleted:['frontend development with react','backend with laravel'],
    urlBtnLinks:
    [
        {
            name:'View Code',
            link:''
        },
        {
            name:"Visit Site",
            link:''
        }
    ]
  
  }];

  