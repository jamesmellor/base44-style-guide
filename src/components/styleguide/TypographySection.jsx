import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const typeScale = [
  { label: 'Display', size: 'text-6xl md:text-7xl', weight: 'font-black', tracking: 'tracking-tight', px: '72px / 4.5rem', use: 'Hero headlines only' },
  { label: 'H1', size: 'text-4xl md:text-5xl', weight: 'font-black', tracking: 'tracking-tight', px: '48px / 3rem', use: 'Page titles' },
  { label: 'H2', size: 'text-3xl md:text-4xl', weight: 'font-bold', tracking: 'tracking-tight', px: '36px / 2.25rem', use: 'Section headings' },
  { label: 'H3', size: 'text-2xl', weight: 'font-bold', tracking: '', px: '24px / 1.5rem', use: 'Subsections, card titles' },
  { label: 'H4', size: 'text-xl', weight: 'font-semibold', tracking: '', px: '20px / 1.25rem', use: 'Content headings' },
  { label: 'Body Large', size: 'text-lg', weight: 'font-normal', tracking: '', px: '18px / 1.125rem', use: 'Intro paragraphs, lead text' },
  { label: 'Body', size: 'text-base', weight: 'font-normal', tracking: '', px: '16px / 1rem', use: 'Standard body text' },
  { label: 'Small', size: 'text-sm', weight: 'font-normal', tracking: '', px: '14px / 0.875rem', use: 'Secondary info, captions' },
  { label: 'Caption', size: 'text-xs', weight: 'font-medium', tracking: 'tracking-wide uppercase', px: '12px / 0.75rem', use: 'Labels, overlines, metadata' },
];

export default function TypographySection() {
  return (
    <div id="typography" className="scroll-mt-20">
      <SectionHeader
        label="Typography"
        title="Type that speaks with conviction"
        description="We use the system's default sans-serif stack (Inter-like) for performance and consistency. Personality comes from weight contrast, scale extremes, and tight tracking on headlines."
      />

      {/* Font Stack */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-2xl border border-gray-100 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#E91E8C] font-semibold mb-4">Display & Headings</p>
          <p className="text-5xl font-black tracking-tight text-[#23324f] mb-4">Aa Bb Cc</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            System sans-serif · <strong>Black (900)</strong> and <strong>Bold (700)</strong> weights · 
            Tight letter-spacing (tracking-tight) · Line height: 0.95–1.1
          </p>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <code className="text-xs text-gray-500">font-family: ui-sans-serif, system-ui, sans-serif</code>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#2DD4A8] font-semibold mb-4">Body & UI Text</p>
          <p className="text-xl text-[#23324f] mb-4 leading-relaxed">
            The quick brown fox jumps over the lazy dog. We believe in originality.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            System sans-serif · <strong>Regular (400)</strong>, <strong>Medium (500)</strong>, <strong>Semibold (600)</strong> · 
            Normal tracking · Line height: 1.5–1.7
          </p>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <code className="text-xs text-gray-500">Leading-relaxed for body, leading-tight for headings</code>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <h3 className="text-lg font-bold text-[#23324f] mb-6">Type Scale</h3>
      <div className="space-y-1 mb-16">
        {typeScale.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-baseline gap-4 md:gap-8 py-4 border-b border-gray-100 group hover:bg-gray-50/50 px-4 -mx-4 rounded-lg transition-colors"
          >
            <div className="w-20 md:w-28 flex-shrink-0">
              <code className="text-xs text-gray-400 font-mono">{item.px}</code>
            </div>
            <div className="flex-1 min-w-0 overflow-hidden">
              <p className={`${item.size} ${item.weight} ${item.tracking} text-[#23324f] truncate`}>
                {item.label === 'Caption' ? 'OVERLINE TEXT' : 'Bath Spa University'}
              </p>
            </div>
            <div className="hidden md:block w-32 flex-shrink-0 text-right">
              <p className="text-xs text-gray-400">{item.use}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Weight Usage */}
      <div className="bg-[#23324f] rounded-2xl p-8 md:p-12 text-white">
        <h3 className="text-lg font-bold mb-6">Weight Contrast is Key</h3>
        <p className="text-white/50 text-sm mb-8 max-w-lg">
          The magic is in the contrast. Pair heavy headings with light body text 
          to create visual rhythm and hierarchy that catches the eye.
        </p>
        <div className="space-y-6">
          <div>
            <p className="text-5xl font-black tracking-tight leading-tight">
              Find your<br />creative voice.
            </p>
            <p className="text-base text-white/50 mt-3 max-w-md leading-relaxed">
              At Bath Spa, creativity isn't just something we teach — it's how we think, 
              work, and shape the future. Your originality matters here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}