"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowRight, Shield, Cpu, Network, GraduationCap, Building2, 
  Users2, Landmark, Rocket, HeartHandshake, Eye, BarChart3, Globe,
  Activity, CheckCircle2, Star, Zap, Briefcase
} from "lucide-react";

// Types
interface MetricItemProps {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

interface CapabilityItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
}

interface ServiceNode {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  x: number; // percentage
  y: number; // percentage
  details: string;
  audience: string;
}

// Data definitions
const capabilities: CapabilityItem[] = [
  {
    title: "AI Readiness",
    desc: "Assessing, advising, and structuring corporate frameworks to deploy and scale AI safely and ethically.",
    icon: <Cpu className="w-6 h-6 text-cyan-electric" />,
    gradient: "from-cyan-electric/20 to-primary/5",
  },
  {
    title: "Digital Transformation",
    desc: "Re-engineering legacy operational workflows, systems, and structures into agile, digital-first ecosystems.",
    icon: <Zap className="w-6 h-6 text-cyan-electric" />,
    gradient: "from-primary/20 to-accent-blue/5",
  },
  {
    title: "Innovation Ecosystems",
    desc: "Connecting startups, corporations, capital, and communities to foster collaborative, sustainable ventures.",
    icon: <Network className="w-6 h-6 text-cyan-electric" />,
    gradient: "from-accent-blue/20 to-cyan-electric/5",
  },
  {
    title: "Future Skills",
    desc: "Providing immersive technical curriculum, AI literacy courses, and workshops for next-generation talent.",
    icon: <GraduationCap className="w-6 h-6 text-cyan-electric" />,
    gradient: "from-cyan-electric/20 to-primary/5",
  },
  {
    title: "Strategic Communications",
    desc: "Curation of powerful impact narratives, PR alignment, and visibility campaigns to capture international partnerships.",
    icon: <Shield className="w-6 h-6 text-cyan-electric" />,
    gradient: "from-primary/20 to-accent-blue/5",
  },
  {
    title: "Event Production",
    desc: "Designing and managing tech conferences and summits that gather global leaders and drive policy action.",
    icon: <Users2 className="w-6 h-6 text-cyan-electric" />,
    gradient: "from-accent-blue/20 to-cyan-electric/5",
  },
];

const serviceNodes: ServiceNode[] = [
  {
    id: "corp",
    name: "Corporate Digitization",
    shortName: "Digitization",
    icon: <Building2 className="w-5 h-5" />,
    x: 15,
    y: 20,
    details: "Process automation, operational system migration, change management, and digital infrastructure strategy for modern businesses and government departments.",
    audience: "Enterprises, SMBs, Government ministries",
  },
  {
    id: "ai-imm",
    name: "AI Immersions",
    shortName: "AI Workshops",
    icon: <Cpu className="w-5 h-5" />,
    x: 85,
    y: 20,
    details: "Executive bootcamps and simulations translating advanced global AI applications into localized strategies.",
    audience: "C-Suite, Executives, Policy Makers",
  },
  {
    id: "ai-lit",
    name: "AI Literacy & Future Readiness",
    shortName: "AI Literacy",
    icon: <GraduationCap className="w-5 h-5" />,
    x: 90,
    y: 65,
    details: "Structured AI curriculum and digital skills training paths preparing students and workers for future markets.",
    audience: "Schools, Universities, Individuals",
  },
  {
    id: "kids",
    name: "Kids Tech Fest",
    shortName: "Kids Tech Fest",
    icon: <Rocket className="w-5 h-5" />,
    x: 50,
    y: 90,
    details: "Hands-on robotics, coding tournaments, and AI showcases for kids aged 5 to 18, promoting creative engineering.",
    audience: "Children, Parents, Sponsors",
  },
  {
    id: "pr",
    name: "PR & Strategic Communications",
    shortName: "Strategic PR",
    icon: <Shield className="w-5 h-5" />,
    x: 10,
    y: 65,
    details: "Thought leadership positioning and media campaigns targeting visibility for impact-oriented technological projects.",
    audience: "Ecosystem startups, Development bodies",
  },
  {
    id: "events",
    name: "Tech Conferences & Event Production",
    shortName: "Conferences",
    icon: <Users2 className="w-5 h-5" />,
    x: 50,
    y: 10,
    details: "End-to-end design, curation, speaker sourcing, and production of world-class technology summits and exhibitions.",
    audience: "Global hosts, Sponsors, Agencies",
  },
];

const caseStudies = [
  {
    title: "National Digital Integration Framework",
    client: "Federal Ministry Partnerships",
    metric: "3.2M Citizens",
    metricDesc: "Integrated into the updated digital service portals",
    image: "/assets/command_center.png",
    category: "Government Modernization",
    tags: ["Policy", "Cloud Infrastructure", "API Systems"],
  },
  {
    title: "Kids Tech Fest AI Summit 2025",
    client: "Digital Inclusion Initiative",
    metric: "5,000+ Attendees",
    metricDesc: "Gathered for hands-on robotics & coding in Lagos",
    image: "/assets/kids_tech_african.png",
    category: "Future Education",
    tags: ["AI Literacy", "Robotics", "Ecosystem Hubs"],
  },
];

const partners = [
  "UNESCO",
  "Oracle Academy",
  "Samsung",
  "Sterling Bank",
  "Enugu State Government",
  "Kwara State Government",
  "Shecluded",
  "Alt School",
  "Line Health",
  "Federal Ministry of Women Affairs",
];

// Helper components
function MetricItem({ label, value, suffix, description }: MetricItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      
      const timer = setInterval(() => {
        start += Math.ceil(value / 50);
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, Math.max(stepTime, 20));

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl relative overflow-hidden group border-white/5 bg-slate-surface/30">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-cyan-electric transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <div className="text-4xl font-extrabold text-white tracking-tight mb-2 flex items-baseline">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-light-text/75">
          {count.toLocaleString()}
        </span>
        <span className="text-cyan-electric ml-0.5">{suffix}</span>
      </div>
      <h4 className="text-sm font-semibold text-white/95 uppercase tracking-wider mb-1">{label}</h4>
      <p className="text-xs text-muted-text leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeScene, setActiveScene] = useState(0);
  const [selectedNode, setSelectedNode] = useState<ServiceNode | null>(null);

  // Map scroll progress to scenes (0 to 4)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sceneIndex = Math.min(Math.floor(latest * 5), 4);
      setActiveScene(sceneIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Scene visual rendering logic
  const getSceneVisual = (scene: number) => {
    switch (scene) {
      case 0:
        return (
          <div className="relative w-full h-full">
            <Image
              src="/assets/africa_night_network.png"
              alt="Africa at night glowing digital network"
              fill
              priority
              className="object-cover opacity-60 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepspace via-deepspace/50 to-transparent" />
            
            {/* Pulsing visual nodes overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[45%] left-[25%] w-3 h-3 rounded-full bg-cyan-electric shadow-[0_0_15px_#22d3ee] animate-ping" />
              <div className="absolute top-[52%] left-[40%] w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#2563eb] animate-ping [animation-delay:1s]" />
              <div className="absolute top-[60%] left-[55%] w-3 h-3 rounded-full bg-cyan-electric shadow-[0_0_15px_#22d3ee] animate-ping [animation-delay:0.5s]" />
              <div className="absolute top-[75%] left-[30%] w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#2563eb] animate-ping [animation-delay:1.5s]" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="relative w-full h-full bg-[#030712] overflow-hidden">
            <Image
              src="/assets/command_center.png"
              alt="Futuristic Command Center"
              fill
              className="object-cover opacity-45 scale-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepspace via-deepspace/40 to-transparent" />
            
            {/* Cyber dashboard elements overlays */}
            <div className="absolute right-10 top-1/4 w-80 glass-panel p-4 rounded-xl border-white/10 hidden lg:block animate-float">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="text-xs font-mono text-cyan-electric flex items-center gap-1.5">
                  <Activity className="w-3 h-3 animate-pulse" /> LIVE ANALYTICS
                </span>
                <span className="text-[10px] text-muted-text font-mono">NODE_AFR_SYS_01</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-electric w-3/4 animate-pulse" />
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2 animate-pulse [animation-delay:0.5s]" />
                </div>
                <div className="flex justify-between text-[10px] text-muted-text font-mono mt-2">
                  <span>CAPACITY: 89.2%</span>
                  <span>LATENCY: 12ms</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full bg-[#050b18] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-deepspace via-transparent to-primary/10" />
            
            {/* Interactive Holographic Learning Representation */}
            <div className="relative w-[340px] md:w-[500px] h-[300px] glass-panel border-cyan-electric/20 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(34,211,238,0.05)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-cyan-electric" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Future Skills Academy</h4>
                    <p className="text-[10px] text-muted-text">CURRICULUM MODULE: APPLIED AI & ROBOTICS</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-electric/15 text-cyan-electric font-mono text-[10px] border border-cyan-electric/25">
                  ACTIVE_LESSON
                </span>
              </div>

              <div className="my-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-cyan-electric/20 transition-all duration-300">
                  <div className="text-[10px] text-muted-text font-mono">01_CODE</div>
                  <div className="text-cyan-electric font-bold text-sm mt-1">Python ML</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-cyan-electric/20 transition-all duration-300">
                  <div className="text-[10px] text-muted-text font-mono">02_BUILD</div>
                  <div className="text-cyan-electric font-bold text-sm mt-1">IoT Node</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-cyan-electric/20 transition-all duration-300">
                  <div className="text-[10px] text-muted-text font-mono">03_DEPLOY</div>
                  <div className="text-cyan-electric font-bold text-sm mt-1">Edge Model</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-text border-t border-white/5 pt-4">
                <span className="flex items-center gap-1.5"><Users2 className="w-3.5 h-3.5" /> 1,200 Students Online</span>
                <span className="text-cyan-electric flex items-center gap-1"><Zap className="w-3 h-3" /> Live Feedback Active</span>
              </div>
            </div>

            {/* Floating code bits */}
            <div className="absolute left-[8%] top-[15%] text-[10px] font-mono text-cyan-electric/30 hidden md:block">
              {`import torch\nclass AIModel(nn.Module):\n  def __init__(self):\n    super().__init__()`}
            </div>
            <div className="absolute right-[8%] bottom-[15%] text-[10px] font-mono text-primary/30 hidden md:block">
              {`const ecosystemNode = {\n  location: "Nairobi",\n  activePrograms: 24\n};`}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-full bg-[#020510] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 tech-grid-dots opacity-30" />
            
            {/* SVG Network Map Visualization representing nodes in the ecosystems */}
            <svg className="w-[85%] h-[85%] max-w-[500px]" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="primaryGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Connections (Lines) */}
              <line x1="200" y1="200" x2="80" y2="120" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="200" y1="200" x2="320" y2="120" stroke="#22D3EE" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="320" y2="280" stroke="#2563EB" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="80" y2="280" stroke="#22D3EE" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="80" y1="120" x2="320" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="320" y1="120" x2="320" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Glowing circles backgrounds */}
              <circle cx="200" cy="200" r="60" fill="url(#primaryGlow)" />
              <circle cx="320" cy="120" r="45" fill="url(#nodeGlow)" />

              {/* Central Node */}
              <circle cx="200" cy="200" r="16" fill="#2563EB" />
              <text x="200" y="235" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">ECOSYSTEM</text>
              
              {/* Outer Nodes */}
              <circle cx="80" cy="120" r="10" fill="#0F172A" stroke="#2563EB" strokeWidth="2" />
              <text x="80" y="95" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Governments</text>

              <circle cx="320" cy="120" r="12" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" />
              <text x="320" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="semibold" fontFamily="sans-serif">Institutions</text>

              <circle cx="320" cy="280" r="10" fill="#0F172A" stroke="#2563EB" strokeWidth="2" />
              <text x="320" y="310" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Startups</text>

              <circle cx="80" cy="280" r="12" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" />
              <text x="80" y="310" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Communities</text>
            </svg>
          </div>
        );
      case 4:
        return (
          <div className="relative w-full h-full bg-[#01020a] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-15" />
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-electric/5 to-primary/10 blur-[80px]" />
            
            {/* Future cityscape layout - stylized lines & structures */}
            <div className="relative w-[80%] h-[60%] flex flex-col justify-end">
              <div className="flex items-end justify-between h-[80%] gap-4 px-4 border-b border-cyan-electric/20 relative">
                {/* Wind turbine/Smart infrastructure stylized icons SVG */}
                <div className="w-[15%] h-[70%] bg-gradient-to-t from-primary/30 to-transparent border-t border-x border-white/5 rounded-t-lg relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-cyan-electric/30 animate-spin" />
                </div>
                <div className="w-[20%] h-[95%] bg-gradient-to-t from-cyan-electric/20 to-transparent border-t border-x border-white/10 rounded-t-xl" />
                <div className="w-[25%] h-[80%] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent border-t border-x border-white/5 rounded-t-xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-electric animate-ping" />
                </div>
                <div className="w-[15%] h-[60%] bg-gradient-to-t from-cyan-electric/25 to-transparent border-t border-x border-white/5 rounded-t-lg" />
                <div className="w-[18%] h-[85%] bg-gradient-to-t from-primary/30 to-transparent border-t border-x border-white/10 rounded-t-xl" />

                {/* Energy connections flow */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                  <path d="M 50,150 Q 150,70 250,120 T 350,80" fill="none" stroke="url(#cyanFlowGradient)" strokeWidth="2" strokeDasharray="6 6" />
                  <defs>
                    <linearGradient id="cyanFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="50%" stopColor="#22D3EE" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-center mt-6">
                <span className="text-[10px] text-cyan-electric font-mono tracking-widest uppercase">AFRO-FUTURE SMART SYSTEMS</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const sceneTitles = [
    {
      title: "Building Africa’s Digital Future.",
      desc: "Helping governments, institutions, businesses, and communities unlock opportunity through technology, AI, innovation, and inclusion.",
    },
    {
      title: "Transforming Systems.",
      desc: "Architecting reliable government digital systems, enterprise operational workflows, and intelligent administrative dashboards.",
    },
    {
      title: "Building Future-Ready Talent.",
      desc: "Powering academic campuses and executive boardrooms with interactive AI curriculum and hands-on technical bootcamps.",
    },
    {
      title: "Connecting Innovation Ecosystems.",
      desc: "Forging dynamic relationships between development partners, local startups, universities, and regulatory institutions.",
    },
    {
      title: "Shaping What’s Next.",
      desc: "Co-designing smart city configurations, cleaner infrastructure, and inclusive solutions built on African excellence.",
    },
  ];

  return (
    <div className="relative">
      
      {/* 1. HERO VERTICAL SCROLL STORYTELLING */}
      <section ref={containerRef} className="relative h-[500vh] bg-deepspace">
        <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
          
          {/* Text Scene Container */}
          <div className="w-full lg:w-[45%] h-[50%] lg:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-deepspace relative z-20 pt-16">
            <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
            <div className="absolute top-1/4 left-10 w-72 h-72 ambient-glow-blue opacity-30 pointer-events-none" />
            
            <div className="max-w-md relative">
              {/* Scene Indicator */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
                  SCENE 0{activeScene + 1} // OPERATING_SYSTEM
                </span>
                <div className="h-[1px] w-12 bg-white/10" />
              </div>

              {/* Animated Scene content */}
              <div className="min-h-[220px] md:min-h-[260px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScene}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                      {sceneTitles[activeScene].title}
                    </h1>
                    <p className="text-muted-text text-sm md:text-base leading-relaxed mb-8">
                      {sceneTitles[activeScene].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-electric text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/10 flex items-center gap-2 group"
                >
                  Explore Ecosystem
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all"
                >
                  Learn More
                </Link>
              </div>

              {/* Progress dots bar */}
              <div className="flex items-center gap-2 mt-12">
                {sceneTitles.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeScene === index ? "w-8 bg-cyan-electric" : "w-2 bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Visual Container */}
          <div className="w-full lg:w-[55%] h-[50%] lg:h-full relative z-10 border-t lg:border-t-0 lg:border-l border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                {getSceneVisual(activeScene)}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 2. SPLIT-SCREEN ABOUT PREVIEW */}
      <section className="py-24 bg-midnight relative border-y border-white/5">
        <div className="absolute inset-0 tech-grid-dots opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              ABOUT // DIGITAL EQUITY AFRICA
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Shaping an Inclusive Technology Frontier.
            </h2>
            <p className="text-muted-text text-sm md:text-base leading-relaxed">
              We are a modern digital ecosystem transformation consultancy. We operate at the intersection of public administration modernization, corporate automation, and future talent enablement.
            </p>
            <p className="text-muted-text text-sm md:text-base leading-relaxed">
              By providing system designs, custom AI literacy roadmaps, and PR positioning, we transition African organizations into global-tier digital powerhouses.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-cyan-electric font-semibold text-sm hover:underline group"
              >
                Understand our principles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-panel p-6 rounded-2xl border-white/5 bg-gradient-to-br ${cap.gradient} transition-all duration-300 hover:border-cyan-electric/25 hover:scale-[1.01] flex flex-col gap-4`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-surface flex items-center justify-center border border-white/15">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{cap.title}</h3>
                  <p className="text-muted-text text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FUTURISTIC IMPACT DASHBOARD */}
      <section className="py-24 bg-deepspace relative">
        <div className="absolute -top-32 left-1/4 w-96 h-96 ambient-glow-blue opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              REAL-TIME // METRICS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Operational Impact Matrix
            </h2>
            <p className="text-muted-text text-sm leading-relaxed">
              Tracking our performance indicators across African institutions, ecosystems, and talent programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricItem
              label="Countries Reached"
              value={15}
              suffix="+"
              description="Deploying digital capacity, strategic frameworks, and workshops across Sub-Saharan countries."
            />
            <MetricItem
              label="Institutions Transformed"
              value={120}
              suffix="+"
              description="Modernizing public ministries, private enterprises, schools, and development initiatives."
            />
            <MetricItem
              label="Professionals Trained"
              value={10000}
              suffix="+"
              description="Equipping managers and developers with AI integration skills, cloud engineering, and operations design."
            />
            <MetricItem
              label="AI Programs Delivered"
              value={45}
              suffix="+"
              description="Deploying AI executive modules, policy briefs, and immersion schools."
            />
            <MetricItem
              label="Strategic Partnerships"
              value={30}
              suffix="+"
              description="Forging networks with global technology brands, educational bodies, and state bodies."
            />
            <MetricItem
              label="Events Produced"
              value={7}
              suffix="+"
              description="Hosting tech conferences, Kids Tech Fests, and panel events with global reach."
            />
          </div>
        </div>
      </section>

      {/* 4. SERVICE ECOSYSTEM INTERACTIVE MAP */}
      <section className="py-24 bg-midnight relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              INTERACTIVE // SERVICE NODES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ecosystem Connectivity Graph
            </h2>
            <p className="text-muted-text text-sm leading-relaxed">
              Explore our core capabilities. Hover or click nodes to detail services, outcomes, and targets.
            </p>
          </div>

          {/* Graphical Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive Graph Box (Left 7 cols) */}
            <div className="lg:col-span-7 h-[400px] md:h-[500px] glass-panel border-white/5 rounded-3xl relative flex items-center justify-center bg-slate-surface/10 overflow-hidden">
              <div className="absolute inset-0 tech-grid-dots opacity-20" />
              
              {/* Radial Center Node */}
              <div className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-cyan-electric flex items-center justify-center p-0.5 shadow-[0_0_40px_rgba(37,99,235,0.25)] border border-cyan-electric/30 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-deepspace flex flex-col items-center justify-center text-center p-2">
                  <div className="text-[8px] font-mono text-cyan-electric font-bold">DEA</div>
                  <div className="text-[10px] font-bold text-white leading-tight">ECOSYSTEM</div>
                </div>
              </div>

              {/* Service Nodes wrapper */}
              <div className="absolute inset-0">
                {serviceNodes.map((node) => {
                  const isSelected = selectedNode?.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      onMouseEnter={() => setSelectedNode(node)}
                      className={`absolute w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 ${
                        isSelected 
                          ? "bg-cyan-electric border-cyan-electric text-deepspace scale-110 shadow-[0_0_20px_#22d3ee]" 
                          : "bg-slate-surface/80 border-white/10 text-muted-text hover:text-white hover:border-cyan-electric/50 hover:scale-105"
                      }`}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    >
                      {node.icon}
                      <span className="absolute top-14 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/70 whitespace-nowrap hidden sm:block">
                        {node.shortName}
                      </span>
                    </button>
                  );
                })}

                {/* SVG connection lines overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45">
                  {serviceNodes.map((node) => {
                    const isSelected = selectedNode?.id === node.id;
                    return (
                      <line
                        key={node.id}
                        x1="50%"
                        y1="50%"
                        x2={`${node.x}%`}
                        y2={`${node.y}%`}
                        stroke={isSelected ? "#22d3ee" : "rgba(255,255,255,0.08)"}
                        strokeWidth={isSelected ? "1.5" : "1"}
                        strokeDasharray={isSelected ? "none" : "3 3"}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Service details sidebar card (Right 5 cols) */}
            <div className="lg:col-span-5 h-[400px] md:h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                {selectedNode ? (
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel p-8 rounded-3xl border-white/5 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-cyan-electric/15 text-cyan-electric flex items-center justify-center border border-cyan-electric/20">
                          {selectedNode.icon}
                        </div>
                        <h3 className="text-white font-extrabold text-lg leading-snug">{selectedNode.name}</h3>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest mb-1.5">SERVICE SUMMARY</h4>
                          <p className="text-muted-text text-sm leading-relaxed">{selectedNode.details}</p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest mb-1.5">TARGET AUDIENCE</h4>
                          <p className="text-white font-medium text-sm">{selectedNode.audience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-cyan-electric text-sm font-semibold hover:underline group"
                      >
                        Explore detailed roadmap
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <div className="glass-panel p-8 rounded-3xl border-white/5 h-full flex flex-col items-center justify-center text-center">
                    <Network className="w-12 h-12 text-white/20 mb-4 animate-pulse" />
                    <h3 className="text-white font-bold text-base mb-2">Ecosystem Exploration</h3>
                    <p className="text-muted-text text-xs max-w-[280px]">
                      Hover or tap the peripheral network nodes in the grid to review their service scopes and target capabilities.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FEATURED WORK CASE STUDIES */}
      <section className="py-24 bg-deepspace relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
                CASE STUDIES // IMPACT DELIVERED
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Ecosystem Operational Highlights
              </h2>
            </div>
            <div>
              <Link
                href="/services"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                View all programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="glass-panel rounded-3xl border-white/5 overflow-hidden group hover:border-cyan-electric/25 transition-all duration-500 bg-slate-surface/20 flex flex-col"
              >
                {/* Visual Cover */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden border-b border-white/5">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-surface via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-deepspace/85 backdrop-blur text-[10px] text-cyan-electric font-mono border border-cyan-electric/20">
                    {study.category}
                  </div>
                </div>

                {/* Info and stats */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-muted-text tracking-wider">{study.client}</span>
                    <h3 className="text-white font-extrabold text-xl mt-1 mb-4 leading-tight">{study.title}</h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded bg-white/5 text-[10px] text-muted-text font-medium border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact block */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-cyan-electric tracking-tight">{study.metric}</div>
                      <div className="text-[10px] text-muted-text uppercase font-mono">{study.metricDesc}</div>
                    </div>
                    <Link href="/contact" className="p-3 rounded-full bg-white/5 text-white hover:bg-cyan-electric hover:text-deepspace transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS MARQUEE SECTION */}
      <section className="py-16 bg-midnight border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="text-xs font-mono text-muted-text uppercase tracking-widest font-semibold">
            TRUSTED BY LEADING GLOBAL INSTITUTIONS
          </span>
        </div>

        <div className="relative w-full overflow-hidden flex items-center py-4 bg-slate-surface/10">
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

          {/* Endless Marquee Ticker */}
          <div className="flex gap-16 min-w-full justify-around animate-marquee whitespace-nowrap">
            {partners.concat(partners).map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="text-lg md:text-xl font-bold tracking-tight text-white/30 hover:text-cyan-electric hover:scale-105 hover:glow transition-all duration-300 cursor-default uppercase font-sans py-2"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
