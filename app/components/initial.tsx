import { Avatar } from "@mui/material";

export default function Initial({ dark }: { dark: boolean }) {
  return (
    <div
      id="Home"
      className="h-[90%] w-full flex pt-12 sm:pt-34 sm:items-baseline justify-center px-4"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 max-w-4xl w-full">
        <div className="flex flex-col items-center gap-5">
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
        </div>

        <div className="text-center sm:text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hi, I’m
            <span className="text-blue-500"> Deep Debnath </span>a
            <span className="text-amber-500"> Frontend Developer </span>
            with a strong foundation in modern web technologies.
          </h1>

          <p
            className={`text-base sm:text-lg  max-w-xl`}
            style={{ color: dark ? "gray" : "darkslategray" }}
          >
            I build clean, responsive, and user-friendly web applications using
            HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and modern UI
            libraries like Material UI. I enjoy crafting smooth user interfaces,
            focusing on good UI/UX, performance, and maintainable code.
          </p>
        </div>
      </div>
    </div>
  );
}
