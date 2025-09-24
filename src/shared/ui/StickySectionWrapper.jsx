import React, { useRef, useState, useEffect } from "react";

const StickySectionWrapper = ({ children, index, totalSections }) => {
  const wrapperRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const element = wrapperRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // When the section starts to stick (top: 0)
      if (rect.top <= 0) {
        // Calculate scroll progress AFTER it has become sticky
        // This is where the next section starts to push it
        const scrollDistance = -rect.top; // How far above the viewport top it has scrolled

        // The total height the section needs to "slide" up
        // A simple way to approximate this is its own height, or a fixed value.
        // Let's use the element's height for a 1:1 push.
        const slideHeight = element.offsetHeight;

        // Calculate the percentage of the current section that has been pushed up
        // This value goes from 0 to 1 as the next section scrolls up
        const progress = Math.min(1, Math.max(0, scrollDistance / slideHeight));

        // Apply the translateY. The section moves up to its full height.
        setTranslateY(-progress * 100);
      } else {
        setTranslateY(0); // Reset if not sticky or above sticky point
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index, totalSections]); // Re-run if sections change

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh", // Each section takes full viewport height for this effect
        zIndex: totalSections - index, // Ensure correct stacking order (higher index = lower z-index)
        transform: `translateY(${translateY}%)`,
        transition: "transform 0.1s linear", // Smooth out the transformation
        willChange: "transform", // Optimize for animation
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          // ... other styling for your section content
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default StickySectionWrapper;
