"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  // URLs de las imágenes de fondo
  const backgroundImages = [
    "url('https://www.enroma.com/wp-content/uploads/elementor/thumbs/Coliseo-Romano-p9hfybrrriyw7zyeoat3i5xq91dbuq09smp8uhsmrk.jpg')",
    "url('https://e6oe5g5k44d.exactdn.com/wp-content/uploads/2023/04/Sagrada-Familia-en-Barcelona-Espana.jpg')",
    "url('https://historia.nationalgeographic.com.es/medio/2023/06/15/test-estatua-de-la-libertad-1_4406c42a.jpg')"
  ];
  const backgroundColors = [
    "#000000", // Equivalente de var(--slate-900)
    "#000000", // Equivalente de var(--black)
    "#000000", // Equivalente de var(--neutral-900)
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <motion.div
        animate={{
          backgroundImage: backgroundImages[activeCard % backgroundImages.length],
        }}
        style={{ backgroundSize: 'cover',backgroundPosition:'center' }} // Asegúrate de que la imagen cubra el div
        className="hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden"
      >
      </motion.div>
    </motion.div>
  );
};
