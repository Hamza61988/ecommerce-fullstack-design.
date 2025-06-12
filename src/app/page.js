"use client";
import { useState } from "react";
import Main from "./components/main";
import Middle from "./components/middle.js";
import Middledown from "./components/middledown";
import Navbar from "./components/Navbar";

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <main>
        <Main isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setSidebarOpen} />
        <Middle />
        <Middledown />
      </main>
    </>
  );
}
