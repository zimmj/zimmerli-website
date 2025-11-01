import React from 'react';

export interface ExpertiseContentProps {
  paragraphs: string[] | React.ReactNode[];
}

const ExpertiseContent: React.FunctionComponent<ExpertiseContentProps> = ({
  paragraphs,
}) => {
  return (
    <div className="prose prose-sm md:prose-base max-w-none">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ExpertiseContent;
