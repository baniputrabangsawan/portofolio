import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ops-copilot',
    title: 'Ops Copilot',
    kicker: 'AI OPERATIONS',
    description: 'An agentic support layer that classifies incidents, retrieves runbooks, and drafts safe remediation steps for human approval.',
    outcome: '63% faster triage',
    stack: ['Claude', 'LangChain', 'Postgres', 'React'],
    year: '2026',
    accent: 'acid',
  },
  {
    slug: 'signal-flow',
    title: 'Signal Flow',
    kicker: 'AUTOMATION PLATFORM',
    description: 'A reliable lead intelligence pipeline connecting product events, enrichment providers, scoring logic, and sales workflows.',
    outcome: '42 hrs saved / week',
    stack: ['n8n', 'OpenAI', 'TypeScript', 'Redis'],
    year: '2025',
    accent: 'mono',
  },
  {
    slug: 'knowledge-grid',
    title: 'Knowledge Grid',
    kicker: 'RAG SYSTEM',
    description: 'A permission-aware internal search experience built around hybrid retrieval, citations, and measurable answer quality.',
    outcome: '91% cited answers',
    stack: ['Python', 'pgvector', 'OpenAI', 'TanStack'],
    year: '2025',
    accent: 'warm',
  },
]
