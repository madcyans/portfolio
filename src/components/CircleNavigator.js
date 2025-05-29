import React, { useState, useEffect } from 'react';

const CircleNavigator = () => {
  // Target scroll percentage (from 0 to 1) based on a fixed range
  const [scrollTarget, setScrollTarget] = useState(0);
  // Smoothed value for rendering the circle's position
  const [smoothPos, setSmoothPos] = useState(0);

  // Static vertical range in vh units
  const minPos = 57; // Starting position (38vh)
  const maxPos = 62; // Ending position (74vh)

  // Fixed scroll range (in pixels) that maps 0 to 1 for scroll percentage.
  const fixedScrollRange = 400; // Adjust this value to fit your scroll range

  // Update scroll target based on the fixed scroll range:
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const effectiveScroll = Math.min(scrollTop, fixedScrollRange);
      const scrollPercentage = effectiveScroll / fixedScrollRange;
      setScrollTarget(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize on mount:
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly animate the smoothPos value toward the scrollTarget.
  useEffect(() => {
    let animationFrame;
    const constantStep = 0.1; // Lower value equals slower smoothing.

    const updateSmoothPos = () => {
      setSmoothPos(prev => {
        const delta = scrollTarget - prev;
        if (Math.abs(delta) < constantStep) return scrollTarget;
        return prev + Math.sign(delta) * constantStep;
      });
      animationFrame = requestAnimationFrame(updateSmoothPos);
    };

    animationFrame = requestAnimationFrame(updateSmoothPos);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollTarget]);

  // Map smoothPos (0 to 1) into the static vertical range (in vh units)
  const computedTop = minPos + smoothPos * (maxPos - minPos);

  return (
    <div className="fixed left-12 top-0 h-screen w-8 z-40 pointer-events-none">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"></div>
      {/* Circle indicator (centered horizontally) */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gray-400 rounded-full smokey-ball"
        style={{ top: `${computedTop}vh` }}
      ></div>
    </div>
  );
};

export default CircleNavigator;