"use client";

import { useEffect, useState } from "react";
import Theme from "./assets/theme";
import Layout from "./assets/navbar";
import Initial from "./components/initial";
import Buttons from "./components/homebuttons";
import Status from "./components/status";

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
      <div id="Home" className="h-200">a</div>
      <div id="About" className="h-200">b</div>
      <div id="Experience" className="h-200">c</div>
      <div id="Projects" className="h-200">d</div>
      <div id="Contact" className="h-200">e</div>
    </div>
  );
}
