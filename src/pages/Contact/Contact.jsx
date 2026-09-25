import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Loader2,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/AlfindraHabib",
    icon: Github,
    handle: "@AlfindraHabib",
    color: "hover:border-teal-400/50 hover:bg-teal-500/10",
    iconColor: "text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alfindra-habib-nugroho-173289265/",
    icon: Linkedin,
    handle: "Alfindra Habib Nugroho",
    color: "hover:border-amber-400/50 hover:bg-amber-500/10",
    iconColor: "text-amber-400",
  },
];

const BADGES = [
  "Biasanya membalas dalam 24 jam",
  "Terbuka untuk peluang kerja",
  "Berdomisili di Yogyakarta",
];

const CONTACT_INFO = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "alfindrahabib384@gmail.com",
    href: "mailto:alfindrahabib384@gmail.com",
    bg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    copyable: true,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Telepon",
    value: "+62 815-5496-3011",
    href: "tel:+6281554963011",
    bg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    copyable: true,
  },
  {
    id: "location",
    icon: MapPin,
    label: "Lokasi",
    value: "Gamping, Sleman, Yogyakarta",
    href: null,
    bg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    copyable: false,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, value) => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1800);
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Nama wajib diisi";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subjek wajib diisi";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Pesan wajib diisi";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ type: "error", message: "Mohon lengkapi semua kolom yang wajib diisi dengan benar." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703"); // Ganti dengan access key Web3Forms Anda
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "Pesan Baru dari Formulir Kontak");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Pesan berhasil terkirim! Saya akan segera membalas." });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus({ type: "error", message: result.message || "Terjadi kesalahan saat mengirim pesan Anda." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Terjadi kesalahan. Silakan coba lagi." });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg bg-white/5 border ${
      errors[field] ? "border-red-500" : "border-gray-700"
    } focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-200 placeholder:text-gray-500`;

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen relative overflow-hidden">
      {/* Latar belakang dekoratif */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_40%,#000_60%,transparent_100%)]" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />
      {/* Titik aksen mengambang, senada dengan sparkle di Home */}
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="pointer-events-none absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-teal-300"
      />
      <motion.span
        animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="pointer-events-none absolute right-[18%] top-[16%] h-1 w-1 rounded-full bg-amber-300"
      />
      <motion.span
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="pointer-events-none absolute right-[30%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-teal-300"
      />

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info Kontak */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 mb-4">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
                  </span>
                  Yuk, Ngobrol
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  Mari{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
                    Terhubung
                  </span>
                </h2>
                <p className="text-gray-300 text-lg max-w-md">
                  Punya pertanyaan atau ingin berkolaborasi? Kirim pesan —
                  biasanya saya balas dalam satu hingga dua hari.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {CONTACT_INFO.map(({ id, icon: Icon, label, value, href, bg, iconColor, copyable }) => {
                  const Wrapper = href ? "a" : "div";
                  const isCopied = copiedId === id;
                  return (
                    <motion.div
                      key={id}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.05]"
                    >
                      <Wrapper {...(href ? { href } : {})} className="flex items-center space-x-4 min-w-0">
                        <div className={`${bg} p-3 rounded-lg shrink-0`}>
                          <Icon className={`w-6 h-6 ${iconColor}`} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold">{label}</h3>
                          <p className="text-gray-400 truncate">{value}</p>
                        </div>
                      </Wrapper>
                      {copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(id, value)}
                          aria-label={`Salin ${label}`}
                          className="shrink-0 rounded-lg p-2 text-gray-500 opacity-0 transition-all duration-200 hover:bg-white/10 hover:text-white group-hover:opacity-100"
                        >
                          {isCopied ? (
                            <Check className="h-4 w-4 text-teal-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">
                  Temukan Saya di
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map(({ name, href, icon: Icon, handle, color, iconColor }) => (
                    <motion.a
                      key={name}
                      whileHover={{ y: -3 }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors duration-300 ${color}`}
                    >
                      <Icon className={`w-5 h-5 ${iconColor} transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-sm">
                        <span className="block font-semibold text-white">{name}</span>
                        <span className="block text-xs text-gray-400 group-hover:text-gray-300">
                          {handle}
                        </span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500/30 to-teal-500/30 opacity-40 blur-lg" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1024] shadow-2xl shadow-black/40 backdrop-blur-lg">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-gray-400">sendMessage.js</span>
                </div>

                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Nama Anda"
                          className={inputClass("name")}
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email Anda"
                          className={inputClass("email")}
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Subjek"
                          className={inputClass("subject")}
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <textarea
                          placeholder="Pesan Anda"
                          rows="4"
                          className={`${inputClass("message")} resize-none`}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-400 to-teal-400 text-[#04081A] py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Mengirim...</span>
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Pesan status */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 flex items-center justify-center gap-2 text-center text-sm ${
                        status.type === "success" ? "text-teal-400" : "text-red-400"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 shrink-0" />
                      )}
                      <p>{status.message}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}