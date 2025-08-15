import React from "react";
import "../App.css";
import Layout from "./Layout";

export default function ContactMe() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
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
                    Your Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
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
        </div>
      </section>
    </Layout>
  );
}
