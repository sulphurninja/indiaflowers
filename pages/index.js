import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import ImageSlider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main class="bg-gradient-to-tl from-[#231D25] via-[#231D25] to-[#0F0F11] h-screen w-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <Navbar />
<ImageSlider/>
        </div>
      )};
    </main>

  );
}
