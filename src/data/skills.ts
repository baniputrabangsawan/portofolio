import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / Automation',
    index: '01',
    skills: ['n8n', 'LangChain', 'OpenAI API', 'Claude API', 'RAG pipelines', 'AI agents'],
  },
  {
    category: 'Frontend',
    index: '02',
    skills: ['React', 'TanStack', 'TypeScript', 'Three.js', 'Tailwind CSS', 'GSAP'],
  },
  {
    category: 'Backend',
    index: '03',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST / GraphQL', 'Webhooks'],
  },
  {
    category: 'DevOps / Infra',
    index: '04',
    skills: ['Docker', 'AWS', 'Vercel', 'CI / CD', 'Observability', 'Linux'],
  },
]
