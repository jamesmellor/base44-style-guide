import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Eye } from 'lucide-react';

// Decorative blob SVGs
function BlobTopRight({ color = "#E91E8C", opacity = 0.08, size = "w-80 h-80" }) {
  return (
    <svg className={`absolute -top-10 -right-10 ${size}`} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity }}>
      <path d="M220,30 C270,60 290,130 260,180 C230,230 160,260 110,240 C60,220 20,160 30,100 C40,40 100,10 150,10 C175,10 195,15 220,30 Z" fill={color} />
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

const pillars = [
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'Every pixel should feel crafted, original, and alive. We break conventions to inspire making.',
    color: '#E91E8C',
    bg: '#FFD6E8',
  },
  {
    icon: Zap,
    title: 'Confidence',
    description: 'Bold type, decisive colour, and clear hierarchy. Our design speaks with conviction.',
    color: '#F5A623',
    bg: '#FFF3D6',
  },
  {
    icon: Eye,
    title: 'Curiosity',
    description: 'Unexpected details, micro-interactions, and layered content invite exploration and discovery.',
    color: '#2DD4A8',
    bg: '#D6FFF0',
  },
];

export default function OverviewSection() {
  return (
    <div id="overview" className="scroll-mt-20">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-[#23324f] p-8 md:p-16 mb-16">
        <BlobTopLeft color="#F5A623" opacity={0.07} size="w-96 h-96" />
        <BlobTopRight color="#2DD4A8" opacity={0.06} size="w-80 h-80" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F5A623] font-semibold mb-6">
              Bath Spa University · Web Style Guide 2026
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
              Professionally<br />
              <span className="text-[#F5A623]">Creative.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-8">
              A reimagined digital design system built to inspire 
              creativity, confidence, and curiosity in the next generation 
              of original thinkers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-medium border border-white/10">
                Primary audience: 17–18 year olds
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-medium border border-white/10">
                UG Recruitment
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-medium border border-white/10">
                Bath, UK
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Pillars */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#E91E8C] font-semibold mb-3">Brand Pillars</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#23324f] tracking-tight mb-8">Three pillars drive every design decision</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative rounded-2xl border border-gray-100 p-8 hover:border-transparent hover:shadow-xl transition-all duration-500"
                style={{ '--pillar-color': pillar.color }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: pillar.bg }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: pillar.bg }}>
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#23324f] mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tone of Voice */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-[#23324f] mb-6">Tone of Voice</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-[#23324f] mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#2DD4A8]" /> We are
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#2DD4A8] mt-1">●</span> Warm, direct, and encouraging</li>
              <li className="flex items-start gap-2"><span className="text-[#2DD4A8] mt-1">●</span> Conversational but never dumbed down</li>
              <li className="flex items-start gap-2"><span className="text-[#2DD4A8] mt-1">●</span> Creatively confident — we own our difference</li>
              <li className="flex items-start gap-2"><span className="text-[#2DD4A8] mt-1">●</span> Authentic and student-first</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#23324f] mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#E91E8C]" /> We avoid
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#E91E8C] mt-1">●</span> Corporate jargon or stiff institutional language</li>
              <li className="flex items-start gap-2"><span className="text-[#E91E8C] mt-1">●</span> Trying too hard to be trendy or using slang</li>
              <li className="flex items-start gap-2"><span className="text-[#E91E8C] mt-1">●</span> Generic statements that could be any university</li>
              <li className="flex items-start gap-2"><span className="text-[#E91E8C] mt-1">●</span> Passive voice or impersonal tone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}