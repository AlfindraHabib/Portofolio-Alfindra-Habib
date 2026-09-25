import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

// Diurutkan kronologis (2023 -> 2026). `year` dipakai sebagai penanda
// kelompok tahun di sepanjang rel; `hasIp` menandai riset yang
// menghasilkan Hak Cipta terdaftar DJKI — item ini ditandai warna teal
// agar langsung terlihat berbeda dari peran/proyek reguler (amber).
const experiences = [
  {
    year: "2023",
    icon: Network,
    title: "Menteri Jurnalistik",
    company: "BEM Universitas Jenderal Achmad Yani Yogyakarta",
    period: "2023 - 2024",
    description:
      "Mengelola dan mengembangkan website resmi BEM, mengoordinasikan tim jurnalistik, serta mempublikasikan konten dan berita kegiatan organisasi secara digital.",
    hasIp: false,
  },
  {
    year: "2025",
    icon: Layers,
    title: "Proyek PJBL - Luxe Jogja: Sistem Rekomendasi Penginapan",
    company: "Universitas Jenderal Achmad Yani Yogyakarta",
    period: "Jan 2025",
    description:
      "Membangun sistem rekomendasi penginapan untuk destinasi wisata Yogyakarta menggunakan React & Flask; terdaftar sebagai Hak Cipta Program Komputer \u201cLuxe Jogja - Sistem Rekomendasi Penginapan Area Wisata Yogyakarta\u201d di DJKI (No. Pencatatan 000864700).",
    hasIp: true,
  },
  {
    year: "2025",
    icon: Code2,
    title: "Fullstack Developer (Magang)",
    company: "PT Teknologi Server Indonesia (Xcode)",
    period: "Jul - Sep 2025",
    description:
      "Mengembangkan aplikasi web & sistem internal menggunakan Laravel, React, dan Supabase, termasuk chatbot otomatis berbasis API dan optimalisasi performa website.",
    hasIp: false,
  },
  {
    year: "2025",
    icon: Binary,
    title: "Peneliti Mahasiswa - Sistem Pakar Deteksi Hama & Penyakit Padi (Aplikasi Agripadi)",
    company: "Universitas Jenderal Achmad Yani Yogyakarta",
    period: "Sep 2025",
    description:
      "Mengembangkan sebuah aplikasi sistem pakar bersama dosen; terdaftar sebagai Hak Cipta Program Komputer \u201cImplementasi Metode Certainty Factor Untuk Mendeteksi Hama Penyakit Pada Tanaman Padi\u201d di DJKI (No. Pencatatan 000964211), dengan React sebagai frontend & Flask sebagai backend.",
    hasIp: true,
  },
  {
    year: "2026",
    icon: Activity,
    title: "Pengembangan Sistem Pakar Untuk Diagnosis Penyakit Daun Pada Tanaman Padi Menggunakan Metode Certainty Factor (Website Padi Waras)",
    company: "Universitas Jenderal Achmad Yani Yogyakarta",
    period: "Jul 2026",
    description:
      "Luaran kedua dari riset Sistem Pakar Deteksi Hama & Penyakit Padi bersama dosen: sistem web Padi Waras untuk diagnosis penyakit daun tanaman padi, dibangun dengan React + Vite (frontend) dan Flask (backend); terdaftar sebagai Hak Cipta Program Komputer di DJKI (No. Pencatatan 001379272).",
    hasIp: true,
  },
  {
    year: "2026",
    icon: Cpu,
    title: "Peneliti Skripsi - Farmonaut",
    company: "Universitas Jenderal Achmad Yani Yogyakarta",
    period: "2026",
    description:
      "Skripsi: \u201cKlasifikasi Penyakit Daun Padi Berbasis Citra Menggunakan Arsitektur MobileNetV2 pada Aplikasi Mobile\u201d. Membandingkan 3 model CNN Transfer Learning (MobileNetV2, VGG16, NASNetMobile) dengan akurasi \u00B197%, diimplementasikan ke aplikasi mobile berbasis Flutter & Flask.",
    hasIp: false,
  },
];

const YearMarker = ({ year }) => (
  <div className="relative mb-6 mt-2 pl-[72px] sm:pl-20">
    <span className="select-none text-5xl font-bold text-white/[0.06] sm:text-6xl">
      {year}
    </span>
  </div>
);

const TimelineItem = ({ icon: Icon, title, company, period, description, hasIp }) => {
  const accent = hasIp
    ? {
        ring: "border-teal-400/40 text-teal-400",
        period: "text-teal-400/80",
        badge: "border-teal-400/30 text-teal-400/90",
      }
    : {
        ring: "border-amber-500/40 text-amber-400",
        period: "text-amber-400/80",
        badge: "border-amber-400/30 text-amber-400/90",
      };

  return (
    <div className="relative flex gap-6 sm:gap-8">
      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-[#04081A] ${accent.ring}`}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="flex-1 pb-12">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className={`font-mono text-xs ${accent.period}`}>{period}</span>
          {hasIp && (
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${accent.badge}`}>
              Hak Cipta terdaftar
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <p className="mt-1 text-sm font-medium text-gray-400">{company}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-gray-300/90">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  let lastYear = null;

  return (
    <div className="relative overflow-hidden bg-[#04081A] pb-20 pt-32">
      {/* Grid backdrop, senada dengan section lain */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(217,164,65,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(217,164,65,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
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

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
            </span>
            Pengalaman & Riset
          </span>
          <h2 className="text-4xl font-medium sm:text-5xl">
            <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              Perjalanan Profesional
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Membangun solusi digital dari kode hingga riset, satu proyek dalam satu waktu.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-teal-400/60 bg-teal-400/20" />
              Hak Cipta terdaftar
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-amber-400/60 bg-amber-400/20" />
              Peran & proyek
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div ref={railRef} className="relative mx-auto max-w-3xl">
          {/* Rel dasar (statis) */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-700/40" />
          {/* Rel progres — terisi mengikuti posisi scroll */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-5 top-2 w-px bg-gradient-to-b from-teal-400 via-amber-400 to-amber-500/20"
          />

          {experiences.map((exp, index) => {
            const showYear = exp.year !== lastYear;
            lastYear = exp.year;
            return (
              <React.Fragment key={index}>
                {showYear && <YearMarker year={exp.year} />}
                <TimelineItem {...exp} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;