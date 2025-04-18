"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookText, School } from "lucide-react";
import ButtonLink from "./reUsed/CustomLink";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Social links for the main footer
  const socialLinks = [
    {
      name: "Contact Support",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:support@college-management.edu"
    },
    {
      name: "Documentation",
      icon: <BookText className="w-5 h-5" />,
      href: "/docs"
    },
    {
      name: "Academic Resources",
      icon: <School className="w-5 h-5" />,
      href: "/resources"
    }
  ];

  // Developer team members
  const developers = [
    {
      name: "Mahmoud Matter",
      role: "Frontend Developer",
      github: "https://github.com/mahmoudmatter",
      linkedin: "https://linkedin.com/in/mahmoudmatter"
    },
    {
      name: "Banan Walel",
      role: "Frontend Developer",
      github: "https://github.com/backend-dev",
      linkedin: "https://linkedin.com/in/backend-dev"
    },
    {
      name: "Ahmed Khairy",
      role: "Backend Developer",
      github: "https://github.com/frontend-dev",
      linkedin: "https://linkedin.com/in/frontend-dev"
    },
    {
      name: "Hanan Fathy",
      role: "Backend Developer",
      github: "https://github.com/frontend-dev",
      linkedin: "https://linkedin.com/in/frontend-dev"
    },
    {
      name: "Mohamed Ibrahim",
      role: "Backend Developer",
      github: "https://github.com/frontend-dev",
      linkedin: "https://linkedin.com/in/frontend-dev"
    }
  ];

  return (
    <footer className="relative border-t border-gray-800 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                College Management System
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Streamlining academic administration for institutions, faculty, and students with cutting-edge technology.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-sky-500/20 transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              {
                title: "Navigation",
                links: [
                  { name: "Dashboard", href: "/dashboard" },
                  { name: "Courses", href: "/courses" },
                  { name: "Faculty", href: "/faculty" },
                  { name: "Calendar", href: "/calendar" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { name: "Help Center", href: "/help" },
                  { name: "Academic Policy", href: "/policy" },
                  { name: "Student Handbook", href: "/handbook" }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * linkIndex, duration: 0.5 }}
                    >
                      <ButtonLink
                        href={link.href}
                        type="secondary"
                        className="text-gray-400 hover:text-sky-400 text-sm"
                        underline={false}
                      >
                        {link.name}
                      </ButtonLink>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Developers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
              Development Team
            </h4>
            <div className="grid grid-cols-2 space-x-3.5 space-y-3.5">
              {developers.map((dev, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-800/50 p-3 rounded-lg max-w-[220px]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-200">{dev.name}</p>
                      <p className="text-xs text-gray-400">{dev.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="text-gray-400 hover:text-white"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="text-gray-400 hover:text-sky-500"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} College Management System. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Powered by</span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sky-400 font-medium"
            >
              Next.js
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}