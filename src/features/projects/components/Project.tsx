import PropTypes from 'prop-types';
import FilledButton from '../../../components/Button/FilledButton';
import StrokedButton from '../../../components/Button/StrokedButton';

const ProjectCard = ({taskCompleted, name, type, technologiesUsed, description, images, urlBtnLinks }) => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl  overflow-hidden md:max-w-2xl shadow-lg  shadow-purple-900 dark:shadow-purple-700">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {images.map((image, index) => (
            <img  className="h-48 w-96 object-cover md:h-full md:w-48" src={image} alt={`${name} screenshot ${index + 1}`} key={index} />
          ))}
        </div>
        <div className="p-8">
          {name && <h2 className="block mt-1 text-xl leading-tight font-bold  text-gray-800 dark:text-gray-200">{name}</h2>}
          {type && <p className="mt-2 text-gray-600 dark:text-gray-300">{type}</p>}
          {technologiesUsed && (
            <ul className="mt-2 text-gray-500 flex flex-wrap">
              {technologiesUsed.map((tech, index) => (
                <li key={index} className="mr-2 mb-2 bg-gray-200 dark:text-gray-200 dark:border dark:bg-black  rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {tech}
                </li>
              ))}
            </ul>
          )}
          {description && <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
          }
          <h4 className='font-bold font-cursive text-gray-700 dark:text-gray-200'>Task Completed:</h4>
          <ul className=' list-disc font-cursive text-gray-700 dark:text-gray-200'>
            {taskCompleted.map((task,index)=>
            {
              return <li key={index} className='font-cursive'>{task}</li>
            })}
          </ul>
          <div className="mt-4"><div className='flex gap-5'><FilledButton title={urlBtnLinks[0].name} onClick={()=>{}}></FilledButton>
    <StrokedButton title={urlBtnLinks[1].name} onClick={()=>{}}/></div>
    </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  technologiesUsed: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
 taskCompleted: PropTypes.arrayOf(PropTypes.string).isRequired,
  urlbtns: PropTypes.any,
};

export default ProjectCard;
