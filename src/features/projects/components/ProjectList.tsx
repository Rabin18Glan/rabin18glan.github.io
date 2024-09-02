import { ProjectListData, ProjectProps } from '../data/projectListData'

import ProjectCard from './Project'

function ProjectList() {
  return (
  
    <div className='flex flex-col gap-20 '>

  
      {ProjectListData.map((project:ProjectProps)=>{
  const {id,name} = project
        return <div><h1 className='text-3xl font-bold p-2'>{id}.{name}</h1> <ProjectCard key={id} {...project}/></div>
          // return <Project name={project.name} type={project.type} technologiesUsed={project.technologiesUsed} images={project.images} description={project.description} urlbtns={project.urlbtns} />
        }
      )}
     
      </div>
  )
}

export default ProjectList