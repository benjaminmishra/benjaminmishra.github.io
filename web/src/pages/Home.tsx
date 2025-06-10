import React from "react";
import Hero from "../components/Hero";
import Layout from "./Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <section className="skills-summary px-6 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Senior engineer with experience in leading cross-functional agile teams to develop, launch, and maintain high-quality, secure products. I have multi-year experience working hands-on with a wide range of technologies across the stack, focusing on solving problems, delivering value for stakeholders, and ensuring maintainability and security.
          </p>
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">Core Competencies</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <li>System Design and Architecture</li>
            <li>CI/CD</li>
            <li>Infrastructure Management</li>
            <li>QA Automation</li>
            <li>Distributed Systems</li>
            <li>Application Lifecycle Management</li>
            <li>Technical Leadership</li>
          </ul>
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mt-10 mb-6">Languages & Frameworks</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <li>Golang</li>
            <li>C#, .NET</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>PostgreSQL, SQL Server</li>
            <li>Azure, AWS</li>
            <li>Docker</li>
            <li>RabbitMQ</li>
            <li>gRPC</li>
            <li>RESTful APIs</li>
            <li>Azure DevOps (CI/CD Pipelines)</li>
            <li>Terraform</li>
          </ul>
        </section>
      </Layout>
    </div>
  );
}
