import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(err => console.log("Audio play blocked", err));
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100]">
      <button 
        onClick={toggleMute}
        className="w-14 h-14 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-3xl border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-charcoal dark:text-white hover:bg-royal-blue hover:text-white transition-all duration-500 group shadow-2xl"
      >
        {isMuted ? <VolumeX size={20} className="group-hover:scale-110 transition-transform" /> : <Volume2 size={20} className="group-hover:scale-110 transition-transform" />}
        
        <AnimatePresence>
          {!isMuted && (
             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0 }}
               className="absolute -top-1 -right-1 w-4 h-4 bg-royal-blue rounded-full flex items-center justify-center"
             >
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
             </motion.div>
          )}
        </AnimatePresence>

        <span className="absolute left-full ml-6 px-4 py-2 bg-charcoal text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap uppercase tracking-[0.3em] font-sans pointer-events-none shadow-xl">
          {isMuted ? 'Initiate Ambient' : 'Mute Neural Audio'}
        </span>
      </button>
      <audio 
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        loop
        muted={isMuted}
      />
    </div>
  );
};

export default AudioPlayer;
