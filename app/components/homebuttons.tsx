import {
  ArrowForward,
  Download,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";
import { useState } from "react";

const exitArrow: Variants = {
  initial: { y: 0, opacity: 1 },
  exit: {
    y: 24,
    opacity: 0,
    transition: { duration: 0.3, ease: "linear" },
  },
};

const enterArrow: Variants = {
  initial: { y: -24, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "linear" },
  },
};

export default function Buttons({ dark }: { dark: boolean }) {
  const [hovered, setHovered] = useState(false);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sm:pt-5 pt-5 flex justify-center">
      <Stack
        direction={{ sm: "row", xs: "column" }}
        gap={2}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Button
          className="group"
          variant="contained"
          onClick={() => scrollToSection("Contact")}
          endIcon={
            <ArrowForward
              className="group-hover:translate-x-1"
              sx={{ transition: "all .3s" }}
            />
          }
          sx={{
            borderRadius: "999px",
            px: 3,
            py: 1,
            transition: "all .3s",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            bgcolor: dark ? "#f1f1f1" : "#202020",
            color: dark ? "#171717" : "#ffffff",
          }}
        >
          Get in touch
        </Button>

        <Button
          onClick={() => scrollToSection("Projects")}
          className="group"
          variant="contained"
          endIcon={
            <ArrowForward
              className="group-hover:translate-x-1"
              sx={{ transition: "all .3s" }}
            />
          }
          sx={{
            borderRadius: "999px",
            px: 3,
            py: 1,
            transition: "all .3s",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            bgcolor: dark ? "#333333" : "darkolivegreen",
            color: dark ? "#ffffff" : "#fff",
          }}
        >
          View Projects
        </Button>

        <Button
          variant="outlined"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          startIcon={
            <motion.span
              className="relative w-7 h-7 overflow-hidden flex items-center justify-center"
              style={{
                position: "relative",
                width: 24,
                height: 24,
                overflow: "hidden",
                display: "inline-flex",
              }}
            >
              <AnimatePresence mode="wait">
                {!hovered ? (
                  <motion.span
                    key="old"
                    variants={exitArrow}
                    initial="initial"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Download />
                  </motion.span>
                ) : (
                  <motion.span
                    key="new"
                    variants={enterArrow}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Download />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          }
          sx={{
            borderRadius: "999px",
            px: 3,
            py: 1,
            transition: "all .3s",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            borderColor: dark ? "#313131" : "#bebebe",
            color: dark ? "#ffffff" : "#171717",
          }}
        >
          Download CV
        </Button>

        <Stack direction="row" spacing={1}>
          {[GitHub, LinkedIn, Instagram].map((Icon, index) => (
            <IconButton
              className="group"
              key={index}
              aria-label={Icon.name}
              sx={{
                border: "1px solid",
                borderColor: dark ? "#313131" : "#bebebe",
                transition: "all .3s",
                "&:hover": {
                  backgroundColor: dark ? "#1f1f1f" : "#f5f5f5",
                  borderColor: dark ? "#555" : "#999",
                },
              }}
            >
              <Icon
                className="group-hover:scale-110"
                sx={{
                  color: dark ? "#cccccc" : "#313131",
                  fontSize: "1.9rem",
                  transition: "all .3s",
                }}
              />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
