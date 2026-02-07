import { skills } from "@/public/skillIs";
import FadeUp from "../assets/fadeup";

export default function SkillsSection({ dark }: { dark: boolean }) {
  return (
    <FadeUp>
      <div
        id="Skills"
        className="w-full flex justify-center px-4 pt-20 sm:pt-24 overflow-hidden"
      >
        <div className="max-w-4xl text-center w-full">
          <h2
            className={`text-3xl sm:text-4xl transition duration-300 font-semibold mb-3 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Skills
          </h2>

          <div
            className={`w-28 h-1 mb-10 transition duration-300 mx-auto rounded-full ${
              dark ? "bg-gray-700" : "bg-gray-300"
            }`}
          />

          <ul className="grid gap-4 sm:grid-cols-2 text-center max-w-3xl mx-auto">
            {skills.map((item, index) => (
              <li
                key={index}
                className={`group rounded-2xl p-4 transition-all duration-300 border backdrop-blur-sm 
      ${
        dark
          ? "border-gray-800 hover:border-gray-600 bg-white/5 hover:bg-white/10"
          : "border-gray-200 hover:border-gray-400 bg-black/5 hover:bg-black/10"
      }`}
              >
                <p
                  className={`font-semibold mb-1 tracking-wide transition ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </p>

                <p
                  className={`text-sm leading-relaxed transition ${
                    dark
                      ? "text-gray-300 group-hover:text-gray-200"
                      : "text-gray-600"
                  }`}
                >
                  {item.skills}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeUp>
  );
}
