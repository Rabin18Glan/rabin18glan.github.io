import AnimationWrapper from '../../../layouts/wrappers/AnimationWrapper';

function AboutContent() {
  return (
    <>
      <AnimationWrapper animationClass="ease-in-out opacity-100 ">
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          I'm a developer studying Computer Science and IT, blending tech expertise with a musical touch for a harmonious
          approach to problem-solving.
        </p>
      </AnimationWrapper>

      <AnimationWrapper animationClass="animate-slide-in-up opacity-100" className="px-10">
        <p className="font-bold font-cursive text-gray-900 dark:text-gray-100">
          Join me on this epic quest through the binary jungles and digital dungeons!
        </p>
      </AnimationWrapper>

      </>
  );
}



export default AboutContent;
