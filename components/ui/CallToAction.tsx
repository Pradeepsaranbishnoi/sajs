import Link from 'next/link';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

/**
 * CallToAction Component
 * 
 * The standard blue CTA banner used at the bottom of pages.
 */
export default function CallToAction({
  title = "Join Us in Making a Difference",
  description = "Together, we can create lasting change and build a better tomorrow for communities in need",
  primaryBtnText = "Donate Now",
  primaryBtnLink = "#donate",
  secondaryBtnText = "Get Involved",
  secondaryBtnLink = "/contact"
}: CallToActionProps) {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-100 mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryBtnLink}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 shadow-lg"
          >
            {primaryBtnText}
          </a>
          <Link
            href={secondaryBtnLink}
            className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-all duration-200 border-2 border-white/20"
          >
            {secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
