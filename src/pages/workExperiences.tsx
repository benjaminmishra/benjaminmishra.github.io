import { v4 as uuidv4 } from 'uuid';

// This file exports an array of work experience objects derived from Benjamin’s
// latest CV. Each object contains a unique id, company name, role, dates,
// optional location, a set of descriptive bullet points and a list of key
// technologies/tools used. The order is reverse chronological to match
// typical résumé layouts.

export const workExperiences = [
  {
    id: `avalanche-studios-${uuidv4()}`,
    company: 'Avalanche Studios Group',
    title: 'Senior Backend Engineer',
    duration: 'Jan 2025 – Present',
    location: 'Stockholm, Sweden',
    description: [
      'Architected and delivered the live operations platform and scalable backend services for an upcoming AAA title.',
      'Designed for 99.9% uptime and set clear metrics and failure‑handling plans with the team.',
      'Ran and improved our Azure cloud setup and deployments.',
    ],
    technologies: ['C#', '.NET', 'Golang', 'Azure', 'AKS', 'App Service', 'Key Vault', 'Distributed Systems', 'CI/CD'],
  },
  {
    id: `ringtail-lemur-sse-${uuidv4()}`,
    company: 'Ringtail Lemur',
    title: 'Senior Software Engineer',
    duration: 'Aug 2023 – Dec 2024',
    location: 'Stockholm, Sweden',
    description: [
      'Built core features for a game server platform to keep it fast, reliable and consistent.',
      'Designed and implemented CI/CD from scratch for developer workflows and safe game service rollouts.',
      'Built tracing and dashboards to see requests end to end and spot issues quickly.',
      'Partnered across teams to refine requirements and deliver cross‑cutting platform capabilities.',
    ],
    technologies: ['Golang', '.NET', 'CI/CD', 'Tracing & dashboards'],
  },
  {
    id: `ringtail-lemur-ssr-${uuidv4()}`,
    company: 'Ringtail Lemur',
    title: 'Senior Server Engineer',
    duration: 'Nov 2021 – Aug 2023',
    location: 'Bengaluru, India',
    description: [
      'Shipped multi‑threaded and asynchronous improvements that increased robustness and performance.',
      'Strengthened release management by automating steps and tightening pipeline quality gates.',
    ],
    technologies: ['Golang', '.NET', 'Automation', 'CI/CD'],
  },
  {
    id: `shell-sse-${uuidv4()}`,
    company: 'Shell',
    title: 'Senior Software Engineer',
    duration: 'Sep 2020 – Nov 2021',
    location: 'Bengaluru, India',
    description: [
      'Led a 10‑person cross‑functional team (backend, frontend, data, QA) to deliver a secure, large‑scale data product.',
      'Reduced release cadence from multi‑month to monthly by instituting CI/CD and standardising quality bars.',
      'Set clear service boundaries and implementation plans; built Python data tools (Pandas/Databricks) with trading analysts.',
    ],
    technologies: ['C#', 'Golang', 'Python', 'Azure', 'AWS', 'CI/CD', 'Databricks'],
  },
  {
    id: `shell-analyst-${uuidv4()}`,
    company: 'Shell',
    title: 'Technical Analyst',
    duration: 'Aug 2016 – Aug 2020',
    location: 'Bengaluru, India',
    description: [
      'Built and modernised business‑critical applications while ensuring security and quality.',
      'Created and maintained CI/CD/CT pipelines that reduced manual deployment effort.',
    ],
    technologies: ['.NET', 'CI/CD', 'Automation'],
  },
  {
    id: `cognizant-${uuidv4()}`,
    company: 'Cognizant',
    title: 'Associate',
    duration: 'May 2016 – Jun 2016',
    location: 'Kolkata, India',
    description: [
      'Built web front‑end components and Node.js APIs focused on usability and developer productivity.',
    ],
    technologies: ['Node.js', 'Frontend'],
  },
  {
    id: `wipro-${uuidv4()}`,
    company: 'Wipro Limited',
    title: 'Project Engineer / Middleware Analyst / Software Engineer',
    duration: 'Nov 2011 – Apr 2016',
    location: 'Kolkata, India & London, UK',
    description: [
      'Developed and supported .NET applications (WCF, ASP.NET MVC, Entity Framework, Classic ASP, SQL Server).',
      'Moved apps to AWS and automated deployments with Python and PowerShell.',
      'Administered IIS/Windows Server and partnered with business to improve services.',
    ],
    technologies: ['ASP.NET', 'MVC', 'Entity Framework', 'SQL Server', 'Classic ASP', 'IIS', 'Windows Server', 'AWS', 'Python', 'PowerShell'],
  },
];