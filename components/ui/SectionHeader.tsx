

interface SectionHeaderProps {
  /** The badge text to display above the title (optional) */
  badge?: string;
  /** The main title text */
  title: string;
  /** The part of the title to highlight with primary color (optional) */
  highlightedWord?: string;
  /** The description text below the title (optional) */
  description?: string;
  /** Text alignment (default: center) */
  align?: 'left' | 'center' | 'right';
  /** Text color for the title (default: text-gray-900) */
  titleColor?: string;
  /** Text color for the description (default: text-gray-600) */
  descriptionColor?: string;
}

/**
 * SectionHeader Component
 * 
 * Displays a standard section header with an optional badge, title with highlight, and description.
 * Used to maintain consistent typography and spacing across page sections.
 */
export default function SectionHeader({
  badge,
  title,
  highlightedWord,
  description,
  align = 'center',
  titleColor = 'text-gray-900',
  descriptionColor = 'text-gray-600'
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const alignClass = alignmentClasses[align];

  // Helper to insert highlighted word if present
  const renderTitle = () => {
    if (!highlightedWord) return title;
    
    // Simple split implementation - assumes highlighted word is known and present or appended
    // A more robust version would replace the substring.
    // For this project's current needs, we will append it or treat it as the last part if not found, 
    // BUT the specific design usually has "Creating [Lasting Change] Together".
    // To keep it simple and scalable for the specific existing usages, let's allow `title` to be the prefix 
    // and `highlightedWord` to be the colored part, and maybe a `suffix` if needed.
    // actually, let's keep it simple: The user passes the full structure or we split.
    
    // better approach for this codebase's specific patterns:
    if (title.includes(highlightedWord)) {
        const parts = title.split(highlightedWord);
        return (
            <>
                {parts[0]}
                <span className="text-primary-600">{highlightedWord}</span>
                {parts[1]}
            </>
        );
    }
    return title;
  };

  return (
    <div className={`mb-12 ${alignClass}`}>
      {badge && (
        <div className={`inline-block mb-4`}>
          <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl font-bold ${titleColor} mb-3`}>
        {renderTitle()}
      </h2>
      
      {description && (
        <p className={`text-lg ${descriptionColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
