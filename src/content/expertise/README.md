# Expertise Content

This directory contains content and configuration for expertise sections displayed on the website.

## Structure

Each expertise topic has two files for better organization:

1. **`{topic}-content.ts`** - Contains ONLY the paragraph content (easy to edit)
2. **`{topic}.tsx`** - Main component file that:
   - Imports the content from `{topic}-content.ts`
   - Defines metadata (title, subtitle, id)
   - Defines structured data (comparisons, case studies, etc.)

## Example: Microservices & Modulith

```
expertise/
├── microservices-modulith-content.ts   # Main paragraph content
└── microservices-modulith.tsx          # Component + configuration
```

### Content File (`*-content.ts`)

This file contains ONLY the paragraph text - edit this when you want to update content:

```typescript
/**
 * Content for {Topic Name}
 *
 * This file contains only the text content - edit this file to update paragraphs
 */

export const paragraphs = [
  `First paragraph explaining the concept...`,

  `Second paragraph with more details...`,

  `Third paragraph with your approach...`,
];
```

### Component File (`*.tsx`)

The main file imports the content, defines data, and renders the section:

```typescript
import { ComparisonCardProps } from '../../components/ExpertiseSection/comparison-card';
import { paragraphs } from './topic-name-content';

export const topicContent = {
  title: 'Topic Title',
  subtitle: 'Brief description',
  id: 'topic-id',
  paragraphs, // Imported from content file
  comparison: {
    // ... comparison data
  },
  caseStudyLink: {
    // ... case study link
  },
};
```

## Adding New Expertise Topics

1. Create `{topic}-content.ts` with your paragraphs array
2. Create `{topic}.tsx` following the pattern above (exports a section component)
3. Import the section component in your page: `<TopicSection />`

## Benefits

- **Separation of Concerns**: Content separated from configuration
- **Easy Editing**: Edit `*-content.ts` files to update text without touching structure
- **Type Safety**: TypeScript ensures proper data structure
- **No Build Config**: Works out of the box with TypeScript/Gatsby
- **Clear Organization**: Easy to find and update content

