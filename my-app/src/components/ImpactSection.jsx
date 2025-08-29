// components/ImpactSection.jsx
import React from "react";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#1a1a1a] px-6 py-12"
    >
      {/* Headline & Intro */}
      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-[#bd5e2b] mb-6">
          Impact of CounselMate
        </h2>
        <p className="text-lg md:text-xl text-[#ffffffcc] leading-relaxed">
          CounselMate is transforming how students plan their careers. With the right mentorship, personalized roadmaps, and motivational guidance, students unlock opportunities and step confidently into their future.
        </p>
      </div>

      {/* How We Help Cards */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center gap-8 mb-16">
        {/* Card 1 */}
        <div className="flex-1 bg-[#181818] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <svg width="48" height="48" fill="#bd5e2b" className="mb-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          <h3 className="text-xl font-bold text-[#bd5e2b] mb-2">Review Your Options</h3>
          <p className="text-[#ffffffcc]">We help you evaluate career paths and opportunities for maximum impact.</p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-[#181818] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <svg width="48" height="48" fill="#bd5e2b" className="mb-4" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
          <h3 className="text-xl font-bold text-[#bd5e2b] mb-2">Make Introductions</h3>
          <p className="text-[#ffffffcc]">We connect you to mentors, experts, and hiring managers in your field.</p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-[#181818] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <svg width="48" height="48" fill="#bd5e2b" className="mb-4" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" /></svg>
          <h3 className="text-xl font-bold text-[#bd5e2b] mb-2">Suggest Next Steps</h3>
          <p className="text-[#ffffffcc]">We guide you on practical next steps to achieve your career goals.</p>
        </div>
      </div>

      {/* Logos of IITs, NITs, and Govt Colleges (local files) */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center items-center gap-8 mb-16">
        {/* IIT Bombay */}
        <div className="bg-[#222] rounded-lg p-4 flex items-center justify-center w-32 h-16">
          <img src="/logo/IIT_Bombay.png" alt="IIT Bombay" className="h-12" />
        </div>
        {/* IIT Kharagpur */}
        <div className="bg-[#222] rounded-lg p-4 flex items-center justify-center w-392 h-16">
          <img src="/logo/IIT_Kharagpur.png" alt="IIT Kharagpur" className="h-12" />
        </div>
        {/* NIT Trichy */}
        <div className="bg-[#222] rounded-lg p-4 flex items-center justify-center w-32 h-16">
          <img src="/logo/NIT_Trichy.png" alt="NIT Trichy" className="h-12" />
        </div>
        {/* IISc Bangalore */}
        <div className="bg-[#222] rounded-lg p-4 flex items-center justify-center w-32 h-16">
          <img src="/logo/IISc_Bangalore.png" alt="IISc Bangalore" className="h-12" />
        </div>
        {/* NIT Surathkal */}
        <div className="bg-[#222] rounded-lg p-4 flex items-center justify-center w-32 h-16">
          <img src="/logo/NITK_Surathkal.png" alt="NIT Surathkal" className="h-12" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 mb-8">
        {/* Testimonial 1 */}
        <div className="bg-[#181818] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-20 h-20 rounded-full mb-4" />
          <p className="text-[#ffffffcc] italic mb-2">“CounselMate helped me discover my true passion and guided me to a fulfilling career.”</p>
          <span className="text-[#bd5e2b] font-bold">Amit Sharma</span>
          <span className="text-[#ffffff99] text-sm">Software Engineer, DummyCorp</span>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-[#181818] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar" className="w-20 h-20 rounded-full mb-4" />
          <p className="text-[#ffffffcc] italic mb-2">“The mentorship and support I received was life-changing. Highly recommended!”</p>
          <span className="text-[#bd5e2b] font-bold">Priya Verma</span>
          <span className="text-[#ffffff99] text-sm">Student, Dummy University</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl text-center mt-8">
        <h3 className="text-2xl font-bold text-[#bd5e2b] mb-4">Ready to make an impact?</h3>
        <p className="text-lg text-[#ffffffcc] mb-6">Join thousands of students who have transformed their careers with CounselMate.</p>
        <button className="bg-[#bd5e2b] text-white font-bold py-3 px-8 rounded-full hover:bg-[#a34c1f] transition">Get Started</button>
      </div>
    </section>
  );
}
