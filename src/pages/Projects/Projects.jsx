import { ReactLenis } from "lenis/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Code2, Eye, Layers, Medal, Smartphone, Sparkles, X } from "lucide-react";

import luxeJogjaImg from "/src/assets/images/luxe-jogja.jpeg";
import farmonautImg from "/src/assets/images/farmonaut.jpeg";
import siPadiImg from "/src/assets/images/Si Padi.jpeg";
import agripadiImg from "/src/assets/images/Agripadi.jpeg";
import padiWarasImg from "/src/assets/images/Padi Waras.jpeg";
import portoImg from "/src/assets/images/porto.jpeg";

// Sertifikat HKI
import hkiPadiWaras from "/src/assets/HKI/sertifikat_HKI_PadiWaras.pdf";
import hkiLuxeJogja from "/src/assets/HKI/sertifikat HKI - LuxeJogja.pdf";
import hkiAgripadi from "/src/assets/HKI/sertifikat_HKI_Agripadi.pdf";

// Tiap project: title, description, tech (array badge stack), color (aksen),
// image (opsional — tanpa gambar akan tampil ikon Code2 dengan gradasi warna
// project itu sendiri, seperti kartu HKI di halaman Certificates), imageFit,
// githubLink, liveLink ("#" bila belum ada demo publik), hkiLink (opsional),
// featured (opsional, memberi label "Featured"), category ("web" | "mobile",
// dipakai filter di atas grid).
const projects = [
  {
    title: "Luxe Jogja — Sistem Rekomendasi Penginapan",
    category: "web",
    description:
      "Sistem rekomendasi penginapan untuk destinasi wisata Yogyakarta menggunakan React sebagai frontend dan Flask sebagai backend, menghasilkan luaran Hak Cipta Program Komputer terdaftar DJKI pada 2025.",
    tech: ["React", "Flask", "Python"],
    image: luxeJogjaImg,
    color: "#8f89ff",
    imageFit: "cover",
    githubLink: "https://github.com/AlfindraHabib/LUXE-JOGJA.git",
    liveLink: "https://luxe-jogja-kygr.vercel.app",
    hkiLink: hkiLuxeJogja,
  },
  {
    title: "Agripadi - Aplikasi Sistem Pakar Deteksi Hama & Penyakit Padi",
    category: "mobile",
    description:
      "Sistem pakar untuk deteksi hama & penyakit tanaman padi menggunakan Metode Certainty Factor, dikembangkan bersama dosen dengan Flutter sebagai frontend & Flask sebagai backend. Menghasilkan 2 Hak Cipta Program Komputer terdaftar DJKI.",
    tech: ["Flutter", "Flask", "Certainty Factor"],
    image: agripadiImg,
    color: "#ed649e",
    imageFit: "contain",
    githubLink:
      "https://github.com/AlfindraHabib/Si-Padi-Website-Pendeteksi-Penyakit-Daun-Padi-.git",
    liveLink: "#",
    hkiLink: hkiAgripadi,
  },
  {
    title: "Si Padi - Website Pendeteksi Penyakit Daun Padi Berbasis Citra",
    category: "web",
    // TODO: ganti dengan deskripsi asli (sebelumnya salin dari Luxe Jogja)
    description:
      "Website pendeteksi penyakit daun padi berbasis citra, dibangun dengan React sebagai frontend dan Flask sebagai backend.",
    tech: ["React", "Flask"],
    image: siPadiImg,
    color: "#8f89ff",
    imageFit: "cover",
    githubLink:
      "https://github.com/AlfindraHabib/Si-Padi-Website-Pendeteksi-Penyakit-Daun-Padi-.git",
    liveLink: "https://si-padi-website-pendeteksi-penyakit.vercel.app/",
    hkiLink: null,
  },
  {
    title: "Padi Waras — Website Sistem Pakar Klasifikasi Penyakit Tanaman Padi",
    category: "web",
    description:
      "Sistem web berbasis Metode Certainty Factor untuk mendukung identifikasi penyakit tanaman padi secara digital. Dibangun dengan arsitektur React + Vite sebagai frontend dan Flask sebagai backend.",
    tech: ["React", "Vite", "Flask"],
    image: padiWarasImg,
    color: "#5196fd",
    imageFit: "cover",
    githubLink: "https://github.com/username/padi-waras",
    liveLink: "https://padiwaras.my.id",
    hkiLink: hkiPadiWaras,
  },
  {
    title: "Farmonaut — Aplikasi Klasifikasi Penyakit Daun Padi Berbasis Citra",
    category: "mobile",
    description:
      "Aplikasi mobile klasifikasi penyakit daun padi menggunakan CNN Transfer Learning (MobileNetV2, VGG16, NASNetMobile) dengan akurasi ±97%. Dibangun dengan Flutter & Flask, dilengkapi fitur riwayat klasifikasi, tips perawatan tanaman, dan analisis confusion matrix.",
    tech: ["Flutter", "Flask", "CNN Transfer Learning"],
    image: farmonautImg,
    color: "#4ade80",
    imageFit: "contain",
    githubLink: "https://github.com/AlfindraHabib/Farmonaut-APK-Pendeteksi-Penyakit-Padi-",
    liveLink: "#",
    hkiLink: null,
  },
  {
    title: "Portfolio Website — Personal Developer Portfolio",
    category: "web",
    description:
      "Website portofolio pribadi yang menampilkan proyek, pengalaman, sertifikat, dan Hak Cipta Program Komputer. Dibangun dengan React & Vite, animasi Framer Motion, dan styling Tailwind CSS, lengkap dengan mode one-page maupun multi-halaman.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    color: "#2dd4bf",
    image: portoImg,
    githubLink: "https://github.com/AlfindraHabib/Portofolio-Alfindra-Habib",
    liveLink: "https://portofolio-alfindra-habib.vercel.app/",
    hkiLink: null,
    featured: true,
  },
];

/* ---------- Icons ---------- */

const iconProps = (color) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const GithubIcon = ({ color, size = 20 }) => (
  <svg {...iconProps(color)} width={size} height={size}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const GlobeIcon = ({ color, size = 20 }) => (
  <svg {...iconProps(color)} width={size} height={size}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MedalIcon = ({ color = "currentColor", size = 20 }) => (
  <svg {...iconProps(color)} width={size} height={size}>
    <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M8.5 13.5 6 21l6-3 6 3-2.5-7.5" />
  </svg>
);

/* ---------- Components ---------- */

function ProjectLink({ href, label, color, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon color={color} size={16} />
      <span className="text-xs font-medium" style={{ color }}>
        {label}
      </span>
    </motion.a>
  );
}

function TechBadge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-gray-300">
      {children}
    </span>
  );
}

const FILTERS = [
  { id: "all", label: "Semua", icon: Layers },
  { id: "web", label: "Web", icon: Code2 },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

function FilterBar({ active, onChange, counts }) {
  return (
    <div
      role="group"
      aria-label="Filter project"
      className="relative mx-auto mb-10 flex w-fit flex-wrap justify-center gap-2 md:mb-14"
    >
      {FILTERS.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(id)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "border-teal-400/60 bg-teal-500/15 text-white"
                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
            <span className="text-xs opacity-60">{counts[id]}</span>
          </button>
        );
      })}
    </div>
  );
}

FilterBar.propTypes = {
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  counts: PropTypes.objectOf(PropTypes.number).isRequired,
};

// Pratinjau besar: gambar utuh, deskripsi lengkap, dan semua tautan.
function Lightbox({ project, onClose }) {
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

  const hasLive = Boolean(project.liveLink && project.liveLink !== "#");

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
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
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900"
      >
        <div
          className="h-1 w-full shrink-0"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent 130%)` }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-4 z-10 rounded-full bg-black/60 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-black/80 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="max-h-[50vh] shrink-0 overflow-hidden bg-zinc-950 sm:max-h-[55vh]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={`h-full w-full ${
                project.imageFit === "contain" ? "object-contain p-4" : "object-cover"
              }`}
            />
          ) : (
            <div
              className="flex h-64 items-center justify-center"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${project.color}33, transparent 60%)`,
              }}
            >
              <Code2 className="h-16 w-16 opacity-40" style={{ color: project.color }} strokeWidth={1.25} />
            </div>
          )}
        </div>

        <div className="shrink-0 space-y-4 overflow-y-auto p-5 sm:p-6">
          <div>
            <h3 className="pr-8 text-lg font-bold text-white sm:text-xl">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.description}</p>
          </div>

          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <ProjectLink href={project.githubLink} label="Code" color={project.color} icon={GithubIcon} />
            {hasLive && (
              <ProjectLink href={project.liveLink} label="Live" color={project.color} icon={GlobeIcon} />
            )}
            {project.hkiLink && (
              <ProjectLink href={project.hkiLink} label="HKI" color={project.color} icon={MedalIcon} />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Lightbox.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageFit: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    hkiLink: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

function Card({
  i,
  title,
  description,
  image,
  tech,
  color,
  githubLink,
  liveLink,
  hkiLink,
  imageFit,
  featured,
  onView,
}) {
  const isContain = imageFit === "contain";
  const hasLive = Boolean(liveLink && liveLink !== "#");

  return (
    <motion.div
      layout
      exit={{ opacity: 0, scale: 0.95 }}
      className="snap-start shrink-0 xl:shrink w-[280px] sm:w-[340px] md:w-[380px] xl:w-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div
        className={`group relative h-full w-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-xl shadow-black/30 transition-all duration-300 hover:shadow-2xl ${
          featured ? "border-amber-400/30" : "border-white/10 hover:border-white/25"
        }`}
        style={{ "--glow": color, boxShadow: "0 0 0 0 transparent" }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 60px -20px ${color}55`)}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
      >
        {/* Garis aksen atas, senada dengan kartu Certificates */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${color}, transparent 130%)` }}
        />

        <div className="flex h-[calc(100%-4px)] flex-col">
          {/* Media */}
          <div
            className={`relative w-full overflow-hidden ${
              isContain
                ? "h-[280px] md:h-[320px] bg-zinc-950 flex items-center justify-center"
                : "h-[200px] md:h-[240px] bg-zinc-950"
            }`}
          >
            {image ? (
              <>
                <motion.img
                  src={image}
                  alt={title}
                  draggable={false}
                  className={`pointer-events-none ${
                    isContain
                      ? "h-full w-auto max-w-full object-contain py-4"
                      : "w-full h-full object-cover"
                  }`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                {!isContain && (
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: color, mixBlendMode: "overlay" }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent" />
                <button
                  type="button"
                  onClick={() => onView?.()}
                  aria-label={`Lihat detail ${title}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Eye className="h-4 w-4" />
                    Lihat detail
                  </span>
                </button>
              </>
            ) : (
              // Tanpa gambar (mis. belum ada tangkapan layar): tampilkan
              // ikon dengan gradasi warna project, seperti kartu HKI di
              // halaman Certificates.
              <button
                type="button"
                onClick={() => onView?.()}
                aria-label={`Lihat detail ${title}`}
                className="absolute inset-0 flex h-full w-full items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${color}33, transparent 60%), radial-gradient(circle at 80% 80%, ${color}22, transparent 55%)`,
                }}
              >
                <Code2
                  className="h-16 w-16 opacity-40 transition-transform duration-500 group-hover:scale-110"
                  style={{ color }}
                  strokeWidth={1.25}
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Eye className="h-4 w-4" />
                    Lihat detail
                  </span>
                </span>
              </button>
            )}

            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
              Project {i + 1}
            </div>

            <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
              {featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur-md">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </span>
              )}
              {hkiLink && (
                <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  <Medal className="h-3 w-3" />
                  HKI
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex w-full flex-1 flex-col justify-between p-5 md:p-6">
            <div>
              <div className="mb-3 flex items-center gap-3 md:mb-4">
                <div
                  className="h-2 w-2 rounded-full md:h-3 md:w-3"
                  style={{ backgroundColor: color }}
                />
                <div className="h-px w-12 bg-gray-600" />
              </div>

              <h2 className="mb-2 text-lg font-bold text-white md:mb-3 md:text-xl">
                {title}
              </h2>
              <p className="line-clamp-4 text-sm leading-relaxed text-gray-400">
                {description}
              </p>

              {tech?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 pt-4">
              <div className="mb-4 h-px w-full bg-gray-800" />
              <div className="flex flex-wrap items-center gap-2">
                <ProjectLink href={githubLink} label="Code" color={color} icon={GithubIcon} />
                {hasLive && (
                  <ProjectLink href={liveLink} label="Live" color={color} icon={GlobeIcon} />
                )}
                {hkiLink && (
                  <ProjectLink href={hkiLink} label="HKI" color={color} icon={MedalIcon} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const handleDragStart = (e) => {
    isDragging.current = true;
    setIsPointerDown(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    setIsPointerDown(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.2;
  };

  const hkiCount = projects.filter((p) => p.hkiLink).length;
  const techCount = useMemo(
    () => new Set(projects.flatMap((p) => p.tech ?? [])).size,
    []
  );
  const filterCounts = useMemo(
    () => ({
      all: projects.length,
      web: projects.filter((p) => p.category === "web").length,
      mobile: projects.filter((p) => p.category === "mobile").length,
    }),
    []
  );
  const visibleProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <ReactLenis root>
      <main className="bg-black min-h-screen">
        <section
          id="projects"
          className="relative w-full overflow-hidden bg-slate-950 py-16 text-white md:py-24 min-h-screen"
        >
          {/* Latar: grid + cahaya lembut, senada dengan halaman Certificates */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
          <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-72 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mb-10 max-w-2xl px-4 text-center md:mb-14"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
              <Code2 className="h-3.5 w-3.5 text-teal-400" />
              What I've built
            </span>
            <h2 className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Projects
            </h2>
            <p className="mt-4 text-base text-gray-400 md:text-lg">
              Aplikasi web & mobile yang saya bangun, dari sistem pakar
              pertanian hingga portofolio ini sendiri.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto mb-10 flex max-w-lg items-center justify-center gap-3 px-4 md:mb-12"
          >
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{projects.length}</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{hkiCount}</div>
              <div className="text-xs text-gray-400">Hak Cipta DJKI</div>
            </div>
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{techCount}+</div>
              <div className="text-xs text-gray-400">Tech Stack</div>
            </div>
          </motion.div>

          <FilterBar active={filter} onChange={setFilter} counts={filterCounts} />

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-6 w-8 md:w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 xl:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-6 w-8 md:w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 xl:hidden" />

            <div
              ref={scrollRef}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onMouseMove={handleDragMove}
              className={`flex xl:grid xl:grid-cols-2 gap-6 overflow-x-auto xl:overflow-visible px-6 md:px-12 xl:px-20 pb-6 snap-x snap-mandatory xl:snap-none max-w-6xl mx-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isPointerDown ? "cursor-grabbing select-none" : "cursor-grab"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, i) => (
                  <Card
                    key={project.title}
                    i={i}
                    {...project}
                    onView={() => setActiveProject(project)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeProject && (
          <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}

const linkPropTypes = { color: PropTypes.string.isRequired };
GithubIcon.propTypes = linkPropTypes;
GlobeIcon.propTypes = linkPropTypes;
MedalIcon.propTypes = { color: PropTypes.string, size: PropTypes.number };

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

TechBadge.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  hkiLink: PropTypes.string,
  imageFit: PropTypes.string,
  featured: PropTypes.bool,
  onView: PropTypes.func,
};