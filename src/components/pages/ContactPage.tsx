import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Copy, Check, Mail, Phone, MapPin, Send, ArrowUpRight, FileText } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface ContactPageProps {
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playChime(700);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Software Development Engineering Inquiry'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <div className="w-full min-h-screen pt-24 pb-20 bg-[#F4EFEA] text-[#3C2317]">
      <section className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#8B653B] mb-4">
          <span className="text-[#A67F54]">04</span>
          <span>/</span>
          <span>Direct Inquiries &amp; Transmissions</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3C2317] tracking-tight mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Get In Touch.
        </h1>
        <p className="text-base sm:text-lg text-[#5C432C] max-w-2xl mb-12">
          Actively seeking a <strong>Software Development Engineer Internship</strong>. Reach out for technical interviews, distributed systems discussions, or full-stack engineering collaborations.
        </p>

        {/* Primary Email Transmission Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#A67F54]/30 p-8 sm:p-12 mb-12 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#8B653B] block mb-1">
              Primary Electronic Mailbox
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
              data-cursor="COMPOSE"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#A67F54]/40 hover:border-[#3C2317] bg-[#F4EFEA] text-[#3C2317] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Compose Mail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Two Column Layout: Quick Form + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Quick Note Composer */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl border border-[#A67F54]/30 p-8 shadow-xs">
            <h3 className="text-xl font-bold text-[#3C2317] mb-2">Send a Direct Note</h3>
            <p className="text-xs text-[#705338] mb-6 font-mono">
              Launches your local email client with pre-filled technical parameters.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B653B] block mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. SDE Internship Opportunity / Technical Interview"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#F4EFEA] border border-[#A67F54]/30 text-sm text-[#3C2317] placeholder:text-[#8B653B]/50 focus:outline-hidden focus:border-[#3C2317]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B653B] block mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief overview of the role, timeline, and tech stack..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#F4EFEA] border border-[#A67F54]/30 text-sm text-[#3C2317] placeholder:text-[#8B653B]/50 focus:outline-hidden focus:border-[#3C2317]"
                  required
                />
              </div>

              <button
                type="submit"
                data-cursor="SEND"
                className="w-full py-3 rounded-xl bg-[#3C2317] hover:bg-[#5C432C] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Email Transmission</span>
              </button>

              {sentNotice && (
                <p className="text-xs font-mono text-emerald-700 text-center animate-in fade-in">
                  ✓ Email client dispatched. Looking forward to connecting!
                </p>
              )}
            </form>
          </div>

          {/* Details & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#A67F54]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#8B653B] font-bold text-xs uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 text-[#A67F54]" />
                <span>Telephone / WhatsApp</span>
              </div>
              <p className="font-mono text-base font-bold text-[#3C2317]">{PERSONAL_INFO.phone}</p>
              <p className="text-[11px] text-[#705338]">Available for voice and video screenings</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#A67F54]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#8B653B] font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#A67F54]" />
                <span>Location &amp; Local Time</span>
              </div>
              <p className="font-mono text-base font-bold text-[#3C2317]">{PERSONAL_INFO.location}</p>
              <p className="text-[11px] text-[#705338]">Local Clock: {localTime || 'Asia/Kolkata (IST)'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#A67F54]/30 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#8B653B] font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-[#A67F54]" />
                  <span>Resume (PDF)</span>
                </div>
                <p className="text-xs text-[#705338] mt-1">Official printable resume sheet</p>
              </div>
              <button
                onClick={() => {
                  soundManager.playChime(660);
                  onOpenResume();
                }}
                data-cursor="RESUME"
                className="px-4 py-2 rounded-xl bg-[#3C2317] text-[#FAF7F2] text-xs font-semibold hover:bg-[#5C432C] transition-colors cursor-pointer"
              >
                Inspect
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
