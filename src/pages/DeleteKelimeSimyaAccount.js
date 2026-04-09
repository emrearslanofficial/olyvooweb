import React, { useState } from "react";
import { Helmet } from "react-helmet";

const DeleteKelimeAccount = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-darkBg text-white px-6">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        {/* Başlığı direkt oyun ismi yaptık */}
        <title>Account Deletion - Kelime Simyası</title>
      </Helmet>

      <div className="max-w-md w-full text-center">
        {/* Logolar yan yana ve şık duracak */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <img
            src="/logok.png"
            alt="Kelime Simyası Logo"
            className="w-16 h-16 opacity-100 object-contain shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-bold mb-3">Kelime Simyası: Harf Birleştir Request Account Deletion</h1>
        <p className="text-gray-300 mb-8">
          Please fill out the form below to permanently delete your <strong>Kelime Simyası: Harf Birleştir</strong> account and all related data.  
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
              Your account deletion request for <strong>Kelime Simyası</strong> has been recorded.  
              Our team will process it within 30 days.
            </p>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-gray-500 text-xs mb-4">
            This page is provided to comply with Google Play’s Account Deletion Policy.
          </p>
          
          <p className="text-sm font-bold text-white/80">Developed by Emmedya</p>
          
          <div className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest">
            Managed Applications:
            <div className="mt-1 font-medium">
              Kelime Simyası: Harf Birleştir | Olyvoo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteKelimeAccount;