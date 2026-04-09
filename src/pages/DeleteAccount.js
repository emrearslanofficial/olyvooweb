import React, { useState } from "react";
import { Helmet } from "react-helmet";

const DeleteAccount = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-darkBg text-white px-6">
      {/* 🧠 Noindex meta tag for Google Search */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Account Deletion - Your Account</title>
      </Helmet>

      <div className="max-w-md w-full text-center">
        <div className="flex justify-center items-center gap-6 mb-8">
    <img
      src="/logo.png"
      alt="Olyvoo Logo"
      className="w-14 h-14 opacity-90 object-contain"
    />
    <img
      src="/logok.png"
      alt="Kelime Simyası Logo"
      className="w-14 h-14 opacity-90 object-contain"
    />
  </div>

        <h1 className="text-3xl font-bold mb-3">Request Account Deletion</h1>
        <p className="text-gray-300 mb-8">
          Please fill out the form below to permanently delete your Olyvoo and Kelime Simyası: Harf Birleştir account and all related data.  
          Make sure to use the same email address linked to your account.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 text-left"
          >
            <div>
              <label className="block text-sm mb-1 text-gray-300">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-darkBg border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-olyvooBlue"
                placeholder="youremail@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Additional Message (optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-darkBg border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-olyvooBlue"
                placeholder="Write your message..."
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-olyvooPurple to-olyvooBlue text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Submit Request
            </button>
          </form>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Request Received ✅
            </h2>
            <p className="text-gray-300">
              Your account deletion request has been recorded.  
              Our team will process it within 30 days.
            </p>
          </div>
        )}

        <p className="mt-10 text-gray-500 text-sm">
          This page is provided to comply with Google Play’s Account Deletion Policy.
        </p>

        <b>
          Developed by Emmedya
        </b>
        <b>
        <p>
          <br/>
          Kelime Simyası: Harf Birleştir
          <br/>
          Olyvoo
        </p>
        </b>

      </div>
    </section>
  );
};

export default DeleteAccount;
