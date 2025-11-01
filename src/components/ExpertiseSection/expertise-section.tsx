import React from 'react';

export interface ExpertiseSectionProps {
  title: string;
  subtitle?: string;
  id: string;
  children: React.ReactNode;
  theme?: 'default' | 'primary' | 'secondary' | 'accent';
}

const ExpertiseSection: React.FunctionComponent<ExpertiseSectionProps> = ({
  title,
  subtitle,
  id,
  children,
  theme = 'default',
}) => {
  const themeClasses = {
    default: 'bg-base-100',
    primary: 'bg-primary text-primary-content',
    secondary: 'bg-secondary text-secondary-content',
    accent: 'bg-accent text-accent-content',
  };

  return (
    <section
      id={id}
      className={`card ${themeClasses[theme]} shadow-xl mb-8 w-full`}
    >
      <div className="card-body">
        <h3 className="card-title text-2xl md:text-3xl mb-2">{title}</h3>
        {subtitle && (
          <p className="text-sm md:text-base opacity-80 mb-4">{subtitle}</p>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
