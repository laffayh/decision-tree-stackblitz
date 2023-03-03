import { IDecision } from '../interfaces/Decision.interface';

const angular: IDecision = {
  title: 'Angular',
  description: 'Angular',
  children: [
    {
      title: 'Composant',
      description: "C'est un composant",
      children: [
        {
          title: 'Vue',
          description: "C'est un composant routé",
          children: [
            {
              finalDescription:
                'Sa place est dans libs/views/{nom de la route}',
            },
          ],
        },
        {
          description: "Ce n'est pas un composant routé",
          children: [
            {
              description: '?',
            },
          ],
        },
      ],
    },
    {
      title: 'Pipe',
      description: "C'est un pipe",
    },
    {
      title: 'Directive',
      description: "C'est une directive",
    },
    {
      title: 'Service',
      description: "C'est un service",
    },
  ],
};

const nest: IDecision = {
  title: 'NestJs',
  description: 'NestJs',
  children: [
    {
      title: 'Decision 2.1 title',
      description: 'Decision 2.1',
      children: [
        {
          title: 'Decision 2.1.1 title',
          description: 'Decision 2.1.1',
        },
        {
          title: 'Decision 2.1.2 title',
          description: 'Decision 2.1.2',
        },
      ],
    },
    {
      title: 'Decision 2.1.2 title',
      description: 'Decision 2.2',
      children: [
        {
          title: 'Decision 2.1.2 title',
          description: 'Decision 2.2.1',
        },
        {
          title: 'Decision 2.1.2 title',
          description: 'Decision 2.2.2',
        },
      ],
    },
  ],
};

const typescript: IDecision = {
  title: 'Typescript',
  description: 'Typescript',
  children: [
    {
      title: 'Decision 2.1 title',
      description: 'Decision 2.1',
      children: [
        {
          title: 'Decision 2.1.1 title',
          description: 'Decision 2.1.1',
        },
        {
          title: 'Decision 2.1.2 title',
          description: 'Decision 2.1.2',
        },
      ],
    },
    {
      title: 'Decision 2.1.2 title',
      description: 'Decision 2.2',
      children: [
        {
          title: 'Decision 2.1.2 title',
          description: 'Decision 2.2.1',
        },
        {
          title: 'Decision 2.1.2 title',
          description: 'Decision 2.2.2',
        },
      ],
    },
  ],
};

export const decisionTree: IDecision = {
  title: 'Quelle techno ?',
  children: [angular, nest, typescript],
};
