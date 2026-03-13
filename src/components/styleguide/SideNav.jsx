import React from 'react';
import { Palette, Type, LayoutGrid, MousePointerClick, Image, Sparkles, BookOpen, Layers } from 'lucide-react';

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

export default function SideNav({ activeSection, onNavigate }) {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-64 bg-[#23324f] text-white z-50 hidden lg:flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E91E8C] flex items-center justify-center font-black text-sm tracking-tight">
            BSU
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">BATH SPA</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Web Style Guide</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-white/10 text-white border-r-2 border-[#F5A623]'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-6 border-t border-white/10">
        <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">Reimagined 2026</p>
      </div>
    </nav>
  );
}