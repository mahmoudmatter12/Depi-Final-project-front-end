// export default AboutPage;
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | College Management System</title>
      </Head>
      <div className="py-20 px-4 mt-10 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Our College System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering educational institutions with modern technology
              solutions
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Column - Decorative Element */}
            <div className="relative w-full md:w-1/3 flex justify-center">
              <div className="h-104 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl absolute -z-10" />
              <div className="border-2 border-gray-700 rounded-2xl p-8 backdrop-blur-sm bg-white/5 h-full w-full">
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
                  Our Mission
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full pt-10 md:w-2/3">
              <p className="text-lg leading-relaxed text-gray-300">
                Our mission is to transform academic management by providing
                intuitive, integrated solutions that connect students, faculty,
                and administrators. We are dedicated to supporting higher
                education institutions in achieving excellence in education,
                research, and community service at both national and regional
                levels across all academic disciplines.
              </p>

              {/* Stats/Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {[
                  { value: "100+", label: "Institutions" },
                  { value: "24/7", label: "Support" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-4 rounded-lg border border-gray-800 hover:border-blue-400/30 transition-colors"
                  >
                    <p className="text-2xl font-bold text-blue-400">
                      {stat.value}
                    </p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Hero Section (Matches Homepage Style) */}
      {/* <div className=" text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-5xl mb-6">About Our College System</h1>
          <h2 className="text-2xl text-indigo-400 mb-8 max-w-3xl mx-auto">
            Empowering educational institutions with modern technology solutions
          </h2>
        </div>
      </div> */}

      {/* Mission Section */}
      {/* <div className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white-800 mb-4">Our Mission</h2>
            <p className="text-x1 text-indigo-400 max-w-4xl mx-auto">
            Our mission is to transform academic management by providing intuitive,
            integrated solutions that connect students, faculty, and administrators.
            We are dedicated to supporting higher education institutions in achieving excellence in education,
            research, and community service at both national and regional levels across all academic disciplines.
            </p>
          </div>
        </div>
      </div> */}

      {/* Features Section (Matches Homepage Cards) */}
      <div className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-sans text-center mb-12">
            Why Choose Our System
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Student-Centric Design",
                description:
                  "Built with student needs at the core for effortless navigation",
              },
              {
                icon: "📝",
                title: "Faculty Empowerment",
                description:
                  "Tools that save time and enhance teaching effectiveness",
              },
              {
                icon: "💬",
                title: "Admin Efficiency",
                description:
                  "Comprehensive solutions for institutional management",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/10"
              >
                <span className="emoji text-2xl">{feature.icon}</span>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section (Matches Footer Style) */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Board of Directors
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Mahmoud Matter", role: "Chairman of the Boardr" },
              { name: "Banan Wael", role: "Vice Chairman of the Board" },
              { name: "Ahmed Khairy", role: "Rector" },
              { name: "Hanan Fathy", role: "Vice Dean" },
              { name: "Mohamed Ibrahim", role: "Vice Dean" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-950 p-6 rounded-lg shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/10"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-gray-600">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-cyan-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer (Matches Homepage Footer) */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>2025 College Management System. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Powered by Next.js</p>
        </div>
      </footer>
    </>
  );
}
