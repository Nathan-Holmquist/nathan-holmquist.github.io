// All of the site's personal content lives here.
// Edit this file to update the About, Projects, and Experience sections.
// Blog posts live in ./blog as Markdown files.

import headshot from './images/headshot.jpg'
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
  tagline: 'Computer science student',
  // Import an image from ./images (like the one above), or use a path to a file in /public.
  headshot,
  location: 'Fredericksburg, VA',
  // Path to a file in /public. Replace public/resume.pdf to update it.
  cvHref: '/resume.pdf',
  bio: [
    "I'm a senior studying computer science at the University of Mary Washington, where I focus on building scalable backend solutions. I like building software that is well-designed and useful to real people.",
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
    degree: 'B.S. in Computer Science',
    dates: '2023 – May 2027',
    details: ['Relevant coursework: Algorithms, Operating Systems, Databases, Foundations for Data Science'],
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
    role: 'Student',
    company: 'University of Mary Washington',
    location: 'Fredericksburg, VA',
    dates: 'Aug 2023 – present',
    highlights: [
      "Dean's List, Spring 2025.",
      'Placed 2nd in the 2025 Mary Washington Programming Competition.',
      'Treasurer of the Ultimate Frisbee Club.',
    ],
    tech: ['Python', 'Java'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'HawkEye 360',
    location: 'Herndon, VA',
    dates: 'May 2026 – Aug 2026',
    highlights: [
      'Designed and built a power simulation system for the satellite scheduler, modeling spacecraft energy budgets across eclipses, data collections, and downlinks so the scheduler could not produce plans that violated power limits.',
      'Partnered with hardware and payload teams to validate the underlying power model.',
      'Built a battery state-of-charge algorithm for satellites in orbit, combining voltage-based anchor points with current integration over live telemetry, plus long-term degradation tracking so reported charge reflects true usable capacity rather than original capacity.',
      'Worked in a Kubernetes-based development environment, using k9s to run services locally and ArgoCD to monitor dev-server deployments and logs.',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'k9s', 'ArgoCD'],
  },
  {
    role: 'Leader',
    company: 'YMCA Camp Takodah',
    location: 'Richmond, NH',
    dates: 'Jun 2022 – Aug 2022',
    highlights: [
      'Worked as a camp counselor, overseeing a variety of activities for campers.',
      'Primarily worked at the waterfront as a lifeguard, ensuring the safety of all participants during water activities.',
      'Developed strong leadership and communication skills while fostering a positive camp environment.',
    ],
  },
]
