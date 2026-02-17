
import Title from './Title';

function TitleUnderLined({ title }: { title: string }) {

  return (
    <div className=''><Title title={title} />
    <div className='flex'>
        <div className={`w-8 h-2 bg-primary-600`}>
          </div>
        <div className={`w-8 h-2 border border-primary-600 bg-transparent`}>
          </div></div>
    </div>
  )
}

export default TitleUnderLined