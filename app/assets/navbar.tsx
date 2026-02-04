"use client";

import { ArrowForward, MenuOpen } from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

const SECTIONS = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Contact",
] as const;

type Section = (typeof SECTIONS)[number];

type NavbarProps = {
  active: Section;
  dark: boolean;
};

function Navbar({ active, dark }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(710));

  const scrollToSection = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-5 z-50 md:left-1/2 md:-translate-x-1/2 left-5">
      {isMobile ? (
        <div>
          <IconButton
            style={{
              border: "1px solid",
              color: dark ? "#dbdbdb" : "#4a4a4a",
              borderColor: dark ? "#313131" : "#bebebe",
              backdropFilter: "blur(3px)",
            }}
            onClick={() => setOpen(true)}
          >
            <MenuOpen />
          </IconButton>
          <Drawer
            anchor="top"
            sx={{ backdropFilter: "blur(2px)" }}
            open={open}
            onClose={() => setOpen(false)}
          >
            {SECTIONS.map((item) => (
              <Button
                key={item}
                sx={{
                  border: "none",
                  color: dark ? "#cccccc" : "#313131",
                  bgcolor: dark ? "#171717" : "white",
                  width: "100%",
                  gap: "5px",
                  borderRadius: "0",
                  py: "16px",
                }}
                onClick={() => {
                  scrollToSection(item);
                  setOpen(false);
                }}
              >
                {item}
                <ArrowForward sx={{ fontSize: "small" }} />
              </Button>
            ))}
          </Drawer>
        </div>
      ) : (
        <Tabs
          TabIndicatorProps={{
            className: "rounded-full transition-all",
            style: {
              height: "80%",
              top: 4.7,
              backgroundColor: dark ? "#27272A" : "#ddf",
            },
          }}
          textColor="inherit"
          slotProps={{
            list: {
              className: "mx-[5px] gap-6 relative z-1",
            },
          }}
          value={SECTIONS.indexOf(active)}
          className="flex border rounded-4xl text-lg"
          sx={{
            borderColor: dark ? "#313131" : "#bebebe",
            backgroundColor: "transparent",
            backdropFilter: "blur(3px)",
          }}
        >
          {SECTIONS.map((item, ind) => (
            <Tab
              key={item}
              sx={{
                color: dark ? "#cccccc" : "#444444",
                transition: "0.3s",
                opacity: 1,
                "&:hover": {
                  color: dark ? "#ffffff" : "black",
                },
              }}
              label={item}
              value={ind}
              onClick={() => scrollToSection(item)}
            />
          ))}
        </Tabs>
      )}
    </nav>
  );
}

export default function Layout({ dark }: { dark: boolean }) {
  const [active, setActive] = useState<Section>("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive((prev) => (prev === section ? prev : section));
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Navbar active={active} dark={dark} />;
}
