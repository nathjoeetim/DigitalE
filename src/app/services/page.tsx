"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  Building2, Cpu, GraduationCap, Rocket, Shield, Users2, 
  ArrowRight, CheckCircle2, ChevronRight, BarChart3, Settings, PlayCircle
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  desc: string;
  deliverables: string[];
  audience: string;
  outcome: string;
  mockup: React.ReactNode;
}

export default function Services() {
  const [activeSection, setActiveSection] = useState("digitization");
  
  const sectionRefs = {
    digitization: useRef<HTMLDivElement>(null),
    immersions: useRef<HTMLDivElement>(null),
    literacy: useRef<HTMLDivElement>(null),
    kidstech: useRef<HTMLDivElement>(null),
    pr: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    const element = sectionRefs[id].current;
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const servicesData: ServiceItem[] = [
    {
      id: "digitization",
      title: "Corporate Digitization",
      tagline: "Transition from legacy architectures to optimized digital workflows.",
      icon: <Building2 className="w-5 h-5" />,
      desc: "We analyze legacy operational bottlenecks in government ministries and private firms. We build, integrate, and scale cloud databases, automated CRM/ERP modules, and centralized workforce data pipelines.",
      deliverables: [
        "Digital transformation maturity audits",
        "Operations flow automation blueprints",
        "Centralized API & cloud architecture configuration",
        "Workforce capability workshops",
        "Ongoing systems optimization advisory",
      ],
      audience: "Government agencies, corporate firms, and growing SMEs",
      outcome: "Reduced operational overhead, faster document transit, and centralized operational metrics.",
      mockup: (
        <div className="w-full h-56 rounded-2xl glass-panel p-5 border-white/5 relative flex flex-col justify-between overflow-hidden text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="font-mono text-cyan-electric flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 animate-spin [animation-duration:10s]" /> AUTOMATED PIPELINE
            </span>
            <span className="font-mono text-[9px] text-muted-text">STATUS: ACTIVE</span>
          </div>
          {/* Flow representation */}
          <div className="my-3 space-y-3">
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px]">LGCY_INPUT</div>
              <div className="h-0.5 w-6 bg-cyan-electric/50" />
              <div className="px-2 py-1 bg-primary/20 text-cyan-electric rounded border border-cyan-electric/20 font-mono text-[9px]">PARSE_NODE</div>
              <div className="h-0.5 w-6 bg-cyan-electric/50 animate-pulse" />
              <div className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px]">DB_STORAGE</div>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-cyan-electric w-[85%]" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted-text font-mono">
            <span>PIPELINE EFFICIENCY: +42%</span>
            <span>ERROR RATIO: 0.04%</span>
          </div>
        </div>
      ),
    },
    {
      id: "immersions",
      title: "AI Immersions",
      tagline: "Executive strategic briefings to guide investments and applications.",
      icon: <Cpu className="w-5 h-5" />,
      desc: "High-tier workshops designed exclusively for policy leaders and corporate boards. We deconstruct advanced global AI frameworks (large language systems, computer vision, data forecasting) into practical, localized implementations.",
      deliverables: [
        "Executive AI landscape briefings",
        "Sector-specific application workshops",
        "Ethical deployment & risk evaluation frameworks",
        "Applied sandbox testbeds & simulations",
        "AI investment roadmap planning",
      ],
      audience: "C-level executives, directors, ministers, and investment leaders",
      outcome: "Immediate strategic understanding, defined local use cases, and actionable procurement guidelines.",
      mockup: (
        <div className="w-full h-56 rounded-2xl glass-panel p-5 border-white/5 relative flex flex-col justify-between overflow-hidden text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="font-mono text-cyan-electric flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> AI SANDBOX WORKSPACE
            </span>
            <span className="font-mono text-[9px] text-muted-text">MODE: SIMULATOR</span>
          </div>
          <div className="my-2 grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col justify-center">
              <span className="text-muted-text text-[8px] uppercase">Model weight</span>
              <span className="text-cyan-electric font-bold mt-0.5">8-Bit Quantized</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col justify-center">
              <span className="text-muted-text text-[8px] uppercase">Tokens/sec</span>
              <span className="text-cyan-electric font-bold mt-0.5">142 t/s</span>
            </div>
          </div>
          <div className="h-8 bg-white/5 rounded border border-white/5 p-2 font-mono text-[9px] text-muted-text/80 truncate">
            {`> model.predict(sector_indicators_africa)`}
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-cyan-electric/80">
            <span>READY FOR BOARDROOM DEPLOYMENT</span>
            <span className="w-2 h-2 rounded-full bg-cyan-electric animate-ping" />
          </div>
        </div>
      ),
    },
    {
      id: "literacy",
      title: "AI Literacy & Future Readiness",
      tagline: "Building pipelines of technical and analytical intelligence.",
      icon: <GraduationCap className="w-5 h-5" />,
      desc: "We construct and deliver comprehensive curriculums for academic schools, development bootcamps, and professional associations. Our courses bridge coding, data sciences, machine learning, and technological entrepreneurship.",
      deliverables: [
        "Primary to university digital curriculum design",
        "Python, analytics, & machine learning bootcamps",
        "Train-the-trainer academic certifications",
        "LMS integration & technical monitoring tools",
        "Professional career matching pipelines",
      ],
      audience: "Educational institutions, developers, and workforce members",
      outcome: "Graduates prepared for modern global roles, armed with practical portfolios and certificates.",
      mockup: (
        <div className="w-full h-56 rounded-2xl glass-panel p-5 border-white/5 relative flex flex-col justify-between overflow-hidden text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-cyan-electric">CURRICULUM FLOW</span>
            <span className="font-mono text-[9px] text-muted-text">4 STEPS</span>
          </div>
          <div className="my-2 flex justify-between relative text-[9px] font-mono">
            <div className="absolute top-[14px] left-[15%] right-[15%] h-0.5 bg-white/5 -z-10" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary text-cyan-electric flex items-center justify-center font-bold">1</div>
              <span className="text-[8px] text-muted-text">Basics</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary text-cyan-electric flex items-center justify-center font-bold">2</div>
              <span className="text-[8px] text-muted-text">Python</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary text-cyan-electric flex items-center justify-center font-bold">3</div>
              <span className="text-[8px] text-muted-text">Models</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-cyan-electric/20 border border-cyan-electric text-cyan-electric flex items-center justify-center font-bold">4</div>
              <span className="text-[8px] text-white">Deploy</span>
            </div>
          </div>
          <div className="border-t border-white/5 pt-3 text-[10px] text-muted-text">
            <strong>Module focus:</strong> Building functional neural layers using local environment variables.
          </div>
        </div>
      ),
    },
    {
      id: "kidstech",
      title: "Kids Tech Fest AI Summit",
      tagline: "Nurturing creative engineering and tech leadership in youth.",
      icon: <Rocket className="w-5 h-5" />,
      desc: "Our flagship educational event designed to inspire children aged 5-18 to become creators, rather than just consumers, of technology. Incorporates robotics workshops, hardware playgrounds, coding competitions, and parent briefings.",
      deliverables: [
        "Regional summit project planning & management",
        "Robotics, electronics, & IoT playground design",
        "Creative hackathons & pitch events for students",
        "Stakeholder & developer alignment sessions",
        "Community & parent digital literacy guidebooks",
      ],
      audience: "Children, parents, academic tutors, and corporate sponsors",
      outcome: "Early engineering interests, coding portfolio launches, and massive stakeholder visibility.",
      mockup: (
        <div className="w-full h-56 rounded-2xl glass-panel p-5 border-white/5 relative flex flex-col justify-between overflow-hidden text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-cyan-electric">KIDS TECH LAB</span>
            <span className="font-mono text-[9px] text-muted-text">ROBOTICS</span>
          </div>
          <div className="my-2 bg-[#020617]/50 rounded-lg p-3 border border-white/5 flex gap-3 items-center">
            <div className="w-10 h-10 rounded bg-cyan-electric/15 flex items-center justify-center">
              <Settings className="w-6 h-6 text-cyan-electric animate-spin [animation-duration:8s]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-white">IoT Robot Chassis #04</div>
              <div className="text-[8px] font-mono text-muted-text mt-0.5">FIRMWARE: V2.4_ARDUINO</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-cyan-electric/80">
            <span>MOTOR CODE: COMPILED</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-electric/10 border border-cyan-electric/25">TEST PASS</span>
          </div>
        </div>
      ),
    },
    {
      id: "pr",
      title: "PR & Strategic Communications",
      tagline: "Shaping narratives that secure partnerships and funding.",
      icon: <Shield className="w-5 h-5" />,
      desc: "We craft targeted media and thought leadership campaigns for tech hubs, startups, and development organizations. We translate complex tech integrations into engaging storytelling for media outlets.",
      deliverables: [
        "Ecosystem narrative & positioning maps",
        "Executive thought leadership drafting",
        "International media outreach & relations",
        "Impact report styling & editorial writing",
        "Crisis communications & stakeholder management",
      ],
      audience: "Tech founders, development agencies, government committees",
      outcome: "Expanded media visibility, clear narrative direction, and increased interest from funding organizations.",
      mockup: (
        <div className="w-full h-56 rounded-2xl glass-panel p-5 border-white/5 relative flex flex-col justify-between overflow-hidden text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="font-mono text-cyan-electric flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" /> MEDIA VISIBILITY
            </span>
            <span className="font-mono text-[9px] text-muted-text">KPI TRACKER</span>
          </div>
          <div className="my-2 flex justify-between items-end h-20 gap-2">
            <div className="w-full bg-white/5 h-[30%] rounded-t" />
            <div className="w-full bg-white/5 h-[50%] rounded-t" />
            <div className="w-full bg-primary/40 h-[70%] rounded-t" />
            <div className="w-full bg-cyan-electric/60 h-[95%] rounded-t relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-cyan-electric font-mono">+180%</div>
            </div>
            <div className="w-full bg-cyan-electric/40 h-[85%] rounded-t" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-muted-text pt-2 border-t border-white/5">
            <span>GLOBAL ARTICLES: 24</span>
            <span>REACH: 1.4M AUDIENCE</span>
          </div>
        </div>
      ),
    },
    {
      id: "events",
      title: "Tech Conferences & Event Production",
      tagline: "Curating world-class summits with policy and commercial impact.",
      icon: <Users2 className="w-5 h-5" />,
      desc: "End-to-end design, execution, and curation of ecosystem events. We handle stage production, LED layouts, agenda styling, panel moderation, audience acquisition, and sponsor relationships.",
      deliverables: [
        "Event architecture design & staging templates",
        "Panel curation & agenda development",
        "Speaker sourcing, booking, and onboarding",
        "On-ground logistics & digital registration platforms",
        "Sponsor packaging & engagement metrics",
      ],
      audience: "Corporates, government hosts, and international agencies",
      outcome: "Flawlessly executed physical events that generate massive public engagement and policy alignment.",
      mockup: (
        <div className="w-full h-56 rounded-2xl glass-panel p-5 border-white/5 relative flex flex-col justify-between overflow-hidden text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-cyan-electric">STAGE CONFIGURATION</span>
            <span className="font-mono text-[9px] text-muted-text">SUMMIT_LGS_2026</span>
          </div>
          <div className="my-2 border border-white/5 rounded-lg p-3 bg-deepspace/40 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-electric" />
              <div>
                <div className="text-[10px] font-bold text-white">Main LED Keynote Deck</div>
                <div className="text-[8px] text-muted-text">STATUS: STREAM_LIVE</div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-cyan-electric/15 text-[8px] text-cyan-electric font-mono border border-cyan-electric/25">ACTIVE</div>
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-muted-text">
            <span>REGISTERED ATTENDEES: 5,240</span>
            <span>SPEAKERS: 42</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-deepspace relative min-h-screen">
      <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />

      {/* Header Intro */}
      <section className="pt-20 pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              OUR CORE SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ecosystem Engineering Solutions.
            </h1>
            <p className="text-muted-text text-sm md:text-base leading-relaxed">
              We translate digital transformation, AI concepts, and public relations into concrete frameworks that drive measurable economic value.
            </p>
          </div>
        </div>
      </section>

      {/* Page Body: Sticky split screen layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sticky Sidebar Navigation (Left 4 cols) */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 p-6 rounded-2xl glass-panel border-white/5 flex flex-col gap-3">
            <h3 className="text-white/80 font-bold text-xs uppercase font-mono tracking-widest mb-4">
              CAPABILITY MATRIX
            </h3>
            
            {servicesData.map((svc) => (
              <button
                key={svc.id}
                onClick={() => scrollToSection(svc.id as any)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                  activeSection === svc.id
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/10"
                    : "bg-slate-surface/30 border-white/5 text-muted-text hover:text-white hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  {svc.icon}
                  <span className="text-sm">{svc.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  activeSection === svc.id ? "translate-x-1" : ""
                }`} />
              </button>
            ))}
          </div>
        </aside>

        {/* Detailed Service Content List (Right 8 cols) */}
        <div className="lg:col-span-8 space-y-20 pb-24">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              ref={sectionRefs[svc.id as keyof typeof sectionRefs]}
              className="scroll-mt-28 flex flex-col gap-8 border-b border-white/5 pb-16 last:border-0"
            >
              {/* Heading */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/25 flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">{svc.title}</h2>
                    <p className="text-xs text-cyan-electric/90 mt-0.5">{svc.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Layout Content (Left text, right interactive widget mockup) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Information */}
                <div className="flex flex-col gap-6">
                  <p className="text-muted-text text-sm leading-relaxed">{svc.desc}</p>
                  
                  <div>
                    <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest mb-3">KEY DELIVERABLES</h4>
                    <ul className="space-y-2 text-xs text-muted-text">
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-electric shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Widget Panel & Target outcomes */}
                <div className="flex flex-col gap-6">
                  {/* Mockup Widget */}
                  {svc.mockup}
                  
                  {/* Scope Details */}
                  <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-3.5 bg-slate-surface/10 text-xs">
                    <div>
                      <span className="text-[9px] font-mono text-cyan-electric uppercase tracking-widest block mb-0.5">TARGET AUDIENCE</span>
                      <p className="text-white font-medium">{svc.audience}</p>
                    </div>
                    <div className="border-t border-white/5 pt-3">
                      <span className="text-[9px] font-mono text-cyan-electric uppercase tracking-widest block mb-0.5">EXPECTED OUTCOME</span>
                      <p className="text-muted-text">{svc.outcome}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Call to action */}
              <div className="pt-2 flex items-center">
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 group transition-all"
                >
                  Configure {svc.title} Roadmap
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
