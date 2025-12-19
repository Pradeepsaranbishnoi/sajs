import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery - SAJS Foundation | Our Impact in Pictures',
  description: 'Explore the visual journey of SAJS Foundation. See our community events, healthcare camps, education initiatives, and the lives we impact every day.',
};

export default function GalleryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'SAJS Foundation Gallery',
    description: 'Visual stories of hope, resilience, and transformation from SAJS Foundation initiatives.',
    provider: {
      '@type': 'Organization',
      name: 'SAJS Foundation',
      url: 'https://sajs.in'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryClient />
    </>
  );
}
