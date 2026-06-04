"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import FrozenRoute from "@/components/FrozenRoute";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");
        // If heading to the homepage, set slide direction to backward (1)
        if (href === "/" || href?.endsWith("/")) {
          document.documentElement.setAttribute("data-route-direction", "backward");
        } else {
          document.documentElement.setAttribute("data-route-direction", "forward");
        }
      }
    };

    window.addEventListener("click", handleLinkClick, { capture: true });
    return () => window.removeEventListener("click", handleLinkClick, { capture: true });
  }, []);

  // Fallback for browser back/forward buttons
  useEffect(() => {
    if (pathname === "/") {
      document.documentElement.setAttribute("data-route-direction", "backward");
    }
  }, [pathname]);

  // Dynamic variants that read the instantaneous attribute value
  const getXCoordinate = (type: "initial" | "exit") => {
    const direction =
      typeof window !== "undefined"
        ? document.documentElement.getAttribute("data-route-direction") || "forward"
        : "forward"; // fallback for SSR

    if (type === "initial") {
      return direction === "forward" ? 120 : -120;
    }
    return direction === "forward" ? -120 : 120;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: getXCoordinate("initial") }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: getXCoordinate("exit") }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
        className="w-full"
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}