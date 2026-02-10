export default function Footer({ dark }: { dark: boolean }) {
  return (
    <footer
      className={`w-full py-4 transition-all duration-300 text-sm text-center border-t ${
        dark
          ? " text-gray-300 border-gray-800"
          : " text-gray-700 border-gray-200"
      }`}
    >
      © 2026 Deep Debnath. All rights reserved.
    </footer>
  );
}
