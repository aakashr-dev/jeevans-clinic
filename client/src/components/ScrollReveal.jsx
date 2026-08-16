import { motion } from "framer-motion";

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  amount = 0.15,
}) {
  let selectedVariant = fadeUpVariants;
  if (variant === "scale-up") selectedVariant = scaleUpVariants;
  if (variant === "stagger-container") selectedVariant = staggerContainerVariants;
  if (variant === "stagger-item") selectedVariant = staggerItemVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={selectedVariant}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
