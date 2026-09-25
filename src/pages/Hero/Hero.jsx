import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import cvFile from "@/assets/cv/CV ATS Alfindra Habib Nugroho.pdf";

// Backdrop tunggal: garis grid tipis dan statis, sebagai kanvas diam
// untuk Meteors di atasnya — bukan dua motion yang bersaing.
const GridBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15]">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

const chips = [
  { icon: "fa-brain", label: "Machine Learning" },
  { icon: "fa-mobile-screen", label: "Mobile Development" },
  { icon: "fa-award", label: "3x Hak Cipta DJKI" },
];

export default function Hero() {
  const words = [
    "Full-Stack Developer",
    "Mobile Developer",
    "Software Engineer",
    "Machine Learning Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Alfindra Habib Nugroho',
    title: 'Full-Stack Developer | Mobile Developer | Machine Learning Enthusiast',
    skills: [
        'React', 'Laravel', 'Flutter', 'Python', 'PHP',
        'Flask', 'JavaScript', 'MySQL', 'Supabase',
        'REST API', 'Git/GitHub', 'Figma'
    ],
    education: 'S1 Informatika, Universitas Jenderal Achmad Yani Yogyakarta (GPA 3.74/4.00)',
    certifications: ['Junior Mobile Programmer (BNSP)'],
    intellectualProperty: 3, // Hak Cipta Program Komputer terdaftar DJKI
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 0.5, // magang Juli–September 2025
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-0">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Meteors number={10} />
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-12">
          {/* Kolom kiri — teks */}
          <div className="animate__animated animate__fadeIn relative w-full lg:w-1/2">
            <div className="absolute -top-16 -left-16 hidden h-64 w-64 rounded-full bg-amber-500/10 blur-3xl lg:block" />

            {/* Badge status */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-2 backdrop-blur-sm sm:mb-8 sm:px-4">
              <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-300 sm:text-sm">
                Fresh Graduate · IPK 3.74 · 3x Hak Cipta DJKI
              </span>
            </div>

            {/* Nama */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text"> Alfindra Habib Nugroho</span>
                </span>
              </h1>
            </div>

            {/* Peran */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 backdrop-blur-sm sm:mb-8 sm:px-6">
              <i className="fas fa-rocket text-sm text-amber-400 sm:text-base" />
              <FlipWords className="text-lg font-medium text-amber-400 sm:text-xl" words={words} />
            </div>

            {/* Deskripsi */}
            <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-300/90 sm:text-xl">
              Membangun aplikasi web &amp; mobile dengan{" "}
              <span className="font-medium text-white">Laravel, React, Flask &amp; Flutter</span>,
              dipadukan riset{" "}
              <span className="font-medium text-amber-400">Machine Learning &amp; Sistem Pakar</span>{" "}
              yang menghasilkan 3 Hak Cipta Program Komputer terdaftar DJKI.
            </p>

            {/* Chip teknis — inline, bukan lagi melayang tumpang tindih */}
            <div className="mb-8 flex flex-wrap gap-2 sm:mb-12">
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-800/40 px-3 py-1.5 text-sm text-gray-300"
                >
                  <i className={`fas ${chip.icon} text-amber-400`} />
                  {chip.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a
                href="projects"
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#F59E0B]"
              >
                <span className="block w-full rounded-[11px] bg-gray-900 px-6 py-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-400 sm:px-8 sm:py-4">
                  <span className="relative flex items-center justify-center gap-2 font-medium text-white">
                    Lihat Proyek
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </a>

              <a
                href={cvFile}
                download
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 p-0.5 transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full rounded-[11px] border border-gray-700/50 bg-gray-900 px-6 py-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700 sm:px-8 sm:py-4">
                  <span className="relative flex items-center justify-center gap-2 font-medium text-gray-300 group-hover:text-white">
                    Download CV
                    <i className="fas fa-download transition-transform duration-300 group-hover:translate-y-0.5" />
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Kolom kanan — code window */}
          <div className="animate__animated animate__fadeIn w-full lg:w-1/2">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500" />
                  <div className="window-dot bg-yellow-500" />
                  <div className="window-dot bg-green-500" />
                  <span className="ml-2 flex items-center gap-2 text-sm text-gray-400">
                    <i className="fas fa-code" />
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-2 animate-bounce">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <i className="fas fa-mouse text-amber-400" />
            Scroll untuk lihat lebih lanjut
          </span>
          <i className="fas fa-chevron-down text-xl text-amber-400" />
        </div>
      </section>

      <PortfolioPage />
    </main>
  );
}