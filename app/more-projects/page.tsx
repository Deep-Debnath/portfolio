import { moreprojects } from "@/public/myprojects";
import Image from "next/image";
import { Chip, Tooltip } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import Footer from "../components/footer";

export default function Page({ dark = true }: { dark: boolean }) {
  return (
    <div className="bg-[#171717]">
      <div
        id="Projects"
        className="w-full bg-[#171717] pb-7 flex justify-center px-3 pt-5 sm:pt-10"
      >
        <div className="max-w-5xl text-center w-full">
          <h2
            className={`text-3xl sm:text-4xl font-semibold transition duration-300 mb-3 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            More Projects
          </h2>

          <div
            className={`w-30 h-1 mb-6 relative left-[50%] -translate-x-1/2 transition duration-300 rounded-full ${dark ? "bg-gray-700" : "bg-gray-300"}`}
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {moreprojects.map(
              (
                { title, img, description, github, skills, visit, tooltip },
                index,
              ) => (
                <li
                  key={index}
                  className={`rounded-2xl p-1 transition-all duration-300 ${dark ? "border border-white/10 hover:border-white/20" : "border border-gray-200 hover:border-gray-300"}  `}
                >
                  <div className="group flex flex-col rounded-xl overflow-hidden transition duration-300">
                    <div
                      className={`relative rounded-xl transition-all duration-300 `}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={img}
                          alt={`${title} preview`}
                          width={550}
                          height={400}
                          className="object-cover rounded-lg w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* <img
                          src={img}
                          alt={img + "preview"}
                          className="object-cover rounded-lg w-full h-full group-hover:scale-103 transition-transform duration-400"
                        /> */}

                        <div className={`absolute inset-0 transition`} />
                      </div>

                      <div className="flex flex-col items-center justify-between gap-4 p-6">
                        <h3
                          className={`text-lg font-semibold transition duration-300 relative w-fit ${dark ? "text-white" : "text-gray-900"}`}
                        >
                          {title}
                          <span
                            className={`block h-0.5 mt-1 w-0 group-hover:w-full transition-all duration-400 rounded-full ${dark ? "bg-gray-600" : "bg-gray-400"}`}
                          />
                        </h3>

                        <p
                          className={`text-sm leading-normal transition duration-300 ${dark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, i) => (
                            <Chip
                              key={i}
                              label={skill}
                              sx={{
                                backgroundColor: dark
                                  ? "rgba(255,255,255,0.05)"
                                  : "rgba(0,0,0,0.04)",
                                border: dark
                                  ? "1px solid rgba(255,255,255,0.15)"
                                  : "1px solid rgba(0,0,0,0.15)",
                                color: dark ? "#d1d1d1" : "#374151",
                                backdropFilter: "blur(6px)",
                                fontSize: "0.75rem",
                                transition: "all 0.25s",
                                "&:hover": {
                                  backgroundColor: dark
                                    ? "rgba(255,255,255,0.08)"
                                    : "rgba(0,0,0,0.08)",
                                },
                              }}
                            />
                          ))}
                        </div>

                        <div className="flex w-full justify-between mt-4">
                          <a
                            href={visit}
                            target="_blank"
                            className={`flex items-center ${visit || "cursor-not-allowed"} gap-1 h-9 px-4 text-sm font-medium rounded-full transition duration-300 ${dark ? "bg-white/10 text-gray-200 hover:bg-white/20" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                          >
                            <Tooltip title={tooltip} arrow placement="top">
                              <div>
                                Visit <Launch fontSize="small" />
                              </div>
                            </Tooltip>
                          </a>

                          <a
                            href={github}
                            target="_blank"
                            className={`flex items-center ${github || "cursor-not-allowed"} gap-1 h-9 px-4 text-sm font-medium rounded-full transition duration-300  ${dark ? "bg-white text-[#313131] hover:bg-gray-200" : "bg-gray-800 text-white hover:bg-gray-800"}`}
                          >
                            <Tooltip title={tooltip} arrow placement="top">
                              <div>
                                GitHub <GitHub fontSize="small" />
                              </div>
                            </Tooltip>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      <Footer dark={true} />
    </div>
  );
}
