"use client";

import React, { useState, useEffect } from "react";
import ResourceCard from "@/components/cards/ResourceCard";
import { Milestone, ArrowRight, FileText, CheckCircle2, ChevronRight } from "lucide-react";

export default function Roadmap() {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [pulsePosition, setPulsePosition] = useState(0);

  // Animate the data pulse along the timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const timelinePhases = [
    {
      id: 1,
      quarter: "Q1 2026",
      title: "Core Cognitive Engine v1.0",
      status: "completed",
      description: "Successfully developed the baseline autonomous router and multi-agent workflow scheduler. Integrated retrieval-augmented pipelines.",
      details: ["Distributed vector storage sync", "Autonomous priority task execution", "RAG throughput audit framework"],
    },
    {
      id: 2,
      quarter: "Q2 2026",
      title: "Cross-Platform SDK Launch",
      status: "completed",
      description: "Released client library packages for Next.js, Flutter, and Rust to simplify connection to the cognitive endpoints.",
      details: ["Type-safe RPC middleware", "React Hook state sync adapters", "Zero-config edge telemetry SDK"],
    },
    {
      id: 3,
      quarter: "Q3 2026",
      title: "Self-Healing State Orchestrator",
      status: "active",
      description: "Developing intelligent agent supervisors that continuously audit pipeline health and trigger automatic fallback logic.",
      details: ["Automated system state snapshots", "Fault-tolerant queue replication", "AI-assisted query repair algorithms"],
    },
    {
      id: 4,
      quarter: "Q4 2026",
      title: "Decentralized Edge Node Cluster",
      status: "future",
      description: "Provision dynamic computational endpoints matching user proximity, minimizing ingestion and execution delays.",
      details: ["Edge canvas render engines", "Geo-aware load routing keys", "Decentralized database replication"],
    },
  ];

  const resources = [
    {
      title: "NURAF Technical Core Architecture Paper",
      category: "Technical Paper",
      size: "2.4 MB",
      description: "A deep dive explanation of the autonomous scheduling router, state sync, and cognitive cache latency charts.",
    },
    {
      title: "Multi-Agent System Scalability Report",
      category: "Whitepaper",
      size: "1.8 MB",
      description: "Operational study illustrating cluster cost reductions when replacing static cron routines with cognitive agents.",
    },
    {
      title: "NextJS 16 Integration Framework & Assets",
      category: "Downloads",
      size: "12.5 MB",
      description: "Boilerplate workspace configurations, hook files, and template modules to launch your system in minutes.",
    },
  ];

  return (
    <div className="light min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 pb-24 pt-28">
      {/* Light grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl flex flex-col gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold self-start">
            Product Evolution
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            ROADMAP & KEY MILESTONES
          </h1>
          <p className="text-sm sm:text-base text-slate-500">
            A transparent overview of the technical phases and milestones driving the NURAF platform. Review current implementations, active features, and download technical reports.
          </p>
        </div>

        {/* Central Roadmap Timeline */}
        <div className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm mb-20 overflow-hidden">
          {/* Section heading */}
          <div className="flex items-center gap-2.5 mb-12">
            <Milestone className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-slate-900">Evolution Roadmap & Active Milestones</h2>
          </div>

          {/* Timeline track container */}
          <div className="relative pt-8 pb-12">
            {/* Base timeline line */}
            <div className="absolute top-[48px] left-8 right-8 h-1.5 bg-slate-100 rounded-full"></div>

            {/* Glowing Data Pulse traveling along the line */}
            <div
              className="absolute top-[48px] w-4 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-[0_0_10px_#6366f1]"
              style={{ left: `calc(2rem + ${pulsePosition}% * 0.9)` }}
            ></div>

            {/* Timeline Steps Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              {timelinePhases.map((phase) => (
                <div
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className="cursor-pointer flex flex-col items-center text-center group"
                >
                  {/* Step Node */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                      phase.status === "completed"
                        ? "bg-indigo-600 border-white text-white shadow-md shadow-indigo-600/25 ring-2 ring-indigo-200"
                        : phase.status === "active"
                        ? "bg-white border-indigo-600 text-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.3)] ring-2 ring-indigo-100 animate-pulse"
                        : "bg-white border-slate-200 text-slate-400"
                    } ${selectedPhase === phase.id ? "scale-110 ring-4 ring-indigo-100" : ""}`}
                  >
                    {phase.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-white animate-checkmark" />
                    ) : (
                      <span className="text-xs font-bold">{phase.id}</span>
                    )}
                  </div>

                  {/* Quarter & Title Label */}
                  <div className="mt-4">
                    <span className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase">
                      {phase.quarter}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mt-0.5">
                      {phase.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Phase Details Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 md:p-8 mt-4 transition-all duration-500">
            {timelinePhases
              .filter((p) => p.id === selectedPhase)
              .map((phase) => (
                <div key={phase.id} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                        Active Details • Phase {phase.id}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          phase.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : phase.status === "active"
                            ? "bg-indigo-100 text-indigo-700"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{phase.description}</p>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-slate-200/60 pt-6 md:pt-0 md:pl-8 flex flex-col gap-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Deliverables Checklist
                    </h4>
                    <ul className="space-y-2">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <ChevronRight className="w-3.5 h-3.5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Resource Hub Section */}
        <section id="resources" className="scroll-mt-20">
          <div className="max-w-3xl flex flex-col gap-3 mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Downloads & Assets
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              NURAF RESOURCE HUB
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              Access comprehensive document references detailing computational design, benchmarks, and configuration blueprints. Click a card below to simulate the instant fetch pipeline.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((res, index) => (
              <ResourceCard
                key={index}
                title={res.title}
                category={res.category}
                size={res.size}
                description={res.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
