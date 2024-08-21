import { ProjectListData, ProjectProps } from '../data/projectListData'

import ProjectCard from './Project'

function ProjectList() {
  return (
  
    <div className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-20 '>

  
      {ProjectListData.map((project:ProjectProps)=>{
  const {id} = project
        return <ProjectCard key={id} {...project}/>
          // return <Project name={project.name} type={project.type} technologiesUsed={project.technologiesUsed} images={project.images} description={project.description} urlbtns={project.urlbtns} />
        }
      )}
      </div>
  )
}

export default ProjectList