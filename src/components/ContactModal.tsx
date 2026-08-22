import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { CircuitOverlay } from './CircuitOverlay';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0109]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#1b041a] border border-pink-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,0,128,0.4)]">
        <CircuitOverlay opacity={0.3} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-400 flex items-center justify-center text-pink-300 shadow-[0_0_25px_#ff0080]">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">Message Transmitted!</h3>
            <p className="text-pink-200/80 text-sm max-w-xs">
              Thank you, {formData.name || 'friend'}! Sneha will reply to your message shortly.
            </p>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex items-center gap-2 text-pink-400">
              <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-300">Get In Touch</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Let's Build Something Great
            </h3>

            <p className="text-sm text-pink-200/80 -mt-2">
              Have a project in mind or want to say hello? Drop a message below.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-1">
              <div>
                <label className="block text-xs font-medium text-pink-200 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#280622]/80 border border-pink-500/30 focus:border-pink-400 focus:outline-none text-white placeholder-pink-300/40 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-pink-200 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#280622]/80 border border-pink-500/30 focus:border-pink-400 focus:outline-none text-white placeholder-pink-300/40 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-pink-200 mb-1.5">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your idea or project scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#280622]/80 border border-pink-500/30 focus:border-pink-400 focus:outline-none text-white placeholder-pink-300/40 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#a30059] border border-pink-400/50 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,0,128,0.5)] hover:shadow-[0_0_35px_rgba(255,0,128,0.7)] transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
