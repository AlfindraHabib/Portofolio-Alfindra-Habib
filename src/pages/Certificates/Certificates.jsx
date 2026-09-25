import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  Building2,
  Calendar,
  Copyright,
  ExternalLink,
  Eye,
  Hash,
  Mic,
  Trophy,
  Users,
  X,
} from "lucide-react";

// Sertifikat lama (folder BNSP & HKI)
import bnspFile from "/src/assets/BNSP/Alfindra Habib-Sertif BNSP.pdf";
import hkiLuxeJogja from "/src/assets/HKI/sertifikat HKI - LuxeJogja.pdf";
import hkiAgripadi from "/src/assets/HKI/sertifikat_HKI_Agripadi.pdf";
import hkiPadiWaras from "/src/assets/HKI/sertifikat_HKI_PadiWaras.pdf";
import belajartm from "/src/assets/sertifikat/3eIajar Menggunakan Terminal atau CMD.pdf";
import django from "/src/assets/sertifikat/Alfindra Habib- Framework Django.pdf";
import algoritma from "/src/assets/sertifikat/Algoritma dan Pemrograman Dasar.pdf";
import bootstrapcssdasar from "/src/assets/sertifikat/Belajar Bootstrap CSS Framework.pdf";
import dasarcss from "/src/assets/sertifikat/Belajar Dasar CSS.pdf";
import dasarhtml from "/src/assets/sertifikat/Belajar Dasar HTML dalam program.pdf";
import juara1ml from "/src/assets/sertifikat/Juara 1 Mobile Legends 2022.pdf";
import juara1voli from "/src/assets/sertifikat/Juara 1 voli Pom 2024.pdf";
import juara2voli from "/src/assets/sertifikat/Juara 2 Lomba Voli POM Unjaya.pdf";
import juara3voli from "/src/assets/sertifikat/Juara 3 Voli POB 2022.pdf";
import texteditor from "/src/assets/sertifikat/Mahir menggunakan text editor untuk pemula.pdf";
import mpk from "/src/assets/sertifikat/Mengenal Pemrograman Komputer.pdf";
import ldk from "/src/assets/sertifikat/Panitia LDK Ormawa Unjaya- Alfindra Habib.pdf";
import pom from "/src/assets/sertifikat/Panitia POM-Alfindra Habib.pdf";
import flutter from "/src/assets/sertifikat/Seminar Flutter&dart-Alfindra Habib.pdf";
import frontend from "/src/assets/sertifikat/Seminar Front End Alfindra Habib Nugroho.pdf";
import klswp from "/src/assets/sertifikat/Seminar Kelas Website Wordpress-Alfindra Habib Nugroho.pdf";
import bem from "/src/assets/sertifikat/SERTIFIKAT ANGGOTA BEM UNJAYA 2024 - ALFINDRA HABIB.pdf";
import mobileapk from "/src/assets/sertifikat/Sertifikat Membuat mobile aplikasi dengan cepat dan efisien -Alfindra Habib.pdf";
import magang from "/src/assets/sertifikat/SERTIFIKAT PKLMAGANG.pdf";
import trc from "/src/assets/sertifikat/Sertifikat Seminar TRC - Alfindra Habib.pdf";


const pdfFiles = import.meta.glob("/src/assets/sertifikat/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});
const previewFiles = import.meta.glob("/src/assets/sertifikat/preview/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const DJKI = "Direktorat Jenderal Kekayaan Intelektual · Kementerian Hukum RI";
const BEM = "BEM Universitas Jenderal Achmad Yani Yogyakarta";
const UNJAYA = "Universitas Jenderal Achmad Yani Yogyakarta";
const HMIF = "HMIF · Universitas Jenderal Achmad Yani Yogyakarta";
const CODEPOLITAN = "CODEPOLITAN · Kelas Online";

const rawCertificates = [
  // ---- Profesional ----
  {
    id: "bnsp-junior-mobile-programmer",
    sortDate: "2025-07-21",
    category: "profesional",
    title: "Pemrogram Mobile Pratama (Junior Mobile Programmer)",
    issuer: "BNSP · LSP Teknologi Digital",
    dateLabel: "Diterbitkan",
    date: "21 Juli 2025",
    number: "62019 2514 3 0146964 2025",
    note: "Bidang Pengembangan Perangkat Lunak · berlaku 3 tahun",
    slug: "bnsp-junior-mobile-programmer", // pratinjau dari folder sertifikat/preview
    file: bnspFile,
  },
  {
    id: "magang-xcode-2025",
    sortDate: "2025-09-01",
    category: "profesional",
    slug: "magang-xcode-2025",
    title: "Sertifikat PKL/Magang",
    issuer: "PT Teknologi Server Indonesia (Xcode)",
    dateLabel: "Periode",
    date: "1 Juli – 1 September 2025",
    number: "100/003/Xcodeinternship/IX/2025",
    note: "Magang sebagai Fullstack Developer",
    file: magang,
  },

  // ---- Hak Cipta (tanpa pratinjau: PDF memuat alamat pihak lain) ----
  {
    id: "hki-luxe-jogja",
    sortDate: "2025-02-25",
    category: "hki",
    title: "Luxe Jogja - Sistem Rekomendasi Penginapan Area Wisata Yogyakarta",
    issuer: DJKI,
    dateLabel: "Diajukan",
    date: "25 Februari 2025",
    number: "000864700",
    note: "Program Komputer · Proyek Luxe Jogja",
    file: hkiLuxeJogja,
  },
  {
    id: "hki-agripadi",
    sortDate: "2025-09-03",
    category: "hki",
    title:
      "Implementasi Metode Certainty Factor Untuk Mendeteksi Hama Penyakit Pada Tanaman Padi",
    issuer: DJKI,
    dateLabel: "Diajukan",
    date: "3 September 2025",
    number: "000964211",
    note: "Program Komputer · Aplikasi Agripadi",
    file: hkiAgripadi,
  },
  {
    id: "hki-padi-waras",
    sortDate: "2026-07-27",
    category: "hki",
    title:
      "Pengembangan Sistem Pakar Untuk Diagnosis Penyakit Daun Pada Tanaman Padi Menggunakan Metode Certainty Factor",
    issuer: DJKI,
    dateLabel: "Diajukan",
    date: "27 Juli 2026",
    number: "001379272",
    note: "Program Komputer · Website Padi Waras",
    file: hkiPadiWaras,
  },

  // ---- Prestasi ----
  {
    id: "juara-voli-pom-2025",
    sortDate: "2025-11-15",
    category: "prestasi",
    slug: "juara-voli-pom-2025",
    title: "Juara 2 Cabang Olahraga Volly Putra · POM 2025",
    issuer: BEM,
    dateLabel: "Periode",
    date: "25 Oktober – 15 November 2025",
    number: "014/SERTIFIKAT/BEMUNJAYA/XII/2025",
    note: "Pekan Olahraga Mahasiswa 2025 · diberikan atas nama tim HMIF",
    file: juara2voli,
  },
  {
    id: "juara-voli-pom-2024",
    sortDate: "2024-11-17",
    category: "prestasi",
    slug: "juara-voli-pom-2024",
    title: "Juara Pertama Lomba Volly Putra · POM 2024",
    issuer: BEM,
    dateLabel: "Periode",
    date: "26 Oktober – 17 November 2024",
    number: "182/SK/BEM UNJAYA/XI/E/2024",
    note: "Pekan Olahraga Mahasiswa tingkat universitas · diberikan atas nama tim HMIF",
    file: juara1voli,
  },
  {
    id: "juara-voli-pob-2022",
    sortDate: "2022-01-01",
    category: "prestasi",
    slug: "juara-voli-pob-2022",
    title: "Juara III Voli Putra · POB Unjaya 2022",
    issuer: "POB Unjaya 2022",
    dateLabel: "Tahun",
    date: "2022",
    note: "Piagam tanpa nama penerima",
    file: juara3voli,
  },
  {
    id: "juara-mobile-legends-pob-2022",
    sortDate: "2022-01-01",
    category: "prestasi",
    slug: "juara-mobile-legends-pob-2022",
    title: "Juara I Mobile Legend · POB Unjaya 2022",
    issuer: "POB Unjaya 2022",
    dateLabel: "Tahun",
    date: "2022",
    note: "Piagam tanpa nama penerima",
    file: juara1ml,
  },

  // ---- Organisasi & kepanitiaan ----
  {
    id: "bem-menteri-jurnalistik-2024",
    sortDate: "2024-01-01",
    category: "organisasi",
    slug: "bem-menteri-jurnalistik-2024",
    title: "Menteri Jurnalistik · BEM UNJAYA 2024",
    issuer: "Badan Eksekutif Mahasiswa Universitas Jenderal Achmad Yani Yogyakarta",
    dateLabel: "Periode",
    date: "2024",
    number: "SKEP/004/UNJAYA/I/2024",
    note: "Atas partisipasi aktif sebagai Menteri Jurnalistik",
    file: bem,
  },
  {
    id: "panitia-pom-2024",
    sortDate: "2024-11-17",
    category: "organisasi",
    slug: "panitia-pom-2024",
    title: "Panitia Pekan Olahraga Mahasiswa (POM)",
    issuer: BEM,
    dateLabel: "Periode",
    date: "26 Oktober – 17 November 2024",
    note: "Sebagai Panitia",
    file: pom,
  },
  {
    id: "panitia-ldk-ormawa-2024",
    sortDate: "2024-02-29",
    category: "organisasi",
    slug: "panitia-ldk-ormawa-2024",
    title: "Panitia Latihan Dasar Kepemimpinan (LDK) Ormawa",
    issuer: UNJAYA,
    dateLabel: "Tanggal",
    date: "28–29 Februari 2024",
    note: "Sebagai Panitia",
    file: ldk,
  },

  // ---- Seminar & workshop ----
  {
    id: "workshop-flutter-hmif-2025",
    sortDate: "2025-02-22",
    category: "seminar",
    slug: "workshop-flutter-hmif-2025",
    title: "Workshop Flutter: Membuat Mobile Aplikasi dengan Efisien dan Cepat",
    issuer: "HMIF UNJAYA",
    dateLabel: "Tanggal",
    date: "22 Februari 2025",
    number: "S/01/HMIF.UNJAYA/02/2025",
    note: "Peserta",
    file: mobileapk,
  },
  {
    id: "seminar-front-end-himaka-2023",
    sortDate: "2023-11-04",
    category: "seminar",
    slug: "seminar-front-end-himaka-2023",
    title: "Seminar Front End Web Developer: Trends and Technologies",
    issuer: "Himpunan Mahasiswa Informatika Universitas Mercu Buana Yogyakarta",
    dateLabel: "Tanggal",
    date: "4 November 2023",
    number: "576/04/HIMAKA/XI/2023",
    note: "Peserta online",
    file: frontend,
  },
  {
    id: "seminar-trc-2023",
    sortDate: "2023-09-23",
    category: "seminar",
    slug: "seminar-trc-2023",
    title:
      "Seminar Transformasi Revolusi Cerdas: Keamanan Cyber dalam Smart System",
    issuer: HMIF,
    dateLabel: "Tanggal",
    date: "23 September 2023",
    number: "S/18/HMIF/04/2023",
    note: "Peserta",
    file: trc,
  },
  {
    id: "bootcamp-flutter-dart-2023",
    sortDate: "2023-03-19",
    category: "seminar",
    slug: "bootcamp-flutter-dart-2023",
    title: "Flutter and Dart Bootcamp",
    issuer: HMIF,
    dateLabel: "Tanggal",
    date: "18–19 Maret 2023",
    number: "S/07/HMIF/05/2023",
    note: "Sertifikat Apresiasi · Peserta",
    file: flutter,
  },
  {
    id: "webinar-django-2022",
    sortDate: "2022-06-21",
    category: "seminar",
    slug: "webinar-django-2022",
    title:
      "Webinar: Pelatihan Membuat Web Menggunakan Framework Django (Intermediate Level)",
    issuer: `Program Studi Informatika (S1) · ${UNJAYA}`,
    dateLabel: "Tanggal",
    date: "21 Juni 2022",
    note: "Diterbitkan 5 Desember 2022 · webinar online",
    file: django,
  },
  {
    id: "kelas-wordpress-muzaweb",
    category: "seminar",
    slug: "kelas-wordpress-muzaweb",
    title: "Kelas Website Developer (CMS WordPress)",
    issuer: "Muzaweb",
    note: "Materi basic sampai advanced menggunakan CMS WordPress",
    file: klswp,
  },

  // ---- Kursus online ----
  {
    id: "codepolitan-bootstrap",
    sortDate: "2024-08-21",
    category: "kursus",
    slug: "codepolitan-bootstrap",
    title: "Belajar Bootstrap CSS Framework",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "21 Agustus 2024",
    note: "Berlaku sampai 21 Agustus 2027",
    file: bootstrapcssdasar,
  },
  {
    id: "codepolitan-css",
    sortDate: "2024-06-02",
    category: "kursus",
    slug: "codepolitan-css",
    title: "Belajar Dasar CSS",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "2 Juni 2024",
    note: "Berlaku sampai 2 Juni 2027",
    file: dasarcss,
  },
  {
    id: "codepolitan-html",
    sortDate: "2024-04-01",
    category: "kursus",
    slug: "codepolitan-html",
    title: "Belajar Dasar HTML",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "1 April 2024",
    note: "Berlaku sampai 1 April 2027",
    file: dasarhtml,
  },
  {
    id: "codepolitan-text-editor",
    sortDate: "2024-03-15",
    category: "kursus",
    slug: "codepolitan-text-editor",
    title: "Mahir Menggunakan Text Editor buat Pemula",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "15 Maret 2024",
    note: "Berlaku sampai 15 Maret 2027",
    file: texteditor,
  },
  {
    id: "codepolitan-terminal-cmd",
    sortDate: "2024-03-11",
    category: "kursus",
    slug: "codepolitan-terminal-cmd",
    title: "Belajar Menggunakan Terminal atau CMD untuk Development",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "11 Maret 2024",
    note: "Berlaku sampai 11 Maret 2027",
    file: belajartm,
  },
  {
    id: "codepolitan-algoritma-pemrograman-dasar",
    sortDate: "2024-03-06",
    category: "kursus",
    slug: "codepolitan-algoritma-pemrograman-dasar",
    title: "Algoritma dan Pemrograman Dasar",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "6 Maret 2024",
    note: "Berlaku sampai 6 Maret 2027",
    file: algoritma,
  },
  {
    id: "codepolitan-mengenal-pemrograman",
    sortDate: "2024-03-02",
    category: "kursus",
    slug: "codepolitan-mengenal-pemrograman",
    title: "Mengenal Pemrograman Komputer",
    issuer: CODEPOLITAN,
    dateLabel: "Selesai",
    date: "2 Maret 2024",
    note: "Berlaku sampai 2 Maret 2027",
    file: mpk,
  },
];

// Menyambungkan `slug` ke file hasil glob dan menurunkan `year` dari
// sortDate. File yang hilang tidak merusak halaman, hanya memberi
// peringatan di console saat dev.
const certificates = rawCertificates.map((c) => {
  const year = c.sortDate ? Number(c.sortDate.slice(0, 4)) : null;
  if (!c.slug) return { ...c, year };
  const file = c.file ?? pdfFiles[`/src/assets/sertifikat/${c.slug}.pdf`];
  const preview =
    c.preview ?? previewFiles[`/src/assets/sertifikat/preview/${c.slug}.jpg`];
  if (import.meta.env?.DEV && (!file || !preview)) {
    console.warn(
      `[Certificates] file untuk "${c.slug}" tidak ditemukan di src/assets/sertifikat/`
    );
  }
  return { ...c, year, file, preview };
});

const FILTERS = [
  { id: "all", label: "Semua" },
  { id: "profesional", label: "Profesional" },
  { id: "hki", label: "Hak Cipta" },
  { id: "prestasi", label: "Prestasi" },
  { id: "organisasi", label: "Organisasi" },
  { id: "seminar", label: "Seminar" },
  { id: "kursus", label: "Kursus" },
];

const SORTS = [
  { id: "desc", label: "Terbaru" },
  { id: "asc", label: "Terlama" },
];

// Kelas Tailwind ditulis utuh (bukan disusun dinamis) agar tidak
// terbuang saat proses purge.
const THEME = {
  profesional: {
    icon: BadgeCheck,
    label: "Sertifikasi & Magang",
    bar: "from-teal-400 to-cyan-500",
    media: "from-teal-500/25 via-teal-500/5 to-transparent",
    chip: "border-teal-400/30 bg-teal-500/15 text-teal-200",
    accent: "text-teal-400",
    hover: "hover:border-teal-400/50 hover:shadow-teal-500/20",
    button: "border-teal-400/40 text-teal-300 hover:bg-teal-500/10",
  },
  hki: {
    icon: Copyright,
    label: "Hak Cipta Program Komputer",
    bar: "from-amber-400 to-orange-500",
    media: "from-amber-500/25 via-amber-500/5 to-transparent",
    chip: "border-amber-400/30 bg-amber-500/15 text-amber-200",
    accent: "text-amber-400",
    hover: "hover:border-amber-400/50 hover:shadow-amber-500/20",
    button: "border-amber-400/40 text-amber-300 hover:bg-amber-500/10",
  },
  prestasi: {
    icon: Trophy,
    label: "Prestasi",
    bar: "from-rose-400 to-pink-500",
    media: "from-rose-500/25 via-rose-500/5 to-transparent",
    chip: "border-rose-400/30 bg-rose-500/15 text-rose-200",
    accent: "text-rose-400",
    hover: "hover:border-rose-400/50 hover:shadow-rose-500/20",
    button: "border-rose-400/40 text-rose-300 hover:bg-rose-500/10",
  },
  organisasi: {
    icon: Users,
    label: "Organisasi & Kepanitiaan",
    bar: "from-violet-400 to-purple-500",
    media: "from-violet-500/25 via-violet-500/5 to-transparent",
    chip: "border-violet-400/30 bg-violet-500/15 text-violet-200",
    accent: "text-violet-400",
    hover: "hover:border-violet-400/50 hover:shadow-violet-500/20",
    button: "border-violet-400/40 text-violet-300 hover:bg-violet-500/10",
  },
  seminar: {
    icon: Mic,
    label: "Seminar & Workshop",
    bar: "from-sky-400 to-blue-500",
    media: "from-sky-500/25 via-sky-500/5 to-transparent",
    chip: "border-sky-400/30 bg-sky-500/15 text-sky-200",
    accent: "text-sky-400",
    hover: "hover:border-sky-400/50 hover:shadow-sky-500/20",
    button: "border-sky-400/40 text-sky-300 hover:bg-sky-500/10",
  },
  kursus: {
    icon: BookOpen,
    label: "Kursus Online",
    bar: "from-emerald-400 to-green-500",
    media: "from-emerald-500/25 via-emerald-500/5 to-transparent",
    chip: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
    accent: "text-emerald-400",
    hover: "hover:border-emerald-400/50 hover:shadow-emerald-500/20",
    button: "border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/10",
  },
};

/* ---------- Urutan & pengelompokan tahun ---------- */

// Tanpa sortDate selalu di akhir, baik terbaru maupun terlama.
const sortCertificates = (list, order) => {
  const dir = order === "asc" ? 1 : -1;
  return [...list].sort((a, b) => {
    if (!a.sortDate && !b.sortDate) return 0;
    if (!a.sortDate) return 1;
    if (!b.sortDate) return -1;
    if (a.sortDate === b.sortDate) return 0;
    return a.sortDate < b.sortDate ? -dir : dir;
  });
};

// Menyisipkan penanda tahun sebelum kartu pertama tiap tahun.
const withYearMarkers = (list) => {
  const items = [];
  let last;
  list.forEach((cert) => {
    const y = cert.year ?? "none";
    if (y !== last) {
      items.push({
        type: "year",
        key: `year-${y}`,
        year: cert.year,
        count: list.filter((c) => (c.year ?? "none") === y).length,
      });
      last = y;
    }
    items.push({ type: "cert", key: cert.id, cert });
  });
  return items;
};

/* ---------- Komponen ---------- */

const MetaRow = ({ icon: Icon, children, accent }) => (
  <li className="flex items-start gap-2 text-sm text-gray-300/90">
    <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} />
    <span className="min-w-0 break-words">{children}</span>
  </li>
);

const YearMarker = ({ year, count }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="col-span-full flex items-center gap-4 pt-6 first:pt-0"
  >
    <span
      className={`select-none font-bold leading-none text-white/15 ${
        year ? "text-5xl sm:text-6xl" : "text-2xl sm:text-3xl"
      }`}
    >
      {year ?? "Tanpa tanggal"}
    </span>
    <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
    <span className="font-mono text-xs text-gray-500">{count} sertifikat</span>
  </motion.div>
);

const CertificateCard = ({ cert, onPreview }) => {
  const theme = THEME[cert.category];
  const CategoryIcon = theme.icon;
  const hasPreview = Boolean(cert.preview);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow-lg shadow-black/30 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:shadow-2xl ${theme.hover}`}
    >
      {/* Garis aksen warna kategori */}
      <div className={`h-1 w-full bg-gradient-to-r ${theme.bar}`} />

      {/* Media */}
      <div className="relative h-52 overflow-hidden bg-zinc-950">
        {hasPreview ? (
          <button
            type="button"
            onClick={() => onPreview(cert)}
            aria-label={`Pratinjau sertifikat ${cert.title}`}
            className="absolute inset-0 block h-full w-full cursor-zoom-in"
          >
            <img
              src={cert.preview}
              alt={`Pratinjau sertifikat ${cert.title}`}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/90 to-transparent" />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <Eye className="h-4 w-4" />
                Lihat
              </span>
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onPreview(cert)}
            aria-label={`Lihat sertifikat ${cert.title}`}
            className={`absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-gradient-to-br ${theme.media}`}
          >
            <CategoryIcon
              className={`h-16 w-16 opacity-40 transition-transform duration-500 group-hover:scale-110 ${theme.accent}`}
              strokeWidth={1.25}
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <Eye className="h-4 w-4" />
                Lihat
              </span>
            </span>
          </button>
        )}

        <span
          className={`pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${theme.chip}`}
        >
          <CategoryIcon className="h-3.5 w-3.5" />
          {theme.label}
        </span>

        {cert.year && (
          <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-xs text-white/80 backdrop-blur-md">
            {cert.year}
          </span>
        )}
      </div>

      {/* Isi */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="line-clamp-3 text-base font-bold text-white md:text-lg">
          {cert.title}
        </h3>

        <ul className="mt-4 space-y-2">
          <MetaRow icon={Building2} accent={theme.accent}>
            <span className="line-clamp-2">{cert.issuer}</span>
          </MetaRow>
          {cert.date && (
            <MetaRow icon={Calendar} accent={theme.accent}>
              {cert.dateLabel} {cert.date}
            </MetaRow>
          )}
          {cert.number && (
            <MetaRow icon={Hash} accent={theme.accent}>
              No. {cert.number}
            </MetaRow>
          )}
        </ul>

        {cert.note && (
          <p className="mt-4 border-l-2 border-white/10 pl-3 text-sm italic text-gray-400">
            {cert.note}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button
            type="button"
            onClick={() => onPreview(cert)}
            className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${theme.button}`}
          >
            <Eye className="h-4 w-4" />
            Lihat
          </button>
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${theme.button}`}
          >
            PDF
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Lightbox = ({ cert, onClose }) => {
  const theme = THEME[cert.category];
  const canImage = Boolean(cert.preview);
  const canPdf = Boolean(cert.file);

  // Desktop: langsung PDF. Layar sentuh: gambar dulu, karena banyak
  // browser mobile tidak menampilkan PDF di dalam halaman.
  const [mode, setMode] = useState(() => {
    if (!canPdf) return "image";
    if (!canImage) return "pdf";
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: coarse)").matches;
    return coarse ? "image" : "pdf";
  });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900"
      >
        <div className={`h-1 w-full shrink-0 bg-gradient-to-r ${theme.bar}`} />

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-4 z-10 rounded-full bg-black/60 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-black/80 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Tampilan */}
        <div className="h-[62vh] shrink-0 bg-zinc-950 sm:h-[68vh]">
          {mode === "pdf" ? (
            <iframe
              src={cert.file}
              title={`PDF ${cert.title}`}
              className="h-full w-full border-0 bg-white"
            />
          ) : (
            <div className="h-full overflow-auto p-3">
              <img
                src={cert.preview}
                alt={`Sertifikat ${cert.title}`}
                className="mx-auto h-full w-auto max-w-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="shrink-0 space-y-3 p-5">
          <h3 className="pr-10 text-lg font-bold text-white">{cert.title}</h3>
          <p className="text-sm text-gray-400">
            {cert.issuer}
            {cert.date && ` · ${cert.dateLabel} ${cert.date}`}
            {cert.number && ` · No. ${cert.number}`}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {canPdf && canImage && (
              <div
                role="group"
                aria-label="Tampilan"
                className="flex rounded-lg border border-white/10 p-0.5"
              >
                {[
                  { id: "pdf", label: "PDF" },
                  { id: "image", label: "Gambar" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={mode === id}
                    onClick={() => setMode(id)}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                      mode === id
                        ? "bg-white/15 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-300 ${theme.button}`}
            >
              Buka di tab baru
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatCard = ({ value, label }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center backdrop-blur-sm">
    <div className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
      {value}
    </div>
    <div className="mt-1 text-xs text-gray-400 sm:text-sm">{label}</div>
  </div>
);

const CertificatesSection = () => {
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("desc");
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const items = useMemo(() => {
    const filtered =
      filter === "all"
        ? certificates
        : certificates.filter((c) => c.category === filter);
    return withYearMarkers(sortCertificates(filtered, order));
  }, [filter, order]);

  const countOf = (id) =>
    id === "all"
      ? certificates.length
      : certificates.filter((c) => c.category === id).length;

  const years = certificates.map((c) => c.year).filter(Boolean);
  const yearRange = `${Math.min(...years)} – ${Math.max(...years)}`;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04081A] pb-20 pt-32">
      {/* Latar: grid + cahaya lembut */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(217,164,65,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(217,164,65,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-96 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
            </span>
            Rekam Jejak
          </span>
          <h2 className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Sertifikat & Pencapaian
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Sertifikasi, Hak Cipta Program Komputer, prestasi, organisasi,
            seminar, dan kursus yang pernah saya ikuti.
          </p>
        </motion.div>

        {/* Ringkasan */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-10 grid max-w-2xl grid-cols-3 gap-3"
        >
          <StatCard value={certificates.length} label="Sertifikat" />
          <StatCard value={yearRange} label="Rentang tahun" />
          <StatCard value={countOf("hki")} label="Hak Cipta DJKI" />
        </motion.div>

        {/* Filter + urutan */}
        <div className="mb-10 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div
            role="group"
            aria-label="Filter sertifikat"
            className="flex flex-wrap justify-center gap-2"
          >
            {FILTERS.map(({ id, label }) => {
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(id)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "border-teal-400/60 bg-teal-500/15 text-white"
                      : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {label}
                  <span className="ml-2 text-xs opacity-60">{countOf(id)}</span>
                </button>
              );
            })}
          </div>

          <div
            role="group"
            aria-label="Urutan tahun"
            className="flex shrink-0 rounded-full border border-white/10 p-1"
          >
            {SORTS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={order === id}
                onClick={() => setOrder(id)}
                className={`rounded-full px-4 py-1 text-sm font-medium transition-colors duration-300 ${
                  order === id
                    ? "bg-white/15 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) =>
              item.type === "year" ? (
                <YearMarker key={item.key} year={item.year} count={item.count} />
              ) : (
                <CertificateCard
                  key={item.key}
                  cert={item.cert}
                  onPreview={setPreview}
                />
              )
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {preview && <Lightbox cert={preview} onClose={closePreview} />}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;