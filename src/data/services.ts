export type Service = {
  slug: string;
  title: string;
  icon: 'hands' | 'brain' | 'chat' | 'book';
  short: string;
  summary: string;
  bullets: string[];
  accent: 'pink' | 'sage' | 'gold' | 'plum';
};

export const services: Service[] = [
  {
    slug: 'occupational-therapy',
    title: 'Occupational Therapy',
    icon: 'hands',
    short: 'Everyday skills, made easier',
    summary:
      'Customised intervention that helps children build the daily living, play and school skills they need to take part in everyday life.',
    bullets: [
      'Customised intervention to improve daily living and work skills',
      'Personalised evaluations and goal-setting for each child',
      'Adaptive equipment recommendations and usage training',
      'Guidance and education for family members and caregivers',
    ],
    accent: 'pink',
  },
  {
    slug: 'behaviour-therapy',
    title: 'Behaviour Therapy',
    icon: 'brain',
    short: 'Understanding behaviour, building skills',
    summary:
      'Assessment and personalised therapy plans that help children understand big feelings, build positive behaviours and feel more settled at home and school.',
    bullets: [
      'Assessment and personalised plans for behaviour modification',
      'Strategies to manage and improve behaviour at home and in school',
      'Social skills training for better interaction with others',
      'Support and training for family members to reinforce positive behaviours',
      'Evidence-based strategies for behavioural, emotional and learning challenges',
      'Customised learning programmes built around each child’s abilities and goals',
    ],
    accent: 'sage',
  },
  {
    slug: 'speech-therapy',
    title: 'Speech Therapy',
    icon: 'chat',
    short: 'More ways to connect',
    summary:
      'Personalised speech, language and communication support that meets children where they are and helps them express what matters.',
    bullets: [
      'Personalised speech and language assessment and intervention',
      'Communication strategies for children with speech impairments',
      'Swallowing and feeding therapy for children with eating difficulties',
      'Family training for ongoing speech and language support at home',
    ],
    accent: 'gold',
  },
  {
    slug: 'special-education',
    title: 'Special Education',
    icon: 'book',
    short: 'Learning that fits the child',
    summary:
      'Tailored learning programmes for children with diverse learning needs, built around their strengths, pace and goals.',
    bullets: [
      'Tailored learning programmes for students with diverse learning needs',
      'Specialised instruction in reading, writing, maths and other core subjects',
      'Collaborative work with therapists to support overall development',
      'Advocacy and support to navigate special education rights',
    ],
    accent: 'plum',
  },
];

export const careFormats = [
  {
    title: 'In-person sessions',
    text: 'One-to-one therapy at our centre in L.B. Nagar, with the people and resources your child needs.',
    icon: 'home',
  },
  {
    title: 'Virtual sessions',
    text: 'Online behaviour therapy sessions for families who cannot travel, or who feel more comfortable at home.',
    icon: 'video',
  },
  {
    title: 'At-home sessions',
    text: 'Support in the place where skills matter most: your everyday routines and surroundings.',
    icon: 'heart',
  },
  {
    title: 'Individual assessments',
    text: 'A clear, compassionate picture of your child’s needs, followed by a plan you can understand and use.',
    icon: 'clipboard',
  },
];
