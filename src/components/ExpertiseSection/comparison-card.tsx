import React, { useState } from 'react';

export interface ComparisonCardProps {
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  variant?: 'primary' | 'secondary';
}

/**
 * Helper component for rendering a list section with title and items
 */
interface ListSectionProps {
  title: string;
  items: string[];
  mobile?: boolean;
}

const ListSection: React.FunctionComponent<ListSectionProps> = ({ title, items, mobile = false }) => {
  const sizeClasses = mobile ? 'text-xs' : 'text-xs md:text-sm';
  const spacingClasses = mobile ? 'mt-3 mb-1.5' : 'mt-3 md:mt-4 mb-1.5 md:mb-2';
  const listSpacingClasses = mobile ? 'space-y-0.5' : 'space-y-0.5 md:space-y-1';

  return (
    <div className={spacingClasses}>
      <h5 className={`font-semibold ${sizeClasses} mb-1.5`}>{title}</h5>
      <ul className={`list-disc list-inside ${listSpacingClasses} ${sizeClasses}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

/**
 * A card component for displaying comparison information
 * Shows title, description, key characteristics, and use cases
 */
export const ComparisonCard: React.FunctionComponent<ComparisonCardProps> = ({
  title,
  description,
  features,
  useCases,
  variant = 'primary',
}) => {
  const variantClasses = {
    primary: 'border-primary bg-primary/5',
    secondary: 'border-secondary bg-secondary/5',
  };

  return (
    <div className={`card border-2 ${variantClasses[variant]} shadow-md`}>
      <div className="card-body p-4 md:p-6">
        <h4 className="card-title text-lg md:text-xl">{title}</h4>
        <p className="text-xs md:text-sm opacity-80 mt-1">{description}</p>

        <ListSection title="Key Characteristics:" items={features} />
        <ListSection title="Best For:" items={useCases} />
      </div>
    </div>
  );
};

export interface ComparisonGridProps {
  comparisons: ComparisonCardProps[];
  columns?: 1 | 2 | 3;
}

/**
 * A grid layout for displaying multiple comparison cards
 * Responsive: Tabs on mobile, grid on desktop
 */
export const ComparisonGrid: React.FunctionComponent<ComparisonGridProps> = ({
  comparisons,
  columns = 2,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const columnClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  };

  const activeComparison = comparisons[activeTab];
  const variantClasses = {
    primary: 'border-primary bg-primary/5',
    secondary: 'border-secondary bg-secondary/5',
  };
  const separatorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
  };

  return (
    <div className="my-4 md:my-6">
      {/* Mobile: Tabbed interface with integrated titles */}
      <div className="md:hidden">
        <div className={`card border-2 ${variantClasses[activeComparison.variant || 'primary']} shadow-md transition-colors duration-300`}>
          {/* Tab titles integrated in card header */}
          <div className={`flex border-b-2 ${separatorClasses[activeComparison.variant || 'primary']} transition-colors duration-300`}>
            {comparisons.map((comparison, index) => {
              const titleVariantClasses = {
                primary: 'bg-primary/5',
                secondary: 'bg-secondary/5',
              };
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 p-4 text-center font-semibold transition-all duration-300 ${
                    titleVariantClasses[comparison.variant || 'primary']
                  }`}
                >
                  <span className={`transition-opacity duration-300 ${
                    activeTab === index ? 'opacity-100' : 'opacity-40'
                  }`}>
                    {comparison.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Card content */}
          <div className="card-body p-4">
            <p className="text-xs opacity-80 mt-1">{activeComparison.description}</p>

            <ListSection title="Key Characteristics:" items={activeComparison.features} mobile />
            <ListSection title="Best For:" items={activeComparison.useCases} mobile />
          </div>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className={`hidden md:grid ${columnClasses[columns]} gap-6`}>
        {comparisons.map((comparison, index) => (
          <ComparisonCard key={index} {...comparison} />
        ))}
      </div>
    </div>
  );
};

export default ComparisonCard;
