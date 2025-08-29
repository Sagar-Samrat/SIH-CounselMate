// src/components/UserForm.jsx
import { useState } from "react";

export default function UserForm({ onComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    education: "",
    stream: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(); // unlock aptitude test
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl shadow-lg w-full max-w-4xl"
        style={{ backgroundColor: "#1c1c1c" }}
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          Profile Completion
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#bd5e2b" }}>
              Personal Details
            </h3>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd5e2b] bg-black text-white placeholder-gray-500"
                required
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="18"
                className="w-full border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd5e2b] bg-black text-white placeholder-gray-500"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd5e2b] bg-black text-white placeholder-gray-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd5e2b] bg-black text-white placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* Education Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#bd5e2b" }}>
              Educational Details
            </h3>

            {/* Education Level */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Education Level</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd5e2b] bg-black text-white"
                required
              >
                <option value="">Select</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
              </select>
            </div>

            {/* Stream (only if 12th is selected) */}
            {formData.education === "12th" && (
              <div className="mb-4">
                <label className="block mb-1 text-gray-300">Stream</label>
                <select
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  className="w-full border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd5e2b] bg-black text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full font-semibold py-3 rounded-lg transition text-white hover:opacity-90"
            style={{ backgroundColor: "#bd5e2b" }}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
