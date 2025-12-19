import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { activitiesData } from '@/lib/activities.data';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from '@/components/ui/FeatureCard';
import CallToAction from '@/components/ui/CallToAction';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return Object.keys(activitiesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = activitiesData[slug];
  
  if (!activity) {
    return {
      title: 'Activity Not Found - SAJS Foundation',
    };
  }

  return {
    title: `${activity.title} - SAJS Foundation`,
    description: activity.description,
  };
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = activitiesData[slug];

  if (!activity) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: activity.title,
    description: activity.description,
    image: `https://sajs.in${activity.image}`,
    provider: {
        '@type': 'Organization',
        name: 'SAJS Foundation'
    },
    location: {
        '@type': 'Place',
        name: 'India'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={activity.badge}
            title={activity.title}
            highlightedWord={activity.highlightedWord}
            description={activity.description}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 2: Overview (Text + Image) */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
               <SectionHeader 
                  badge="👁️ Overview"
                  title="Making a Real Difference" 
                  highlightedWord="Difference"
                  align="left"
                  description="We are committed to driving tangible change through focused interventions."
               />
               <div className="-mt-6"> {/* Negative margin to offset SectionHeader's large bottom margin if needed, or just let it breathe */}
                 {activity.fullDescription?.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                 ))}
               </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src={activity.image} 
                alt={activity.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Section 3: The Challenge */}
          <div className="mb-20 bg-red-50 rounded-2xl p-10 md:p-12 border-l-8 border-red-500 shadow-sm">
            <SectionHeader 
              badge="⚠️ The Challenge"
              title="Why This Matters" 
              highlightedWord="Matters"
              align="left"
              titleColor="text-gray-900" 
            />
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl">
              "{activity.challenge}"
            </p>
          </div>

          {/* Section 4: Key Initiatives */}
          <div>
            <SectionHeader 
              badge="🚀 Initiatives"
              title="Key Programs & Projects" 
              highlightedWord="Programs"
              description="Specific initiatives designed to tackle the root causes of the issue."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {activity.features?.map((feature, index) => (
                <FeatureCard
                  key={index}
                  variant="simple"
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </>
  );
}
