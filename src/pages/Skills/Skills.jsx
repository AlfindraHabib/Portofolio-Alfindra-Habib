import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Wrench,
  Award,
  GraduationCap,
  FileCheck2,
} from "lucide-react";
import { FaReact, FaPython, FaPhp, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiFlutter,
  SiFlask,
  SiMysql,
  SiSupabase,
  SiGithub,
  SiAndroidstudio,
  SiCanva,
  SiLaragon,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FcWorkflow } from "react-icons/fc";

// Sertifikat BNSP
import bnspCertificate from "/src/assets/BNSP/Alfindra Habib-Sertif BNSP.pdf";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden border-gray-700 bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(217,164,65,0.08)] to-transparent group-hover:via-[rgba(217,164,65,0.15)] animate-shimmer" />
    <CardContent className="relative z-10 p-6">
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`rounded-xl bg-gray-800/50 p-3 ${color} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative flex items-center gap-2 border-gray-600 bg-gray-800/50 px-3 py-2 text-gray-100 transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 hover:shadow-lg hover:shadow-amber-500/10"
          >
            <span className="transform transition-transform duration-300 group-hover/badge:scale-110">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const StatCard = ({ icon: Icon, value, label, href }) => {
  const baseClass =
    "group flex items-center gap-3 rounded-2xl border border-gray-700 bg-gray-900/60 px-5 py-4 transition-all duration-300 hover:border-amber-500/50 hover:bg-gray-900/90";

  const content = (
    <>
      <div className="rounded-xl bg-gray-800/70 p-2.5 text-amber-400">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="flex items-center gap-1.5 text-lg font-bold text-white">
          {value}
          {href && (
            <span className="rounded-full border border-amber-400/40 px-2 py-[1px] text-[10px] font-normal text-amber-400 transition-colors group-hover:bg-amber-400/10">
              Lihat Sertifikat
            </span>
          )}
        </span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClass} cursor-pointer`}>
        {content}
      </a>
    );
  }

  return <div className={baseClass}>{content}</div>;
};

const stats = [
  { icon: GraduationCap, value: "IPK 3.74/4.00", label: "S1 Informatika" },
  { icon: Award, value: "3 Hak Cipta", label: "Terdaftar DJKI" },
  {
    icon: FileCheck2,
    value: "BNSP Certified",
    label: "Junior Mobile Programmer",
    href: bnspCertificate,
  },
];

// Dikelompokkan berdasarkan domain penggunaan (Frontend, Backend, Mobile,
// Basis Data, Tools) supaya bahasa dan framework-nya berada di kategori
// yang tepat — bukan tercampur seperti sebelumnya. Warna ikon tetap
// mengikuti identitas masing-masing kategori agar mudah dipindai sekilas;
// aksen interaktif (hover, glow) tetap satu warna (amber) supaya konsisten
// dengan Hero & About.
const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Development",
    color: "text-sky-400",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
      { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "text-emerald-400",
    skills: [
      { name: "PHP", icon: <FaPhp className="w-4 h-4 text-[#777BB4]" /> },
      { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" /> },
      { name: "Flask", icon: <SiFlask className="w-4 h-4 text-white" /> },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "text-violet-400",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
    ],
  },
  {
    icon: Database,
    title: "Basis Data",
    color: "text-amber-400",
    skills: [
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
      { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Software",
    color: "text-rose-400",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="w-4 h-4 text-white" /> },
      { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="w-4 h-4 text-[#3DDC84]" /> },
      { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      { name: "n8n", icon: <FcWorkflow className="w-4 h-4" /> },
      { name: "Canva", icon: <SiCanva className="w-4 h-4 text-[#00C4CC]" /> },
      { name: "Laragon", icon: <SiLaragon className="w-4 h-4 text-[#359FFF]" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <main className="relative min-h-screen bg-[#04081A] pt-15 text-white lg:pt-0">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />

      <section className="container relative z-10 mx-auto px-4 py-11">
        <div className="flex items-center justify-center">
          <IconCloudDemo />
        </div>

        {/* Highlight stats untuk menarik perhatian HRD */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(217, 164, 65, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(217, 164, 65, 0.08) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;