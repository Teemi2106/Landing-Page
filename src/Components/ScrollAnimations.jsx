import React, { useEffect, useRef, useState } from "react";
import "./CSS/ScrollAnimation.css";

const ScrollAnimation = ({ children, animationType, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${isVisible ? animationType : ""}`}
      style={style} // Apply passed-in style here
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
