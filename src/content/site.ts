// All of the site's personal content lives here.
// Edit this file to update the About, Projects, and Experience sections.
// Blog posts live in ./blog as Markdown files.

import headshot from './images/headshot.png'

export type LinkKind = 'github' | 'linkedin' | 'email' | 'scholar' | 'website'

export interface SocialLink {
  kind: LinkKind
  label: string
  href: string
}

export interface Education {
  school: string
  degree: string
  dates: string
  details?: string[]
}

export interface Project {
  title: string
  status: 'In progress' | 'Completed'
  dates: string
  summary: string
  tech: string[]
  links?: { label: string; href: string }[]
  // Set to an image path (e.g. '/projects/foo.png' in /public) to replace the placeholder.
  image?: string
}

export interface Job {
  role: string
  company: string
  location: string
  dates: string
  highlights: string[]
  tech?: string[]
}

export interface Profile {
  name: string
  tagline: string
  headshot?: string
  location: string
  cvHref: string
  bio: string[]
  links: SocialLink[]
}

export const profile: Profile = {
  name: 'Nathan Holmquist',
  tagline: 'Software engineering student',
  // Import an image from ./images (like the one above), or use a path to a file in /public.
  headshot,
  location: 'Fredericksburg, VA',
  // Put your resume at public/cv.pdf and this link will work.
  cvHref: '/cv.pdf',
  bio: [
    "I'm a senior studying software engineering at the University of Mary Washington, where I focus on building scalable backend solutions. I like building software that is well-designed and useful to real people.",
    "I'm applying to graduate programs for Fall 2027, with interests in working inside large scale codebases and distributed systems. Outside of class I am a member of the Ultimate Frisbee club at UMW as well as a lab aide.",
  ],
  links: [
    { kind: 'github', label: 'GitHub', href: 'https://github.com/nathan-holmquist' },
    { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathanholmquist/' }
  ],
}

export const education: Education[] = [
  {
    school: 'The University of Mary Washington',
    degree: 'B.S. in Software Engineering',
    dates: '2023 – May 2027',
    details: ['Relevant coursework: Algorithms, Operating Systems, Databases, Machine Learning'],
  },
]

export const projects: Project[] = [
  {
    title: 'Project One',
    status: 'In progress',
    dates: '2026 – present',
    summary:
      'A one or two sentence description of what the project does, what problem it solves, and what was interesting or hard about building it.',
    tech: ['TypeScript', 'React', 'PostgreSQL'],
    links: [
      { label: 'Code', href: 'https://github.com/your-username/project-one' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    title: 'Project Two',
    status: 'Completed',
    dates: 'Spring 2026',
    summary:
      'Describe the goal, your role, and a concrete result — e.g. "cut query latency by 40%" or "used by 200 students in the intro course."',
    tech: ['Python', 'PyTorch'],
    links: [{ label: 'Code', href: 'https://github.com/your-username/project-two' }],
  },
  {
    title: 'Project Three',
    status: 'Completed',
    dates: 'Fall 2025',
    summary:
      'A research, class, or hackathon project. Mention any paper, poster, or presentation that came out of it — admissions committees like to see these.',
    tech: ['C++', 'CUDA'],
  },
]

export const experience: Job[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Company Name',
    location: 'City, State',
    dates: 'May 2026 – Aug 2026',
    highlights: [
      'Built [feature or system] that [measurable impact].',
      'Worked with [team] to [what you did], improving [metric] by [amount].',
      'Wrote [tests / docs / tooling] adopted by [who].',
    ],
    tech: ['Go', 'Kubernetes', 'gRPC'],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: '[Lab Name], [University]',
    location: 'City, State',
    dates: 'Jan 2025 – present',
    highlights: [
      'Investigated [research question] under Prof. [Advisor Name].',
      'Implemented [method / experiment] and analyzed [dataset].',
    ],
    tech: ['Python', 'NumPy'],
  },
  {
    role: 'Teaching Assistant, [Course Number]',
    company: '[University]',
    location: 'City, State',
    dates: 'Aug 2024 – May 2025',
    highlights: ['Held weekly office hours and lab sections for 40+ students.'],
  },
]
