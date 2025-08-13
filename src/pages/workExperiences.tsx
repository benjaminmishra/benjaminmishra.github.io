// Define Benjamin's real work experiences. Each entry includes an array
// of achievements to be rendered as bullet points and an optional list
// of technologies to be displayed as tags.
export const workExperiences = [
  {
    company: "Avalanche Studios",
    title: "Senior Backend Engineer",
    duration: "Jan 2025 – Present",
    description: [
      "Architected and implemented a live operations platform and scalable services for an upcoming AAA game.",
      "Collaborated across teams and the publisher to design services achieving 99.9% availability.",
      "Ensured smooth translation of the game vision into working solutions.",
      "Managed deployments and infrastructure such as AKS, App Service and KeyVault for backend services.",
    ],
    technologies: ["C#", ".NET", "Golang", "Azure", "AKS", "App Service", "KeyVault", "Distributed Systems", "CI/CD"],
  },
  {
    company: "Ringtail Technology",
    title: "Senior Software Engineer",
    duration: "Nov 2021 – Dec 2024",
    description: [
      "Designed and implemented features allowing the game server platform to scale and be fault tolerant.",
      "Built a CI/CD system from scratch enabling game developers to deploy their games as part of the product offering.",
      "Collaborated across teams to define requirements and implement product features.",
      "Improved release management by automating steps and implementing CI/CD pipelines on Azure DevOps.",
      "Instrumented .NET and Golang services with OpenTelemetry, exporting data to Grafana and Jaeger.",
    ],
    technologies: ["Golang", ".NET", "OpenTelemetry", "Grafana", "Jaeger", "CI/CD", "Azure DevOps"],
  },
  {
    company: "Shell",
    title: "Senior Software Engineer",
    duration: "Aug 2016 – Nov 2021",
    description: [
      "Led a team of 10 engineers (backend, frontend, data engineers and testers) to build large-scale data systems with quality and security focus.",
      "Reduced release cycles from multiple months to once a month by planning and implementing CI/CD pipelines and Infrastructure as Code using Terraform on Azure and AWS.",
      "Developed and deployed statistical models with Pandas and Databricks; implemented QA automation using Selenium and Python.",
      "Designed and developed both microservices and monolithic applications using C#, Golang, Python, NodeJs and React.",
      "Designed RESTful public and private APIs, maintained infrastructure and CI/CD/CT pipelines, and mentored junior developers.",
    ],
    technologies: ["C#", "Golang", "Python", "NodeJs", "React", "Azure", "AWS", "Terraform", "Selenium", "CI/CD", "Databricks"],
  },
  {
    company: "Wipro",
    title: "Project Engineer",
    duration: "Nov 2011 – Apr 2016",
    description: [
      "Developed and supported web applications using WCF, ASP.NET MVC, SQL Server and Classic ASP.",
      "Maintained and provided production support for approximately 40 web applications based on Microsoft technologies.",
      "Set up and administered IIS Web Server and Windows Server environments.",
      "Worked closely with client businesses to identify areas of service improvement.",
      "Focused on front-end development using HTML5, CSS, Bootstrap4 and Angular, and built Web APIs using NodeJs and ExpressJs running in Docker.",
    ],
    technologies: ["ASP.NET", "MVC", "SQL Server", "Classic ASP", "IIS", "Windows Server", "HTML5", "CSS", "Bootstrap", "Angular", "NodeJs", "ExpressJs", "Docker"],
  },
];
