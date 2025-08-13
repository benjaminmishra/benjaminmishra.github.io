import React from "react";
import Hero from "../components/Hero";
import Layout from "./Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <section className="px-6 py-20 bg-gray-50 dark:bg-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 mx-auto max-w-3xl">
              Senior engineer with multi‑year experience leading cross‑functional agile teams to design,
              build and operate scalable backend and distributed systems. I focus on solving problems,
              delivering value for stakeholders and ensuring maintainability, performance and security.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mx-auto">
              {/* Core competencies card */}
              <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Core Competencies
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-left">
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    System Design &amp; Architecture
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    CI/CD &amp; DevOps
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Infrastructure &amp; Cloud Management
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    QA Automation &amp; Observability
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Distributed Systems
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Application Lifecycle Management
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                    Technical Leadership
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
                      {['Golang', 'C#/.NET', 'Python', 'Node.js/Express.js'].map((item) => (
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
                      {['TypeScript', 'React', 'Angular', 'HTML5', 'CSS', 'Bootstrap'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Databases</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['PostgreSQL', 'SQL Server'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Message Queues</h4>
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
                      {['Azure', 'AWS', 'Docker', 'Kubernetes', 'Azure DevOps', 'Terraform', 'CI/CD Pipelines'].map((item) => (
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
