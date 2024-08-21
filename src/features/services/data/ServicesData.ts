export interface ServiceDataProps{
    title:string;
    skills:Array<string>;

}

export const ServicesData:ServiceDataProps[] =[{
    title:'Mobile Development',
    skills:['/flutter-logo.png','/reactnative.png'],

  },
  {
    title:'Frontend Development',
    skills:['/html.png','/css.png','/js.png','/bootstrap.png','/tailwind.png','/react.png','/mui.webp','/next.png']
  },
  {
    title:'Backend Development',
    skills:['/node.png','/express.png','/mongo.png','/sql.png','/laravel.png']
  }
]