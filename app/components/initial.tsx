import { Avatar, Badge, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Circle, LocationOnOutlined } from "@mui/icons-material";

export default function Initial({ dark }: { dark: boolean }) {
  const theme = useTheme();
  const isbig = useMediaQuery(theme.breakpoints.up(640));
  return (
    <div
      id="Home"
      className="h-[90%] w-full flex pt-12 sm:pt-34 sm:items-baseline justify-center px-4"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 max-w-4xl w-full">
        <div className="flex flex-col justify-between items-center gap-5">
          <Avatar
            src="/portfolio_image.png"
            alt="Deep Debnath"
            sx={{
              height: { xs: 200, sm: 240 },
              width: { xs: 200, sm: 240 },
              border: "2px solid",
              borderColor: "divider",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          />
          {isbig && (
            <Stack
              direction="row"
              spacing={2}
              className="flex w-full justify-center pt-4 text-sm text-zinc-400"
            >
              <Badge
                style={{
                  color: dark ? "" : "#313131",
                  borderColor: dark ? "" : "#bebebe",
                  transition: "all .3s",
                }}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-transparent"
              >
                <LocationOnOutlined
                  fontSize="small"
                  sx={{ color: dark ? "" : "#4a4a4a", transition: "all .3s" }}
                />
                <span>Kolkata, India</span>
              </Badge>

              <Badge
                style={{
                  color: dark ? "" : "#313131",
                  borderColor: dark ? "" : "#bebebe",
                  transition: "all .3s",
                }}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-transparent"
              >
                <Circle sx={{ fontSize: 12, color: "#22c55e" }} />
                <span>Open to work</span>
              </Badge>
            </Stack>
          )}
        </div>

        <div className="text-center sm:text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hi, I’m
            <span className="text-blue-500"> Deep Debnath </span>a
            <span className="text-amber-500"> Frontend Developer </span>
            building modern, scalable web experiences.
          </h1>

          <p
            className={`text-base sm:text-lg  max-w-xl`}
            style={{ color: dark ? "gray" : "darkslategray" }}
          >
            I design and build scalable, responsive web applications using
            React, Next.js, JavaScript, TypeScript, and modern UI systems like
            Tailwind CSS and Material UI. I focus on performance, accessibility,
            SEO, and writing clean, maintainable code, with experience in Redux
            Toolkit, API integration, and production-ready front-end
            architecture, ensuring smooth user experiences and long-term
            scalability.
          </p>
        </div>
      </div>
    </div>
  );
}
