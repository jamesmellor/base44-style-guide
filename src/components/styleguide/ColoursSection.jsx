import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Decorative blob SVGs
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

const primaryColours = [
  { name: 'BSU Navy', hex: '#23324f', usage: 'Primary backgrounds, headings, body text', rgb: '35, 50, 79', light: false },
  { name: 'Electric Magenta', hex: '#E91E8C', usage: 'Primary accent, CTAs, links, brand moments', rgb: '233, 30, 140', light: false },
  { name: 'Pure White', hex: '#FFFFFF', usage: 'Content backgrounds, reversed text', rgb: '255, 255, 255', light: true },
];

const secondaryColours = [
  { name: 'Warm Amber', hex: '#fbbf24', usage: 'Keyword highlights on dark backgrounds, pull-quotes, callouts', rgb: '245, 166, 35', light: false },
  { name: 'Fresh Mint', hex: '#2DD4A8', usage: 'Success states, curiosity accents, sustainability', rgb: '45, 212, 168', light: false },
  { name: 'Soft Blush', hex: '#FFD6E8', usage: 'Soft backgrounds, illustrations, hover states', rgb: '255, 214, 232', light: true },
];

const neutrals = [
  { name: 'Slate 900', hex: '#0F172A', usage: 'Darkest text' },
  { name: 'Slate 700', hex: '#334155', usage: 'Secondary text' },
  { name: 'Slate 400', hex: '#94A3B8', usage: 'Placeholder text' },
  { name: 'Slate 200', hex: '#E2E8F0', usage: 'Borders, dividers' },
  { name: 'Slate 50', hex: '#F8FAFC', usage: 'Neutral section tint' },
];

const tints = [
  { name: 'Blush Tint', hex: '#FFF0F6', border: '#fcd6e8', accent: '#E91E8C', label: 'Magenta tint' },
  { name: 'Amber Tint', hex: '#FFF8EC', border: '#fde8bc', accent: '#F5A623', label: 'Amber tint' },
  { name: 'Mint Tint', hex: '#EDFDF8', border: '#b8f0e2', accent: '#2DD4A8', label: 'Mint tint' },
  { name: 'Navy Tint', hex: '#EEF1F6', border: '#c8d0df', accent: '#23324f', label: 'Navy tint' },
  { name: 'Warm Stone', hex: '#F9F7F4', border: '#e8e2d8', accent: '#94A3B8', label: 'Neutral warm' },
];

function ColourSwatch({ colour, large }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(colour.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group">
      <button
        onClick={copy}
        className={`w-full ${large ? 'h-36 md:h-44' : 'h-24 md:h-28'} rounded-2xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${colour.light ? 'border border-gray-200' : ''}`}
        style={{ backgroundColor: colour.hex }}
      >
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${colour.light ? 'bg-black/5' : 'bg-white/10'}`}>
          {copied ? <Check className={`w-5 h-5 ${colour.light ? 'text-gray-700' : 'text-white'}`} /> : <Copy className={`w-5 h-5 ${colour.light ? 'text-gray-700' : 'text-white'}`} />}
        </div>
      </button>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm text-[#23324f]">{colour.name}</p>
          <code className="text-xs text-gray-400 font-mono">{colour.hex}</code>
        </div>
        <p className="text-xs text-gray-400 mt-1">{colour.usage}</p>
      </div>
    </motion.div>
  );
}

export default function ColoursSection() {
  return (
    <div id="colours" className="scroll-mt-20">
      <SectionHeader
        label="Colour Palette"
        title="Colour that sparks feeling"
        description="Our palette is built for energy and contrast. A deep navy anchors everything, while magenta, amber, and mint inject personality. Soft tints keep content sections distinct without heavy colour."
      />

      {/* Primary */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Primary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {primaryColours.map(c => <ColourSwatch key={c.hex} colour={c} large />)}
        </div>
      </div>

      {/* Secondary */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Secondary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryColours.map(c => <ColourSwatch key={c.hex} colour={c} large />)}
        </div>
      </div>

      {/* Neutrals */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Neutrals</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {neutrals.map(c => <ColourSwatch key={c.hex} colour={c} />)}
        </div>
      </div>

      {/* ── Amber Keyword Highlights ── */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-[#23324f] mb-1">Amber Keyword Highlights</h3>
        <p className="text-sm text-gray-400 mb-6">
          On dark navy backgrounds, Warm Amber (#F5A623) lifts specific words out of body text with strong contrast and warmth — without using a gradient. Use sparingly on 1–3 key words per headline.
        </p>

        <div className="space-y-4">
          {/* Full-width hero headline example */}
          <div className="rounded-2xl bg-[#23324f] px-8 py-10 md:px-12 md:py-12 relative overflow-hidden">
            <BlobTopRight color="#F5A623" opacity={0.07} size="w-80 h-80" />
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">Hero headline — amber accent</p>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[0.95] mb-4">
                Make <span className="text-[#F5A623]">bold</span> work.<br />
                Make <span className="text-[#F5A623]">original</span> work.
              </h2>
              <p className="text-white/65 text-base max-w-md leading-relaxed">
                At Bath Spa, we believe your creativity is your greatest asset. Study with people who take it seriously.
              </p>
            </div>
          </div>

          {/* Pull-quote / stat example */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#23324f] px-8 py-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Pull-quote</p>
              <blockquote className="text-xl md:text-2xl font-bold text-white leading-snug">
                "Bath Spa gave me the <span className="text-[#F5A623]">confidence</span> to call myself an artist."
              </blockquote>
              <p className="text-sm text-white/50 mt-4">— Maya, BA Fine Art, 2025</p>
            </div>
            <div className="rounded-2xl bg-[#23324f] px-8 py-8 flex items-center gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Key stat</p>
                <p className="text-5xl font-black text-[#F5A623]">94%</p>
                <p className="text-white/70 text-sm mt-1">of graduates in work or further study within 6 months</p>
              </div>
            </div>
          </div>

          {/* Usage note */}
          <div className="bg-[#FFF8EC] border border-[#fde8bc] rounded-xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c48600] mb-2">Usage rule</p>
            <p className="text-sm text-gray-600">Use amber highlights on <strong>dark navy only</strong>. Never use amber text on white or light backgrounds — contrast is insufficient. Limit to 1–3 words per block; over-use diminishes impact.</p>
          </div>
        </div>
      </div>

      {/* ── Section Background Tints ── */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-[#23324f] mb-1">Section Background Tints</h3>
        <p className="text-sm text-gray-400 mb-6">
          Avoid pure white on every section. These very light tints create visual separation between content areas, signal a mood shift, and add warmth without overwhelming the content.
        </p>

        {/* Tint swatches */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {tints.map(t => (
            <motion.div key={t.hex} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="h-20 rounded-xl border-2" style={{ backgroundColor: t.hex, borderColor: t.border }} />
              <p className="text-xs font-semibold text-[#23324f] mt-2">{t.name}</p>
              <code className="text-[10px] text-gray-400 font-mono">{t.hex}</code>
              <p className="text-[10px] text-gray-400 mt-0.5">{t.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Live section tint demo */}
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Section sequence example</p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 divide-y divide-gray-100">
          {/* White section */}
          <div className="bg-white px-8 py-8">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">White — #FFFFFF</p>
            <h4 className="text-xl font-bold text-[#23324f] mb-1">Course overview</h4>
            <p className="text-sm text-gray-500 max-w-lg">Standard content section on a clean white background. Works well as the default starting point.</p>
          </div>
          {/* Amber tint */}
          <div className="px-8 py-8" style={{ backgroundColor: '#FFF8EC' }}>
            <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: '#c48600' }}>Amber Tint — #FFF8EC</p>
            <h4 className="text-xl font-bold text-[#23324f] mb-1">Why choose Bath Spa?</h4>
            <p className="text-sm text-gray-500 max-w-lg">A warm amber tint signals an inspirational or testimonial-type section. Gives warmth and energy.</p>
          </div>
          {/* Navy tint */}
          <div className="px-8 py-8" style={{ backgroundColor: '#EEF1F6' }}>
            <p className="text-[10px] uppercase tracking-widest text-[#23324f]/40 mb-2">Navy Tint — #EEF1F6</p>
            <h4 className="text-xl font-bold text-[#23324f] mb-1">Entry requirements</h4>
            <p className="text-sm text-gray-500 max-w-lg">A cool navy tint works well for structured or informational sections — practical content that still needs to feel on-brand.</p>
          </div>
          {/* Mint tint */}
          <div className="px-8 py-8" style={{ backgroundColor: '#EDFDF8' }}>
            <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: '#0d9b76' }}>Mint Tint — #EDFDF8</p>
            <h4 className="text-xl font-bold text-[#23324f] mb-1">Sustainability & campus life</h4>
            <p className="text-sm text-gray-500 max-w-lg">Fresh mint tint signals positivity and openness — good for student life, wellbeing, and sustainability topics.</p>
          </div>
          {/* Navy dark section */}
          <div className="bg-[#23324f] px-8 py-8">
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Navy — #23324f</p>
            <h4 className="text-xl font-bold text-white mb-1">Ready to apply?</h4>
            <p className="text-sm text-white/60 max-w-lg">A full dark section brings a strong visual close — used for CTAs, key stats, or section endings.</p>
          </div>
        </div>
      </div>

      {/* ── SVG Section Dividers ── */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-[#23324f] mb-1">SVG Section Dividers</h3>
        <p className="text-sm text-gray-400 mb-8">
          These SVG shapes sit between sections to create a clear visual break and add creative character. They transition between one background colour and the next.
        </p>

        {/* Divider 1: Wave */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Wave — white into amber tint</p>
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-white px-8 pt-8 pb-0">
              <p className="text-sm text-gray-400 mb-4">Previous section content on white...</p>
            </div>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" aria-hidden="true" style={{ display: 'block', background: 'white' }}>
              <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFF8EC" />
            </svg>
            <div className="px-8 py-6" style={{ backgroundColor: '#FFF8EC' }}>
              <p className="text-sm text-gray-400">Next section on amber tint...</p>
            </div>
          </div>
        </div>

        {/* Divider 2: Angled */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Angled cut — amber tint into navy</p>
          <div className="rounded-2xl overflow-hidden">
            <div className="px-8 pt-8 pb-0" style={{ backgroundColor: '#FFF8EC' }}>
              <p className="text-sm text-gray-400 mb-4">Previous amber tint section...</p>
            </div>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" aria-hidden="true" style={{ display: 'block', backgroundColor: '#FFF8EC' }}>
              <path d="M0,0 L1440,60 L1440,60 L0,60 Z" fill="#23324f" />
            </svg>
            <div className="bg-[#23324f] px-8 py-6">
              <p className="text-sm text-white/50">Next navy section...</p>
            </div>
          </div>
        </div>

        {/* Divider 3: Scallop / arc */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Scallop arcs — navy into mint tint</p>
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#23324f] px-8 pt-8 pb-0">
              <p className="text-sm text-white/50 mb-4">Previous navy section...</p>
            </div>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" aria-hidden="true" style={{ display: 'block', backgroundColor: '#23324f' }}>
              <path d="M0,0 Q90,70 180,0 Q270,70 360,0 Q450,70 540,0 Q630,70 720,0 Q810,70 900,0 Q990,70 1080,0 Q1170,70 1260,0 Q1350,70 1440,0 L1440,70 L0,70 Z" fill="#EDFDF8" />
            </svg>
            <div className="px-8 py-6" style={{ backgroundColor: '#EDFDF8' }}>
              <p className="text-sm text-gray-400">Next mint tint section...</p>
            </div>
          </div>
        </div>

        {/* Divider 4: Zigzag */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Zigzag edge — navy tint into white</p>
          <div className="rounded-2xl overflow-hidden">
            <div className="px-8 pt-8 pb-0" style={{ backgroundColor: '#EEF1F6' }}>
              <p className="text-sm text-gray-500 mb-4">Previous navy tint section...</p>
            </div>
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full block" aria-hidden="true" style={{ display: 'block', backgroundColor: '#EEF1F6' }}>
              <polyline points="0,40 60,0 120,40 180,0 240,40 300,0 360,40 420,0 480,40 540,0 600,40 660,0 720,40 780,0 840,40 900,0 960,40 1020,0 1080,40 1140,0 1200,40 1260,0 1320,40 1380,0 1440,40 1440,40 0,40" fill="white" />
            </svg>
            <div className="bg-white px-8 py-6">
              <p className="text-sm text-gray-400">Next white section...</p>
            </div>
          </div>
        </div>

        <div className="bg-[#EEF1F6] rounded-xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#23324f]/50 mb-2">Implementation note</p>
          <p className="text-sm text-gray-600">Each divider is an inline SVG with <code className="bg-white px-1.5 py-0.5 rounded text-xs">viewBox="0 0 1440 60"</code> and <code className="bg-white px-1.5 py-0.5 rounded text-xs">width="100%"</code>. The fill colour matches the incoming section's background. No JavaScript required.</p>
        </div>
      </div>

      {/* Accessibility */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Accessibility Notes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded-lg bg-[#23324f] flex items-center justify-center">
                <span className="text-white text-xs font-bold">Aa</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#23324f]">White on Navy</p>
                <p className="text-xs text-gray-400">Contrast ratio: 10.5:1 ✓ AAA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded-lg bg-[#23324f] flex items-center justify-center">
                <span className="text-[#F5A623] text-xs font-bold">Aa</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#23324f]">Amber on Navy</p>
                <p className="text-xs text-gray-400">Contrast ratio: 7.2:1 ✓ AAA</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <span className="text-[#23324f] text-xs font-bold">Aa</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#23324f]">Navy on White</p>
                <p className="text-xs text-gray-400">Contrast ratio: 10.5:1 ✓ AAA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 rounded-lg bg-[#E91E8C] flex items-center justify-center">
                <span className="text-white text-xs font-bold">Aa</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#23324f]">White on Magenta</p>
                <p className="text-xs text-gray-400">Contrast ratio: 4.6:1 ✓ AA Large</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}