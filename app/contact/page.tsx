import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact Us - SAJS Foundation',
  description: 'Get in touch with SAJS Foundation. We are here to answer your questions and hear your suggestions.',
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'SAJS Foundation',
      telephone: '+91-11-2345-6789',
      email: 'info@sajs.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No 155, Prithvi Raj Nagar Jhalamand',
        addressLocality: 'Jodhpur',
        addressRegion: 'Rajasthan',
        postalCode: '342006',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="📞 Contact Us"
            title="We'd Love to Hear From You"
            highlightedWord="Hear From You"
            description="Have questions or want to get involved? Reach out to us and let's make a difference together."
          />
        </div>
      </section>

      <ContactSection className="pb-16 pt-8 bg-white" />
    </>
  );
}
