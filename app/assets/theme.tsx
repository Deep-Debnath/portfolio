import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Brightness2, Sunny } from "@mui/icons-material";
import { AnimatePresence, motion, Variants } from "framer-motion";

const tran: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
    rotate: -20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.12,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    rotate: 20,
    transition: {
      duration: 0.08,
      ease: "easeIn",
    },
  },
};
type ThemeProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Theme({ dark, setDark }: ThemeProps) {
  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#171717" : "#ffffff";
    document.body.style.color = dark ? "#ffffff" : "#171717";
    document.body.style.transition =
      "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease";
    document.body.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div
      className="fixed right-5 top-5 z-50 rounded-4xl border transition hover:scale-110"
      style={{ borderColor: dark ? "#313131" : "#bebebe" }}
    >
      <IconButton
        aria-label="theme"
        onClick={() => setDark(!dark)}
        sx={{ backdropFilter: "blur(10px)", }}
      >
        <AnimatePresence mode="wait">
          {dark ? (
            <motion.div
              key="sun"
              variants={tran}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex justify-center items-center"
            >
              <Brightness2 className="rotate-39 text-[#dbdbdb]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={tran}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex justify-center items-center"
            >
              <Sunny className="text-[#4a4a4a]" />
            </motion.div>
          )}
        </AnimatePresence>
      </IconButton>
    </div>
  );
}
