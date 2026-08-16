import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  enableTilt = true,
  onClick,
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth subtle tilt
    const rX = ((y - centerY) / centerY) * -4;
    const rY = ((x - centerX) / centerX) * 4;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -7,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(23, 63, 61, 0.18), 0 0 25px rgba(212, 158, 71, 0.15)",
        borderColor: "rgba(212, 158, 71, 0.45)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        willChange: "transform, opacity, box-shadow",
      }}
      className={`transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
