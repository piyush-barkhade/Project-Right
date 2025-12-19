import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs uppercase tracking-[0.2em]">
          © All Rights Reserved 2025
        </p>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">PR</span>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Project <span className="font-normal text-gray-400">Right</span>
          </span>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1e88e5] transition-all duration-300 group border border-transparent hover:border-white/20"
                aria-label={social.name}
              >
                <Icon
                  size={14}
                  className="text-white group-hover:scale-110 transition-transform"
                  strokeWidth={2.5}
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
