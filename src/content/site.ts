// All of the site's personal content lives here.
// Edit this file to update the About, Projects, and Experience sections.
// Blog posts live in ./blog as Markdown files.

import headshot from './images/headshot.png'
import claudeImage from './images/claude.jpg'
import slackImage from './images/slack.jpg'

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
  // Import an image from ./images, or use a path to a file in /public, to replace the placeholder.
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
  // Path to a file in /public. Replace public/resume.pdf to update it.
  cvHref: '/resume.pdf',
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
    title: 'UniMarket',
    status: 'In progress',
    dates: 'Dec 2025 – present',
    summary:
      'A mobile marketplace where college students buy and sell items with each other. The working prototype lets students browse listings, view item details, and post new listings with photos from the camera or library. A Spring Boot backend is in progress.',
    tech: ['TypeScript', 'React Native', 'Expo', 'NativeWind'],
    links: [{ label: 'Code', href: 'https://github.com/Nathan-Holmquist/UniMarket-Frontend' }],
  },
  {
    title: 'AI Voice Assistant',
    status: 'In progress',
    dates: 'Sep 2026 – present',
    summary:
      'An always-on voice assistant for a Raspberry Pi. It listens for a wake word, sends the question to Claude Haiku, and speaks the reply, starting playback before the reply has finished generating. It aims to start answering within 900 ms of the end of a question, and you can talk over it to interrupt.',
    tech: ['Python', 'Claude API', 'Deepgram', 'WebSockets', 'Raspberry Pi'],
    links: [{ label: 'Code', href: 'https://github.com/Nathan-Holmquist/AI-Assistant' }],
    image: claudeImage,
  },
  {
    title: 'RandomCoffeeBot',
    status: 'Completed',
    dates: 'Aug 2026',
    summary:
      'A Slack bot I built for my workplace. A /pair command randomly pairs up everyone in the #random-coffee channel for a weekly coffee chat. It stores pairing history in SQLite so nobody gets the same partner twice within four weeks.',
    tech: ['Python', 'Slack Bolt', 'SQLite'],
    links: [{ label: 'Code', href: 'https://github.com/Nathan-Holmquist/RandomCoffeeBot' }],
    image: slackImage,
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
