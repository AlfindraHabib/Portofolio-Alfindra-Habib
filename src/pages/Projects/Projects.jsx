import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

import luxeJogjaImg from "/src/assets/images/luxe-jogja.jpeg";
import farmonautImg from "/src/assets/images/farmonaut.jpeg";
import siPadiImg from "/src/assets/images/Si Padi.jpeg";
import agripadiImg from "/src/assets/images/Agripadi.jpeg";
import padiWarasImg from "/src/assets/images/Padi Waras.jpeg";

// Sertifikat HKI
import hkiPadiWaras from "/src/assets/HKI/sertifikat_HKI_PadiWaras.pdf";
import hkiLuxeJogja from "/src/assets/HKI/sertifikat HKI - LuxeJogja.pdf";
import hkiAgripadi from "/src/assets/HKI/sertifikat_HKI_Agripadi.pdf";

const projects = [
    {
    title: "Luxe Jogja — Sistem Rekomendasi Penginapan",
    description:
      "Sistem rekomendasi penginapan untuk destinasi wisata Yogyakarta menggunakan React sebagai frontend dan Flask sebagai backend, menghasilkan luaran Hak Cipta Program Komputer terdaftar DJKI pada 2025.",
    image: luxeJogjaImg,
    color: "#8f89ff",
    imageFit: "cover",
    githubLink: "https://github.com/AlfindraHabib/LUXE-JOGJA.git",
    liveLink: "https://luxe-jogja-kygr.vercel.app",
    hkiLink: hkiLuxeJogja,
  },
  {
    title: "Agripadi - Aplikasi Sistem Pakar Deteksi Hama & Penyakit Padi",
    description:
      "Sistem pakar untuk deteksi hama & penyakit tanaman padi menggunakan Metode Certainty Factor, dikembangkan bersama dosen dengan Flutter sebagai frontend & Flask sebagai backend. Menghasilkan 2 Hak Cipta Program Komputer terdaftar DJKI.",
    image: agripadiImg,
    color: "#ed649e",
    imageFit: "contain",
    githubLink: "https://github.com/AlfindraHabib/Si-Padi-Website-Pendeteksi-Penyakit-Daun-Padi-.git",
    liveLink: "#",
    hkiLink: hkiAgripadi,
  },
  {
    title: "Si Padi - Website Pendeteksi Penyakit Daun Padi Berbasis Citra",
    // TODO: ganti dengan deskripsi asli (sebelumnya salin dari Luxe Jogja)
    description:
      "Website pendeteksi penyakit daun padi berbasis citra, dibangun dengan React sebagai frontend dan Flask sebagai backend.",
    image: siPadiImg,
    color: "#8f89ff",
    imageFit: "cover",
    githubLink: "https://github.com/AlfindraHabib/Si-Padi-Website-Pendeteksi-Penyakit-Daun-Padi-.git",
    liveLink: "https://si-padi-website-pendeteksi-penyakit.vercel.app/",
    hkiLink: null,
  },
    {
    title: "Padi Waras — Website Sistem Pakar Klasifikasi Penyakit Tanaman Padi",
    description:
      "Sistem web berbasis Metode Certainty Factor untuk mendukung identifikasi penyakit tanaman padi secara digital. Dibangun dengan arsitektur React + Vite sebagai frontend dan Flask sebagai backend.",
    image: padiWarasImg,
    color: "#5196fd",
    imageFit: "cover",
    githubLink: "https://github.com/username/padi-waras",
    liveLink: "https://padiwaras.my.id",
    hkiLink: hkiPadiWaras,
  },
    {
    title: "Farmonaut — Aplikasi Klasifikasi Penyakit Daun Padi Berbasis Citra",
    description:
      "Aplikasi mobile klasifikasi penyakit daun padi menggunakan CNN Transfer Learning (MobileNetV2, VGG16, NASNetMobile) dengan akurasi ±97%. Dibangun dengan Flutter & Flask, dilengkapi fitur riwayat klasifikasi, tips perawatan tanaman, dan analisis confusion matrix.",
    image: farmonautImg,
    color: "#4ade80",
    imageFit: "contain",
    githubLink: "https://github.com/AlfindraHabib/Farmonaut-APK-Pendeteksi-Penyakit-Padi-",
    liveLink: "#",
    hkiLink: null,
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
      className="flex items-center gap-2"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon color={color} />
      <span className="text-xs md:text-sm font-medium" style={{ color }}>
        {label}
      </span>
    </motion.a>
  );
}

function Card({
  i,
  title,
  description,
  image,
  color,
  githubLink,
  liveLink,
  hkiLink,
  imageFit,
}) {
  const isContain = imageFit === "contain";

  return (
    <motion.div
      className="snap-start shrink-0 xl:shrink w-[280px] sm:w-[340px] md:w-[380px] xl:w-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className="w-full h-full flex flex-col bg-zinc-900 rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        {/* Image */}
        <div
          className={`w-full relative overflow-hidden ${
            isContain
              ? "h-[320px] md:h-[380px] bg-zinc-950 flex items-center justify-center"
              : "h-[220px] md:h-[280px]"
          }`}
        >
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

          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
            Project {i + 1}
          </div>

          {hkiLink && (
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <MedalIcon size={12} />
              HKI
            </div>
          )}
        </div>

        {/* Content */}
        <div className="w-full p-5 md:p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div
                className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div className="h-[1px] w-12 bg-gray-600" />
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
              {title}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
              {description}
            </p>
          </div>

          <div className="mt-4 pt-4">
            <div className="w-full h-[1px] bg-gray-800 mb-4" />
            <div className="flex items-center gap-4">
              <ProjectLink href={githubLink} label="Code" color={color} icon={GithubIcon} />
              <ProjectLink href={liveLink} label="Live" color={color} icon={GlobeIcon} />
              {hkiLink && (
                <ProjectLink href={hkiLink} label="HKI" color={color} icon={MedalIcon} />
              )}
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

  return (
    <ReactLenis root>
      <main className="bg-black min-h-screen">
        <section
          id="projects"
          className="text-white w-full bg-slate-950 py-16 md:py-24 min-h-screen"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 px-4">
            Projects
          </h2>

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
              {projects.map((project, i) => (
                <Card key={project.title} i={i} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
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

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  hkiLink: PropTypes.string,
  imageFit: PropTypes.string,
};