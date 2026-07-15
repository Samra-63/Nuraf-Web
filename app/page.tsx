"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Terminal, Smartphone, Palette, Cloud, Settings, Cpu, Bot, Search, CheckCircle, Check, Send } from "lucide-react";
import InfinityLoop from "@/components/animations/InfinityLoop";
import ServiceCard from "@/components/cards/ServiceCard";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI integrations, LLM pipelines, and predictive model deployments tailored for operational growth.",
      iconName: "Brain",
    },
    {
      title: "Web Development",
      description: "Ultra-fast, responsive web architectures utilizing React, Next.js, and modern styling solutions.",
      iconName: "Terminal",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that provide native performance and stunning user interfaces.",
      iconName: "Smartphone",
    },
    {
      title: "UI/UX Design",
      description: "Sleek wireframing, high-fidelity prototypes, and user research designed to maximize engagement.",
      iconName: "Palette",
    },
    {
      title: "SaaS Development",
      description: "Scalable cloud-first Software-as-a-Service platforms built for high throughput and security.",
      iconName: "Cloud",
    },
    {
      title: "Business Automation",
      description: "Streamline workflows, automate redundant processes, and integrate tools to boost productivity.",
      iconName: "Settings",
    },
    {
      title: "API Integration",
      description: "Secure, reliable, and well-documented API architectures to connect internal and external services.",
      iconName: "Cpu",
    },
    {
      title: "AI Agents",
      description: "Autonomous digital workers that learn from feedback to manage intricate customer & internal workflows.",
      iconName: "Bot",
      isSimulatedHover: true, // Specific Prompt 1 instruction: cursor hover visual cue
    },
    {
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation architectures allowing search queries to index your private database securely.",
      iconName: "Search",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-radial-purple pointer-events-none z-0"></div>
      <div className="absolute top-[400px] right-0 w-[500px] h-[500px] bg-radial-glow pointer-events-none z-0"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-20 md:py-36 lg:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center md:text-left flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-semibold self-center md:self-start">
            <span className="flex h-2 w-2 rounded-full bg-purple-600"></span>
            Next-Generation Intelligent Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-700">
            EMPOWERING YOUR VISION WITH AI AND TECHNOLOGY
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Custom AI Solutions, Web & Mobile App Development, and SaaS Systems designed for growth. We combine modern visuals with intelligent agentic design structures to optimize your digital systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
            <Link
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 group text-white"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-200 hover:border-purple-500/50 bg-white font-semibold text-sm hover:bg-slate-50 text-slate-700 transition-colors flex items-center justify-center gap-2 active:scale-98"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* 3D Infinity Loop Graphic */}
        <div className="flex-1 w-full max-w-[500px] h-[350px] md:h-[450px] flex items-center justify-center">
          <InfinityLoop />
        </div>
      </section>

      {/* Scrolling Integration Marquee Section */}
      <section className="relative z-10 py-12 bg-white border-y border-slate-200/80 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-450 text-slate-500">
            Engineered to Integrate Seamlessly With Modern Infrastructure Systems
          </p>
        </div>
        <div className="flex overflow-hidden">
          {/* First Marquee Row */}
          <div className="flex shrink-0 justify-around min-w-full items-center gap-16 animate-infinite-scroll">
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>AMAZON AWS</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GITHUB</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-20.05 12 20.05z"/></svg>
              <span>VERCEL</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
              <span>SUPABASE</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>DOCKER</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              <span>OPENAI GPT</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.48 2 12s4.477 10 10 10z"/><path d="M12 6v12M6 12h12"/></svg>
              <span>GOOGLE CLOUD</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.522 0 10-4.477 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10z"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              <span>KUBERNETES</span>
            </div>
          </div>
          {/* Second Duplicate Marquee Row (Required for seamless loop) */}
          <div className="flex shrink-0 justify-around min-w-full items-center gap-16 animate-infinite-scroll" aria-hidden="true">
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>AMAZON AWS</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GITHUB</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-20.05 12 20.05z"/></svg>
              <span>VERCEL</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
              <span>SUPABASE</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>DOCKER</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              <span>OPENAI GPT</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.48 2 12s4.477 10 10 10z"/><path d="M12 6v12M6 12h12"/></svg>
              <span>GOOGLE CLOUD</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold tracking-wider text-xs hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.522 0 10-4.477 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10z"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              <span>KUBERNETES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-t border-slate-200 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-purple-600">
            Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            COMPREHENSIVE SERVICES PORTFOLIO
          </p>
          <p className="text-sm sm:text-base text-slate-600">
            End-to-end technological execution designed to scale operations, implement cognitive integrations, and optimize cloud architectures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              isSimulatedHover={service.isSimulatedHover}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Nuraf Section */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-655 text-purple-600">
              Why Choose Nuraf
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Pioneering custom technology tailored for robust growth
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At NURAF, we build software products that stand the test of scale. By combining artificial intelligence with modern system reliability principles, we deliver top-tier frameworks that solve tangible business objectives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-655 text-purple-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Innovative AI</h4>
                  <p className="text-xs text-slate-600 mt-1">Smarter workflows with LLMs and Agentic integrations.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-655 text-purple-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Expert Team</h4>
                  <p className="text-xs text-slate-600 mt-1">Specialized system architects and machine learning engineers.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-655 text-purple-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Scalable Solutions</h4>
                  <p className="text-xs text-slate-600 mt-1">Fault-tolerant distributed applications ready for traffic spikes.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-655 text-purple-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Latest Insights</h4>
                  <p className="text-xs text-slate-600 mt-1">Proactively adopting cutting-edge methodologies and papers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic or Visual Accent */}
          <div className="relative p-8 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500">SYSTEM ARCHITECTURE MATRIX</span>
              <span className="px-2 py-0.5 rounded bg-green-50 border border-green-200 text-[10px] font-bold text-green-700">OPERATIONAL</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-slate-800">Cognitive Router</span>
                </div>
                <span className="text-[10px] font-mono text-purple-600">0.12s response</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-slate-800">Multi-Agent Planner</span>
                </div>
                <span className="text-[10px] font-mono text-purple-600">99.8% precision</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <Cloud className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-slate-800">Decentralized Cache</span>
                </div>
                <span className="text-[10px] font-mono text-purple-600">30ms query latency</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-600 leading-normal bg-slate-50 p-3 rounded-lg border border-slate-100 max-h-[100px] overflow-hidden">
              [SYSTEM] INITIALIZING NURAF COGNITIVE ENGINE v2.0.4...<br/>
              [AGENT] DETECTED TASK LOAD - ROUTING TO PIPELINE: 0x93FA92...<br/>
              [DB] CACHE SYNC COMPLETE WITH ZERO DRIFT ENCOUNTERED.<br/>
              [SYSTEM] STABLE: 124 SHARDS ACTIVE, ZERO DISK FAULT.
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-t border-slate-200 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6 justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-655 text-purple-600">
              Interactive Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ready to automate and upscale your infrastructure?
            </h2>
            <p className="text-slate-655 text-slate-600 text-sm leading-relaxed">
              Schedule an interactive custom walkthrough of our services portfolio. Tell us your technical bottlenecks and custom AI objectives to receive a comprehensive demo setup.
            </p>

            <div className="flex flex-col gap-3 mt-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                <span>Custom PoC delivered in under 10 business days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                <span>Dedicated solution engineering support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                <span>End-to-end integration and security assurance</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-md relative">
            {formSubmitted ? (
              <div className="min-h-[300px] flex flex-col items-center justify-center text-center gap-4 animate-checkmark">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-700 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Demo Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Thank you! An automation architect will coordinate with your team within 12 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-purple-600 hover:text-purple-700 underline"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Objective or Challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Explain your scaling bottlenecks or automation objectives..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 transition-colors resize-none"
                  />
                </div>

                {/* Specific Prompt 1 Instruction: button showing subtle ripple color ripple animation */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 active:scale-98 transition-all shadow-lg shadow-purple-600/20 group animate-ripple"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <span className="flex items-center gap-2">
                      Request Demo <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
