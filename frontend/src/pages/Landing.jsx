import { useEffect, useState } from "react";
import api from "../api/api";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";

export default function Landing() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/projects").then((res) => setProjects(res.data));
    api.get("/clients").then((res) => setClients(res.data));
  }, []);

  return (
    <div id="home" className="min-h-screen bg-white">
      <section className="relative w-full h-[550px] md:h-[650px] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right md:bg-center"
          style={{
            backgroundImage:
              "url('https://carajput.com/services/images/being-consultant.jpg')",
            filter: "brightness(0.9)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent md:from-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Consultation, <br />
              Design, <br />
              <span className="text-white">& Marketing</span>
            </h1>
          </div>

          <div className="w-full md:w-[400px] lg:mr-10">
            <div className="bg-[#1a2b56]/95 backdrop-blur-sm p-8 rounded-sm shadow-2xl text-white">
              <h2 className="text-2xl font-semibold text-center mb-6 leading-snug">
                Get a Free <br /> Consultation
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b56]">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Learn more about our listing process, as well as our additional
              staging and design work. We ensure your property stands out in the
              market through expert consultation and professional marketing
              strategies. [cite: 119, 120]
            </p>
          </div>

          <div className="flex-1 relative flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full border-8 border-white shadow-lg overflow-hidden z-20">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400"
                  alt="Work 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-8 border-white shadow-xl overflow-hidden z-10">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
                  alt="Work 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-10 w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-white text-center px-6 border-t border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-2 text-[#1a2b56]">
          Why Choose Us?
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Potential ROI</h3>
            <p className="text-gray-500 text-sm">
              Whether you are looking to buy a new home or renovate your current
              home.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-gray-500 text-sm">
              Our highly-qualified interior design makes the process guide
              through your design options.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Marketing</h3>
            <p className="text-gray-500 text-sm">
              Highly professional and sophisticated digital marketing plan for
              every property.
            </p>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-20 bg-white px-6">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 mb-16 relative">
            <div className="w-40 h-56 rounded-sm overflow-hidden shadow-md translate-y-8 border-l-4 border-orange-500">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
                alt="Team 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 z-0"></div>
              <div className="w-64 h-80 rounded-sm overflow-hidden shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-blue-600 z-0"></div>
            </div>

            <div className="w-48 h-64 rounded-sm overflow-hidden shadow-md -translate-y-4 border-r-4 border-orange-400">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                alt="Team 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-[#1a2b56] relative inline-block">
              About Us
              <div className="w-12 h-1 bg-blue-600 mx-auto mt-2"></div>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Fifteen years of experience in real estate, excellent customer
              service and a commitment to work hard, listen and follow through.
              We provide quality service to build relationships with clients
              and, more importantly, maintain those relationships by
              communicating effectively.
            </p>

            <button className="border-2 border-[#1a2b56] text-[#1a2b56] px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#1a2b56] hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest text-[#1a2b56]">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12 text-[#1a2b56]">
            Happy Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((c) => (
              <ClientCard key={c._id} client={c} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
