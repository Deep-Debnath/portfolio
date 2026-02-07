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

      <div id="Projects" className="h-200">
        d
      </div>
      <div id="Contact" className="h-200">
        e
      </div>
    </div>
  );
}
