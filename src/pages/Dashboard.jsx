// src/pages/Dashboard.jsx
import { useState } from "react";
import UserForm from "./UserForm";
import AptitudeTest from "./AptitudeTest";
import CollegeAnalytics from "../components/Charts/CollegeAnalytics";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Dashboard() {
  const [formDone, setFormDone] = useState(false);
  const [testDone, setTestDone] = useState(false);

  const sampleData = [
    { name: "CSE", placements: 120 },
    { name: "ECE", placements: 90 },
    { name: "MECH", placements: 70 },
    { name: "CIVIL", placements: 50 },
  ];

  if (!formDone) return <UserForm onComplete={() => setFormDone(true)} />;
  if (!testDone) return <AptitudeTest onComplete={() => setTestDone(true)} />;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center text-[#bd5e2b]">
        🎓 Personalized Career Counseling Dashboard
      </h1>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Profile Summary */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#bd5e2b] mb-3">Profile</h2>
          <p className="text-gray-300">✔ Education: 12th Pass (Science Stream)</p>
          <p className="text-gray-300">✔ Interests: Technology, Problem Solving</p>
          <p className="text-gray-300">✔ Strength: Logical Reasoning</p>
        </div>

        {/* Aptitude Test Result */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#bd5e2b] mb-3">Aptitude Test Result</h2>
          <p className="text-gray-300 mb-2">Your Score: <span className="font-bold text-[#bd5e2b]">8/10</span></p>
          <p className="text-gray-400">You have strong analytical and logical thinking skills. Good fit for tech-related careers.</p>
        </div>

        {/* Career Counseling */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-md col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-[#bd5e2b] mb-3">Career Counseling</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>💻 If interested in coding → pursue Computer Science or IT.</li>
            <li>⚙️ If problem-solving excites you → try Electronics or Mechanical engineering.</li>
            <li>📊 Interested in data → explore Data Science & AI.</li>
            <li>🔬 Passion for science → research or higher studies after graduation.</li>
          </ul>
        </div>

        {/* Future Roadmap */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#bd5e2b] mb-3">Future Roadmap</h2>
          <ol className="list-decimal pl-5 text-gray-300 space-y-1">
            <li>Complete B.Tech in a chosen stream (State Govt. College)</li>
            <li>Develop strong skills through internships & projects</li>
            <li>Prepare for GATE, CAT, or UPSC (depending on career goals)</li>
            <li>Explore opportunities in Govt./Private sector or Higher Studies</li>
          </ol>
        </div>

        {/* College Suggestions with Placement Records */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#bd5e2b] mb-3">State Govt. College Suggestions</h2>
          <p className="text-gray-400 mb-3">Based on your interest, these colleges have good placements:</p>
          <BarChart width={400} height={250} data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip 
              contentStyle={{ backgroundColor: "#222", color: "#fff" }}
            />
            <Bar dataKey="placements" fill="#bd5e2b" radius={[6, 6, 0, 0]} />
          </BarChart>
        </div>

        {/* College Analytics Component */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-md">
          <CollegeAnalytics />
        </div>

      </div>
    </div>
  );
}
