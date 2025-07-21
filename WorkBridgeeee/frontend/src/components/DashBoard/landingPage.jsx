import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Landing = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleLogin = () => navigate('/login');

  const features = [
    { title: "Task Assignment", desc: "Admins can assign tasks to employees with due dates and priority." },
    { title: "Employee Task Dashboard", desc: "Employees can view their assigned tasks and update their progress." },
    { title: "Employee Records", desc: "Easily manage employee details and documents." },
    { title: "Leave Management", desc: "Track and approve leave requests seamlessly." },
    { title: "Payroll Automation", desc: "Automate salaries, bonuses, and tax deductions." },
    { title: "Role-based Access", desc: "Separate views for Admins, Managers, and Employees." },
  ];

  const testimonials = [
    { name: "Amit Shah", role: "HR Manager, TechNova", text: "WorkBridge made our HR tasks smooth and organized." },
    { name: "Priya Mehra", role: "CEO, FinCube", text: "Clear UI, fast payroll, and peace of mind." },
    { name: "Rahul Verma", role: "Ops Head, QuickLogix", text: "Best decision this year. Truly time-saving!" },
    { name: "Sneha Kapoor", role: "HR Consultant", text: "My top recommendation for HR tech." },
    { name: "Deepak Rana", role: "CTO, ByteForge", text: "Secure and scalable. A modern HR tool." },
    { name: "Neha Joshi", role: "Manager, SoftSprint", text: "All-in-one HR solution. Impressive!" },
    { name: "Sarthak Jain", role: "Admin, RecruitPro", text: "Excellent leave and performance tracking." },
    { name: "Meenal Bhatt", role: "Director, Innovent", text: "Well-designed platform with robust features." },
    { name: "Varun Patel", role: "Lead HR, CoreTech", text: "Made onboarding smooth and easy." },
    { name: "Ayesha Khan", role: "Founder, TeamSwift", text: "Affordable and highly efficient HR system." },
  ];

  const nextTestimonial = () => setCurrent((prev) => (prev + 2) % testimonials.length);
  const prevTestimonial = () => setCurrent((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-slate-900 text-gray-100 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-slate-800 shadow">
        <h1 className="text-2xl font-bold text-white">WorkBridge</h1>
        <nav className="space-x-6 text-gray-300">
          <button className="hover:text-white">Home</button>
          <button className="hover:text-white">Features</button>
          <button className="hover:text-white">About</button>
          <button className="hover:text-white">Contact</button>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition"
          >
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
<section className="py-20 bg-slate-800 text-white text-center px-6">
  <h2 className="text-5xl font-bold mb-4">Empower Your Team</h2>
  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
    WorkBridge streamlines recruitment, task assignment, payroll, and employee management — all in one modern platform.
  </p>
  {/* Highlights */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 mb-8">
    <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-400 mb-2">Task Management</h4>
      <p className="text-gray-300">Assign, track, and complete tasks across departments easily.</p>
    </div>
    <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-400 mb-2">Automated Payroll</h4>
      <p className="text-gray-300">Handle salaries, deductions, and payslips without manual effort.</p>
    </div>
    <div className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-400 mb-2">Centralized Records</h4>
      <p className="text-gray-300">Access all employee data from one secure dashboard.</p>
    </div>
  </div>

  <button
    onClick={handleLogin}
    className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
  >
    Get Started
  </button>
</section>


      {/* Features */}
      <section className="py-16 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl text-left shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Manual Slider (2 at a time) */}
      <section className="py-16 px-6 bg-slate-800 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[testimonials[current], testimonials[(current + 1) % testimonials.length]].map((t, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-xl text-left shadow hover:shadow-lg transition"
              >
                <p className="text-gray-300 italic mb-4">"{t.text}"</p>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 text-white"
            >
              ⬅ Prev
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 text-white"
            >
              Next ➡
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">About WorkBridge</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          WorkBridge is a modern HR management platform tailored for growing companies. We help HR teams eliminate paperwork,
          streamline communication, and automate repetitive tasks — freeing time to focus on people.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your HR workflow?</h2>
        <p className="mb-6 text-lg">Join hundreds of companies using WorkBridge to manage their workforce efficiently.</p>
        <button
          onClick={handleLogin}
          className="bg-white    text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Try It Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">WorkBridge</h3>
            <p className="text-sm">
              Your complete HR automation solution. Handle records, payroll, and recruitment with ease.
            </p>
            <div className="flex space-x-4 mt-4">
              <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white" />
              <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white" />
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> support@workbridge.com</p>
            <p className="text-sm mt-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9876543210</p>
            <p className="text-sm mt-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Noida, India</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} WorkBridge. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
export default Landing;
