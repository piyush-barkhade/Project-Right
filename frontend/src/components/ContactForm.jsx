import { useState } from "react";
import api from "../api/api";

export default function ContactForm() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contacts", data);
      alert("Quote Request Sent!");
      setData({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-[#1a2b56]/90 p-8 rounded-sm shadow-2xl text-white"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Get a Free <br /> Consultation
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full bg-white/10 border border-white/30 p-3 rounded focus:outline-none focus:border-orange-500 placeholder-gray-300"
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
          required
        />
        <input
          className="w-full bg-white/10 border border-white/30 p-3 rounded focus:outline-none focus:border-orange-500 placeholder-gray-300"
          type="email"
          placeholder="Enter Email Address"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          className="w-full bg-white/10 border border-white/30 p-3 rounded focus:outline-none focus:border-orange-500 placeholder-gray-300"
          placeholder="Mobile Number"
          value={data.mobile}
          onChange={(e) => setData({ ...data, mobile: e.target.value })}
          required
        />
        <input
          className="w-full bg-white/10 border border-white/30 p-3 rounded focus:outline-none focus:border-orange-500 placeholder-gray-300"
          placeholder="Area, City"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold py-3 px-6 uppercase tracking-wider transition duration-300"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
}
