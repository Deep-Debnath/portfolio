"use client";

import { useEffect, useState } from "react";
import Theme from "./assets/theme";
import Layout from "./assets/navbar";
import Initial from "./components/initial";
import Buttons from "./components/homebuttons";
import Status from "./components/status";
import About from "./components/about";
import Skills from "./components/skills";
import Carousel from "./components/carousel";
import Projects from "./components/projects";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a loader
  return (
    <div>
      <div>
        <Layout dark={dark} />
        <Theme dark={dark} setDark={setDark} />
      </div>
      <Initial dark={dark} />
      <Status dark={dark} />
      <Buttons dark={dark} />
      <Carousel dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />

     
      <div id="Contact" className="h-200">
        e
      </div>
    </div>
  );
}
