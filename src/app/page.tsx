"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Eye,
  Target,
  CheckCircle2,
  Building2,
  Home,
  Wrench,
  Hammer,
  MapPin,
  Mail,
  Phone,
  Send,
  Star,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <Image
              src="/asset/Logo GMU.png"
              alt="Logo Gilang Jaya Utama"
              width={100}
              height={50}
              className="w-20 sm:w-24 h-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              "home",
              "about",
              "project",
              "services",
              "client",
              "blog",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white text-xs font-semibold capitalize hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-3 bg-gold text-dark text-xs font-bold rounded hover:bg-white transition-colors duration-300"
          >
            Konsultasi
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#111111] px-6 py-6 flex flex-col gap-4 border-t border-white/10 shadow-2xl">
            {[
              "home",
              "about",
              "project",
              "services",
              "client",
              "blog",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-sm font-semibold capitalize hover:text-gold py-1 border-b border-neutral-800/50"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-3 bg-gold text-dark text-xs font-bold rounded mt-2"
            >
              Konsultasi
            </a>
          </nav>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-[100dvh] flex items-center overflow-hidden text-white pt-24 pb-16 sm:py-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={(node) => {
            if (node) node.muted = true;
          }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/asset/video_1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10" />

        <div className="relative z-20 max-w-[1200px] mx-auto px-4 w-full">
          <span className="text-gold text-[11px] sm:text-xs font-bold tracking-[3px] sm:tracking-[4px] uppercase block mb-3">
            BUILDING THE FUTURE
          </span>
          <h1 className="text-3xl sm:text-6xl lg:text-[76px] font-extrabold leading-[1.15] sm:leading-[1.1] max-w-[850px] mb-4 sm:mb-5">
            Membangun Masa Depan <br />
            <span className="text-gold">Dengan Kualitas Terbaik</span>
          </h1>
          <p className="max-w-[650px] text-neutral-300 text-xs sm:text-base mb-8 leading-relaxed">
            Kami menghadirkan solusi konstruksi profesional, berkualitas dan
            terpercaya untuk mewujudkan bangunan impian Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gold text-dark text-xs font-bold rounded hover:bg-white transition-all duration-300"
            >
              Lihat Project <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-white text-white text-xs font-bold rounded hover:bg-white hover:text-dark transition-all duration-300"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold z-20"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative h-[320px] sm:h-[550px] lg:h-[700px] w-full rounded overflow-hidden shadow-md">
              <Image
                src="/asset/Gilang Jaya Construction Worker Directing Site.png"
                alt="Tim konstruksi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-3 sm:-right-6 bottom-4 sm:bottom-8 bg-gold text-dark p-4 sm:p-8 flex flex-col shadow-xl rounded-sm">
              <strong className="text-3xl sm:text-5xl font-extrabold leading-none">
                15+
              </strong>
              <span className="text-[10px] sm:text-[11px] font-bold mt-1 uppercase tracking-wider">
                Tahun Pengalaman
              </span>
            </div>
          </div>

          <div>
            <span className="text-gold text-[11px] sm:text-xs font-extrabold tracking-[3px] uppercase block mb-2">
              ABOUT COMPANY
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Membangun Dengan <br />
              <span className="text-gold">Integritas & Kualitas</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mb-4 leading-relaxed">
              Gilang Jaya Utama adalah perusahaan yang bergerak di bidang
              konstruksi dan pembangunan dengan mengutamakan kualitas, ketepatan
              waktu dan keselamatan kerja.
            </p>
            <p className="text-neutral-600 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
              Kami didukung oleh tenaga profesional dan berpengalaman dalam
              menangani berbagai jenis proyek konstruksi, mulai dari bangunan
              komersial, hunian hingga pembangunan perumahan.
            </p>

            {/* VISI & MISI */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white border-l-4 border-gold shadow-sm">
                <div className="min-w-[40px] h-[40px] sm:min-w-[45px] sm:h-[45px] bg-dark text-gold flex items-center justify-center rounded-sm shrink-0">
                  <Eye size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-dark mb-1">
                    Visi
                  </h3>
                  <p className="text-neutral-600 text-xs leading-relaxed">
                    Menjadi perusahaan konstruksi terpercaya yang mengutamakan
                    kualitas, profesionalisme, inovasi, dan kepuasan pelanggan.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white border-l-4 border-gold shadow-sm">
                <div className="min-w-[40px] h-[40px] sm:min-w-[45px] sm:h-[45px] bg-dark text-gold flex items-center justify-center rounded-sm shrink-0">
                  <Target size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-dark mb-2">
                    Misi
                  </h3>
                  <ul className="space-y-1">
                    {[
                      "Mengutamakan kualitas dalam setiap pekerjaan.",
                      "Memberikan pelayanan profesional dan transparan.",
                      "Menyelesaikan proyek tepat waktu.",
                      "Mengutamakan keselamatan dan keamanan kerja.",
                      "Mengembangkan inovasi dan teknologi konstruksi.",
                      "Membangun SDM yang kompeten.",
                    ].map((misi, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-600 text-xs list-disc list-inside leading-relaxed"
                      >
                        {misi}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              {[
                "Tenaga Profesional",
                "Kualitas Terjamin",
                "Tepat Waktu",
                "Keselamatan Kerja",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold"
                >
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-dark text-white text-xs font-bold rounded hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Tentang Kami <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section id="project" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <span className="text-gold text-[11px] sm:text-xs font-extrabold tracking-[3px] uppercase block mb-2">
                OUR PROJECT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                Proyek Yang Telah <br className="hidden sm:block" />
                <span className="text-gold">Kami Kerjakan</span>
              </h2>
            </div>
            <p className="max-w-[480px] text-neutral-500 text-xs sm:text-sm">
              Beberapa proyek konstruksi yang telah kami selesaikan dengan
              standar kualitas dan profesionalisme tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                title: "Pembangunan Perumahan",
                category: "PERUMAHAN",
                img: "/asset/Perumahan.jpg",
              },
              {
                title: "Pembangunan Rumah Tinggal",
                category: "RUMAH TINGGAL",
                img: "/asset/Rumah Tinggal.jpg",
              },
              {
                title: "Desain Rumah Modern",
                category: "HUNIAN MODERN",
                img: "/asset/Modern Minimalist Home After Rain.png",
              },
              {
                title: "Proses Pembangunan Rumah",
                category: "PEMBANGUNAN RUMAH",
                img: "/asset/Sunny Residential Construction Site.png",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="group relative h-[320px] sm:h-[420px] overflow-hidden rounded-sm"
              >
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                  <span className="text-gold text-[10px] font-bold tracking-widest block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {proj.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-bold hover:text-gold transition-colors"
                  >
                    Lihat Project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-16 sm:py-24 bg-dark text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-12">
            <span className="text-gold text-[11px] sm:text-xs font-extrabold tracking-[3px] uppercase block mb-2">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-3 sm:mb-4">
              Solusi Konstruksi <span className="text-gold">Profesional</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Kami menyediakan berbagai layanan konstruksi untuk memenuhi
              kebutuhan pembangunan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Perumahan",
                desc: "Pembangunan perumahan dan bangunan komersial dengan standar kualitas terbaik.",
                icon: (
                  <Building2 className="text-gold size-8 sm:size-9 mb-4 sm:mb-6" />
                ),
              },
              {
                title: "Rumah Tinggal",
                desc: "Membangun hunian nyaman, modern dan sesuai kebutuhan keluarga.",
                icon: (
                  <Home className="text-gold size-8 sm:size-9 mb-4 sm:mb-6" />
                ),
              },
              {
                title: "Renovation",
                desc: "Renovasi dan perbaikan bangunan agar kembali nyaman, aman dan bernilai.",
                icon: (
                  <Wrench className="text-gold size-8 sm:size-9 mb-4 sm:mb-6" />
                ),
              },
              {
                title: "Pembangunan Rumah",
                desc: "Pekerjaan pembangunan rumah dan renovasi rumah tinggal.",
                icon: (
                  <Hammer className="text-gold size-8 sm:size-9 mb-4 sm:mb-6" />
                ),
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 border border-neutral-800 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all duration-300 rounded-sm"
              >
                <div className="group-hover:[&>svg]:text-dark transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 group-hover:text-neutral-800 mb-5 leading-relaxed">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold group-hover:text-dark"
                >
                  Selengkapnya <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIAL ================= */}
      <section id="client" className="py-16 sm:py-24 bg-[#f6f6f6]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-12">
            <span className="text-gold text-[11px] sm:text-xs font-extrabold tracking-[3px] uppercase block mb-2">
              CLIENT TESTIMONIAL
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold">
              Apa Kata <span className="text-gold">Client Kami?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                quote:
                  "Tim sangat profesional dan komunikatif. Proses pembangunan berjalan sesuai rencana dan hasilnya sangat memuaskan.",
                name: "Mukhlis",
                role: "Direktur PT Gemini Grafika",
                score: "5.0",
                img: "/asset/Ulis.png",
              },
              {
                quote:
                  "Kualitas pekerjaan sangat baik. Komunikasi dengan tim juga mudah sehingga setiap proses dapat dipantau dengan jelas.",
                name: "Roy K",
                role: "Manager",
                score: "4.8",
                img: "/asset/Roy K.png",
              },
              {
                quote:
                  "Pelayanan profesional dan pengerjaan sesuai dengan target waktu. Kami sangat terbantu dengan tim Gilang Jaya Utama.",
                name: "Yeni",
                role: "Business Consultant",
                score: "4.5",
                img: "/asset/Clien.png",
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 border border-neutral-200 shadow-sm rounded-sm"
              >
                <div className="flex items-center gap-2 text-gold mb-4 sm:mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-neutral-500 text-xs ml-1">
                    {testi.score}
                  </span>
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm italic mb-6 sm:mb-8 leading-relaxed">
                  "{testi.quote}"
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testi.img}
                      alt={testi.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-dark mb-0.5">
                      {testi.name}
                    </h4>
                    <span className="text-[10px] sm:text-[11px] text-neutral-400 block">
                      {testi.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section id="blog" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <span className="text-gold text-[11px] sm:text-xs font-extrabold tracking-[3px] uppercase block mb-2">
                CONSTRUCTION BLOG
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold">
                Informasi & Insight{" "}
                <span className="text-gold">Konstruksi</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-dark text-white text-xs font-bold rounded hover:bg-gold hover:text-dark transition-colors self-start w-full sm:w-auto"
            >
              Semua Artikel
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Pentingnya Keselamatan Kerja Dalam Proyek Konstruksi",
                category: "SAFETY",
                desc: "Keselamatan kerja menjadi salah satu faktor utama dalam memastikan proyek berjalan aman dan profesional.",
                img: "/asset/K3.jpg",
              },
              {
                title: "Teknologi Modern Untuk Industri Konstruksi",
                category: "TECHNOLOGY",
                desc: "Pemanfaatan teknologi membantu meningkatkan efisiensi dan kualitas pekerjaan konstruksi.",
                img: "/asset/Teknologi Kontruksi.PNG",
              },
              {
                title: "Cara Mengelola Proyek Konstruksi Secara Profesional",
                category: "PROJECT",
                desc: "Perencanaan dan manajemen yang baik menjadi kunci keberhasilan sebuah proyek konstruksi.",
                img: "/asset/Manageman proyek.PNG",
              },
            ].map((article, idx) => (
              <article
                key={idx}
                className="group border border-neutral-200 overflow-hidden bg-white rounded-sm"
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-gold text-[10px] font-extrabold tracking-widest block mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-dark leading-snug mb-2 sm:mb-3">
                    {article.title}
                  </h3>
                  <p className="text-neutral-500 text-xs mb-5 leading-relaxed">
                    {article.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-bold text-dark hover:text-gold transition-colors"
                  >
                    Baca Selengkapnya <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <span className="text-gold text-[11px] sm:text-xs font-extrabold tracking-[3px] uppercase block mb-2">
              CONTACT US
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Mari Wujudkan{" "}
              <span className="text-gold">Proyek Impian Anda</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mb-8 leading-relaxed">
              Konsultasikan kebutuhan pembangunan Anda bersama tim kami. Kami
              siap membantu memberikan solusi konstruksi yang tepat.
            </p>

            <div className="flex flex-col gap-5 sm:gap-6 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark text-gold flex items-center justify-center shrink-0 rounded-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong className="text-xs font-bold block text-dark mb-1">
                    Alamat
                  </strong>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Perumahan Permata Nusa Indah Jaya Mulya, Blok B 15 No 35
                    <br />
                    Jl. Kp. Cigelam, Kec. Serang Baru, Kabupaten Bekasi, Jawa
                    Barat 17330
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark text-gold flex items-center justify-center shrink-0 rounded-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <strong className="text-xs font-bold block text-dark mb-1">
                    Email
                  </strong>
                  <p className="text-neutral-500 text-xs">
                    gilangjayautama@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark text-gold flex items-center justify-center shrink-0 rounded-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <strong className="text-xs font-bold block text-dark mb-1">
                    Phone / WhatsApp
                  </strong>
                  <p className="text-neutral-500 text-xs">+62 814-0071-5017</p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-2 mb-8 lg:mb-0">
              {[
                {
                  icon: <FaInstagram size={16} />,
                  url: "https://www.instagram.com/gilangjayautama/",
                },
                {
                  icon: <FaFacebookF size={16} />,
                  url: "https://www.facebook.com/profile.php?id=61595704733499",
                },
                {
                  icon: <FaTiktok size={16} />,
                  url: "https://www.tiktok.com/@gilangjayautama92?_r=1&_t=ZS-9Arx8TTLZ1l",
                },
                {
                  icon: <FaYoutube size={16} />,
                  url: "https://www.youtube.com/@GilangJayautama",
                },
                {
                  icon: <FaWhatsapp size={16} />,
                  url: "https://wa.me/6281400715017",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-6 sm:p-10 shadow-lg rounded-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-dark">
              Konsultasi Proyek
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-dark uppercase mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-3.5 py-3 border border-neutral-300 text-base sm:text-xs outline-none focus:border-gold transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-dark uppercase mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-3.5 py-3 border border-neutral-300 text-base sm:text-xs outline-none focus:border-gold transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-dark uppercase mb-1.5">
                  Nomor WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-3.5 py-3 border border-neutral-300 text-base sm:text-xs outline-none focus:border-gold transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-dark uppercase mb-1.5">
                  Jenis Proyek
                </label>
                <select className="w-full px-3.5 py-3 border border-neutral-300 text-base sm:text-xs outline-none focus:border-gold transition-colors rounded-sm bg-white">
                  <option>Pilih jenis proyek</option>
                  <option>Pembangunan Perumahan</option>
                  <option>Renovasi Rumah</option>
                  <option>Renovasi</option>
                  <option>Pembangunan Rumah</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-dark uppercase mb-1.5">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan proyek Anda"
                  className="w-full px-3.5 py-3 border border-neutral-300 text-base sm:text-xs outline-none focus:border-gold transition-colors rounded-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-dark text-xs font-bold rounded flex items-center justify-center gap-2 hover:bg-dark hover:text-white transition-colors duration-300"
              >
                Kirim Konsultasi <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-dark-surface text-white pt-14 sm:pt-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12">
          <div>
            <a href="#home" className="inline-block mb-3">
              <Image
                src="/asset/Logo GMU.png"
                alt="Logo Gilang Jaya Utama"
                width={130}
                height={45}
                className="w-32 sm:w-36 h-auto object-contain"
              />
            </a>
            <p className="text-neutral-400 text-xs mb-5 max-w-[280px] leading-relaxed">
              Membangun masa depan dengan kualitas, integritas dan
              profesionalisme.
            </p>
            <div className="flex gap-2">
              {[
                {
                  icon: <FaInstagram size={14} />,
                  url: "https://www.instagram.com/gilangjayautama/",
                },
                {
                  icon: <FaFacebookF size={14} />,
                  url: "https://www.facebook.com/profile.php?id=61595704733499",
                },
                {
                  icon: <FaTiktok size={14} />,
                  url: "https://www.tiktok.com/@rehania071181?_r=1&_t=ZS-9Ag66Jb78Ra",
                },
                {
                  icon: <FaYoutube size={14} />,
                  url: "https://www.youtube.com/@GilangJayautama",
                },
                {
                  icon: <FaWhatsapp size={14} />,
                  url: "https://wa.me/6281400715017",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold text-xs sm:text-sm mb-3">
              Company
            </h4>
            <div className="flex flex-col gap-2 text-xs text-neutral-400">
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
              <a href="#project" className="hover:text-white transition-colors">
                Project
              </a>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
              <a href="#client" className="hover:text-white transition-colors">
                Client
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold text-xs sm:text-sm mb-3">
              Information
            </h4>
            <div className="flex flex-col gap-2 text-xs text-neutral-400">
              <a href="#blog" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold text-xs sm:text-sm mb-3">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                gilangjayautama@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp size={14} className="text-gold shrink-0" />
                +62 814-0071-5017
              </p>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>
                  Perumahan Permata Nusa Indah Jaya Mulya, Blok B 15 No 35, Jl.
                  Kp. Cigelam, Kec. Serang Baru, Kabupaten Bekasi, Jawa Barat
                  17330
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800/80 py-5 px-4 text-center sm:text-left">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between gap-2 text-neutral-500 text-[11px]">
            <p>© 2026 Gilang Jaya Utama. All Rights Reserved.</p>
            <p>Designed with Gilang Jaya Utama.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
