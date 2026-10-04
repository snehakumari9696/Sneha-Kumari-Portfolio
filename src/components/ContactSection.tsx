import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Copy, Check, ArrowUpRight, ArrowUp, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live IST local clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const ist = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setLocalTime(ist);
      } catch {
        setLocalTime('IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    soundManager.playChime(660);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    soundManager.playSoftTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full py-28 md:py-36 bg-[#ECE5DC] text-[#3C2317] border-t border-[#A67F54]/30 overflow-hidden">
      {/* Editorial Decorative Architectural Guides */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1px] bg-[#A67F54]/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 relative">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#8B653B] mb-8">
          <span className="text-[#A67F54]">05</span>
          <span>/</span>
          <span>Direct Inquiries &amp; Colophon</span>
        </div>

        {/* Large Editorial Invitation */}
        <div className="mb-14 max-w-3xl">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3C2317] tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let&apos;s build something <span className="italic font-serif font-normal text-[#8B653B]">exceptional</span> together.
          </h2>
          <p className="text-base sm:text-lg text-[#5C432C] mt-4 leading-relaxed font-normal">
            Currently seeking a <strong>Software Development Engineer Internship</strong> to apply strong CS fundamentals, distributed systems rigor, and AI engineering to high-impact products.
          </p>
        </div>

        {/* Primary Contact Node: One-Click Email Copy */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#A67F54]/30 p-8 sm:p-12 mb-16 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#8B653B] block mb-1">
              Direct Transmission Node
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-[#3C2317] select-all">
              {PERSONAL_INFO.email}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              data-cursor="COPY"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#3C2317] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider hover:bg-[#5C432C] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Development%20Engineering%20Inquiry%20-%20Sneha%20Kumari`}
              data-cursor="EMAIL"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#A67F54]/40 hover:border-[#3C2317] bg-[#F4EFEA] text-[#3C2317] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Compose Mail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Secondary Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-xs text-[#5C432C]">
          <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#A67F54]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#8B653B] font-bold uppercase tracking-wider text-[11px]">
              <Phone className="w-3.5 h-3.5 text-[#A67F54]" />
              <span>Voice / WhatsApp</span>
            </div>
            <p className="font-mono text-sm text-[#3C2317] font-semibold">{PERSONAL_INFO.phone}</p>
            <p className="text-[11px] text-[#705338]">Available for technical phone &amp; video screenings</p>
          </div>

          <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#A67F54]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#8B653B] font-bold uppercase tracking-wider text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#A67F54]" />
              <span>Coordinates &amp; Time</span>
            </div>
            <p className="font-mono text-sm text-[#3C2317] font-semibold">{PERSONAL_INFO.location}</p>
            <p className="text-[11px] text-[#705338]">Local Time: {localTime || 'Asia/Kolkata (IST)'}</p>
          </div>

          <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#A67F54]/25 space-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#8B653B] font-bold uppercase tracking-wider text-[11px]">
                <FileText className="w-3.5 h-3.5 text-[#A67F54]" />
                <span>Verified Credentials</span>
              </div>
              <p className="font-mono text-sm text-[#3C2317] font-semibold">Official Resume (PDF)</p>
            </div>
            <button
              onClick={() => {
                soundManager.playChime(620);
                onOpenResume();
              }}
              data-cursor="VIEW PDF"
              className="mt-2 inline-flex items-center gap-1.5 text-[#8B653B] font-bold hover:text-[#3C2317] transition-colors cursor-pointer text-xs"
            >
              <span>Inspect Full Sheet</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Colophon & Back to Top Bar */}
        <div className="pt-8 border-t border-[#A67F54]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B653B]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#3C2317]">Sneha Kumari</span>
            <span>·</span>
            <span>Software Developer</span>
            <span>·</span>
            <span>Class of 2027</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 text-xs font-semibold text-[#5C432C] hover:text-[#3C2317] transition-colors cursor-pointer"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
