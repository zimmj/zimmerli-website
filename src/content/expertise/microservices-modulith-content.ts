/**
 * Content for Microservices & Modulith Architecture expertise section
 *
 * This file contains only the text content - edit this file to update paragraphs
 */

export const startParagraphs = [
  // Paragraph 1: The Philosophy
  `As developers, we often hear buzzwords and don't know what they mean exactly or
  what their correct use case is. This was true for me regarding microservices for a long time.
  "Use microservices and all your issues will disappear." Unfortunately, it's never that simple.`,

  `Now there's a new buzzword: Modulith. How is this used in comparison to microservices? Why do we need it?
  Let's explore this together.`,

];

export const secondParagraphs = [
  `Microservices have an inherent issue: all calls to and from microservices need to go through
  all the network layers. This is costly and complex. If you build a system that relies
  heavily on different domains communicating with each other, it will be far slower and more complex than a modulith.
  And the only thing you gain is a collection of git repositories with all their maintenance overhead.`,

  `To solve this issue, we returned to the monolith concept and created moduliths.
  In a modulith, each domain is organized as a separate module within the same application.
  These modules are separated and should only communicate over strict interfaces with each other.
  They should not share core implementation details.
  This makes the structure of modules similar to microservices. You can see a modulith as a collection of microservices
  with high cohesion running in a single deployment unit.`,
];

export const whenToUseParagraphs = [
  `As you can see, moduliths shine in an environment where we need to explore new possibilities
  and have fewer resources to work with. They help to keep costs down and complexity at bay.`,

  `Microservices, on the other hand, allow for much more flexibility and the choice of architecture and technologies used.
  Each team can decide for themselves, as long as they provide the correct API and interfaces.
  That is also the reason why they are much more resource-hungry and need more attention.`,

  `For me, both concepts can live together. Why should each team have a microservice? It should be more of a service-oriented approach.
  Inside this service, they can choose how they want to build it. And there, moduliths shine mostly through.
  Having a collection of common domains makes more sense than separating all of them.`,
];
