import React from "react";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  const lastUpdated = "October 24, 2025";

  const sections = [
    {
      id: "collection",
      title: "1. Information Collection",
      content:
        "We collect information you provide directly to us when you create an account, apply for a scholarship, or communicate with us. This includes your name, email address, educational background, and any documents uploaded for scholarship applications.",
    },
    {
      id: "usage",
      title: "2. How We Use Data",
      content:
        "ScholarStream uses your data to facilitate scholarship applications, process payments securely via third-party providers, and provide personalized university recommendations. We do not sell your personal data to advertisers.",
    },
    {
      id: "security",
      title: "3. Data Security",
      content:
        "We implement industry-standard security measures including SSL encryption and secure database hashing to protect your sensitive information. However, no method of transmission over the internet is 100% secure.",
    },
    {
      id: "cookies",
      title: "4. Cookies Policy",
      content:
        "We use cookies to maintain your session and remember your preferences (such as Dark Mode). You can disable cookies in your browser settings, but some features of the site may function improperly.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* Hero Header Section */}
      <div className="bg-base-200 py-16 px-4 border-b border-base-300">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="opacity-70 text-lg">
            Your trust is our priority. Learn how we handle your data at
            ScholarStream.
          </p>
          <div className="badge badge-outline mt-4 opacity-50">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation (Hidden on Mobile) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 ml-4">
                Contents
              </h3>
              <ul className="menu bg-base-200 rounded-2xl p-2 border border-base-300">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-primary transition-all"
                    >
                      {section.title.split(".")[1]}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <p className="text-xs font-semibold text-primary">Need help?</p>
                <p className="text-xs opacity-70 mt-1">
                  Contact our privacy team at support@scholarstream.com
                </p>
              </div>
            </div>
          </aside>

          {/* Main Policy Content */}
          <main className="flex-1 space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full"></span>
                  {section.title}
                </h2>
                <div className="bg-base-200/50 p-6 rounded-2xl border border-base-300 leading-relaxed opacity-90 shadow-sm">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Final Note */}
            <div className="divider"></div>
            <div className="card bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">
                  Questions about your data?
                </h2>
                <p className="opacity-90">
                  We are happy to help you understand your rights and how we
                  protect them.
                </p>
                <div className="card-actions mt-4">
                  <Link
                    to="/contact"
                    className="btn btn-white bg-white text-blue-600 border-none hover:bg-gray-100"
                  >
                    Contact Privacy Officer
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
