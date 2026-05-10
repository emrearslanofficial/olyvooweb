import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
      <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-olyvooPurple to-olyvooBlue inline-block" />
      {title}
    </h2>
    <div className="text-gray-400 leading-relaxed space-y-2 text-sm">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-darkBg text-white px-6 py-16">
      <Helmet>
        <title>Privacy Policy – Olyvoo</title>
        <meta
          name="description"
          content="Privacy Policy for Olyvoo and Kelime Simyası apps. Learn how we collect and use your personal data."
        />
      </Helmet>

      {/* Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center items-start pt-32">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-olyvooPurple to-olyvooBlue rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-10 transition"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <img src="/logo.png" alt="Olyvoo Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
        <div className="flex items-center gap-2 mb-10 text-gray-500 text-sm">
          <ShieldCheck size={15} />
          <span>Last updated: May 10, 2025</span>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            This Privacy Policy describes how Emmedya collects, uses, and protects user data within the{" "}
            <strong className="text-white">Olyvoo</strong> and{" "}
            <strong className="text-white">Kelime Simyası: Harf Birleştir</strong> applications. By using our
            applications, you agree to the terms described in this policy.
          </p>

          <Section title="Information We Collect">
            <p>Our applications may collect the following types of data:</p>
            <ul className="list-disc ml-5 space-y-1 mt-2">
              <li>Email address (when signing in via Google Sign-In)</li>
              <li>Display name and profile photo (retrieved from your Google account)</li>
              <li>In-app game progress and statistics</li>
              <li>In-app purchase history</li>
              <li>Device information and app usage data (for analytics purposes)</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc ml-5 space-y-1">
              <li>Creating and managing your account</li>
              <li>Securely storing and synchronizing your game progress</li>
              <li>Processing in-app purchase transactions</li>
              <li>Improving app performance and user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>Our applications use the following third-party services:</p>
            <ul className="list-disc ml-5 space-y-1 mt-2">
              <li>
                <strong className="text-white">Google Firebase</strong> – authentication, database, and analytics
              </li>
              <li>
                <strong className="text-white">Google AdMob</strong> – ad delivery (optional, based on user
                preference)
              </li>
              <li>
                <strong className="text-white">Google Play Billing</strong> – in-app purchases
              </li>
            </ul>
            <p className="mt-2">
              These services operate under their own privacy policies. For more details, please review the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olyvooBlue hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              Your data is stored in encrypted form on Google Firebase's secure infrastructure. Reasonable technical
              measures are in place to protect against unauthorized access, modification, or disclosure. However, no
              electronic transmission method or storage system is 100% secure.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our applications are not directed at children under the age of 13. We do not knowingly collect
              personal data from children under 13. If we become aware that such data has been collected, it will
              be deleted immediately.
            </p>
          </Section>

          <Section title="Account & Data Deletion">
            <p>
              You may request the deletion of all data associated with your account using the pages below:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                to="/delete-account"
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm px-4 py-2 rounded-lg transition"
              >
                Delete Olyvoo Account
              </Link>
              <Link
                to="/delete-kelime-account"
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm px-4 py-2 rounded-lg transition"
              >
                Delete Kelime Simyası Account
              </Link>
            </div>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When significant changes are made, the "Last
              updated" date at the top of this page will be revised. Continued use of the application after changes
              constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions about this Privacy Policy, please reach out to us:</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:support@olyvoo.com"
                className="text-olyvooBlue hover:underline"
              >
                support@olyvoo.com
              </a>
            </p>
            <p className="mt-1">
              <strong className="text-white">Developer:</strong> Emmedya
            </p>
          </Section>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          © {new Date().getFullYear()} Olyvoo · Developed by Emmedya
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
