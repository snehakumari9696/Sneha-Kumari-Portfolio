import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const AudioToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  const handleToggle = () => {
    const next = soundManager.toggleMute();
    setIsMuted(next);
  };

  return (
    <button
      onClick={handleToggle}
      data-cursor="SOUND"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#A67F54]/30 shadow-xs hover:border-[#A67F54] transition-all duration-300 text-[#5C432C] hover:text-[#3C2317] group"
      title={isMuted ? 'Turn on subtle interactive sounds' : 'Mute interactive sounds'}
    >
      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5 text-[#A67F54]/70 group-hover:text-[#A67F54]" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 text-[#A67F54] animate-pulse" />
      )}
      <span className="text-[10px] tracking-widest uppercase font-semibold">
        {isMuted ? 'Sound Off' : 'Sound On'}
      </span>
    </button>
  );
};
