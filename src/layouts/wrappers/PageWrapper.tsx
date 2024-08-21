import React, { ReactNode } from 'react'
import AnimationWrapper from './AnimationWrapper'
import TitleUnderLined from '../../components/TitleUnderLined'

interface PageWrapper {
  children?:ReactNode,
  id:string,
  title:string,
  className?:string
}
function PageWrapper({ children, id, title, className = '' }:PageWrapper) {
  return (
    <div id={id} className={`px-10 xl:px-64 flex py-40 flex-col justify-center items-center gap-10   dark:text-gray-200 text-gray-700 ${className}`}>
      <AnimationWrapper animationClass="animate-slide-in-down opacity-100">
        <TitleUnderLined title={title} />
      </AnimationWrapper>
      {children}
    </div>
  )
}

export default PageWrapper