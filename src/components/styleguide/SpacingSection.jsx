import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const spacingScale = [
  { token: '4', px: '4px', use: 'Icon gaps' },
  { token: '8', px: '8px', use: 'Tight padding' },
  { token: '12', px: '12px', use: 'Input padding' },
  { token: '16', px: '16px', use: 'Card padding (mobile)' },
  { token: '24', px: '24px', use: 'Component gaps' },
  { token: '32', px: '32px', use: 'Section padding (mobile)' },
  { token: '48', px: '48px', use: 'Section gaps' },
  { token: '64', px: '64px', use: 'Section padding (desktop)' },
  { token: '96', px: '96px', use: 'Major section spacing' },
  { token: '128', px: '128px', use: 'Hero padding' },
];

const breakpoints = [
  { name: 'Mobile', size: '< 640px', cols: '1 column', note: 'Stack everything, generous touch targets' },
  { name: 'Tablet', size: '640–1024px', cols: '2 columns', note: 'Start introducing side-by-side layouts' },
  { name: 'Desktop', size: '1024–1280px', cols: '3–4 columns', note: 'Full layout with sidebar navigation' },
  { name: 'Wide', size: '> 1280px', cols: '4+ columns', note: 'Max-width container, extra breathing room' },
];

export default function SpacingSection() {
  return (
    <div id="spacing" className="scroll-mt-20">
      <SectionHeader
        label="Spacing & Layout"
        title="Breathable, rhythmic layouts"
        description="Generous white space is a design feature, not wasted screen. It signals confidence and lets content breathe, especially important for our young audience used to social media density."
      />

      {/* Spacing Scale */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-[#23324f] mb-6">Spacing Scale</h3>
        <div className="space-y-2">
          {spacingScale.map((s, i) => (
            <motion.div
              key={s.token}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-4 py-2"
            >
              <code className="w-16 text-xs text-gray-400 font-mono text-right">{s.px}</code>
              <div className="flex-shrink-0">
                <div className="h-6 rounded-md bg-gradient-to-r from-[#E91E8C] to-[#F5A623]" style={{ width: `${parseInt(s.px)}px`, minWidth: '4px', maxWidth: '200px' }} />
              </div>
              <p className="text-sm text-gray-500">{s.use}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Content Grid</h3>
        <p className="text-sm text-gray-500 mb-6">Max container width: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">1280px</code> with <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">24px</code> gutter</p>
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 gap-px bg-gray-200">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-[#FFD6E8]/30 h-20 flex items-center justify-center">
                <span className="text-[10px] font-mono text-[#E91E8C]/60">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-[#23324f] mb-1">Narrow</p>
            <p className="text-xs text-gray-400">6 cols (640px)</p>
            <p className="text-xs text-gray-400">Long-form text</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-[#23324f] mb-1">Standard</p>
            <p className="text-xs text-gray-400">8–10 cols</p>
            <p className="text-xs text-gray-400">Mixed content</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-[#23324f] mb-1">Full Bleed</p>
            <p className="text-xs text-gray-400">12 cols / edge</p>
            <p className="text-xs text-gray-400">Heroes, galleries</p>
          </div>
        </div>
      </div>

      {/* Breakpoints */}
      <div>
        <h3 className="text-lg font-bold text-[#23324f] mb-6">Breakpoints</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {breakpoints.map((bp) => (
            <div key={bp.name} className="p-5 rounded-xl border border-gray-100 hover:border-[#2DD4A8]/30 transition-colors">
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="font-semibold text-[#23324f]">{bp.name}</h4>
                <code className="text-xs text-gray-400 font-mono">{bp.size}</code>
              </div>
              <p className="text-sm text-gray-500">{bp.cols} · {bp.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}