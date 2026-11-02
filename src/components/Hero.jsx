
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import video1 from "../assets/videos/5055608-uhd_3840_2160_25fps.mp4";
import video2 from "../assets/videos/5121743-uhd_3840_2160_25fps.mp4";
import video3 from "../assets/videos/6997592-hd_1920_1080_25fps.mp4";

const videos = [video1, video2, video3];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative flex sm:h-screen min-h-[500px] items-center justify-center overflow-hidden bg-black">
      
      <video
        key={currentVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black/50" />

      
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
       
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
          Building the Future with
          <span className="mt-2 block text-[#123E74]">
            Strength & Precision
          </span>
        </h1>

        
        <div className="mt-7">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-[#123E74] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0E315C] sm:px-8 sm:py-4 sm:text-base"
          >
            Explore Our Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
