import React from 'react';

export const HeroReference: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen min-h-screen overflow-hidden select-none bg-cover bg-center bg-no-repeat"
      style={{
        backgroundColor: '#F4EFEA',
        backgroundImage: `url('/hero-bg.png'), url('https://res.cloudinary.com/nwwiqfso/image/upload/f_auto/q_auto/Gemini_Generated_Image_mh3v47mh3v47mh3v_es3nw8.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ========================================================
          LEFT AXIS: SOFTWARE DEVELOPER, Hairline & Headline
          Positioned strictly in the clear left margin to prevent
          any collision with background letters or character art.
          ======================================================== */}
      <div className="absolute left-3 sm:left-4 md:left-5 lg:left-6 top-6 sm:top-8 md:top-10 bottom-6 sm:bottom-8 md:bottom-10 flex items-stretch pointer-events-auto z-10">
        {/* Continuous Coaxial Spine: SOFTWARE DEVELOPER + Descending Hairline */}
        <div className="flex flex-col items-center shrink-0 w-4 sm:w-5">
          {/* "SOFTWARE DEVELOPER" Vertical Typography */}
          <span
            className="vertical-rl font-bold tracking-[0.28em] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] uppercase cursor-default shrink-0 select-none drop-shadow-xs"
            style={{
              color: '#A67F54',
            }}
          >
            SOFTWARE DEVELOPER
          </span>

          {/* Spacer between text and hairline */}
          <div className="h-3 sm:h-4 md:h-5 shrink-0" />

          {/* Hairline centered on the exact same vertical axis */}
          <div
            className="w-[1.5px] flex-1 rounded-full opacity-90"
            style={{
              background:
                'linear-gradient(180deg, #A67F54 0%, #D8BA8D 30%, #A67F54 75%, #8B653B 100%)',
            }}
          />
        </div>

        {/* "Design with clarity." Headline Lockup
            Sits in the lower-left clear zone (Y: 500-750, X: 35-320)
            Safely below the top background name and safely to the left of the center figure. */}
        <div className="flex flex-col justify-end pl-3.5 sm:pl-4 md:pl-5 lg:pl-6 pb-2 sm:pb-3 md:pb-4 max-w-[220px] sm:max-w-[260px] md:max-w-[300px]">
          <div className="tracking-tight select-none">
            <h1
              className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[0.98] drop-shadow-xs"
              style={{
                color: '#A67F54',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: '-0.03em',
              }}
            >
              <span className="block">Design</span>
              <span className="block">with</span>
              <span className="block">clarity.</span>
            </h1>
          </div>

          {/* Bronze Horizontal Accent Dash under clarity. */}
          <div className="mt-3 sm:mt-4">
            <div
              className="w-5 sm:w-6 md:w-7 h-[2px] rounded-xs"
              style={{
                backgroundColor: '#A67F54',
                boxShadow: '0 0.5px 2px rgba(166, 127, 84, 0.3)',
              }}
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          RIGHT AXIS: Upper hairline, "KEEP IT SHARP / KEEP IT CLEAN", Lower hairline
          Positioned securely in the rightmost gutter outside the background lettering.
          ======================================================== */}
      <div className="absolute right-3 sm:right-4 md:right-5 top-6 sm:top-8 md:top-10 flex flex-col items-center pointer-events-auto z-10">
        {/* Top Vertical Hairline */}
        <div
          className="w-[1.5px] h-12 sm:h-16 md:h-20 rounded-full opacity-85"
          style={{
            background:
              'linear-gradient(180deg, #8B653B 0%, #D8BA8D 50%, #A67F54 100%)',
          }}
        />

        {/* Dual Parallel Vertical Columns */}
        <div className="my-2.5 sm:my-3.5 flex items-start gap-2 sm:gap-2.5">
          {/* Inner column: KEEP IT SHARP */}
          <span
            className="vertical-rl font-semibold tracking-[0.24em] text-[9.5px] sm:text-[10.5px] md:text-[11px] uppercase cursor-default select-none drop-shadow-xs"
            style={{
              color: '#A67F54',
            }}
          >
            KEEP IT SHARP
          </span>

          {/* Outer column: KEEP IT CLEAN */}
          <span
            className="vertical-rl font-semibold tracking-[0.24em] text-[9.5px] sm:text-[10.5px] md:text-[11px] uppercase cursor-default select-none drop-shadow-xs"
            style={{
              color: '#A67F54',
            }}
          >
            KEEP IT CLEAN
          </span>
        </div>

        {/* Bottom Vertical Hairline */}
        <div
          className="w-[1.5px] h-10 sm:h-12 md:h-16 rounded-full opacity-85"
          style={{
            background:
              'linear-gradient(180deg, #A67F54 0%, #D8BA8D 50%, #8B653B 100%)',
          }}
        />
      </div>

      {/* ========================================================
          BOTTOM RIGHT: "A sharper tomorrow." Tagline
          Positioned cleanly in the wide lower-right negative space.
          ======================================================== */}
      <div className="absolute right-4 sm:right-6 md:right-8 bottom-5 sm:bottom-7 md:bottom-9 flex flex-col items-end pointer-events-auto z-10">
        <p
          className="text-[11px] sm:text-[12px] md:text-[13px] tracking-wide font-normal cursor-default select-none drop-shadow-xs"
          style={{
            color: '#A89785',
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}
        >
          A sharper tomorrow.
        </p>
      </div>

      {/* Subtle Bottom-Center Scroll Guide */}
      <button
        onClick={() => {
          document.getElementById('statement')?.scrollIntoView({ behavior: 'smooth' });
        }}
        data-cursor="SCROLL"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300 text-[#8B653B] group cursor-pointer pointer-events-auto"
        title="Scroll down to explore portfolio"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#8B653B]">
          Scroll
        </span>
        <div className="w-[1.5px] h-4 bg-gradient-to-b from-[#A67F54] to-transparent rounded-full animate-bounce" />
      </button>
    </div>
  );
};
