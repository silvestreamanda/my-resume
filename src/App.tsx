import { Helmet } from 'react-helmet-async';
import { content } from '@/content/content';
import { Navbar } from '@/components/Navbar';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

export default function App() {
  const { seo, contact, person } = content;

  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={person.name} />
        <link rel="canonical" href={seo.siteUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.siteUrl} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={person.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.ogImage} />
        {seo.twitterHandle && <meta name="twitter:creator" content={seo.twitterHandle} />}

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: person.name,
            jobTitle: person.role,
            url: seo.siteUrl,
            sameAs: [contact.linkedin],
            email: contact.email,
            telephone: `+${contact.whatsapp.number}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
          })}
        </script>
      </Helmet>

      {/* ── Layout ── */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
