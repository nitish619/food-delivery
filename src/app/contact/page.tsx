"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [toast, setToast] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToast("Thank you! Your message has been sent.");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setToast(""), 3000);
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero header */}
      <div className="bg-[url('/your-hero-image.jpg')] bg-cover py-16 flex items-center justify-center">
        <div className="bg-white/80 p-8 rounded-xl shadow-lg max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-2">Contact Bella Onoje</h2>
          <p className="mb-4 text-gray-700">
            We&apos;re here to help you with orders, feedback, or partnership
            inquiries.
          </p>
        </div>
      </div>
      {/* Contact Card */}
      <main className="p-6 flex justify-center">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
              className="border border-primary rounded-lg w-full px-4 py-2 focus:outline-none focus:border-primary"
            />
            <input
              name="email"
              value={formState.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
              className="border border-primary rounded-lg w-full px-4 py-2 focus:outline-none focus:border-primary"
            />
            <input
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              required
              className="border border-primary rounded-lg w-full px-4 py-2 focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="border border-primary rounded-lg w-full px-4 py-2 focus:outline-none focus:border-primary"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-primary hover:bg-orange-700 text-white font-semibold py-2 rounded-lg w-full transition"
            >
              Send Message
            </button>
          </form>

          {/* Toast */}
          {toast && (
            <div className="mt-4 p-3 bg-orange-100 text-primary rounded-lg text-center shadow">
              {toast}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
