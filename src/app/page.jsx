"use client";

import Hero from "@/components/hero/Hero";
import { TabProvider } from "../context/TabContext";

import Tabs from "@/components/tabs/Tabs";
import Accordions from "@/components/accordion/Accordions";
// import Image from "next/image";

export default function Home() {
  return (
    <TabProvider>
      <main className="flex min-h-screen flex-col ">
        <Hero />
        <Tabs />
        <Accordions />
      </main>
    </TabProvider>
  );
}
