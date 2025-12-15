import { IconType } from 'react-icons';

interface FeatureCardProps {
  /** The icon component to display */
  icon: IconType;
  /** The title of the card */
  title: string;
  /** The description text */
  description: string;
  /** Optional custom slot for stats or extra content (like "15,000+ Students") */
  footer?: React.ReactNode;
  /** Visual variant of the card */
  variant?: 'bordered' | 'simple' | 'value'; // 'value' for Core Values style
  /** Optional custom class for the icon wrapper color (e.g., bg-red-100) */
  iconWrapperClass?: string;
  /** Optional custom class for the icon color (e.g., text-red-600) */
  iconColorClass?: string;
}

/**
 * FeatureCard Component
 * 
 * Used for displaying items in a grid, such as Impact Areas, Services, or Core Values.
 * Supports a bordered 'card' look or a simpler 'icon + text' look.
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  footer,
  variant = 'bordered',
  iconWrapperClass,
  iconColorClass
}: FeatureCardProps) {
  
  if (variant === 'bordered') {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
          <Icon className="text-white text-2xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        {footer && (
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 mt-auto">
            {footer}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'value') {
     // Style used in "Core Values" section
     return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="flex gap-4">
            <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconWrapperClass || 'bg-primary-100'}`}>
                <Icon className={`text-lg ${iconColorClass || 'text-primary-600'}`} />
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                {description}
                </p>
            </div>
            </div>
        </div>
     );
  }

  // Default / 'simple' variant (used in Services section)
  return (
    <div className="text-center p-6 h-full">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${iconWrapperClass || 'bg-primary-100'}`}>
        <Icon className={`text-2xl ${iconColorClass || 'text-primary-600'}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
