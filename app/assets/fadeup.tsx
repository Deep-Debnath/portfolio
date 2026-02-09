import { motion } from "framer-motion";
import React from "react";

export default function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      }}
    >
      {children}
    </motion.section>
  );
}
