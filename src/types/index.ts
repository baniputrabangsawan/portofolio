export type SkillCategory = 'AI / Automation' | 'Frontend' | 'Backend' | 'DevOps / Infra'

export interface SkillGroup {
  category: SkillCategory
  index: string
  skills: string[]
}

export interface Project {
  slug: string
  title: string
  kicker: string
  description: string
  outcome: string
  stack: string[]
  year: string
  accent: 'acid' | 'mono' | 'warm'
  demoUrl?: string
  repoUrl?: string
}

export interface Experience {
  period: string
  role: string
  company: string
  summary: string
}

export interface ContactPayload {
  name: string
  email: string
  message: string
  company?: string
}

export interface ContactResponse {
  ok: boolean
  message: string
}
