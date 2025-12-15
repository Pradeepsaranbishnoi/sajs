

interface StatHighlightProps {
  /** The large number/value to display (e.g., "96%") */
  value: string;
  /** The label text below the value */
  label: string;
  /** The percentage for the progress bar width (0-100) */
  percentage: number;
}

/**
 * StatHighlight Component
 * 
 * Displays a statistic with a visual progress bar, used in the "Impact Highlights" section.
 * Designed currently for dark/gradient backgrounds (white text).
 */
export default function StatHighlight({
  value,
  label,
  percentage
}: StatHighlightProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
      <div className="text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-primary-100 mb-4">{label}</div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
            className="bg-white h-2 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
