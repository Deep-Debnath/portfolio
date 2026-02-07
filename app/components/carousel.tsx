import { skillIcons } from "@/public/skillIs";
import { motion } from "framer-motion";

export default function Carousel({ dark }: { dark: boolean }) {
  return (
    <div className="flex justify-center mt-16 w-full">
      <div className="relative lg:w-[75%] w-screen overflow-hidden">
        <div
          className={`pointer-events-none transition duration-300 bg-linear-to-r absolute left-0 top-0 z-10 h-full sm:w-24 w-14
            ${dark ? "from-[#171717] to-transparent" : "from-white to-transparent"}`}
        />

        <div
          className={`pointer-events-none transition duration-300 bg-linear-to-l absolute right-0 top-0 z-10 h-full sm:w-24 w-14
          ${dark ? " from-[#171717] to-transparent" : " from-white to-transparent"}`}
        />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 55,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...skillIcons, ...skillIcons].map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="flex items-center px-7 justify-center"
              >
                <Icon
                  //   size={56}
                  className={`transition duration-300 sm:text-[51px] text-[40px] ${
                    dark
                      ? "text-gray-300 opacity-70"
                      : "text-gray-700 opacity-80"
                  }`}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
