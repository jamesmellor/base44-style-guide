import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const BATH_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b29d8e095788643a94c057/7582c44e2_generated_939065c9.png';
const STUDENTS_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b29d8e095788643a94c057/bf376f827_generated_92cba8a7.png';

const dos = [
  'Candid, authentic moments — students creating, collaborating, laughing',
  'Natural lighting, warm colour grading (golden, amber tones)',
  'Diverse students in real settings — studios, campuses, Bath city',
  'Environmental portraits that show personality and place',
  'Movement and energy — hands making, bodies in motion',
];

const donts = [
  'Staged stock photography with forced smiles',
  'Overly corporate settings (boardrooms, generic classrooms)',
  'Cool, desaturated colour grading that feels clinical',
  'Isolated headshots with no environmental context',
  'Images that could be literally any university',
];

export default function ImagerySection() {
  return (
    <div id="imagery" className="scroll-mt-20">
      <SectionHeader
        label="Imagery & Media"
        title="Photography that tells stories"
        description="Our photography should feel like peeking into real life at Bath Spa — warm, creative, and bursting with personality. Bath itself is a character in every story."
      />

      {/* Photo Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden relative group"
        >
          <img src={STUDENTS_IMG} alt="Creative students collaborating in art studio" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-[#2DD4A8] text-white text-xs font-semibold">✓ Authentic & Creative</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden relative group"
        >
          <img src={BATH_IMG} alt="Beautiful honey-coloured Georgian architecture of Bath" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-[#F5A623] text-white text-xs font-semibold">✓ Bath is a Character</span>
          </div>
        </motion.div>
      </div>

      {/* Do / Don't */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#D6FFF0]/30 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-[#23324f] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#2DD4A8] flex items-center justify-center text-white text-xs">✓</span>
            Photography Do's
          </h3>
          <ul className="space-y-3">
            {dos.map(d => (
              <li key={d} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-[#2DD4A8] mt-0.5">●</span> {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#FFD6E8]/20 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-[#23324f] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#E91E8C] flex items-center justify-center text-white text-xs">✗</span>
            Photography Don'ts
          </h3>
          <ul className="space-y-3">
            {donts.map(d => (
              <li key={d} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-[#E91E8C] mt-0.5">●</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Graphic Elements */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Graphic Elements</h3>
        <p className="text-sm text-gray-500 mb-6 max-w-lg">
          Organic blob shapes, gradient overlays, and cut-out photography create a distinctive, handmade feel 
          inspired by Bath Spa's Originality campaign.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Blob */}
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="w-24 h-24 bg-[#E91E8C] rounded-[40%_60%_60%_40%/60%_40%_60%_40%]" />
            <p className="absolute bottom-3 text-[10px] text-gray-400 font-medium">Blob Shape</p>
          </div>
          {/* Gradient Circle */}
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#F5A623]" />
            <p className="absolute bottom-3 text-[10px] text-gray-400 font-medium">Gradient Circle</p>
          </div>
          {/* Rotated Element */}
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="w-20 h-20 bg-[#2DD4A8] rounded-xl rotate-12" />
            <p className="absolute bottom-3 text-[10px] text-gray-400 font-medium">Rotated Block</p>
          </div>
          {/* Dotted Pattern */}
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${i % 3 === 0 ? 'bg-[#E91E8C]' : i % 3 === 1 ? 'bg-[#F5A623]' : 'bg-[#2DD4A8]'}`} />
              ))}
            </div>
            <p className="absolute bottom-3 text-[10px] text-gray-400 font-medium">Dot Pattern</p>
          </div>
        </div>
      </div>

      {/* Image Treatments */}
      <div>
        <h3 className="text-lg font-bold text-[#23324f] mb-4">Image Treatments</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="h-40 rounded-2xl overflow-hidden mb-3">
              <img src={STUDENTS_IMG} alt="Standard crop" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-medium text-[#23324f]">Standard Crop</p>
            <p className="text-xs text-gray-400">Full-colour, soft rounded corners</p>
          </div>
          <div>
            <div className="h-40 rounded-2xl overflow-hidden mb-3 relative">
              <img src={BATH_IMG} alt="Gradient overlay" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E91E8C]/60 to-transparent" />
            </div>
            <p className="text-sm font-medium text-[#23324f]">Gradient Overlay</p>
            <p className="text-xs text-gray-400">Brand colour wash for hero usage</p>
          </div>
          <div>
            <div className="h-40 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden mb-3">
              <img src={STUDENTS_IMG} alt="Blob mask" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-medium text-[#23324f]">Blob Mask</p>
            <p className="text-xs text-gray-400">Organic shape for playful layouts</p>
          </div>
        </div>
      </div>
    </div>
  );
}