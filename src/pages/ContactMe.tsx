import React from "react";
import "../App.css";
import Layout from "./Layout";

export default function ContactMe() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name');
    const message = formData.get('message');

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  }

  return (
    <Layout>
      <section className="body-font relative text-text-light dark:text-text-dark font-FigTree">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-text-light dark:text-text-dark sm:text-3xl">
              Contact Me
            </h1>
            <p className="mx-auto leading-relaxed lg:w-2/3">
              Got a question, a project idea, or just want to say hello? Feel free to reach out!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-full p-2">
                <div className="relative">
                  <label htmlFor="name" className="text-sm leading-7 text-text-light dark:text-text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    name="name"
                    className="w-full rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-base leading-8 text-text-light dark:text-text-dark outline-none transition-colors duration-200 ease-in-out focus:border-primary dark:focus:border-primary"
                  />
                </div>

              </div>
              <div className="w-full p-2">

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-text-light dark:text-text-dark"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    className="h-32 w-full resize-none rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-base leading-6 text-text-light dark:text-text-dark outline-none transition-colors duration-200 ease-in-out focus:border-primary dark:focus:border-primary"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="rounded border-0 bg-primary px-6 py-2 text-lg text-text-dark focus:outline-none hover:bg-primary-dark"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
              {/* Address section removed */}
          </div>
           <div className="mt-8 w-full border-t border-gray-200 dark:border-gray-700 p-2 pt-8 text-center" style={{ display: 'none' }}>
                <a className="text-primary hover:text-primary/90 dark:hover:text-primary/80" href="mailto:benjaminmishra@gmail.com">
                  benjaminmishra@gmail.com
                </a>
                <span className="inline-flex">
                  <a href="https://www.facebook.com" className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.twitter.com" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com" className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a href="https://www.google.com" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              </section>
    </Layout>
    );
}
