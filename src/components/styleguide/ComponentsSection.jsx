import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, ChevronRight, Heart, Star, Calendar, MapPin, ExternalLink, ChevronDown, Plus, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

// DemoLink: Accessible button styled as a link for style guide examples
const DemoLink = ({ children, className = '', ...props }) => (
  <button className={`bg-none border-none cursor-pointer p-0 font-inherit ${className}`} {...props}>
    {children}
  </button>
);

// Decorative blob SVGs for sections
function BlobBottomLeft({ color = "#2DD4A8", opacity = 0.06, size = "w-72 h-72" }) {
  return (
    <svg className={`absolute -bottom-20 -left-20 ${size}`} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity }}>
      <path d="M80,50 C30,80 10,150 50,200 C90,250 160,280 210,260 C260,240 280,180 270,120 C260,60 200,20 140,10 C110,5 85,20 80,50 Z" fill={color} />
    </svg>
  );
}

const STUDENTS_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b29d8e095788643a94c057/bf376f827_generated_92cba8a7.png';
const BATH_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b29d8e095788643a94c057/7582c44e2_generated_939065c9.png';

const newsItems = [
  {
    category: 'Student Story',
    categoryColor: '#E91E8C',
    categoryBg: '#FFD6E8',
    date: '12 Mar 2026',
    title: 'Architecture student finds support and community at Bath Spa',
    excerpt: 'With help from BSU staff and the wider student community, second year Oli Smith has been able to thrive in his studies — and wants others to know support is there.',
    img: STUDENTS_IMG,
    featured: true,
  },
  {
    category: 'News',
    categoryColor: '#23324f',
    categoryBg: '#EEF1F6',
    date: '10 Mar 2026',
    title: 'BSU students take talents overseas for Brazilian music festival',
    excerpt: 'Students perform on international stages, collaborating with musicians at the SESC Festival in São Paulo.',
    img: BATH_IMG,
    featured: false,
  },
  {
    category: 'Award',
    categoryColor: '#c48600',
    categoryBg: '#FFF8EC',
    date: '5 Mar 2026',
    title: 'BA Architecture achieves RIBA validation',
    excerpt: 'BSU\'s BA Architecture course has been validated by the Royal Institute of British Architects.',
    img: null,
    featured: false,
  },
];

const accordionItems = [
  {
    q: 'What are the entry requirements for undergraduate courses?',
    a: 'Entry requirements vary by course, but most undergraduate programmes ask for 96–128 UCAS tariff points. We welcome students from a wide range of backgrounds and consider contextual factors. Check individual course pages for specific requirements.',
  },
  {
    q: 'When are the Open Days?',
    a: 'We hold several Open Days throughout the year, typically in October, November, March and June. You can book a place on our Open Days page. We also offer personal campus tours on request.',
  },
  {
    q: 'What campuses does Bath Spa University have?',
    a: 'Bath Spa has two main campuses: Newton Park, set in a 170-acre country estate with a 13th-century castle, and Locksbrook Campus — a contemporary creative hub near Bath city centre. Both campuses are within easy reach of each other.',
  },
  {
    q: 'Is student accommodation available?',
    a: 'Yes. We guarantee accommodation to all first-year students who apply by the deadline. Our halls are located on and near both campuses, with a range of room types and price points to suit different needs.',
  },
];

function DarkAccordionItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className={`text-base font-semibold transition-colors ${open ? 'text-[#F5A623]' : 'text-white/80 group-hover:text-white'}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${open ? 'bg-[#F5A623] border-[#F5A623] text-[#23324f]' : 'border-white/20 text-white/40 group-hover:border-white/50'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-white/60 leading-relaxed pb-5 text-sm md:text-base pr-10">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccordionItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className={`text-base font-semibold transition-colors ${open ? 'text-[#E91E8C]' : 'text-[#23324f] group-hover:text-[#E91E8C]'}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${open ? 'bg-[#E91E8C] border-[#E91E8C] text-white' : 'border-gray-200 text-gray-400 group-hover:border-[#E91E8C] group-hover:text-[#E91E8C]'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 leading-relaxed pb-5 text-sm md:text-base pr-10">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ComponentsSection() {
  const [activeTab, setActiveTab] = useState('buttons');
  
  const tabs = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'inputs', label: 'Form Inputs' },
    { id: 'cards', label: 'Cards' },
    { id: 'news', label: 'News Cards' },
    { id: 'accordion', label: 'Accordion' },
    { id: 'text', label: 'Text Content' },
    { id: 'badges', label: 'Badges & Tags' },
    { id: 'nav', label: 'Navigation' },
  ];

  return (
    <div id="components" className="scroll-mt-20">
      <SectionHeader
        label="Component Library"
        title="Building blocks with character"
        description="Every component carries the Bath Spa personality. Rounded corners, generous padding, and subtle motion make interactions feel crafted and intentional."
      />

      {/* Tab Nav */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === t.id
                ? 'bg-[#23324f] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Buttons */}
      {activeTab === 'buttons' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Primary Buttons</h4>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-7 py-3.5 bg-[#E91E8C] text-white rounded-full font-semibold text-sm hover:bg-[#d4177d] transition-all hover:shadow-lg hover:shadow-[#E91E8C]/25 active:scale-95">
                Book Open Day
              </button>
              <button className="px-7 py-3.5 bg-[#23324f] text-white rounded-full font-semibold text-sm hover:bg-[#2a2a52] transition-all hover:shadow-lg active:scale-95">
                Explore Courses
              </button>
              <button className="px-7 py-3.5 bg-[#23324f] text-white rounded-full font-semibold text-sm hover:bg-[#2a2a52] transition-all opacity-50 cursor-not-allowed">
                Disabled
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Secondary & Ghost</h4>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-7 py-3.5 border-2 border-[#23324f] text-[#23324f] rounded-full font-semibold text-sm hover:bg-[#23324f] hover:text-white transition-all active:scale-95">
                Download Prospectus
              </button>
              <button className="px-7 py-3.5 text-[#E91E8C] rounded-full font-semibold text-sm hover:bg-[#FFD6E8]/50 transition-all active:scale-95 flex items-center gap-2">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Icon & Compact</h4>
            <div className="flex flex-wrap items-center gap-4">
              <button className="w-12 h-12 bg-[#E91E8C] text-white rounded-full flex items-center justify-center hover:bg-[#d4177d] transition-all hover:shadow-lg hover:shadow-[#E91E8C]/25 active:scale-95">
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center hover:border-[#E91E8C] hover:text-[#E91E8C] transition-all active:scale-95">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-5 py-2 bg-[#E91E8C] text-white rounded-full font-medium text-xs hover:bg-[#d4177d] transition-all active:scale-95">
                Apply now
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-xs text-gray-400 mb-2">Specification</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Border radius: <code className="bg-white px-1.5 py-0.5 rounded text-xs">rounded-full</code> (pill shape)</li>
              <li>• Padding: <code className="bg-white px-1.5 py-0.5 rounded text-xs">px-7 py-3.5</code> (generous, easy touch target)</li>
              <li>• Font: <code className="bg-white px-1.5 py-0.5 rounded text-xs">text-sm font-semibold</code></li>
              <li>• Hover: shadow + slight brightness shift. Active: <code className="bg-white px-1.5 py-0.5 rounded text-xs">scale-95</code></li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Form Inputs */}
      {activeTab === 'inputs' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 max-w-lg">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Text Inputs</h4>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullname" className="text-sm font-medium text-[#23324f] mb-1.5 block">Full name</label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all placeholder:text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="searchcourses" className="text-sm font-medium text-[#23324f] mb-1.5 block">Search courses</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    id="searchcourses"
                    type="text"
                    placeholder="e.g. Fine Art, Psychology..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subjectarea" className="text-sm font-medium text-[#23324f] mb-1.5 block">Subject area</label>
                <div className="relative">
                  <select id="subjectarea" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm appearance-none bg-white focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all text-gray-700">
                    <option>Choose a subject</option>
                    <option>Art & Design</option>
                    <option>Business</option>
                    <option>Computing</option>
                    <option>Education</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-xs text-gray-400 mb-2">Specification</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Border radius: <code className="bg-white px-1.5 py-0.5 rounded text-xs">rounded-xl</code></li>
              <li>• Padding: <code className="bg-white px-1.5 py-0.5 rounded text-xs">px-4 py-3.5</code></li>
              <li>• Focus: magenta border + ring</li>
              <li>• Labels: <code className="bg-white px-1.5 py-0.5 rounded text-xs">text-sm font-medium</code> above</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Cards */}
      {activeTab === 'cards' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Course Card</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {['Fine Art', 'Creative Writing', 'Psychology'].map((course, i) => (
                <div key={course} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-[#23324f] to-[#2a2a52] relative overflow-hidden">
                    <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-30 ${
                      ['bg-[#E91E8C]', 'bg-[#F5A623]', 'bg-[#2DD4A8]'][i]
                    }`} />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] uppercase tracking-widest text-white/50">BA (Hons)</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#23324f] mb-2 group-hover:text-[#E91E8C] transition-colors">{course}</h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">Explore your creative potential and develop professional skills in a supportive studio environment.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" /> 3 years
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#E91E8C] group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Event Card</h4>
            <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer group">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#FFD6E8] text-[#E91E8C] text-xs font-semibold">Open Day</span>
                  <span className="text-xs text-gray-400">28 Mar 2026</span>
                </div>
                <h3 className="font-bold text-[#23324f] text-lg mb-2 group-hover:text-[#E91E8C] transition-colors">
                  Undergraduate Open Day
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Explore our campuses, meet students and staff, and discover where your creativity could take you.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Newton Park</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 10am–4pm</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Badges */}
      {activeTab === 'badges' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Status Badges</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-[#E91E8C] text-white text-xs font-semibold">New Course</span>
              <span className="px-3 py-1.5 rounded-full bg-[#2DD4A8] text-white text-xs font-semibold">Open for Applications</span>
              <span className="px-3 py-1.5 rounded-full bg-[#F5A623] text-white text-xs font-semibold">Clearing Available</span>
              <span className="px-3 py-1.5 rounded-full bg-[#23324f] text-white text-xs font-semibold">Featured</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Soft Badges</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-[#FFD6E8] text-[#E91E8C] text-xs font-semibold">Art & Design</span>
              <span className="px-3 py-1.5 rounded-full bg-[#D6FFF0] text-[#0d9b76] text-xs font-semibold">Sciences</span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFF3D6] text-[#c48600] text-xs font-semibold">Business</span>
              <span className="px-3 py-1.5 rounded-full bg-[#E0E7FF] text-[#4338CA] text-xs font-semibold">Education</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Subject Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['Fine Art', 'Graphic Design', 'Creative Writing', 'Psychology', 'Drama', 'Music', 'Film', 'Photography'].map(tag => (
                <button key={tag} className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#E91E8C] hover:text-[#E91E8C] hover:bg-[#FFD6E8]/20 transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Star Ratings</h4>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(n => (
                <Star key={n} className={`w-5 h-5 ${n <= 4 ? 'text-[#F5A623] fill-[#F5A623]' : 'text-gray-200'}`} />
              ))}
              <span className="text-sm text-gray-500 ml-2">4.0 / 5.0</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── News Cards ── */}
      {activeTab === 'news' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">

          {/* Featured hero card */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Featured News Card — Large</h4>
            <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 cursor-pointer md:grid md:grid-cols-2">
              <div className="relative min-h-[240px] md:min-h-0">
                <img src={newsItems[0].img} alt={newsItems[0].title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: newsItems[0].categoryBg, color: newsItems[0].categoryColor }}>
                    {newsItems[0].category}
                  </span>
                </div>
              </div>
              <div className="p-7 md:p-9 flex flex-col justify-center">
                <p className="text-xs text-gray-400 mb-3">{newsItems[0].date}</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#23324f] mb-3 leading-snug group-hover:text-[#E91E8C] transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{newsItems[0].excerpt}</p>
                <span className="text-sm font-semibold text-[#E91E8C] flex items-center gap-1.5 w-fit group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Standard 3-up grid */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Standard News Grid — 3 Column</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {newsItems.map((item, i) => (
                <div key={i} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 cursor-pointer flex flex-col">
                  {item.img ? (
                    <div className="relative h-44 flex-shrink-0">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="h-44 flex-shrink-0 bg-[#EEF1F6] flex items-center justify-center relative overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                        <defs>
                          <pattern id={`card-dots-${i}`} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#23324f" fillOpacity="0.08" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#card-dots-${i})`} />
                      </svg>
                      <span className="text-2xl font-black text-[#23324f]/20 relative z-10">BSU</span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ backgroundColor: item.categoryBg, color: item.categoryColor }}>
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-[#23324f] mb-2 leading-snug group-hover:text-[#E91E8C] transition-colors text-base flex-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">{item.excerpt}</p>
                    <span className="text-sm font-semibold text-[#E91E8C] flex items-center gap-1.5 w-fit group-hover:gap-3 transition-all mt-auto">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact list */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Compact News List</h4>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
              {newsItems.map((item, i) => (
                <div key={i} className="group flex items-center gap-5 p-5 hover:bg-gray-50 transition-colors cursor-pointer">
                  {item.img ? (
                    <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden">
                      <img src={item.img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl flex-shrink-0 bg-[#EEF1F6] flex items-center justify-center">
                      <span className="text-xs font-black text-[#23324f]/30">BSU</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-semibold" style={{ color: item.categoryColor }}>{item.category}</span>
                      <span className="text-[11px] text-gray-400">{item.date}</span>
                    </div>
                    <p className="text-sm font-semibold text-[#23324f] leading-snug group-hover:text-[#E91E8C] transition-colors line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#E91E8C] flex-shrink-0 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EEF1F6] rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-2">Specification</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Featured card: equal-split 50/50 image–text grid at md breakpoint</li>
              <li>• No-image fallback: dot-grid pattern on tint background, keeps layout consistent</li>
              <li>• Category badge colour driven by content type (see Badges tab)</li>
              <li>• Hover: title colour shift to magenta + arrow nudge</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* ── Accordion ── */}
      {activeTab === 'accordion' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">

          {/* On white */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Standard Accordion — on White</h4>
            <div className="border border-gray-100 rounded-2xl px-6 md:px-8 divide-y-0">
              {accordionItems.map((item, i) => (
                <AccordionItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* On tint */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Accordion — on Navy Tint</h4>
            <div className="rounded-2xl px-6 md:px-8 divide-y-0" style={{ backgroundColor: '#EEF1F6' }}>
              {accordionItems.slice(0, 3).map((item, i) => (
                <AccordionItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* On navy dark */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Accordion — on Navy Dark</h4>
            <p className="text-xs text-gray-400 mb-5">Inverse treatment for dark sections. Question text in white, answer in white/65.</p>
            <div className="bg-[#23324f] rounded-2xl px-6 md:px-8">
              {accordionItems.slice(0, 3).map((item, i) => (
                <div key={i} className="border-b border-white/10 last:border-0">
                  <DarkAccordionItem item={item} index={i} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EEF1F6] rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-2">Specification</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Expand/collapse with smooth height animation (framer-motion)</li>
              <li>• Active question: magenta text + filled magenta circle icon</li>
              <li>• Icon: <code className="bg-white px-1.5 py-0.5 rounded text-xs">Plus</code> / <code className="bg-white px-1.5 py-0.5 rounded text-xs">Minus</code> inside a bordered circle</li>
              <li>• Works on white, tint, and dark navy backgrounds</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* ── Text Content ── */}
      {activeTab === 'text' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-14">

          {/* Full width */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Full-Width Text Block</h4>
            <div className="border border-gray-100 rounded-2xl p-8 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#E91E8C] font-semibold mb-3">About the course</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#23324f] tracking-tight leading-tight mb-5 max-w-2xl">
                Where creativity meets craft
              </h2>
              <div className="max-w-2xl space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  Our Fine Art degree is built around the studio. From your first week you'll be making work, 
                  testing ideas, and developing a practice that's entirely your own. We believe in learning by doing.
                </p>
                <p>
                  You'll study painting, drawing, sculpture, installation, and digital media — with the freedom to 
                  specialise as your practice develops. Our tutors are practising artists who bring real-world 
                  experience into every session.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-[#23324f] text-white rounded-full text-sm font-semibold hover:bg-[#2d3f62] transition-all flex items-center gap-2">
                  View course details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Two column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Two-Column Text</h4>
            <div className="border border-gray-100 rounded-2xl p-8 md:p-12" style={{ backgroundColor: '#EEF1F6' }}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#E91E8C] font-semibold mb-3">What you'll study</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#23324f] tracking-tight leading-tight mb-7 max-w-xl">
                A curriculum built around your curiosity
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 leading-relaxed">
                <div className="space-y-4">
                  <p>
                    In Year 1, you'll explore the fundamentals — material processes, critical thinking, and the history of 
                    contemporary art. You'll work alongside students from every discipline, sharing studios and ideas.
                  </p>
                  <p>
                    Regular crits, tutorials, and group sessions help you develop your voice early. You won't just make work — 
                    you'll learn to talk about it, defend it, and grow from feedback.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Years 2 and 3 bring increasing independence. By your final year, you'll be producing a substantial body of 
                    work for your degree show — Bath Spa's annual exhibition that attracts galleries and creative employers from 
                    across the UK.
                  </p>
                  <p>
                    Optional study abroad partnerships and live briefs with cultural organisations give you real-world 
                    experience before you graduate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text + image (image right) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Text + Image — Image Right</h4>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#E91E8C] font-semibold mb-3">The degree show</p>
                  <h2 className="text-2xl md:text-3xl font-black text-[#23324f] tracking-tight leading-tight mb-4">
                    Your work seen by the world
                  </h2>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                    <p>
                      Every year Bath Spa's degree show brings together hundreds of graduating students 
                      for an exhibition across both campuses — open to the public, attended by galleries, 
                      agencies, and creative employers.
                    </p>
                    <p>
                      Many students receive commissions, job offers, and gallery representation before 
                      graduation day. It's not a finishing line — it's a launch pad.
                    </p>
                  </div>
                  <DemoLink className="text-sm font-semibold text-[#E91E8C] flex items-center gap-1.5 hover:gap-3 transition-all w-fit">
                    View past degree shows <ArrowRight className="w-4 h-4" />
                  </DemoLink>
                </div>
                <div className="relative min-h-[260px] md:min-h-0">
                  <img src={STUDENTS_IMG} alt="Students working in the studio" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Text + image (image left) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Text + Image — Image Left</h4>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFF8EC' }}>
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[260px] md:min-h-0 order-2 md:order-1">
                  <img src={BATH_IMG} alt="Bath city centre" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#c48600] font-semibold mb-3">Student life</p>
                  <h2 className="text-2xl md:text-3xl font-black text-[#23324f] tracking-tight leading-tight mb-4">
                    Bath is part of your education
                  </h2>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                    <p>
                      The city of Bath is a UNESCO World Heritage Site — and it's on your doorstep. 
                      Roman baths, Georgian crescents, contemporary galleries, independent venues, and a 
                      thriving creative scene make it one of the UK's most inspiring places to study.
                    </p>
                  </div>
                  <DemoLink className="text-sm font-semibold text-[#E91E8C] flex items-center gap-1.5 hover:gap-3 transition-all w-fit">
                    Explore life in Bath <ArrowRight className="w-4 h-4" />
                  </DemoLink>
                </div>
              </div>
            </div>
          </div>

          {/* Pull quote / callout */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Pull Quote</h4>
            <div className="bg-[#23324f] rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <BlobBottomLeft color="#2DD4A8" opacity={0.05} size="w-80 h-80" />
              <div className="relative z-10 max-w-2xl">
                <span className="text-5xl font-black text-[#F5A623] leading-none block mb-4">"</span>
                <blockquote className="text-xl md:text-2xl font-bold text-white leading-snug mb-5">
                  The tutors didn't just teach me to paint — they taught me to think like an{' '}
                  <span className="text-[#F5A623]">artist</span>.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E91E8C] flex items-center justify-center text-white text-xs font-bold">JL</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Jess Liu</p>
                    <p className="text-xs text-white/50">BA Fine Art, 2024 · Now represented by Fold Gallery, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EEF1F6] rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-2">Specification</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Body text: <code className="bg-white px-1.5 py-0.5 rounded text-xs">text-base leading-relaxed text-gray-600</code></li>
              <li>• Max body width: <code className="bg-white px-1.5 py-0.5 rounded text-xs">max-w-2xl</code> for comfortable line length (~65–70 chars)</li>
              <li>• Two-column text: equal <code className="bg-white px-1.5 py-0.5 rounded text-xs">md:grid-cols-2 gap-6</code>, full-width on mobile</li>
              <li>• Image–text split: 50/50 grid, image panel uses absolute fill — no fixed heights needed</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      {activeTab === 'nav' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Breadcrumbs</h4>
            <div className="flex items-center gap-2 text-sm">
              <DemoLink className="text-[#E91E8C] hover:underline">Home</DemoLink>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <DemoLink className="text-[#E91E8C] hover:underline">Courses</DemoLink>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-500">Fine Art</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Link Styles</h4>
            <div className="space-y-3">
              <p className="text-sm">
                <DemoLink className="text-[#E91E8C] font-medium hover:underline underline-offset-4">Standard link →</DemoLink>
              </p>
              <p className="text-sm">
                <DemoLink className="text-[#23324f] font-medium border-b-2 border-[#E91E8C] hover:text-[#E91E8C] transition-colors pb-0.5">Underlined emphasis link</DemoLink>
              </p>
              <p className="text-sm">
                <DemoLink className="text-gray-500 hover:text-[#E91E8C] transition-colors flex items-center gap-1 w-fit">External link <ExternalLink className="w-3 h-3" /></DemoLink>
              </p>
            </div>
          </div>

          <div className="bg-[#23324f] rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-5">Header Navigation (Preview)</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-[#E91E8C] flex items-center justify-center font-black text-white text-xs">BSU</div>
                <span className="text-white font-semibold text-sm">Bath Spa</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
                <DemoLink className="hover:text-white transition-colors">Courses</DemoLink>
                <DemoLink className="hover:text-white transition-colors">Life in Bath</DemoLink>
                <DemoLink className="hover:text-white transition-colors">Campus</DemoLink>
                <DemoLink className="hover:text-white transition-colors">Student Life</DemoLink>
                <button className="px-5 py-2 bg-[#E91E8C] text-white rounded-full text-xs font-semibold hover:bg-[#d4177d] transition-all">
                  Open Day
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}