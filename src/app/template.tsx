"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import FrozenRoute from "@/components/FrozenRoute";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            document.documentElement.setAttribute("data-route-direction", "backward");
        }
    }, [pathname]);

    const getXCoordinate = (type: "initial" | "exit") => {
        const direction =
            typeof window !== "undefined"
                ? document.documentElement.getAttribute("data-route-direction") || "forward"
                : "forward";

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