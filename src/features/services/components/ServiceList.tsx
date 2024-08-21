import { ServiceDataProps, ServicesData } from '../data/ServicesData';
import ServiceCard from './ServiceCard';
function ServiceList() {

  return (
    <div className={`flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 `} >

      {ServicesData.map((service: ServiceDataProps, index) => {
        const { skills, title } = service;

        return <ServiceCard key={index} {...{ skills, title }} />
      })}
    </div>
  )
}

export default ServiceList