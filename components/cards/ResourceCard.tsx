"use client";

import React, { useState } from "react";
import { FileText, Download, ArrowDown } from "lucide-react";

interface ResourceCardProps {
  title: string;
  category: string;
  size: string;
  description: string;
}

export default function ResourceCard({
  title,
  category,
  size,
  description,
}: ResourceCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download finishing after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div
      onClick={handleDownload}
      className={`relative cursor-pointer rounded-2xl p-6 border bg-white border-slate-200 text-slate-800 transition-all duration-300 select-none ${
        isDownloading
          ? "scale-105 border-purple-500 shadow-xl ring-2 ring-purple-600/20"
          : "hover:scale-[1.02] hover:border-slate-300 hover:shadow-md active:scale-98"
      }`}
    >
      {/* Download ripple overlay */}
      {isDownloading && (
        <div className="absolute inset-0 rounded-2xl bg-purple-600/5 overflow-hidden flex items-center justify-center pointer-events-none">
          <div className="flex gap-4 opacity-40">
            <ArrowDown className="w-8 h-8 text-purple-600 animate-bounce" style={{ animationDelay: "0ms" }} />
            <ArrowDown className="w-8 h-8 text-purple-600 animate-bounce" style={{ animationDelay: "200ms" }} />
            <ArrowDown className="w-8 h-8 text-purple-600 animate-bounce" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
            {category}
          </span>
          <span className="text-xs text-slate-400 font-mono">{size}</span>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <span className="text-xs font-semibold text-slate-500">
            {isDownloading ? "Starting download..." : "Click to download"}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDownloading ? "bg-purple-600 text-white animate-pulse" : "bg-slate-100 text-slate-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <Download className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
