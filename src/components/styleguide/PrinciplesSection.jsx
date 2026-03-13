import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const principles = [
  {
    number: '01',
    title: 'Lead with Emotion, not Information',
    description: 'Students decide with feeling first. Hero moments should evoke belonging and excitement before presenting facts. Data and details sit below the fold.',
    do: 'Use bold imagery, short punchy copy, and student stories as the entry point.',
    dont: 'Don\'t lead with league tables, stats, or paragraphs of institutional text.',
  },
  {
    number: '02',
    title: 'Design for Scroll, not Search',
    description: '17-year-olds are native scrollers. Content should flow vertically with visual rhythm — alternating between dense and spacious, text and image, dark and light.',
    do: 'Create visual variety with section-level mood changes. Use staggered reveals.',
    dont: 'Don\'t create flat, uniform blocks. Avoid long pages that feel like one continuous tone.',
  },
  {
    number: '03',
    title: 'Make it Feel Handmade',
    description: 'Bath Spa is a creative university — the site should feel crafted, not templated. Organic shapes, expressive type, and unexpected layout breaks signal creativity.',
    do: 'Use organic blob shapes, rotated elements, overlapping layers, and mixed media.',
    dont: 'Don\'t rely on rigid grids and stock corporate UI. Avoid cookie-cutter card layouts.',
  },
  {
    number: '04',
    title: 'Confidence Through Contrast',
    description: 'Bold colour contrasts and dramatic scale shifts create visual confidence. Large type next to small detail. Dark sections next to light ones. Full-bleed next to contained.',
    do: 'Push scale extremes. Use 72px headings next to 14px body. Dark hero into white content.',
    dont: 'Don\'t play it safe with uniform sizes. Avoid "everything the same weight" layouts.',
  },
  {
    number: '05',
    title: 'Every Page is a Canvas',
    description: 'No page should feel like a template was filled in. Each page tells a unique story with its own visual personality while staying within the system.',
    do: 'Vary hero treatments per page. Let content shape the layout, not the other way around.',
    dont: 'Don\'t copy-paste the same hero/3-column/CTA structure on every page.',
  },
];

export default function PrinciplesSection() {
  return (
    <div id="principles" className="scroll-mt-20">
      <SectionHeader
        label="Design Principles"
        title="Five rules for designing with personality"
        description="These principles ensure every page feels unmistakably Bath Spa — creative, confident, and built for a young audience that expects more."
      />

      <div className="space-y-8">
        {principles.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className="flex gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-[#E91E8C]/20 hover:shadow-lg transition-all duration-500">
              <div className="flex-shrink-0">
                <span className="text-5xl md:text-6xl font-black text-gray-100 group-hover:text-[#E91E8C]/20 transition-colors duration-500">
                  {p.number}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-[#23324f] mb-3">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm md:text-base">{p.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#D6FFF0]/50 rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2DD4A8] mb-2">✓ Do this</p>
                    <p className="text-sm text-gray-600">{p.do}</p>
                  </div>
                  <div className="bg-[#FFD6E8]/30 rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E91E8C] mb-2">✗ Avoid this</p>
                    <p className="text-sm text-gray-600">{p.dont}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}