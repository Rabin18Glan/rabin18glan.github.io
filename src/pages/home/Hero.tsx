import { HeroContainer, ProfileImage, ProfileInfo } from "../../features/hero";
import { Helmet } from 'react-helmet-async';

function Hero() {
  return (
    <HeroContainer>
          <Helmet>
        <title>Rabin Glan | Crafting Digital Experiences</title>
        <meta name="description" content="Elevating web development with a blend of creativity and technical expertise. Based in Hetauda, I specialize in building dynamic and engaging digital experiences." />
        <meta property="og:title" content="Rabin Glan | Crafting Digital Experiences" />
        <meta property="og:description" content="Turning ideas into impactful web experiences. Fullstack Developer with a passion for innovation and quality." />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://rabin18glan.github.io/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ProfileImage />
      <ProfileInfo />
    </HeroContainer>
  );
}

export default Hero