// ─────────────────────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit the text between the quotes, save, and push. You never need to touch
//  the layout files to update your experience, education, or skills.
//
//  Tips:
//   • Keep the quotes and the commas at the end of lines.
//   • To add a role, copy one { ... } block inside a group and edit it.
//   • Lines starting with // are notes for you; they don't appear on the site.
//   • Privacy: don't add a phone number, email, or certification number here.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Bryce Martinez',
  initials: 'BM',
  tagline: 'EMT · Public Health · Community Care',
  intro:
    'I’m an NREMT-certified EMT in the Bay Area with a background in public health research. ' +
    'My work centers on compassionate, accessible care for medically underserved communities.',
  // Replace with your real LinkedIn profile URL.
  linkedin: 'https://www.linkedin.com/in/YOUR-PROFILE',
  // Shown in Google results and link previews (aim for under ~160 characters).
  description:
    'Bryce Martinez: Bay Area EMT and Stanford-trained public health researcher focused on care for medically underserved communities.',
};

export const about = {
  // Set to false once you've edited these paragraphs to remove the "Draft" label.
  isDraft: true,
  paragraphs: [
    'I came to healthcare through public health. Studying Human Biology and then Community Health and Prevention Research at Stanford, I kept returning to the same question: why do some people get the care they need while others fall through the gaps?',
    'That question shaped the work I chose. As a Bridge to Care Counselor at Arbor Free Clinic, I helped uninsured and under-resourced patients find primary care, insurance, and prescription assistance. As a peer counselor, I learned how much it matters to simply listen. As a qualitative researcher with Long COVID patients, I saw how patients’ own stories can shape better programs.',
    'Today I work as an EMT in the Bay Area, caring for patients during transport and within the 911 system. Whether I’m on an ambulance, in a clinic, or in a research interview, I want every person I meet to feel respected and cared for, regardless of what they can afford.',
  ],
};

export type Role = {
  title: string;
  org: string;
  dates: string;
  points: string[];
};

export const experience: { group: string; roles: Role[] }[] = [
  {
    group: 'Clinical & Patient Care',
    roles: [
      {
        title: 'Emergency Medical Technician',
        org: 'Royal Ambulance',
        dates: 'Apr 2026 – Present',
        points: [
          'Interfacility transport across the Bay Area.',
          'Prehospital care within the 911 system.',
        ],
      },
      {
        title: 'Bridge to Care Counselor',
        org: 'Arbor Free Clinic (Cardinal Free Clinics)',
        dates: 'Dec 2024 – Aug 2025',
        points: [
          'Connected uninsured and under-resourced patients to primary care, insurance, prescription assistance, and specialty services.',
          'Advocated for patients facing structural barriers to continuity of care.',
        ],
      },
      {
        title: 'Peer Counselor & All-Staff Coordinator',
        org: 'Bridge Peer Counseling',
        dates: 'Sep 2023 – Jun 2025',
        points: [
          'Peer Counselor (Sep 2023 – Jun 2025): counseled peers in person and by phone.',
          'All-Staff Coordinator (Sep 2024 – Jun 2025): managed scheduling, operations, and onboarding for a 50-person staff.',
        ],
      },
    ],
  },
  {
    group: 'Research',
    roles: [
      {
        title: 'Qualitative Research Assistant',
        org: 'Stanford School of Medicine, Evaluation Sciences Unit',
        dates: 'Jan 2025 – Sep 2025',
        points: [
          'Conducted interviews and focus groups with Long COVID patients for the AHRQ-funded Long COVID REACH program.',
          'Performed thematic analysis to inform patient-centered program design.',
        ],
      },
      {
        title: 'Research Assistant',
        org: 'Zeitzer Sleep & Circadian Rhythm Lab, Stanford',
        dates: 'Summer 2021',
        points: [
          'Analyzed wearable data on sleep and athletic performance in Stanford men’s swimming.',
          'Presented at the Human Biology Summer Research Symposium.',
        ],
      },
      {
        title: 'Research Assistant',
        org: 'Dr. Paul Wang, Stanford',
        dates: '2020 – 2021',
        points: [
          'Literature research on cardiac pacemakers for a review and an online investigator tool.',
        ],
      },
      {
        title: 'Research Assistant',
        org: 'Dr. William Stringer, Harbor-UCLA',
        dates: '2018 – 2019',
        points: [
          'Studied the effects of glycopyrrolate/formoterol on exercise tolerance in COPD.',
          'Presented at Harbor-UCLA’s Biomedical Internship Symposium.',
        ],
      },
    ],
  },
  {
    group: 'Leadership & Advocacy',
    roles: [
      {
        title: 'Advocacy Lead',
        org: 'Partners in Health Engage, Stanford',
        dates: '2021 – 2022',
        points: [
          'Led a 15-person team.',
          'Met with Rep. Alan Lowenthal’s office in support of the NOVID Act.',
        ],
      },
      {
        title: 'Player, Vice President, Social Media Manager',
        org: 'Stanford Men’s Rugby',
        dates: '2020 – 2023',
        points: [],
      },
      {
        title: 'Fellowships & Stipends Branch',
        org: 'Stanford in Government',
        dates: '2020 – 2021',
        points: [],
      },
    ],
  },
];

export const education = [
  {
    school: 'Stanford University',
    degrees: [
      'MS, Community Health and Prevention Research (2025)',
      'BS, Human Biology, concentrations in Public Health Policy and Neurobiology (2025)',
    ],
  },
  {
    school: 'Bay Area Training Academy',
    degrees: ['Emergency Medical Technician Program (2025)'],
  },
];

// Never add certification numbers here.
export const certifications = ['NREMT-certified EMT', 'California EMT certified'];

export const skills = [
  'Spanish (conversational)',
  'Python',
  'R',
  'Stata',
  'Qualitative interviewing & thematic analysis',
];
