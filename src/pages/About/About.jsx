import HeroImg from "@/assets/images/Alfindra Habib BG Merah.png";
import { motion } from "framer-motion";

const stats = [
  { value: "3.74", label: "IPK / 4.00", accent: "teal" },
  { value: "3", label: "Hak Cipta terdaftar DJKI", accent: "amber" },
];

const accentClasses = {
  teal: { text: "text-teal-400", dot: "bg-teal-400" },
  amber: { text: "text-amber-400", dot: "bg-amber-400" },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#04081A] py-16 text-white md:py-32"
    >
      {/* Decorative background, matching Home & Contact */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,#000_50%,transparent_100%)]" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
          </span>
          Sedikit tentang saya
        </span>

        <h2 className="max-w-2xl text-4xl font-medium leading-tight text-white lg:text-5xl">
          Developer, Researcher,{" "}
          <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
            Innovator
          </span>
        </h2>

        {/* Angka pencapaian sebagai lanjutan langsung dari headline */}
        <div className="mt-10 flex max-w-xl gap-8 border-t border-white/10 pt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={index > 0 ? "border-l border-white/10 pl-8" : ""}
            >
              <div
                className={`text-3xl font-semibold lg:text-4xl ${accentClasses[stat.accent].text}`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal-400/30 via-amber-400/20 to-transparent blur-sm" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={HeroImg}
                className="h-full w-full object-cover object-top"
                alt="Alfindra Habib Nugroho"
                width={929}
                height={1207}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-transparent" />
            </div>

            {/* Chip mengambang, konsisten dengan badge di Home */}
            {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#0a1024]/90 px-4 py-2 text-xs font-medium text-gray-200 shadow-lg shadow-black/40 backdrop-blur-sm">
              <span className="text-amber-400">3x</span> Hak Cipta DJKI terdaftar
            </div> */}
          </div>

          <div className="space-y-5">
            <p className="text-gray-300">
              Halo! Saya Alfindra Habib Nugroho, seorang Full-Stack &amp;
              Software Engineer yang berfokus pada pengembangan aplikasi web
              dan mobile menggunakan Laravel, React, Flask, dan Flutter,
              dengan ketertarikan besar pada penerapan Machine Learning untuk
              menyelesaikan masalah nyata.
            </p>
            <p className="text-gray-300">
              Fokus saya adalah membangun aplikasi yang tidak hanya
              fungsional, tapi juga efisien dan mudah digunakan. Saat ini
              saya terus memperdalam riset di bidang Machine Learning &amp;
              Sistem Pakar, sambil terus mengasah kemampuan full-stack
              development untuk membangun produk yang solid dari sisi
              frontend hingga backend.
            </p>

            {/* Kutipan bergaya jendela kode, senada dengan panel developer.js di Home */}
            <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0a1024] shadow-xl shadow-black/30">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-gray-400">
                  farmonaut.md
                </span>
              </div>
              <blockquote className="px-5 py-5">
                <p className="font-mono text-sm leading-relaxed text-gray-300">
                  <span className="text-amber-400/70">// </span>
                  Saya percaya belajar adalah proses tanpa akhir. Melalui
                  riset bersama dosen dan tim, saya ikut menghasilkan
                  beberapa Program Komputer yang terdaftar di DJKI, salah
                  satunya{" "}
                  <span className="text-teal-400">Farmonaut</span> — aplikasi
                  klasifikasi penyakit daun padi berbasis CNN Transfer
                  Learning. Saya ingin terus berkontribusi membangun solusi
                  teknologi yang memberi dampak nyata.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-teal-400 to-amber-400" />
                  <cite className="not-italic text-sm font-medium text-white">
                    Alfindra Habib Nugroho, Creator of Farmonaut
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}