/**
 * Structured copy for the dedicated SEO landing pages.
 *
 * CLINICAL GOVERNANCE:
 * - Condition/support pages are flagged `clinicalReview: true`. The wording is
 *   parent-friendly and avoids diagnosis, cure or outcome promises, but the
 *   clinic's qualified therapists must approve it before it is final.
 * - Service pages must reflect services the centre actually delivers.
 */

export type Faq = { q: string; a: string };

export type ContentSection = {
  eyebrow: string;
  heading: string;
  accent?: string;
  body: string;
  bullets?: string[];
  tone?: 'white' | 'blush' | 'periwinkle' | 'lilac';
};

export type ProcessStep = { title: string; text: string; icon: string };

export type LandingPage = {
  slug: string;
  kind: 'service' | 'condition' | 'team';
  breadcrumb: string;
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  description: string;
  badge: string;
  icon: string;
  tone: 'pink' | 'sage' | 'gold' | 'plum';
  intro: string;
  highlights: string[];
  sections: ContentSection[];
  process: ProcessStep[];
  whoFor: string[];
  faqs: Faq[];
  related: string[];
  ctaLabel: string;
  clinicalReview: boolean;
  serviceName?: string;
};

const sharedProcess: ProcessStep[] = [
  {
    title: 'Start with a conversation',
    text: 'Tell us what you have noticed and what you are hoping for. No diagnosis or decision is needed to get in touch.',
    icon: 'chat',
  },
  {
    title: 'Get to know your child',
    text: 'We take time to understand your child’s strengths, needs and the everyday moments that matter most to your family.',
    icon: 'clipboard',
  },
  {
    title: 'Agree on a plan',
    text: 'We explain what we recommend in plain language, set realistic goals together and answer all your questions.',
    icon: 'users',
  },
  {
    title: 'Review and adjust',
    text: 'We check in regularly, share strategies for home and adjust the plan as your child grows and learns.',
    icon: 'chart',
  },
];

export const landingPages: LandingPage[] = [
  /* ---------------------------------------------------------------- SERVICES */
  {
    slug: 'speech-therapy',
    kind: 'service',
    breadcrumb: 'Speech therapy',
    eyebrow: 'Our therapies · L.B. Nagar',
    title: 'Speech therapy',
    accent: 'in L.B. Nagar.',
    lead: 'Personalised speech, language and communication support that helps children find their voice — at home, at school and in the wider world.',
    description:
      'Speech therapy in L.B. Nagar, Hyderabad for children with speech, language, communication and feeding needs. Compassionate assessment and individual sessions. Book an assessment.',
    badge: 'Speech · Language · Communication · Feeding',
    icon: 'chat',
    tone: 'gold',
    intro:
      'Communication is more than words. It is how a child asks for help, shares a thought, takes a turn and feels understood. Our speech therapy sessions are built around your child’s current abilities and the things that matter to your family, and they are delivered by qualified therapists at our centre in L.B. Nagar.',
    highlights: [
      'Speech and language assessment led by a qualified therapist',
      'Individual sessions built around your child’s goals',
      'Support for expressing needs, turn-taking and conversation',
      'Feeding and swallowing support where it is needed',
      'Practical strategies for parents to use at home',
    ],
    sections: [
      {
        eyebrow: 'What it can help with',
        heading: 'Everyday communication,',
        accent: 'made a little easier.',
        body:
          'Children come to us for many different reasons. Some are slow to start talking, some find it hard to be understood, and others struggle with the social side of conversation. We begin by listening to you and observing your child, then shape a programme around what we learn. Progress looks different for every child, and we set goals that are meaningful for your family rather than comparing children to one another.',
        bullets: [
          'Late or unclear speech, and difficulty putting words together',
          'Understanding language, following instructions and building vocabulary',
          'Turn-taking, sharing attention and conversation skills',
          'Oral motor, feeding and swallowing difficulties where relevant',
          'Communication support alongside other therapies your child may receive',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'How sessions work',
        heading: 'Playful, patient,',
        accent: 'and personal.',
        body:
          'Sessions take place at our L.B. Nagar centre, at home or online, depending on what suits your child. We use play, routines and activities your child enjoys so that practice feels natural rather than like a test. You will know what we are working on, why, and how you can support it between sessions.',
        bullets: [
          'An initial conversation and assessment before any plan is recommended',
          'One-to-one sessions with a therapist who knows your child',
          'Clear goals that we review together on a regular basis',
          'Home strategies shared in plain language, not clinical jargon',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'Booking and practical details',
        heading: 'Straightforward',
        accent: 'next steps.',
        body:
          'Most families begin with a conversation and an assessment so we can understand your child before recommending a schedule. Session length and frequency depend on your child’s age, needs and goals, which we agree together. We do not publish fixed fees online; please call or WhatsApp us for current rates, available slots and to ask whether centre, home or online sessions are the best fit.',
        bullets: [
          'Assessment first, so the plan fits your child rather than a template',
          'In-person, at-home and online options — ask us what is available',
          'Current fees and available slots shared directly by our team',
          'Easy to reach from L.B. Nagar, with directions on our contact page',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Children who are slow to start talking or are hard to understand',
      'Children who find it difficult to express needs or feelings',
      'Children working on vocabulary, sentences or conversation',
      'Families who want practical communication strategies for home',
    ],
    faqs: [
      {
        q: 'How do I know if my child needs speech therapy?',
        a: 'You do not need a diagnosis to get in touch. If you are concerned about your child’s speech or language, start with a conversation and an assessment. A qualified therapist can explain what we observe and whether support would help.',
      },
      {
        q: 'What ages do you work with?',
        a: 'We support children across early childhood and school-age years. Plans are built around each child’s needs rather than a fixed age band, so please call us to talk about your child specifically.',
      },
      {
        q: 'Can speech therapy be done online?',
        a: 'Online sessions may be suitable for some children and goals. Call or WhatsApp us and we will talk through the options and recommend the format most likely to help your child.',
      },
      {
        q: 'Will I be given activities to do at home?',
        a: 'Yes. Parent involvement is part of our approach. We share simple, practical strategies you can build into everyday routines, and we review them with you as your child progresses.',
      },
    ],
    related: ['speech-delay', 'autism-support', 'occupational-therapy', 'behaviour-therapy'],
    ctaLabel: 'Ask about a speech assessment',
    clinicalReview: false,
    serviceName: 'Speech Therapy',
  },
  {
    slug: 'occupational-therapy',
    kind: 'service',
    breadcrumb: 'Occupational therapy',
    eyebrow: 'Our therapies · L.B. Nagar',
    title: 'Occupational therapy',
    accent: 'in L.B. Nagar.',
    lead: 'Practical, child-led support that helps children build the everyday skills they need for play, learning, self-care and feeling confident at home and school.',
    description:
      'Occupational therapy in L.B. Nagar, Hyderabad for children building daily living, fine motor, sensory and school skills. Personalised assessment and sessions. Book an evaluation.',
    badge: 'Daily living · Fine motor · Play · School skills',
    icon: 'hands',
    tone: 'pink',
    intro:
      'Occupational therapy is about the things children do every day: getting dressed, holding a pencil, eating independently, joining in with play and settling into a school routine. When those things feel harder than they should, our occupational therapists work with your child to build skills and confidence step by step at our centre in L.B. Nagar.',
    highlights: [
      'Assessment of daily living, fine motor and play skills',
      'Individual sessions tailored to your child’s goals',
      'Support for sensory processing and self-regulation needs',
      'Recommendations for adaptive equipment where appropriate',
      'Guidance for parents and teachers that carries over into daily life',
    ],
    sections: [
      {
        eyebrow: 'What it can help with',
        heading: 'Building skills for',
        accent: 'real everyday life.',
        body:
          'We look at what your child finds difficult and what helps them feel settled and successful. That might be buttoning a shirt, using cutlery, writing, sitting through a meal, coping with noise or moving between activities. The goal is practical progress that you can see at home and school, not just inside the therapy room.',
        bullets: [
          'Self-care skills such as dressing, feeding and personal care',
          'Fine motor skills for writing, drawing and classroom tasks',
          'Sensory processing, movement and body awareness',
          'Attention, comfort and participation in daily routines',
          'Advice on adaptations that make everyday tasks more manageable',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'How sessions work',
        heading: 'Child-led and',
        accent: 'purposeful.',
        body:
          'Therapy uses play and meaningful activities because that is how children learn best. We break skills into small, achievable steps, celebrate progress and adjust the plan as your child grows. Sessions can take place at our L.B. Nagar centre, at home or online, depending on what is suitable.',
        bullets: [
          'An initial conversation and assessment to understand your child',
          'Goals agreed with you, written in plain language',
          'Hands-on practice in short, focused steps',
          'Home and school strategies shared with the people who matter',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'Booking and practical details',
        heading: 'Know what to',
        accent: 'expect first.',
        body:
          'The first step is a conversation followed by an assessment, so we can recommend a plan that actually fits your child. Session length and frequency vary with age and goals, and we will agree these with you. Fees and current availability are shared directly by our team rather than published as a fixed price online.',
        bullets: [
          'Assessment before any programme is recommended',
          'In-person, at-home and online options — ask what is available',
          'Session length and frequency agreed together',
          'Call or WhatsApp for current rates and open slots',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Children who find self-care tasks frustrating or slow',
      'Children with fine motor or handwriting difficulties',
      'Children who seem unsettled by sounds, textures or movement',
      'Families looking for practical strategies for home and school',
    ],
    faqs: [
      {
        q: 'What does an occupational therapy assessment involve?',
        a: 'We talk with you about your child’s everyday routines and observe the skills that matter for their age. The aim is to understand strengths and difficulties, then agree realistic goals with you. We explain everything in plain language.',
      },
      {
        q: 'Is occupational therapy the same as physiotherapy?',
        a: 'No. Occupational therapy focuses on participation in everyday activities such as dressing, feeding, play and school tasks. Our centre’s listed services are occupational therapy, behaviour therapy, speech therapy and special education. Please ask us if you are unsure which support your child needs.',
      },
      {
        q: 'Do you work with schools?',
        a: 'We can share practical strategies with families to pass on to schools, and discuss what would help your child in the classroom. Ask our team what is possible for your child’s situation.',
      },
      {
        q: 'How often will my child need sessions?',
        a: 'It depends on your child’s age, goals and how they respond. We agree a schedule during the assessment and review it regularly rather than setting a fixed number of sessions in advance.',
      },
    ],
    related: ['behaviour-therapy', 'speech-therapy', 'adhd-support', 'special-education'],
    ctaLabel: 'Ask about an OT evaluation',
    clinicalReview: false,
    serviceName: 'Occupational Therapy',
  },
  {
    slug: 'behaviour-therapy',
    kind: 'service',
    breadcrumb: 'Behaviour therapy',
    eyebrow: 'Our therapies · L.B. Nagar & online',
    title: 'Behaviour therapy',
    accent: 'in L.B. Nagar.',
    lead: 'Thoughtful, evidence-informed support that helps children understand big feelings, build positive habits and feel more settled at home, at school and in the community.',
    description:
      'Behaviour therapy in L.B. Nagar, Hyderabad with in-person and online sessions. Personalised plans, social skills support and parent guidance. Enquire about therapy.',
    badge: 'In-person & online sessions',
    icon: 'brain',
    tone: 'sage',
    intro:
      'Behaviour is how children communicate what they cannot yet say in words. Our behaviour therapists look at what is happening around your child, not just at the behaviour itself, and build a plan that is practical, consistent and kind. Sessions are available at our L.B. Nagar centre and online for families who prefer or need to join from home.',
    highlights: [
      'Assessment and personalised behaviour plans',
      'Strategies for home, school and community settings',
      'Social skills and emotional regulation support',
      'Parent and caregiver coaching as part of the plan',
      'Online behaviour therapy sessions available',
    ],
    sections: [
      {
        eyebrow: 'What it can help with',
        heading: 'Understanding behaviour,',
        accent: 'not just managing it.',
        body:
          'We start by asking what your child is trying to communicate and which parts of the day feel hardest. From there we build strategies that are realistic for your family and consistent across settings. We avoid one-size-fits-all approaches and review what is actually working for your child.',
        bullets: [
          'Big emotions, frustration and difficult transitions',
          'Building routines and positive, repeatable habits',
          'Social skills, sharing and interacting with peers',
          'Strategies that carers and teachers can use consistently',
          'Support that respects your child’s dignity and strengths',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'How sessions work',
        heading: 'In person',
        accent: 'or online.',
        body:
          'Some families come to the centre in L.B. Nagar; others join online, which can work well for behaviour therapy and parent coaching. We will talk through which format suits your child and your routine. Either way, you will know what we are working on and how to carry it over into everyday life.',
        bullets: [
          'A conversation and assessment before planning begins',
          'Sessions shaped around your child and family routines',
          'Online behaviour therapy available through our booking page',
          'Regular review so the plan keeps pace with your child',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'Booking and practical details',
        heading: 'A clear',
        accent: 'first visit.',
        body:
          'Families usually start with a consultation so we can understand the situation before recommending anything. We will explain the assessment, how sessions work and what involvement looks like for you. Session length, frequency and current fees are discussed directly with our team.',
        bullets: [
          'Consultation and assessment before a plan is recommended',
          'Centre-based and online behaviour therapy options',
          'Parent involvement built into the approach',
          'Contact us for current rates and available slots',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Children who find transitions or changes difficult',
      'Families wanting practical, consistent behaviour strategies',
      'Children building social skills and confidence with peers',
      'Families who need online behaviour therapy options',
    ],
    faqs: [
      {
        q: 'Do you offer online behaviour therapy?',
        a: 'Yes. Online behaviour therapy sessions are available and can be a good fit for many families. Call or WhatsApp us, or use our booking page, to talk through whether online or in-person support suits your child.',
      },
      {
        q: 'Will my child be labelled or judged?',
        a: 'No. We focus on understanding what your child needs and how to help, not on labels. We work respectfully with each child and involve parents as partners throughout.',
      },
      {
        q: 'How are behaviour plans shared with parents?',
        a: 'We explain goals and strategies in everyday language and show you how to use them at home. You will be involved in reviewing progress and adjusting the plan.',
      },
      {
        q: 'Can behaviour therapy run alongside other therapies?',
        a: 'Yes. Many children receive more than one type of support. Where appropriate, our team coordinates so that strategies are consistent across sessions and settings.',
      },
    ],
    related: ['occupational-therapy', 'autism-support', 'adhd-support', 'speech-therapy'],
    ctaLabel: 'Enquire about behaviour therapy',
    clinicalReview: false,
    serviceName: 'Behaviour Therapy',
  },
  {
    slug: 'special-education',
    kind: 'service',
    breadcrumb: 'Special education',
    eyebrow: 'Our therapies · L.B. Nagar',
    title: 'Special education',
    accent: 'in L.B. Nagar.',
    lead: 'Tailored learning support that meets children where they are, built around their strengths, pace and goals — and coordinated with the therapy they receive.',
    description:
      'Special education and tailored learning support in L.B. Nagar, Hyderabad for children with diverse learning needs. Individual programmes and consultations. Arrange a consultation.',
    badge: 'Learning support · Individual programmes',
    icon: 'book',
    tone: 'plum',
    intro:
      'Some children need a different route through learning. Our special education support builds individual programmes around your child’s strengths and the pace that works for them, with reading, writing, maths and study skills taught in a way that makes sense to your child. Ask our team whether this service is currently available for your child’s needs.',
    highlights: [
      'Individual learning programmes based on your child’s needs',
      'Support with reading, writing, maths and study skills',
      'Lessons adapted to your child’s pace and learning style',
      'Coordination with therapists where your child receives both',
      'Clear communication with parents about goals and progress',
    ],
    sections: [
      {
        eyebrow: 'What it can help with',
        heading: 'Learning that',
        accent: 'fits the child.',
        body:
          'We begin by understanding how your child learns best and where the barriers sit. From there we set small, achievable goals and teach in a way that builds confidence rather than frustration. Progress is reviewed with you regularly and shared in language you can use at home.',
        bullets: [
          'Gaps in reading, writing or numeracy skills',
          'Difficulty keeping pace with a typical classroom',
          'Building independent study habits and confidence',
          'Learning plans that reflect your child’s wider therapy goals',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'How sessions work',
        heading: 'Structured,',
        accent: 'but flexible.',
        body:
          'Sessions are adapted to your child’s attention, energy and interests. We combine short, focused teaching with breaks and activities that keep learning positive. Where your child also receives therapy, we look for ways for the two to support each other rather than compete for time.',
        bullets: [
          'An initial conversation to understand your child’s learning history',
          'A programme with clear, reviewable goals',
          'Teaching adapted to your child’s pace',
          'Regular feedback for parents',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'Booking and practical details',
        heading: 'Check current',
        accent: 'availability.',
        body:
          'Please contact us to confirm that special education is currently offered for your child’s needs, and to arrange a consultation. We will explain the assessment process, session structure, current rates and availability directly, so you have accurate information before you decide.',
        bullets: [
          'Consultation to confirm fit and availability',
          'Programme and schedule agreed with parents',
          'Current fees shared directly by our team',
          'Coordinated with other services where relevant',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Children who learn at a different pace to their peers',
      'Children with specific gaps in reading, writing or maths',
      'Children who need a learning plan alongside therapy',
      'Families looking for patient, individualised teaching',
    ],
    faqs: [
      {
        q: 'Is special education currently available?',
        a: 'Please call or WhatsApp us to confirm current availability and whether it is the right fit for your child. We would rather give you an accurate answer than assume.',
      },
      {
        q: 'How is a learning programme decided?',
        a: 'We talk with you about your child’s history and current difficulties, then set small, clear goals. The programme is reviewed regularly and adjusted as your child progresses.',
      },
      {
        q: 'Can this run alongside speech or occupational therapy?',
        a: 'Where it is appropriate, yes. We aim to coordinate support so that learning and therapy goals reinforce one another. Ask our team how this would work for your child.',
      },
      {
        q: 'Do you provide online learning support?',
        a: 'Availability depends on your child’s needs. Contact us and we will explain the options clearly before you book anything.',
      },
    ],
    related: ['speech-therapy', 'occupational-therapy', 'adhd-support', 'autism-support'],
    ctaLabel: 'Arrange a consultation',
    clinicalReview: false,
    serviceName: 'Special Education',
  },

  /* --------------------------------------------------------------- CONDITIONS */
  {
    slug: 'autism-support',
    kind: 'condition',
    breadcrumb: 'Autism support',
    eyebrow: 'Parent guide · Hyderabad',
    title: 'Autism support',
    accent: 'that starts with the child.',
    lead: 'A clear, parent-friendly guide to how our team supports children with autism through communication, daily living, behaviour and learning — right here in Hyderabad.',
    description:
      'Autism support and therapy options in Hyderabad for families in L.B. Nagar. Learn how communication, occupational, behaviour and learning support can help. Contact our clinical team.',
    badge: 'Written for parents · Reviewed by clinicians',
    icon: 'heart',
    tone: 'pink',
    intro:
      'Every autistic child is different. Some children communicate easily but find changes hard; others communicate in their own way and need support to be understood. Our role is to listen to you, understand your child as an individual and talk through which kinds of support might help. We do not offer diagnosis through this website — a qualified professional should assess your child.',
    highlights: [
      'Support for communication and social understanding',
      'Help with daily living, sensory comfort and routines',
      'Behaviour strategies that are respectful and practical',
      'Learning support adapted to your child’s strengths',
      'Coordinated care across more than one therapy where needed',
    ],
    sections: [
      {
        eyebrow: 'Understanding support',
        heading: 'Start with your child,',
        accent: 'not a checklist.',
        body:
          'Autism support works best when it is built around the child in front of us. In an initial conversation we ask about your child’s strengths, interests and the parts of the day that feel difficult. From there we explain the options in plain language and agree on a small number of meaningful goals with you.',
        bullets: [
          'Communication and social skills support where helpful',
          'Strategies for transitions, routines and daily living',
          'Sensory and movement needs considered as part of the plan',
          'Parent coaching so strategies carry over beyond sessions',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'Which therapies may be relevant',
        heading: 'Different needs,',
        accent: 'different combinations.',
        body:
          'Depending on your child, support may draw on speech therapy, occupational therapy, behaviour therapy or special education. Some children benefit from just one; others need a combination. We will explain what we recommend and why, and review it with you as your child changes.',
        bullets: [
          'Speech therapy for communication and social language',
          'Occupational therapy for daily living and sensory needs',
          'Behaviour therapy for emotional regulation and routines',
          'Special education for learning tailored to your child',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'What happens next',
        heading: 'A calm, clear',
        accent: 'first step.',
        body:
          'You do not need to arrive with a label or a plan. Call or WhatsApp us to talk about what you have noticed. We will explain our assessment process, answer your questions and help you decide whether an assessment at our L.B. Nagar centre is the right next step for your family.',
        bullets: [
          'A conversation with someone who will listen',
          'An assessment explained before it begins',
          'Goals and next steps agreed with parents',
          'Honest discussion of what support can and cannot do',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Parents looking for support after questions about their child’s development',
      'Children who communicate in their own way or find social situations hard',
      'Families wanting practical strategies for routines and daily life',
      'Families who want coordinated support across several therapies',
    ],
    faqs: [
      {
        q: 'Do you diagnose autism?',
        a: 'We do not offer a diagnosis through this website. If you have concerns about your child’s development, speak to a qualified clinician. Our team can discuss therapy and support options once you have the information you need.',
      },
      {
        q: 'Which therapy is right for my child?',
        a: 'It depends on your child’s individual needs. We start with a conversation and assessment, then explain which combination of communication, daily living, behaviour or learning support we recommend and why.',
      },
      {
        q: 'Are your approaches respectful of autistic children?',
        a: 'Our aim is to support communication, comfort and participation while respecting each child’s differences. We work with parents to set goals that are meaningful for the child and family, and we avoid promising that any approach will change who a child is.',
      },
      {
        q: 'Can we start with one session to see if it fits?',
        a: 'Most families start with a conversation and assessment. Talk to us about your situation and we will explain the most sensible first step for your child.',
      },
    ],
    related: ['behaviour-therapy', 'speech-therapy', 'occupational-therapy', 'speech-delay'],
    ctaLabel: 'Ask about appropriate services',
    clinicalReview: true,
  },
  {
    slug: 'adhd-support',
    kind: 'condition',
    breadcrumb: 'ADHD support',
    eyebrow: 'Parent guide · Hyderabad',
    title: 'ADHD-related support',
    accent: 'for families.',
    lead: 'Practical, parent-friendly information about the kinds of therapy and learning support that can help children with attention, activity and impulse challenges.',
    description:
      'ADHD-related therapy and learning support in Hyderabad for families in L.B. Nagar. Explore behaviour, occupational and learning support. Contact our clinical team.',
    badge: 'Written for parents · Reviewed by clinicians',
    icon: 'sparkle',
    tone: 'gold',
    intro:
      'Some children find it hard to sit still, stay focused, wait their turn or finish what they start. These challenges can affect school, home life and confidence. Our team can talk through which kinds of support may help your child and build a plan around their strengths. We do not provide diagnosis through this website; a qualified professional should assess your child.',
    highlights: [
      'Strategies for attention, routines and follow-through',
      'Support for emotional regulation and self-confidence',
      'Learning approaches adapted to how your child works best',
      'Practical tools for parents and teachers',
      'Coordinated support where more than one therapy is needed',
    ],
    sections: [
      {
        eyebrow: 'Understanding the challenges',
        heading: 'It is not',
        accent: 'a lack of effort.',
        body:
          'Children who struggle with attention and impulse control are often trying hard and still falling short. We look at the whole picture: the environment, the routines, the demands placed on your child and the strengths they bring. Support works best when it reduces frustration and builds on what your child can already do.',
        bullets: [
          'Difficulty starting, focusing on or finishing tasks',
          'Restlessness, impulsivity and trouble waiting',
          'Emotional ups and downs and sensitivity to frustration',
          'Challenges that show up mainly at school or mainly at home',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'How we can help',
        heading: 'Practical support',
        accent: 'that carries over.',
        body:
          'Depending on your child, behaviour therapy can help with routines and self-regulation, occupational therapy can help with sensory comfort and daily tasks, and special education can adapt learning to your child’s pace. We explain our reasoning clearly and agree a small number of goals you can actually measure at home.',
        bullets: [
          'Behaviour strategies built around your family’s routines',
          'Occupational therapy where sensory or motor skills play a part',
          'Learning support adapted to your child’s needs',
          'Parent guidance so strategies stay consistent',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'Getting started',
        heading: 'Talk to us',
        accent: 'first.',
        body:
          'If you have concerns about your child’s attention or activity levels, start with a conversation. We will ask about what you have noticed, explain what we can offer and help you decide on a sensible next step. Any assessment is explained to you before it begins.',
        bullets: [
          'A conversation with a member of our clinical team',
          'Clear explanation of options, without pressure',
          'Goals agreed with parents, reviewed over time',
          'Honest information about what support can achieve',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Children who struggle to focus or finish tasks',
      'Children who find waiting, transitions or stillness difficult',
      'Families looking for practical behaviour and learning strategies',
      'Parents who want coordinated support across home and school',
    ],
    faqs: [
      {
        q: 'Do you diagnose ADHD?',
        a: 'Diagnosis is carried out by appropriately qualified professionals. We do not offer a diagnosis through this website. We can discuss support options for your child once you have the information you need.',
      },
      {
        q: 'Can therapy help without medication?',
        a: 'Behaviour therapy and learning support can help children build practical skills and strategies. Decisions about medication belong with a qualified medical professional. We can talk through the non-medication support we offer and whether it is appropriate for your child.',
      },
      {
        q: 'What age is support available for?',
        a: 'It depends on your child’s needs. Call us to talk about your child specifically and we will explain what we can offer and how sessions would work.',
      },
      {
        q: 'Can you share strategies with teachers?',
        a: 'We can give parents practical strategies to pass on and discuss what might help in the classroom. Ask our team what is possible in your child’s case.',
      },
    ],
    related: ['behaviour-therapy', 'occupational-therapy', 'special-education', 'autism-support'],
    ctaLabel: 'Contact our clinical team',
    clinicalReview: true,
  },
  {
    slug: 'speech-delay',
    kind: 'condition',
    breadcrumb: 'Speech delay guide',
    eyebrow: 'Parent guide · L.B. Nagar',
    title: 'Speech delay',
    accent: 'a parent’s guide.',
    lead: 'When to seek a speech and language assessment, what a first appointment looks like, and how to support your child’s communication at home.',
    description:
      'Worried about speech delay in your child? Read when to seek a speech-language assessment and how support works in L.B. Nagar, Hyderabad. Book an assessment.',
    badge: 'Written for parents · Reviewed by clinicians',
    icon: 'chat',
    tone: 'gold',
    intro:
      'Children develop language at very different rates, and a late start does not always mean something is wrong. At the same time, parents often notice things that are worth checking. This guide explains when an assessment can be useful and what happens next. It is general information, not a diagnosis — a qualified speech-language professional should assess your child.',
    highlights: [
      'Signs that may be worth discussing with a professional',
      'What a speech and language assessment involves',
      'How individual sessions are planned and reviewed',
      'Simple ways to support communication at home',
      'When to ask for a second opinion',
    ],
    sections: [
      {
        eyebrow: 'When to check',
        heading: 'Signs worth',
        accent: 'talking about.',
        body:
          'Trust your instincts. If you are worried about your child’s speech or language, it is reasonable to ask a professional. The signs below are general guideposts, not a diagnosis. Children develop at different rates, and only a proper assessment can tell you what is going on.',
        bullets: [
          'Not using many words by around two years of age',
          'Difficulty being understood by people outside the family',
          'Limited vocabulary or not putting words together as expected',
          'Finding it hard to follow simple instructions',
          'Frustration around communication, or very little back-and-forth interaction',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'The assessment',
        heading: 'What happens',
        accent: 'at the first visit.',
        body:
          'We start by listening to you: what you have noticed, your child’s history and what matters to your family. A qualified therapist then observes and assesses your child’s speech, language and communication in a way that suits their age. We explain what we find in plain language and only recommend support if it is appropriate.',
        bullets: [
          'A conversation with parents before we assess your child',
          'Observation and age-appropriate speech and language tasks',
          'A clear explanation of what we found and what it means',
          'A plan with realistic goals, agreed with you',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'At home',
        heading: 'Small things',
        accent: 'that add up.',
        body:
          'Everyday moments are powerful for language. Talking, reading, singing and responding to your child’s attempts to communicate all help. If therapy is recommended, we will show you a few simple strategies to build into your normal routine rather than adding a second job to your day.',
        bullets: [
          'Follow your child’s lead and talk about what interests them',
          'Give your child time to respond before jumping in',
          'Read together daily, even for a few minutes',
          'Praise attempts to communicate, not just perfect words',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Parents of children who are slow to start talking',
      'Parents who find their child hard to understand',
      'Families wanting a clearer picture before deciding on therapy',
      'Parents looking for simple communication strategies at home',
    ],
    faqs: [
      {
        q: 'Is my child just a late talker?',
        a: 'Some children are late talkers and catch up, while others need support. There is no way to know for certain without an assessment. If you are concerned, a conversation with a qualified therapist is the sensible first step.',
      },
      {
        q: 'How early can speech therapy start?',
        a: 'Support can begin at a young age when it is appropriate. Call us to talk about your child’s age and what we can offer, and we will be honest about whether an assessment is worthwhile right now.',
      },
      {
        q: 'Will my child need long-term therapy?',
        a: 'It depends on what the assessment finds and how your child progresses. We set goals together and review them regularly, so the plan can change as your child grows.',
      },
      {
        q: 'Can you assess speech delay online?',
        a: 'Some parts of an assessment may be possible online, but an in-person appointment is often more reliable for young children. Contact us and we will recommend the best option for your child.',
      },
    ],
    related: ['speech-therapy', 'autism-support', 'occupational-therapy', 'behaviour-therapy'],
    ctaLabel: 'Book a speech assessment',
    clinicalReview: true,
  },

  /* ---------------------------------------------------------------------- TEAM */
  {
    slug: 'our-team',
    kind: 'team',
    breadcrumb: 'Our team',
    eyebrow: 'Meet the team · L.B. Nagar',
    title: 'The people',
    accent: 'behind the care.',
    lead: 'Our centre brings together four disciplines so your child gets joined-up support from people who talk to each other and to you.',
    description:
      'Meet the team at Heal & Heed in L.B. Nagar, Hyderabad: occupational therapy, behaviour therapy, speech therapy and special education working together for children and families.',
    badge: 'One connected team · Four disciplines',
    icon: 'users',
    tone: 'plum',
    intro:
      'Families are at the centre of what we do. Our team works across occupational therapy, behaviour therapy, speech therapy and special education, sharing observations so your child’s support feels consistent rather than fragmented. Ask us about the qualified professionals involved in your child’s care and their relevant experience.',
    highlights: [
      'Occupational therapy for everyday skills and independence',
      'Behaviour therapy for emotional regulation and routines',
      'Speech therapy for communication and feeding',
      'Special education for tailored learning support',
      'Regular team discussion so care stays connected',
    ],
    sections: [
      {
        eyebrow: 'How we work together',
        heading: 'Joined-up support,',
        accent: 'not separate sessions.',
        body:
          'A child’s needs do not fit neatly into separate appointments. Our therapists and educators share what they observe, with your permission, so that strategies used in one session are reinforced in another. Parents are included in decisions and progress reviews throughout.',
        bullets: [
          'A shared understanding of your child’s goals',
          'Strategies that work across home, school and therapy',
          'Regular reviews with parents',
          'A plan that changes as your child grows',
        ],
        tone: 'white',
      },
      {
        eyebrow: 'Qualifications and experience',
        heading: 'Ask us',
        accent: 'about our team.',
        body:
          'We believe parents should know who is working with their child. If you would like information about the qualifications, roles or professional registrations of the team members involved in your child’s care, please ask us directly and we will be glad to explain.',
        bullets: [
          'Role and qualifications shared on request',
          'Relevant professional details provided directly',
          'Parent questions welcomed before you book',
        ],
        tone: 'blush',
      },
      {
        eyebrow: 'Visit us',
        heading: 'Find us in',
        accent: 'L.B. Nagar.',
        body:
          'Our centre is in L.B. Nagar, Hyderabad, beside Vijaya Lakshmi Theatre. Call or WhatsApp us to arrange a conversation about your child, or use the contact page for directions and opening hours.',
        bullets: [
          'Monday to Saturday, 9:00 AM to 6:00 PM',
          'In-person sessions at our L.B. Nagar centre',
          'Online and at-home options may be available — ask us',
        ],
        tone: 'lilac',
      },
    ],
    process: sharedProcess,
    whoFor: [
      'Families who want to know who will work with their child',
      'Parents looking for coordinated, multi-discipline support',
      'Families comparing therapy centres in L.B. Nagar',
    ],
    faqs: [
      {
        q: 'Can I meet the therapist before booking?',
        a: 'Yes. Start with a conversation so we can understand your child and explain who would be involved. Ask us any questions about roles and experience before you decide.',
      },
      {
        q: 'Will more than one professional work with my child?',
        a: 'Only if it is appropriate. Where several areas need support, we coordinate with your permission so that your child’s plan feels connected.',
      },
      {
        q: 'Where are you located?',
        a: 'We are in L.B. Nagar, Hyderabad, beside Vijaya Lakshmi Theatre. Our contact page has the full address, hours and directions.',
      },
    ],
    related: ['speech-therapy', 'occupational-therapy', 'behaviour-therapy', 'special-education'],
    ctaLabel: 'Talk to our team',
    clinicalReview: false,
  },
];

export const landingBySlug = new Map(landingPages.map((page) => [page.slug, page]));

export const servicePages = landingPages.filter((page) => page.kind === 'service');
export const conditionPages = landingPages.filter((page) => page.kind === 'condition');
