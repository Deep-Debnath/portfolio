import { skills } from "@/public/skillIs";
import FadeUp from "../assets/fadeup";

export default function SkillsSection({ dark }: { dark: boolean }) {
  return (
    <FadeUp>
      <div
        id="Skills"
        className="w-full flex justify-center px-3 pt-20 sm:pt-24 overflow-hidden"
      >
        <div className="max-w-4xl text-center w-full">
          <h2
            className={`text-3xl sm:text-4xl font-semibold transition duration-300 mb-3 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            My Skills
          </h2>

          <div
            className={`w-30 h-1 mb-7 relative left-[50%] -translate-x-1/2 transition duration-300 rounded-full ${
              dark ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
          <ul className="grid gap-3 text-center sm:grid-cols-2">
            {skills.map((item, index) => (
              <li
                key={index}
                className={`group relative rounded-xl p-5 border transition-all duration-300
              sm:hover:-translate-y-1 hover:translate-y-0 hover:shadow-xl
              ${
                dark
                  ? "border-gray-800 bg-white/5 hover:bg-white/10 hover:shadow-black/40"
                  : "border-gray-200 bg-black/5 hover:bg-black/10 hover:shadow-gray-300"
              }`}
              >
                <span
                  className={`absolute top-0 left-1/2 group-hover:rotate-180
                  group-hover:translate-y-10
                  -translate-x-1/2 h-1 w-10 group-hover:w-20 rounded-full transition-all duration-500
                  ${
                    dark
                      ? "bg-linear-to-r from-blue-500 to-cyan-400"
                      : "bg-linear-to-r from-blue-600 to-[#744472]"
                  }`}
                />

                <p
                  className={`font-semibold text-base group-hover:-translate-y-1.5 transition duration-300 mb-2 tracking-wide ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </p>

                <p
                  className={`text-sm leading-relaxed transition-colors
                  ${dark ? "text-gray-400 group-hover:text-gray-200" : "text-gray-600"}`}
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
