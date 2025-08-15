import React from "react";
import Hero from "../components/Hero";
import Layout from "./Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <section className="px-6 py-16 bg-gray-50 dark:bg-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 mx-auto max-w-3xl">
              Staff‑level engineer with 13+ years’ experience building large‑scale, high‑availability platforms in gaming,
              energy and enterprise domains. I lead cross‑functional teams of 10+, drive release cycles from quarterly to
              monthly, and design systems to meet 99.9 % uptime while mentoring engineers and collaborating closely with
              stakeholders.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mx-auto">
              {/* Core competencies card */}
              <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Core Strengths
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-left">
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    People leadership &amp; mentoring
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Technical strategy &amp; trade‑offs
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Cross‑team delivery
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Architecture &amp; SDLC/DevOps
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Quality &amp; reliability
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Stakeholder management
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Technology Stack
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Backend</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['C#/.NET Core', 'Golang', 'Node.js/Express', 'Python/FastAPI', 'ASP.NET'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Front End</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['TypeScript', 'React', 'HTML5', 'CSS'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Data &amp; Storage</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['SQL Server', 'PostgreSQL', 'Redis', 'ETCD'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Real‑time &amp; Messaging</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['RabbitMQ', 'gRPC', 'RESTful APIs'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Cloud &amp; DevOps</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['Azure', 'AKS', 'App Service', 'Key Vault', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Tools &amp; Practices</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['Tracing & dashboards', 'TDD', 'Domain‑Driven Design', 'Agile/Scrum', 'Code Reviews'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </div>
  );
}
