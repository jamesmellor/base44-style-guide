import React, { useState } from 'react';
import { Menu, X, Palette, Type, LayoutGrid, MousePointerClick, Image, Sparkles, BookOpen, Layers } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { id: 'overview', label: 'Overview', icon: Sparkles },
  { id: 'principles', label: 'Principles', icon: BookOpen },
  { id: 'colours', label: 'Colours', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing & Layout', icon: LayoutGrid },
  { id: 'components', label: 'Components', icon: Layers },
  { id: 'imagery', label: 'Imagery', icon: Image },
  { id: 'patterns', label: 'Page Patterns', icon: MousePointerClick },
];

export default function MobileNav({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 bg-[#23324f]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#E91E8C] flex items-center justify-center font-black text-white text-xs">
            BSU
          </div>
          <span className="text-white text-sm font-semibold">Style Guide</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white p-1">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#23324f] border-t border-white/10 pb-4"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3 text-sm ${
                    activeSection === item.id ? 'text-white bg-white/10' : 'text-white/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}