/**
 * Parent-focused articles. Every article is marked as clinician-reviewed and
 * deliberately avoids diagnosis, cure and outcome promises. The clinic's
 * therapists should approve the wording before it is published.
 */

export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
  link?: { label: string; href: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  dateModified: string;
  category: string;
  readMinutes: number;
  tone: 'pink' | 'sage' | 'gold' | 'plum';
  icon: string;
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
  related: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'signs-of-speech-delay-in-a-two-year-old',
    title: 'Signs of speech delay in a two-year-old: what to look for',
    excerpt:
      'Every child develops language at their own pace. Here are the signs parents often notice, when an assessment can help, and what happens at a first appointment.',
    description:
      'Wondering about speech delay in a two-year-old? Learn the signs worth discussing, when to seek a speech-language assessment, and how support works in L.B. Nagar, Hyderabad.',
    date: '2026-11-10',
    dateModified: '2026-11-10',
    category: 'Speech & communication',
    readMinutes: 6,
    tone: 'gold',
    icon: 'chat',
    intro:
      'Some children start talking early, others take their time. A late start does not automatically mean something is wrong. At the same time, parents often notice things that are worth checking with a professional. This guide sets out the signs that commonly prompt a conversation with a speech therapist, and what happens next.',
    sections: [
      {
        heading: 'First, a gentle reminder about timelines',
        body:
          'Children develop at very different rates, and a two-year-old who is quiet one month may surprise you the next. What matters more than a single word count is whether your child is making progress over time, whether they seem to understand you, and whether they are able to get their message across in some way.',
        bullets: [
          'Look at the trend over weeks and months, not one difficult day',
          'Notice understanding as well as speech — pointing, responding and following simple instructions all count',
          'Trust your instincts if something feels different for your child',
        ],
      },
      {
        heading: 'Signs that are worth talking about',
        body:
          'These are general guideposts rather than a diagnosis. If several of them sound familiar, a conversation with a qualified professional is a reasonable next step. Only a proper assessment can tell you what is going on and whether support would help.',
        bullets: [
          'Using very few words by around two years of age',
          'Being hard to understand for people outside the immediate family',
          'Not yet putting two words together, or losing words they previously used',
          'Finding it difficult to follow simple, everyday instructions',
          'Showing frustration around communication, or little back-and-forth interaction',
        ],
        link: {
          label: 'Read our parent guide to speech delay',
          href: '/speech-delay/',
        },
      },
      {
        heading: 'What a speech and language assessment involves',
        body:
          'A good assessment starts with you. We ask about your child’s development, what you have noticed and what matters to your family. A qualified therapist then observes your child and uses age-appropriate activities to understand their speech, language and communication. We explain what we find in plain language and only recommend support if it is appropriate.',
        bullets: [
          'A conversation with parents before we assess your child',
          'Play-based observation and age-appropriate tasks',
          'A clear explanation of the findings and what they mean',
          'A plan with realistic goals, agreed with you',
        ],
        link: {
          label: 'Learn more about speech therapy in L.B. Nagar',
          href: '/speech-therapy/',
        },
      },
      {
        heading: 'Simple things you can do at home',
        body:
          'Everyday moments are where language grows. You do not need special equipment or long sessions. Small, consistent changes to how you talk and listen can make a real difference to your child’s confidence.',
        bullets: [
          'Follow your child’s lead and talk about what interests them',
          'Give them time to respond before you jump in or finish their sentence',
          'Read together every day, even for a few minutes',
          'Praise attempts to communicate, not just perfectly formed words',
        ],
      },
      {
        heading: 'When to ask for a second opinion',
        body:
          'If you remain worried, or if you have been given advice that does not feel right for your child, it is okay to ask questions and seek another view. A good professional will welcome that. You know your child better than anyone, and you are allowed to be an active part of any decision about their care.',
      },
    ],
    takeaways: [
      'Language develops at different rates; look at progress over time',
      'Understanding matters as much as the words a child says',
      'An assessment is a conversation first, not a test to pass',
      'Everyday talking, reading and listening all help',
    ],
    related: ['speech-delay', 'speech-therapy', 'autism-support', 'our-team'],
  },
  {
    slug: 'when-to-see-an-occupational-therapist',
    title: 'When to see an occupational therapist for your child',
    excerpt:
      'Struggling with buttons, cutlery, handwriting or noisy environments? Here is what an occupational therapist looks at, and how to tell whether an assessment could help.',
    description:
      'Wondering if your child needs occupational therapy? Learn what OT supports, the everyday signs to watch for, and what an assessment involves in L.B. Nagar, Hyderabad.',
    date: '2026-11-17',
    dateModified: '2026-11-17',
    category: 'Daily living & sensory',
    readMinutes: 5,
    tone: 'pink',
    icon: 'hands',
    intro:
      'Occupational therapy is often described in clinical language, but it is really about ordinary life: getting dressed, eating, holding a pencil, playing with friends and coping with the sights and sounds of a busy day. If those everyday things seem unusually hard for your child, an assessment can help you understand why.',
    sections: [
      {
        heading: 'What an occupational therapist actually does',
        body:
          'Occupational therapists help children take part in the activities that matter for their age. That might mean building fine motor skills for writing, finding ways to handle sensory input, or practising the steps of a morning routine until they feel manageable. The aim is practical progress you can see at home and school.',
        link: {
          label: 'Explore occupational therapy in L.B. Nagar',
          href: '/occupational-therapy/',
        },
      },
      {
        heading: 'Everyday signs that may be worth checking',
        body:
          'No single sign means your child needs therapy. But if several of these are part of daily life and are causing frustration for your child or family, a conversation with a professional is a reasonable step.',
        bullets: [
          'Dressing, feeding or personal care takes much longer than expected',
          'Writing, drawing or using utensils seems tiring or difficult',
          'Strong reactions to ordinary sounds, textures or clothing',
          'Difficulty settling, moving between activities, or joining in with play',
          'Avoiding tasks that other children their age manage',
        ],
      },
      {
        heading: 'What happens at an assessment',
        body:
          'We begin by asking about your child’s routines, what is hard and what helps. An occupational therapist then observes the skills that matter for your child, using activities that feel like play. We share what we find in plain language and agree on a small number of meaningful goals with you before any programme begins.',
        bullets: [
          'A conversation with parents about daily life',
          'Observation of fine motor, daily living and sensory-related skills',
          'An explanation of what we found and what it means',
          'Goals agreed together — no plan is recommended without discussion',
        ],
        link: {
          label: 'Read about ADHD-related support',
          href: '/adhd-support/',
        },
      },
      {
        heading: 'Small changes that can help today',
        body:
          'While you decide about an assessment, there are simple things that often make daily routines easier. Breaking tasks into smaller steps, giving extra time, and noticing what helps your child feel settled are all useful starting points.',
        bullets: [
          'Break tasks into short, clear steps and praise each one',
          'Allow extra time so mornings are not a rush',
          'Notice which sounds, textures or environments your child finds hard',
          'Build in movement breaks during long tasks',
        ],
      },
    ],
    takeaways: [
      'OT is about participation in everyday life, not just clinic exercises',
      'Look at patterns across daily routines rather than one difficult moment',
      'An assessment observes your child through play and explains findings clearly',
      'Small changes at home can make routines easier while you decide',
    ],
    related: ['occupational-therapy', 'adhd-support', 'behaviour-therapy', 'speech-therapy'],
  },
];

export const postBySlug = new Map(blogPosts.map((post) => [post.slug, post]));
