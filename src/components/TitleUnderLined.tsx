import Title from './Title';

function TitleUnderLined({ title }: { title: string }) {

  return (
    <div className=''><Title title={title} />
    <div className='flex'>
        <div className={`w-8 h-2 dark:bg-purple-700 bg-purple-950`}>
          </div>
        <div className={`w-8 h-2 border dark:border-purple-700 border-purple-950  bg-transparent`}>
          </div></div>
    </div>
  )
}

export default TitleUnderLined