"use client";

import React from "react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  isSimulatedHover?: boolean; // Visual cue for "AI Agents" as specified
}

export default function ServiceCard({
  title,
  description,
  iconName,
  isSimulatedHover = false,
}: ServiceCardProps) {
  // Resolve icon dynamically
  const IconComponent = (Icons as any)[iconName] || Icons.Cpu;

  return (
    <div
      className={`relative group rounded-2xl p-6 transition-all duration-500 glass-panel ${
        isSimulatedHover
          ? "border-purple-500/80 shadow-[0_0_20px_rgba(168,85,247,0.3)] translate-y-[-4px]"
          : "hover:-translate-y-1.5 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      }`}
    >
      {/* Glow aura inside card */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>

      <div className="flex flex-col gap-4 relative z-10">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isSimulatedHover
              ? "bg-purple-600/10 text-purple-600"
              : "bg-slate-100 text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-600"
          }`}
        >
          <IconComponent className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors">
            {description}
          </p>
        </div>

        {/* Hover arrow indicator */}
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          <span>Explore Architecture</span>
          <Icons.ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
