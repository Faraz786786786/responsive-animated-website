import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="about" className="w-screen min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5 px-4">
        <p className="font-general text-sm uppercase md:text-[10px] text-gray-600">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext max-w-2xl text-center space-y-2">
          <p className="text-lg font-medium text-black">
            The Game of Games begins—your life, now an epic MMORPG
          </p>
          <p className="text-sm text-gray-500">
            Zentry unites every player from countless games and platforms,
            both digital and physical, into a unified Play Economy.
          </p>
        </div>
      </div>

      {/* Clipping Scroll Animation Section */}
      <div id="clip" className="relative h-dvh w-screen overflow-hidden">
        <div className="mask-clip-path relative h-full w-full overflow-hidden rounded-[50%] transition-all duration-700">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
