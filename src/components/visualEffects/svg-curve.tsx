"use client";
import { useEffect, useRef } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);

  let progress = 0;
  let reqId: number | null = null;
  let x = 0.5;
  let time = Math.PI / 2;

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const setPath = (value: number) => {
    if (typeof window === 'undefined') return;
    
    const width = window.innerWidth * 0.7;
    
    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M 0 50 Q ${width * x} ${50 + value} ${width} 50`
      );
    }
  };

  const animateIn = () => {
    if (reqId !== null) {
      cancelAnimationFrame(reqId);
      time = Math.PI / 2;
    }

    setPath(progress);
    reqId = requestAnimationFrame(animateIn);
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    setPath(newProgress);

    progress = lerp(progress, 0, 0.04);
    time += 0.2;

    if (Math.abs(progress) > 0.5) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      time = Math.PI / 2;
      progress = 0;
      reqId = null;
    }
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { movementY, clientX } = e;
    const target = e.currentTarget;
    const box = target.getBoundingClientRect();

    x = (clientX - box.left) / box.width;
    progress += movementY;
  };

  const resetAnimation = () => {
    if (reqId !== null) {
      cancelAnimationFrame(reqId);
      reqId = null;
    }
    animateOut();
  };

  useEffect(() => {
    setPath(progress);

    const handleResize = () => {
      setPath(progress);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (reqId !== null) {
        cancelAnimationFrame(reqId);
      }
    };
  }, []);

  return (
    <div className="line">
      <span
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
        className="box"
      />
      <svg>
        <path ref={path} />
      </svg>
    </div>
  );
}