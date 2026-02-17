
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  name?: string;
  type?: string;
}

export default function SEO({ 
  title = "Rabin Glan | Portfolio", 
  description = "Rabin Glan - Full Stack Developer specializing in React, Next.js, Django, and modern web technologies. View my portfolio and projects.",
  keywords = "rabin glan, full stack developer, react developer, django developer, web development, portfolio",
  name = "Rabin Glan",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/RG.png" />
      <meta property="og:url" content="https://rabin18glan.github.io/" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/RG.png" />
    </Helmet>
  );
}
