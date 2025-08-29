// components/HelpSection.jsx
import React, { useEffect } from "react";

export default function HelpSection() {
  // Kommunicate Chatbot Integration
  useEffect(() => {
    if (window.kommunicate) return; // Prevent duplicate script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    script.onload = () => {
      window.kommunicate = window.kommunicate || {};
      window.kommunicate._globals = {
        appId: "29e2ba8c63d25a8d2359714df66b1762a", // <-- User's Kommunicate App ID
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
    };
    document.body.appendChild(script);
  }, []);
  return (
    <section
      id="help"
      className="min-h-screen flex items-center justify-center bg-black px-6"
    >
      <div className="w-full max-w-7xl flex bg-black rounded-xl shadow-lg overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Left Side - Google Form Only */}
        <div className="w-2/5 bg-[#181818] p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-[#bd5e2b] mb-4">Fill Your Details</h2>
          <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-[#181818] p-6">
            <form className="flex flex-col gap-4">
              <label className="text-[#bd5e2b] font-semibold">Name
                <input type="text" name="name" className="mt-1 w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#bd5e2b]" placeholder="Enter your name" required />
              </label>
              <label className="text-[#bd5e2b] font-semibold">Email
                <input type="email" name="email" className="mt-1 w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#bd5e2b]" placeholder="Enter your email" required />
              </label>
              <label className="text-[#bd5e2b] font-semibold">Message
                <textarea name="message" rows="4" className="mt-1 w-full p-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#bd5e2b]" placeholder="Type your message" required></textarea>
              </label>
              <button type="submit" className="mt-2 bg-[#bd5e2b] text-white font-bold py-2 px-4 rounded hover:bg-[#a34c1f] transition">Send</button>
            </form>
          </div>
        </div>
        {/* Right Side - Contact Details (Top) & AI Chatbot (Bottom) */}
        <div className="w-3/5 flex flex-col justify-between bg-black">
          {/* Top Right - Contact Details */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center border-b border-[#222]">
            <h2 className="text-3xl font-bold text-[#bd5e2b] mb-4">Contact Us</h2>
            <p className="mb-2 text-[#ffffffcc]">Email: <span className="text-white">dummyemail@gmail.com</span></p>
            <p className="mb-2 text-[#ffffffcc]">Phone: <span className="text-white">+91 12345 67890</span></p>
            <p className="mb-2 text-[#ffffffcc]">Support: <span className="text-white">support@counselmate.com</span></p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#bd5e2b] mb-2">Other Help Info</h3>
              <ul className="list-disc list-inside text-white">
                <li>FAQs</li>
                <li>Live Chat</li>
                <li>Community Forum</li>
              </ul>
            </div>
          </div>
          {/* Bottom Right - AI Chatbot */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-[#bd5e2b] mb-4">AI Chatbot</h2>
            <div className="w-full max-w-xl rounded-lg shadow-md bg-[#181818] p-6 flex flex-col items-center">
              <p className="text-white mb-2">Ask your questions here!</p>
              <div className="w-full h-32 bg-[#222] rounded-lg flex items-center justify-center text-[#bd5e2b]">
                {/* Kommunicate widget will appear as a floating chat icon */}
                <span>Chatbot is active! Click the chat icon at the bottom right.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
