"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, BrainCircuit, Globe, Target, Flame, Lightbulb, 
  MapPin, CheckCircle, GraduationCap, Building2, Network, ArrowRight
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  category: string;
}

interface Principle {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface MapNode {
  id: string;
  city: string;
  country: string;
  x: number; // custom SVG coords
  y: number; // custom SVG coords
  programs: string[];
  impact: string;
}

const milestones: Milestone[] = [
  {
    year: "2024",
    title: "Inception & Government Advisory",
    desc: "Co-designed early digital literacy agendas with federal and state departments to establish foundational frameworks.",
    category: "Policy Advisory",
  },
  {
    year: "2025",
    title: "Maiden Kids Tech Fest",
    desc: "Launched our flagship summit in Lagos, training over 5,000 children in building robotics and introductory machine learning.",
    category: "Education Initiative",
  },
  {
    year: "2026",
    title: "AI Immersions Expansion",
    desc: "Rolled out executive AI training bootcamps across 4 regional nodes, empowering corporate boards and policymakers.",
    category: "Executive Strategy",
  },
  {
    year: "2027 & Beyond",
    title: "Pan-African Operating System",
    desc: "Scaling digital equity platforms across 15+ countries, establishing permanent learning and innovation networks.",
    category: "Ecosystem Growth",
  },
];

const principles: Principle[] = [
  {
    title: "Inclusion",
    desc: "We build systems with access as a baseline. True transformation occurs when all demographics, especially children, have equitable digital resources.",
    icon: <Globe className="w-6 h-6 text-cyan-electric" />,
  },
  {
    title: "Innovation",
    desc: "We go beyond legacy methodologies. We implement world-class, localized technical architectures and tools to solve pressing constraints.",
    icon: <BrainCircuit className="w-6 h-6 text-cyan-electric" />,
  },
  {
    title: "Systems Thinking",
    desc: "No node operates in isolation. We connect policy, education, operations, and publicity to build robust self-sustaining digital loops.",
    icon: <Network className="w-6 h-6 text-cyan-electric" />,
  },
  {
    title: "Human-Centered Design",
    desc: "We focus on human capacity first. Tools must simplify work, enable creative problem solving, and drive shared community wealth.",
    icon: <Target className="w-6 h-6 text-cyan-electric" />,
  },
  {
    title: "African Excellence",
    desc: "We reflect the depth of local talent. We aim to show that the continent can lead international conversations on AI, engineering, and policy.",
    icon: <Flame className="w-6 h-6 text-cyan-electric" />,
  },
];

const mapNodes: MapNode[] = [
  {
    id: "lagos",
    city: "Lagos",
    country: "Nigeria",
    x: 180,
    y: 240,
    programs: ["Kids Tech Fest Flagship", "Corporate Digitization Trials", "Sterling Bank Program"],
    impact: "5,000+ kids trained, 20 corporate clients",
  },
  {
    id: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    x: 290,
    y: 260,
    programs: ["AI Executive Immersions", "Oracle Academy Collaboration", "Universities Network"],
    impact: "1,500+ leaders trained, 12 schools connected",
  },
  {
    id: "kigali",
    city: "Kigali",
    country: "Rwanda",
    x: 270,
    y: 280,
    programs: ["Smart Government Advisor", "National AI Policy Blueprint", "Tech Incubator Network"],
    impact: "Federal framework deployed, 5 incubators aligned",
  },
  {
    id: "accra",
    city: "Accra",
    country: "Ghana",
    x: 150,
    y: 240,
    programs: ["Future Skills Bootcamps", "Ecosystem Connectors", "Women In Tech Partner"],
    impact: "800+ developers skilled, 3 development funds",
  },
  {
    id: "capetown",
    city: "Cape Town",
    country: "South Africa",
    x: 240,
    y: 380,
    programs: ["Clean Tech Analytics", "Venture Partner Summit", "AI Research Lab Integration"],
    impact: "10 clean tech systems automated, 1 global partner hub",
  },
];

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activeMapNode, setActiveMapNode] = useState<MapNode | null>(mapNodes[0]);

  return (
    <div className="bg-deepspace relative min-h-screen">
      <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
      
      {/* 1. INTRO / MANIFESTO */}
      <section className="relative py-24 md:py-32 flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] ambient-glow-blue opacity-25 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] ambient-glow-cyan opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              ABOUT OUR MANIFESTO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              Why Digital Equity Matters.
            </h1>
            <p className="text-muted-text text-base md:text-lg leading-relaxed mt-4">
              Africa is entering the most rapid technological revolution in human history. With AI and modern automation reshaping the global economic infrastructure, inclusion can no longer be a secondary goal—it is the prerequisite for security, growth, and shared prosperity.
            </p>
            <p className="text-muted-text text-base leading-relaxed">
              At Digital Equity Africa, we do not view technology simply as software code or corporate tools. We view it as the essential operating environment of the future. We bridge the gap between traditional institutions and this frontier by engineering custom AI literacy curricula, modernizing state digital pathways, and showcasing African technological excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 border-t border-white/5 pt-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                <Target className="w-6 h-6 text-cyan-electric" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Our Mission</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  To build scalable digital capabilities and deploy modern systems across the continent, allowing governments, children, and corporations to meaningfully co-create and benefit from the global AI economy.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-electric/10 text-cyan-electric flex items-center justify-center border border-cyan-electric/20 shrink-0">
                <Globe className="w-6 h-6 text-cyan-electric" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Our Vision</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  A hyper-connected Africa powered by smart public channels, automated enterprises, and highly skilled technological leaders who resolve critical challenges via local innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TIMELINE */}
      <section className="py-24 bg-midnight relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
                ROADMAP // EVOLUTION
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Our Growth Journey
              </h2>
            </div>
            
            {/* Timeline controller tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-surface border border-white/5">
              {milestones.map((ms, index) => (
                <button
                  key={ms.year}
                  onClick={() => setActiveMilestone(index)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    activeMilestone === index 
                      ? "bg-primary text-white shadow-lg" 
                      : "text-muted-text hover:text-white"
                  }`}
                >
                  {ms.year}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Showcase Box */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border-white/5 bg-slate-surface/10 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-80 h-80 ambient-glow-blue opacity-10 pointer-events-none" />
            <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Year Badge */}
                <div className="lg:col-span-3">
                  <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-primary to-cyan-electric select-none">
                    {milestones[activeMilestone].year}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-electric/15 text-cyan-electric border border-cyan-electric/20 font-mono text-[10px] inline-block mt-3">
                    {milestones[activeMilestone].category}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9 flex flex-col gap-4 border-l border-white/5 pl-0 lg:pl-10">
                  <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-tight leading-snug">
                    {milestones[activeMilestone].title}
                  </h3>
                  <p className="text-muted-text text-sm md:text-base leading-relaxed">
                    {milestones[activeMilestone].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE ECOSYSTEM MAP */}
      <section className="py-24 bg-deepspace relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              PAN-AFRICAN REACH // DEPLOYMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ecosystem Node Grid
            </h2>
            <p className="text-muted-text text-sm leading-relaxed">
              Digital Equity Africa operates dynamic nodes across key technology centers. Hover or click markers to inspect programs and metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Custom Interactive SVG Map of Africa (Left 7 cols) */}
            <div className="lg:col-span-7 h-[420px] md:h-[500px] glass-panel border-white/5 rounded-3xl relative flex items-center justify-center bg-slate-surface/10 overflow-hidden">
              <div className="absolute inset-0 tech-grid-dots opacity-20" />
              
              {/* Stylized geometric Africa outline representation in SVG */}
              <svg className="w-[85%] h-[85%] max-w-[450px]" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background outline */}
                <path
                  d="M 120,80 L 150,60 L 220,50 L 300,70 L 330,120 L 320,170 L 330,220 L 290,260 L 260,320 L 240,390 L 230,410 L 220,380 L 210,320 L 210,290 L 190,260 L 170,250 L 150,220 L 120,200 L 100,190 L 80,180 L 70,140 L 90,100 Z"
                  fill="rgba(15, 23, 42, 0.6)"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1.5"
                />
                
                {/* Visual grid inside outline */}
                <path
                  d="M 150,60 L 240,390 M 120,80 L 290,260 M 70,140 L 320,170 M 100,190 L 330,120 M 150,220 L 240,410"
                  stroke="rgba(255, 255, 255, 0.02)"
                  strokeWidth="1"
                />

                {/* Animated Connecting Pathways (Lagos-Nairobi-Kigali-Accra) */}
                <path
                  d="M 150,240 L 180,240 L 270,280 L 290,260"
                  fill="none"
                  stroke="rgba(34, 211, 238, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 180,240 L 240,380"
                  fill="none"
                  stroke="rgba(37, 99, 235, 0.2)"
                  strokeWidth="1"
                />
              </svg>

              {/* Interactive Node Markers */}
              {mapNodes.map((node) => {
                const isActive = activeMapNode?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveMapNode(node)}
                    onMouseEnter={() => setActiveMapNode(node)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                    style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  >
                    <div className="relative">
                      {/* Pulsing ring */}
                      <span className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                        isActive ? "bg-cyan-electric/25 animate-ping" : "bg-transparent group-hover:bg-primary/20"
                      }`} />
                      
                      {/* Core point */}
                      <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                        isActive 
                          ? "bg-cyan-electric border-deepspace scale-110" 
                          : "bg-slate-surface border-white/40 hover:border-cyan-electric"
                      }`} />
                    </div>

                    {/* Small label */}
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/50 bg-deepspace/80 px-1 rounded border border-white/5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {node.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Node Detail Sidebar (Right 5 cols) */}
            <div className="lg:col-span-5 h-[420px] md:h-[500px]">
              <AnimatePresence mode="wait">
                {activeMapNode ? (
                  <motion.div
                    key={activeMapNode.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="glass-panel p-8 rounded-3xl border-white/5 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-cyan-electric font-mono text-[10px] mb-2 uppercase tracking-widest">
                        <MapPin className="w-3.5 h-3.5" /> Node Address Active
                      </div>
                      
                      <h3 className="text-white font-extrabold text-2xl tracking-tight mb-1">
                        {activeMapNode.city}
                      </h3>
                      <p className="text-muted-text text-xs font-semibold mb-6">{activeMapNode.country}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest mb-2.5">ACTIVE ECOSYSTEM PROGRAMS</h4>
                          <ul className="space-y-2 text-sm text-muted-text">
                            {activeMapNode.programs.map((program) => (
                              <li key={program} className="flex items-center gap-2 text-light-text/90">
                                <CheckCircle className="w-4 h-4 text-cyan-electric shrink-0" />
                                {program}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest mb-1.5">IMPACT DELIVERED</h4>
                          <p className="text-white font-semibold text-sm leading-relaxed">{activeMapNode.impact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-cyan-electric text-sm font-semibold hover:underline group"
                      >
                        Partner in {activeMapNode.city}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <div className="glass-panel p-8 rounded-3xl border-white/5 h-full flex flex-col items-center justify-center text-center">
                    <Globe className="w-12 h-12 text-white/20 mb-4" />
                    <h3 className="text-white font-bold text-base mb-2">Regional Explorations</h3>
                    <p className="text-muted-text text-xs max-w-[280px]">
                      Hover or tap node markers on the Africa outline grid map to inspect specific regional initiatives, impact, and pathways.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 4. LEADERSHIP PRINCIPLES */}
      <section className="py-24 bg-midnight relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              OPERATING PROTOCOLS // VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Leadership Principles
            </h2>
            <p className="text-muted-text text-sm leading-relaxed">
              Our core frameworks govern how we build products, deploy advisory, and scale ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pr) => (
              <div
                key={pr.title}
                className="glass-panel p-8 rounded-2xl border-white/5 bg-slate-surface/30 hover:border-cyan-electric/25 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-surface flex items-center justify-center border border-white/10 mb-6 group-hover:border-cyan-electric/30 transition-colors">
                  {pr.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{pr.title}</h3>
                <p className="text-muted-text text-xs leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
