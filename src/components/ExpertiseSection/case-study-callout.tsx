import React from 'react';

export interface CaseStudyCalloutProps {
  text: string;
  url?: string;
  comingSoon?: boolean;
}

/**
 * A callout component for linking to related case studies
 * Shows an info alert with optional "coming soon" badge
 */
export const CaseStudyCallout: React.FunctionComponent<
  CaseStudyCalloutProps
> = ({ text, url, comingSoon = false }) => {
  return (
    <div className="alert alert-info mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>
        Want to learn more?{' '}
        {url && !comingSoon ? (
          <a href={url} className="font-semibold link">
            "{text}"
          </a>
        ) : (
          <>
            Check out my case study on{' '}
            <span className="font-semibold">"{text}"</span>
            {comingSoon && ' (coming soon)'}
          </>
        )}
        .
      </span>
    </div>
  );
};

export default CaseStudyCallout;
