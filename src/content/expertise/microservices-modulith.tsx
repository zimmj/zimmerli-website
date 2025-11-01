import React from 'react';
import { ComparisonCardProps } from '../../components/ExpertiseSection/comparison-card';
import {
  ExpertiseSection,
  ExpertiseContent,
  ComparisonGrid,
  CaseStudyCallout,
} from '../../components/ExpertiseSection';
import { startParagraphs, whenToUseParagraphs } from './microservices-modulith-content';

const title = 'Microservices & Modulith Architecture';
const subtitle = 'Choosing the right architecture for your project';
const id = 'microservices-modulith';

const comparison = {
  modulith: {
    title: 'Modulith',
    description:
      'Modular monolith with strict boundaries between domains, running as a single unit.',
    features: [
      'Fast in-process communication',
      'Simple deployment and debugging',
      'Easy refactoring across modules',
    ],
    useCases: [
      'Starting a new project',
      'Small to medium teams',
      'Frequent inter-domain communication',
    ],
    variant: 'secondary' as const,
  },
  microservices: {
    title: 'Microservices',
    description:
      'Independent services that communicate over the network, each deployable separately.',
    features: [
      'Network-based communication',
      'Independent deployment per service',
      'Separate scaling per service',
      'Technology flexibility per service',
    ],
    useCases: [
      'Large autonomous teams',
      'Different scaling requirements',
    ],
    variant: 'primary' as const,
  },
} as Record<string, ComparisonCardProps>;

const caseStudyLink = {
  text: 'From Monolith to Modulith',
  url: '/case-studies/monolith-to-modulith',
  comingSoon: true,
};

/**
 * Renders the complete Microservices & Modulith expertise section
 * All content and structure is defined in this file
 */
export const MicroservicesModulithSection: React.FunctionComponent = () => {
  return (
    <ExpertiseSection title={title} subtitle={subtitle} id={id}>
      <ExpertiseContent paragraphs={startParagraphs.map((p) => p.replace(/\s+/g, ' ').trim())} />
      <ComparisonGrid comparisons={Object.values(comparison)} />
      <ExpertiseContent paragraphs={whenToUseParagraphs.map((p) => p.replace(/\s+/g, ' ').trim())} />

      <CaseStudyCallout
        text={caseStudyLink.text}
        url={caseStudyLink.url}
        comingSoon={caseStudyLink.comingSoon}
      />
    </ExpertiseSection>
  );
};
