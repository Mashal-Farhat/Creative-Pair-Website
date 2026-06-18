/**
 * SectionTitle Component
 * Reusable section title with subtitle
 */

const SectionTitle = ({ 
  title, 
  subtitle = '', 
  centered = true,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
