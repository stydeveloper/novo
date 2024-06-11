"use client";

import { TabProvider } from "../context/TabContext";
import Main from "@/pages/main/Main";
// import Image from "next/image";

export default function Home() {
  return (
    <TabProvider>
      <Main />
    </TabProvider>
  );
}
