import React from "react";
import Layout from "./Layout";

const CONTACT_EMAIL = "contact@benjaminmishra.dev";

export default function ContactMe() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <Layout>
      <section className="section-shell">
        <div className="site-container">
          <div className="section-header">
            <span className="pill">Contact</span>
            <h1 className="section-title">Start a conversation.</h1>
            <p className="section-copy">
              For platform work, architecture discussions, leadership roles, or consulting, send a note.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="surface-card mx-auto max-w-3xl">
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input id="name" type="text" name="name" className="text-input" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input id="email" type="email" name="email" className="text-input" required />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea id="message" name="message" className="text-input min-h-[10rem] resize-y" required />
              </div>
              <div>
                <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                  This opens your default email app and drafts a message to {CONTACT_EMAIL}.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
