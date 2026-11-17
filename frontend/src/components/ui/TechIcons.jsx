import React from 'react';

export function TechIcon({ name, className = "w-6 h-6" }) {
  switch (name?.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'next.js':
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <circle cx="90" cy="90" r="90" fill="#000" stroke="#333" strokeWidth="4"/>
          <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.733c3.197-2.317 6.25-4.86 9.509-7.597z" fill="url(#next-grad)"/>
          <path d="M115.814 54h12.114v48.455h-12.114z" fill="url(#next-grad2)"/>
          <defs>
            <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="next-grad2" x1="121" y1="54" x2="120.799" y2="92.879" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#3178C6" d="M1.5 63.7v62.8h125V1H1.5v62.7z"/>
          <path fill="#fff" d="M72.2 101.4c-2.3 1.3-5.2 2-8.5 2-3.8 0-6.9-1.2-9.2-3.6-2.3-2.4-3.5-5.8-3.5-10.2 0-4.6 1.3-8.1 3.8-10.6 2.5-2.5 6-3.8 10.4-3.8 2.8 0 5.2.5 7.2 1.5v-10c-2.4-.9-5.1-1.3-8.3-1.3-7.5 0-13.4 2.3-17.7 6.9-4.3 4.6-6.4 10.7-6.4 18.3 0 7.4 2.2 13.3 6.6 17.7 4.4 4.4 10.3 6.6 17.7 6.6 3.6 0 6.8-.7 9.5-2.1v-11.4h-1.6zm44.3-37.1h-33v11.5h10.3v48.5h12.5V75.8h10.2V64.3z"/>
        </svg>
      );
    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      );
    case 'node.js':
    case 'nodejs':
      return (
        <svg viewBox="0 0 256 289" className={className}>
          <path fill="#539E43" d="M128 0L9.4 68.4v152.2L128 289l118.6-68.4V68.4L128 0zm-8.8 223.1L36.3 175.2v-73.4l82.9 47.9v73.4zm17.6 0v-73.4l82.9-47.9v73.4l-82.9 47.9zM128 135.2L45.1 87.3 128 39.5l82.9 47.8-82.9 47.9z"/>
        </svg>
      );
    case 'express.js':
    case 'express':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-[13px] tracking-tighter text-white font-mono border border-white/20 rounded-lg bg-neutral-900`}>
          ex
        </div>
      );
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#3776AB" d="M63.5 0C44.4 0 45.6 8.3 45.6 8.3l.1 8.6h18.3v2.6H28.2S14 17.8 14 37.1s12.4 18.7 12.4 18.7h7.4v-10.4s-.4-12.4 12.2-12.4h19s11.8.2 11.8-11.5V9.4S78.6 0 63.5 0zM53.1 5.9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>
          <path fill="#FFD43B" d="M64.5 128c19.1 0 17.9-8.3 17.9-8.3l-.1-8.6H64v-2.6h35.8s14.2 1.7 14.2-17.6-12.4-18.7-12.4-18.7h-7.4v10.4s.4 12.4-12.2 12.4h-19s-11.8-.2-11.8 11.5v12.1s-1.8 9.5 13.4 9.5zm10.4-5.9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0-7z"/>
        </svg>
      );
    case 'django':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-[11px] tracking-tighter text-emerald-300 font-mono border border-emerald-500/40 rounded-lg bg-[#092E20]`}>
          dj
        </div>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#336791" d="M63.9 14.2c-27.4 0-49.7 22.2-49.7 49.7 0 21.9 14.2 40.5 34.1 46.9 2.5.5 3.4-1.1 3.4-2.4 0-1.2 0-5.2-.1-9.5-13.8 3-16.7-5.9-16.7-5.9-2.3-5.7-5.5-7.3-5.5-7.3-4.5-3.1.3-3 .3-3 5 .3 7.6 5.1 7.6 5.1 4.4 7.6 11.6 5.4 14.4 4.1 1.6-3.2 2.7-5.4 4.4-6.6-11-1.3-22.6-5.5-22.6-24.6 0-5.4 1.9-9.9 5.1-13.3-.5-1.3-2.2-6.3.5-13.2 0 0 4.2-1.3 13.7 5.1 4-1.1 8.3-1.7 12.5-1.7 4.2 0 8.5.6 12.5 1.7 9.5-6.5 13.7-5.1 13.7-5.1 2.7 6.8 1 11.9.5 13.2 3.2 3.5 5.1 7.9 5.1 13.3 0 19.1-11.6 23.2-22.7 24.5 2.1 1.8 3.9 5.4 3.9 10.8 0 7.8-.1 14.1-.1 16 0 1.3.9 2.9 3.4 2.4 19.8-6.5 33.9-25.1 33.9-46.9.2-27.5-22-49.7-49.5-49.7z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#00758F" d="M64.7 28.5c-19.4 0-35.3 15.6-35.7 34.9-.4 20.3 15.8 36.9 36 36.9 15.6 0 28.7-9.8 33.7-23.7h-11.5c-4.1 8.2-12.6 13.8-22.3 13.8-13.8 0-25-11.2-25-25s11.2-25 25-25c9.7 0 18.2 5.6 22.3 13.8h11.5C93.4 38.3 80.3 28.5 64.7 28.5z"/>
          <path fill="#F29111" d="M102.5 54.1H84.1v7.9h18.4v-7.9z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#47A248" d="M63.7 3.4C62.4 4.8 54 13.9 49.3 24.6 42.8 39.4 41.5 54.8 44.5 69.8c3.9 19.3 16 35.8 19.2 54.8 3.2-19 15.3-35.5 19.2-54.8 3-15 1.7-30.4-4.8-45.2C73.4 13.9 65 4.8 63.7 3.4z"/>
          <path fill="#499D4A" d="M64 4.5v119.5c.3-1.6 3.1-16.8 5.7-27.1 5.3-20.9 9.9-39.7 4.1-57.8C69.3 25.1 66 12 64 4.5z"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#F05032" d="M125.7 57.5L70.5 2.3c-3-3-8-3-11 0L46.2 15.6l14.9 14.9c3.2-1.1 7-.3 9.5 2.2 2.5 2.5 3.3 6.3 2.2 9.5l14.4 14.4c3.2-1.1 7-.3 9.5 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.7-2.7-3.4-6.8-2-10.1L78 48.1v34.4c1.4 1 2.5 2.4 3.1 4.1 2.2 6.1-.9 12.8-7 15s-12.8-.9-15-7c-1.7-4.7-.5-9.8 2.8-13.1l.1-34.9c-3.3-1.4-5.7-4.4-6.1-8L32.1 24.9 2.3 54.7c-3 3-3 8 0 11l55.2 55.2c3 3 8 3 11 0l57.2-52.4c3.1-3 3.1-8 0-11z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#2496ED" d="M123.6 49.3c-2.4-1.8-7.7-2.6-12.7-1.4-.8-3.4-2.6-6.6-5.2-9.1-1.1-1.1-2.4-1.9-3.7-2.6l-2.4 4c1 0.6 2 1.3 2.8 2.1 2.8 2.8 4.2 6.6 4 10.5 0 0.8-0.1 1.5-0.2 2.3-2.6 1.4-6.4 2.1-11.4 2.1H5.1c-1.3 4.2-1.9 8.6-1.9 13 0 23.9 17.5 44.4 41.3 48.7 18.9 3.4 38.3-0.7 54.3-11.6 15-10.2 24.4-25.9 27.2-43.9 0.4-2.8 0.5-5.5 0.3-8.2-0.8-1.5-1.7-2.8-2.7-3.9z"/>
          <path fill="#2496ED" d="M43.7 41.5h11.9v10.7H43.7zm15.4 0H71v10.7H59.1zm15.5 0h11.9v10.7H74.6zm-46.3 0h11.9v10.7H28.3zm15.4-14.7h11.9v10.7H43.7zm15.4 0H71v10.7H59.1zm15.5 0h11.9v10.7H74.6zM59.1 12H71v10.7H59.1z"/>
        </svg>
      );
    case 'shopify':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#96BF48" d="M101.4 25.7c-.5-.4-1.2-.4-1.6 0l-9.1 8.8L79.4 12c-.4-.7-1.2-1.1-2.1-1-1.9.3-5.2 1.5-8.4 3-2.5 1.1-6 3.1-8.2 4.6-2.5-1.8-6.1-2.7-10.3-2.7-10.8 0-19.1 7.2-19.1 17.6 0 8.3 5.3 14.1 12.3 18.2l-1.9 8.2c-.2.8.2 1.6.9 2 0 0 7.6 4.3 13.9 4.3 1.1 0 2.1-.1 3.1-.3l-3 12.8c-.2.8.3 1.6 1 1.9.4.1.8.1 1.2-.1l19.5-12.8 19.3 12.8c.4.2.8.3 1.2.1.8-.3 1.2-1.1 1-1.9L80.6 34.6l20.4-8.1c.6-.3.8-.9.4-.8zm-47.8 7.9c0-6.1 4.5-10.8 10.9-10.8 2.1 0 3.9.5 5.3 1.4L54.7 39.5c-.7-1.8-1.1-3.8-1.1-5.9z"/>
          <path fill="#5E8E3E" d="M79.4 12c-.4-.7-1.2-1.1-2.1-1-1.9.3-5.2 1.5-8.4 3-2.5 1.1-6 3.1-8.2 4.6L77.3 35l13.4-1.5L79.4 12z"/>
        </svg>
      );
    case 'fastapi':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <circle cx="64" cy="64" r="64" fill="#009688"/>
          <path d="M72 16L32 72h24l-8 40 48-56H64l8-40z" fill="#fff"/>
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="64" fill="#21759B"/>
          <path fill="#fff" d="M64 12C35.3 12 12 35.3 12 64c0 19.3 10.5 36.1 26.2 45.1L18.4 54.4C16.8 50 16 46 16 42.4c0-1.8.2-3.6.5-5.3C27.9 22.8 44.8 14.7 64 14.7c15 0 28.6 5 39.5 13.5L64 102.5 35.7 20.3C38.6 15 42.6 12 42.6 12z"/>
        </svg>
      );
    default:
      return null;
  }
}
