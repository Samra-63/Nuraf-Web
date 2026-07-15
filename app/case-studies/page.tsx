"use client";

import React, { useState } from "react";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import ParticleNetwork from "@/components/animations/ParticleNetwork";
import { Filter, Layers, Database, Cpu, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", count: 6 },
    { name: "Machine Learning", count: 2, isPulsing: true }, // Filter UI: Machine Learning showing active pulsing glow
    { name: "Web Systems", count: 1 },
    { name: "Logistics Automation", count: 1 },
    { name: "IoT Platform", count: 1 },
    { name: "Security & Cloud", count: 1 },
  ];

  const caseStudies = [
    {
      title: "Enterprise IoT Architecture & Analytics Engine",
      category: "IoT Platform",
      description: "Implemented high-throughput edge telemetry pipeline ingestion supporting 50k concurrently reporting physical nodes.",
      iconName: "Cpu",
      isLifted: true, // 1 of the 3 interconnected lifted cards
      depthClass: "md:col-span-2 md:row-span-1",
    },
    {
      title: "AI-Powered Cognitive Agentic Assistant",
      category: "Machine Learning",
      description: "Engineered self-correcting RAG systems reducing enterprise search response cycles by 70% with semantic accuracy.",
      iconName: "Bot",
      isLifted: true, // 2 of the 3 interconnected lifted cards
      depthClass: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Predictive Health & Real-time Diagnostic Engine",
      category: "Machine Learning",
      description: "Trained and deployed transformer models forecasting hardware component anomalies with 98.4% predictive accuracy.",
      iconName: "Activity",
      isLifted: true, // 3 of the 3 interconnected lifted cards
      depthClass: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Decentralized Auto-scaling Kubernetes Core",
      category: "Security & Cloud",
      description: "Refactored globally distributed container orchestration systems to reduce monthly bandwidth and cluster costs.",
      iconName: "Cloud",
      isLifted: false,
      depthClass: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Multi-layered Fraud Audit Pipeline",
      category: "Security & Cloud",
      description: "Synchronized state machine checks preventing transactional validation exploits in distributed smart contracts.",
      iconName: "ShieldAlert",
      isLifted: false,
      depthClass: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Autonomous Warehouse Ingestion & Dispatch",
      category: "Logistics Automation",
      description: "Structured asynchronous task queues with automated route planning for complex freight assignments.",
      iconName: "Truck",
      isLifted: false,
      depthClass: "md:col-span-1 md:row-span-1",
    },
  ];

  const filteredStudies = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen relative overflow-hidden pb-24 pt-28">
      {/* Background canvas for connective particle network */}
      <ParticleNetwork />

      {/* Radial ambient glow */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-radial-purple pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-radial-glow pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl flex flex-col gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-semibold self-start">
            Validated Outcomes
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            CLIENT SUCCESS STORIES & CASE STUDIES
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Discover how we design, optimize, and launch enterprise-grade AI, cloud, and mobile infrastructures. The highlighted projects below represent our interconnected technical ecosystem.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pb-8 border-b border-slate-200 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Filter className="w-4 h-4 text-purple-600" />
            <span>Filter by Architecture Category:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeFilter === filter.name
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 border-transparent"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                } ${
                  filter.isPulsing
                    ? "shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-border-glow border-purple-500/50"
                    : ""
                }`}
              >
                {filter.isPulsing && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                  </span>
                )}
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              category={study.category}
              description={study.description}
              iconName={study.iconName}
              isLifted={study.isLifted}
              depthClass={study.depthClass}
            />
          ))}
        </div>

        {/* Dynamic interconnected legend */}
        <div className="mt-16 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm max-w-2xl mx-auto text-center flex flex-col items-center gap-3">
          <Layers className="w-5 h-5 text-purple-600" />
          <h4 className="text-sm font-bold text-slate-900">Visualizing Project Connections</h4>
          <p className="text-xs text-slate-655 text-slate-600 leading-relaxed max-w-md">
            The highlighted cards showing glowing shadows are dynamically connected through our internal data pipeline. Connected lines in the background display live signal exchanges.
          </p>
        </div>
      </div>
    </div>
  );
}
