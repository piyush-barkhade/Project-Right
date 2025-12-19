import { useState } from "react";
import api from "../api/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email address!");

    try {
      await api.post("/subscribers/subscribe", { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      alert("Subscription failed.");
    }
  };

  return (
    <div className="w-full">
      <section
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            Learn more about our listing process, as well as our{" "}
            <br className="hidden md:block" />
            additional staging and design work.
          </h2>
          <button className="bg-white text-gray-800 px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </section>

      <div className="bg-[#1e88e5] py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-white text-sm font-semibold uppercase">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact-form">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white font-bold uppercase text-sm">
            Subscribe Us
          </span>
          <form
            onSubmit={handleSubscribe}
            className="flex bg-white rounded-sm overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 text-sm outline-none text-gray-700 w-48 md:w-64"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white text-[#1a2b56] px-4 py-2 text-xs font-bold uppercase border-l border-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
