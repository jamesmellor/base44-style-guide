import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#E91E8C] font-semibold mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-black text-[#23324f] tracking-tight leading-tight mb-4">{title}</h2>
      {description && (
        <p className="text-base text-gray-500 max-w-2xl leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}