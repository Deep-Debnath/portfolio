import { motion } from "framer-motion";
import FadeUp from "../assets/fadeup";

export default function About({ dark }: { dark: boolean }) {
  return (
    <FadeUp>
      <div
        id="About"
        className="w-full flex justify-center px-4 pt-16 sm:pt-24"
      >
        <div className="max-w-4xl text-center w-full">
          <h2
            className={`text-3xl sm:text-4xl font-semibold transition duration-300 mb-3 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>

          <div
            className={`w-30 h-1 mb-6 relative left-[50%] -translate-x-1/2 transition duration-300 rounded-full ${
              dark ? "bg-gray-700" : "bg-gray-300"
            }`}
          />

          <p
            className={`text-base sm:text-lg leading-relaxed transition duration-300 ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            My name is <span className="font-medium">Deep Debnath</span> - I am
            a Frontend Developer focused on building fast, scalable and
            user-friendly web applications. I specialize in creating smooth,
            modern user interfaces using <strong>React.js</strong>,
            <strong> Next.js</strong>, <strong>Tailwind CSS</strong>,
            <strong> Material UI</strong> and <strong>Framer Motion</strong>,
            with a strong emphasis on performance, responsiveness and clean UI
            architecture.
            <br />
            <br />I pay close attention to <strong>
              SEO best practices
            </strong>, <strong>web accessibility (a11y)</strong> and
            <strong> core web vitals</strong>, ensuring applications are
            discoverable, inclusive and optimized for real users. I regularly
            translate <strong>Figma designs</strong> into pixel-perfect,
            production-ready interfaces while maintaining design consistency and
            usability across devices.
            <br />
            <br />I have hands-on experience building production-focused
            frontend applications, where I emphasize reusable component
            architecture, scalable state management and modern React patterns. I
            work comfortably with <strong> Git</strong>,<strong> GitHub</strong>{" "}
            and collaborative workflows and continuously improve code quality
            through refactoring, performance tuning and best practices.
            <br />
            <br />
            Alongside frontend development, I have practical experience with
            <strong> JavaScript</strong>, <strong> TypeScript</strong> and
            backend integration using REST APIs. Outside of development, I enjoy
            <strong> cricket</strong> and learning new tools in the frontend
            ecosystem. I’m always eager to grow and contribute to impactful,
            high-quality digital products.
          </p>
        </div>
      </div>
    </FadeUp>
  );
}
