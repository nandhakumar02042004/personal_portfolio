import React, { useState, useEffect } from 'react';

export default function Typewriter({ words, delay = 2000 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, delay]);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <span className="relative">
      <span className="text-cyan-400 font-bold font-mono">
        {words[index].substring(0, subIndex)}
      </span>
      <span className={`w-[3px] h-[1.1em] bg-cyan-400 ml-1 inline-block align-middle transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
}
