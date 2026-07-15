"use client";

import React from "react";
import * as Icons from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  iconName: string;
  isLifted?: boolean;
  depthClass?: string; // e.g. "md:col-span-2", "md:row-span-2" for mosaic grid depth variety
}

export default function CaseStudyCard({
  title,
  category,
  description,
  iconName,
  isLifted = false,
  depthClass = "",
}: CaseStudyCardProps) {
  const IconComponent = (Icons as any)[iconName] || Icons.TrendingUp;

  return (
    <div
      className={`relative group rounded-2xl p-6 transition-all duration-500 glass-panel ${depthClass} ${
        isLifted
          ? "translate-y-[-8px] border-purple-500/80 shadow-[0_15px_30px_rgba(168,85,247,0.25)] ring-1 ring-purple-500/30"
          : "hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_10px_25px_rgba(168,85,247,0.15)]"
      }`}
    >
      {/* Visual Indicator of related projects if lifted */}
      {isLifted && (
        <span className="absolute top-4 right-4 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
      )}

      <div className="flex flex-col h-full justify-between gap-6 relative z-10">
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isLifted
                  ? "bg-purple-50 text-purple-600 border border-purple-100"
                  : "bg-slate-100 text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-600"
              } transition-colors`}
            >
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-600 tracking-wider uppercase">
                {category}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors">
            {description}
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 mt-4 group-hover:translate-x-1 transition-transform">
          <span>Read Success Story</span>
          <Icons.ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
