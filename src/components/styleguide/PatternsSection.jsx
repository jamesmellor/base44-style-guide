import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import SectionHeader from './SectionHeader';

const BATH_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b29d8e095788643a94c057/7582c44e2_generated_939065c9.png';
const STUDENTS_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b29d8e095788643a94c057/bf376f827_generated_92cba8a7.png';

// Reusable decorative SVG patterns as components
function DotGridPattern({ id, color = "white", opacity = 0.07 }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={color} fillOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function CrosshatchPattern({ id, color = "white", opacity = 0.05 }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 0L32 32M32 0L0 32" stroke={color} strokeWidth="0.75" strokeOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function WavyLinesPattern({ id, color = "white", opacity = 0.06 }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="60" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke={color} strokeWidth="1" strokeOpacity={opacity} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

// Decorative blob SVGs — subtle, organic shapes for visual interest
// These replace busy patterns like crosshatch while maintaining text readability

function BlobTopRight({ color = "#E91E8C", opacity = 0.08, size = "w-80 h-80" }) {
  return (
    <svg className={`absolute -top-10 -right-10 ${size}`} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity }}>
      <path d="M220,30 C270,60 290,130 260,180 C230,230 160,260 110,240 C60,220 20,160 30,100 C40,40 100,10 150,10 C175,10 195,15 220,30 Z" fill={color} />
    </svg>
  );
}

function BlobBottomLeft({ color = "#2DD4A8", opacity = 0.06, size = "w-72 h-72" }) {
  return (
    <svg className={`absolute -bottom-20 -left-20 ${size}`} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity }}>
      <path d="M80,50 C30,80 10,150 50,200 C90,250 160,280 210,260 C260,240 280,180 270,120 C260,60 200,20 140,10 C110,5 85,20 80,50 Z" fill={color} />
    </svg>
  );
}

function BlobTopLeft({ color = "#F5A623", opacity = 0.07, size = "w-96 h-96" }) {
  return (
    <svg className={`absolute -top-20 -left-32 ${size}`} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity }}>
      <path d="M100,20 C160,10 230,40 250,100 C270,160 240,230 170,250 C100,270 30,240 20,170 C10,100 40,30 100,20 Z" fill={color} />
    </svg>
  );
}

function BlobBottomRight({ color = "#2DD4A8", opacity = 0.05, size = "w-96 h-96" }) {
  return (
    <svg className={`absolute -bottom-32 -right-20 ${size}`} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity }}>
      <path d="M200,30 C270,50 290,120 270,180 C250,240 180,280 110,260 C40,240 10,170 30,110 C50,50 120,10 200,30 Z" fill={color} />
    </svg>
  );
}

export default function PatternsSection() {
  return (
    <div id="patterns" className="scroll-mt-20">
      <SectionHeader
        label="Page Patterns"
        title="Hero & section patterns"
        description="Accessible, high-contrast hero layouts. Text lives on a solid background — never over an image. Decorative SVG patterns add creative character without sacrificing legibility."
      />

      {/* ── Hero Variant 1: Split — Text Left / Image Right ── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Hero Variant 1</h3>
          <span className="px-2 py-0.5 rounded-full bg-[#D6FFF0] text-[#0d9b76] text-[10px] font-semibold uppercase tracking-wide">With Image</span>
        </div>
        <p className="text-xs text-gray-400 mb-5">Text panel left · Image panel right · No text over image · Dot grid pattern decoration</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 min-h-[440px]">
            {/* Text panel */}
            <div className="bg-[#23324f] relative flex flex-col justify-center p-8 md:p-12 overflow-hidden">
              <BlobBottomLeft color="#2DD4A8" opacity={0.06} size="w-80 h-80" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#E91E8C] text-white text-xs font-semibold">BA (Hons)</span>
                  <span className="px-3 py-1 rounded-full border border-white/25 text-white/70 text-xs font-medium">3 years full-time</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[0.95] mb-4">
                  Fine Art
                </h1>
                <p className="text-base text-white/75 max-w-sm leading-relaxed mb-8">
                  Push boundaries, experiment with materials, and develop your artistic 
                  voice in our world-class studios in the heart of Bath.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 bg-[#E91E8C] text-white rounded-full font-semibold text-sm hover:bg-[#d4177d] transition-all active:scale-95">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all active:scale-95">
                    Book Open Day
                  </button>
                </div>
              </div>
            </div>

            {/* Image panel */}
            <div className="relative min-h-[280px] md:min-h-0">
              <img
                src={STUDENTS_IMG}
                alt="Creative students collaborating in the art studio at Bath Spa University"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Small decorative tag pinned to image */}
              <div className="absolute bottom-5 left-5">
                <span className="px-3 py-1.5 rounded-lg bg-white/90 text-[#23324f] text-xs font-semibold shadow-md">
                  Newton Park Campus
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Hero Variant 2: Split — Image Left / Text Right ── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Hero Variant 2</h3>
          <span className="px-2 py-0.5 rounded-full bg-[#D6FFF0] text-[#0d9b76] text-[10px] font-semibold uppercase tracking-wide">With Image</span>
        </div>
        <p className="text-xs text-gray-400 mb-5">Image panel left · Text panel right (white bg) · Wavy lines pattern · Suitable for light pages</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-gray-100"
        >
          <div className="grid md:grid-cols-2 min-h-[440px]">
            {/* Image panel */}
            <div className="relative min-h-[280px] md:min-h-0 order-2 md:order-1">
              <img
                src={BATH_IMG}
                alt="Aerial view of Bath city — honey-coloured Georgian architecture and green parkland"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-5 right-5">
                <span className="px-3 py-1.5 rounded-lg bg-white/90 text-[#23324f] text-xs font-semibold shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4A8] inline-block" /> Bath, UK
                </span>
              </div>
            </div>

            {/* Text panel */}
            <div className="bg-white relative flex flex-col justify-center p-8 md:p-12 overflow-hidden order-1 md:order-2">
              <BlobTopRight color="#F5A623" opacity={0.07} size="w-80 h-80" />

              <div className="relative z-10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#E91E8C] font-semibold mb-3 block">Life in Bath</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#23324f] tracking-tight leading-tight mb-4">
                  A city that inspires creativity
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
                  Bath isn't just beautiful — it's alive with culture, music, art, and ideas. 
                  From Roman architecture to indie galleries, this UNESCO World Heritage city 
                  is your extended campus.
                </p>
                <div className="flex items-center gap-4">
                  <button className="px-6 py-3 bg-[#23324f] text-white rounded-full text-sm font-semibold hover:bg-[#2d3f62] transition-all flex items-center gap-2 active:scale-95">
                    Explore Bath <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E91E8C] transition-colors">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91E8C] transition-colors">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    Watch film
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Hero Variant 3: No Image — Typographic / Dark ── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Hero Variant 3</h3>
          <span className="px-2 py-0.5 rounded-full bg-[#FFD6E8] text-[#E91E8C] text-[10px] font-semibold uppercase tracking-wide">No Image · Dark</span>
        </div>
        <p className="text-xs text-gray-400 mb-5">Solid navy background · Crosshatch texture · Large expressive type · Coloured accent word</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden bg-[#23324f] relative"
        >
          <BlobTopRight color="#F5A623" opacity={0.07} size="w-96 h-96" />
          <BlobBottomLeft color="#2DD4A8" opacity={0.05} size="w-80 h-80" />

          <div className="relative z-10 px-8 md:px-16 py-14 md:py-20 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F5A623] font-semibold mb-6">
              Bath Spa University · Open Days 2026
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
              Where do<br />
              <span className="text-[#F5A623]">you</span> want<br />
              to begin?
            </h1>
            <p className="text-lg text-white/70 max-w-md leading-relaxed mb-10">
              Explore over 100 undergraduate courses at Bath Spa University. 
              Start with what excites you.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-7 py-3.5 bg-[#E91E8C] text-white rounded-full font-semibold text-sm hover:bg-[#d4177d] transition-all active:scale-95">
                Explore Courses
              </button>
              <button className="px-7 py-3.5 bg-white text-[#23324f] rounded-full font-semibold text-sm hover:bg-gray-100 transition-all active:scale-95">
                Book Open Day
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Hero Variant 4: No Image — Light / Airy ── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Hero Variant 4</h3>
          <span className="px-2 py-0.5 rounded-full bg-[#FFF3D6] text-[#c48600] text-[10px] font-semibold uppercase tracking-wide">No Image · Light</span>
        </div>
        <p className="text-xs text-gray-400 mb-5">White background · Dot grid · Decorative blob shapes · Suitable for most content pages</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden bg-white border border-gray-100 relative"
        >
          {/* Decorative blob — top right */}
          <BlobTopRight color="#F5A623" opacity={0.08} size="w-72 h-72" />
          {/* Decorative accent blob — bottom left */}
          <BlobBottomLeft color="#2DD4A8" opacity={0.05} size="w-80 h-80" />

          <div className="relative z-10 px-8 md:px-16 py-14 md:py-20">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#E91E8C] font-semibold mb-4">
                Undergraduate · 2026 Entry
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-[#23324f] tracking-tight leading-[0.9] mb-6">
                Your creativity<br />
                has a home<br />
                <span className="text-[#E91E8C]">in Bath.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                Join a university built around creative thinking — from the arts and design to 
                science, education, and business. Two stunning campuses. One unforgettable city.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-7 py-3.5 bg-[#23324f] text-white rounded-full font-semibold text-sm hover:bg-[#2d3f62] transition-all active:scale-95">
                  Find Your Course
                </button>
                <button className="px-7 py-3.5 border-2 border-[#23324f] text-[#23324f] rounded-full font-semibold text-sm hover:bg-[#23324f] hover:text-white transition-all active:scale-95">
                  Book Open Day
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="mb-16">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Social Proof Bar</h3>
        <div className="rounded-2xl bg-[#23324f] p-8 md:p-10 relative overflow-hidden">
          <BlobBottomRight color="#2DD4A8" opacity={0.05} size="w-72 h-72" />
          <BlobTopLeft color="#F5A623" opacity={0.06} size="w-80 h-80" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: 'Top 30', label: 'for Art & Design (Guardian 2026)' },
              { value: '94%', label: 'Student Satisfaction' },
              { value: '1,200+', label: 'Creative Graduates / Year' },
              { value: '#1', label: 'in Bath for Student Experience' },
            ].map((stat) => (
              <div key={stat.value}>
                <p className="text-3xl md:text-4xl font-black mb-1 text-white">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Section ── */}
      <div className="mb-16">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Call to Action — Full Width</h3>
        <div className="rounded-3xl bg-[#23324f] p-8 md:p-16 relative overflow-hidden">
          <BlobBottomRight color="#F5A623" opacity={0.06} size="w-96 h-96" />
          <BlobTopLeft color="#2DD4A8" opacity={0.07} size="w-96 h-96" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F5A623] font-semibold mb-4">Ready to begin?</p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Your originality<br />starts here.
            </h2>
            <p className="text-white/65 mb-8 leading-relaxed">
              Visit us on an Open Day and see for yourself why Bath Spa is where 
              creative minds come to thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#E91E8C] text-white rounded-full font-semibold hover:bg-[#d4177d] transition-all active:scale-95">
                Book Your Open Day
              </button>
              <button className="px-8 py-4 bg-white text-[#23324f] rounded-full font-semibold hover:bg-gray-100 transition-all active:scale-95">
                Chat With a Student
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center py-12 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Bath Spa University</p>
        <p className="text-sm text-gray-400">Web Style Guide · Reimagined 2026</p>
        <p className="text-xs text-gray-300 mt-2">Designed to inspire creativity, confidence, and curiosity.</p>
      </div>
    </div>
  );
}