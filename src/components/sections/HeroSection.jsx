/**
 * HeroSection Component
 * Simple section component for page hero content.
 */

const HeroSection = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-300 mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
