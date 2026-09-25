import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "S1 Informatika",
      school: "Universitas Jenderal Achmad Yani Yogyakarta",
      mascot: "🎓",
      year: "2022 — 2026",
      achievements: ["IPK 3.74 / 4.00", "3 Hak Cipta Program Komputer (DJKI)"],
      skills: [
        "Pemrograman Web",
        "Pemrograman Mobile",
        "Rekayasa Perangkat Lunak",
        "Basis Data",
        "Machine Learning",
      ],
      description:
        "Menempuh pendidikan dengan fokus pada pengembangan perangkat lunak, mobile, dan kecerdasan buatan, dipadukan dengan pengalaman riset Machine Learning bersama dosen serta magang sebagai Fullstack Developer.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background, senada dengan Home & Contact */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
            </span>
            Riwayat Pendidikan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-6">
            Perjalanan Pendidikan
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Perjalanan akademik yang membentuk cara berpikir dan kemampuan
            teknis melalui riset, praktik, dan kolaborasi nyata.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 max-w-2xl mx-auto"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-400 scale-[1.02] shadow-xl shadow-teal-500/10"
                  : "border-amber-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-amber-400/20 text-2xl">
                      {edu.mascot}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400 flex items-center gap-2 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-400" />
                    {edu.school}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-400 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    Pencapaian Utama
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-teal-400" />
                    Bidang yang Dipelajari
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-amber-500/10 text-amber-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;