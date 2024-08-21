import { Box } from '@mui/material';
import CircularLogo from '../../../components/CircularLogo';
import Title from '../../../components/Title';
import { ServiceDataProps } from '../data/ServicesData';

function ServiceCard({ title, skills }: ServiceDataProps) {

  const [title1, title2] = title.split(' ');
  return (
    <Box className='rounded-3xl py-4 w-72 h-auto flex flex-col items-center gap-5 shadow-xl shadow-purple-950 dark:shadow-purple-900 border-2 border-purple-900 dark:border-purple-700'>
      <div className='flex flex-col items-center'> <Title fontSize='20px' title={title1} /><Title fontSize='20px' title={title2} /> </div>
      <div className='flex flex-wrap gap-2 justify-center'>

        {skills.map((logo, index) => {
          return <CircularLogo key={index} logo={logo} className='p-1 h-30 border-2 border-purple-900 dark:border-purple-700' />


        })}
      </div>
    </Box>
  )
}

export default ServiceCard