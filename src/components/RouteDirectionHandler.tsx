"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteDirectionHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href === "/" || href === "") {
                    document.documentElement.setAttribute("data-route-direction", "backward");
                } else {
                    document.documentElement.setAttribute("data-route-direction", "forward");
                }
            }
        };

        window.addEventListener("click", handleLinkClick, { capture: true });
        return () => window.removeEventListener("click", handleLinkClick, { capture: true });
    }, []);

    useEffect(() => {
        if (pathname === "/") {
            document.documentElement.setAttribute("data-route-direction", "backward");
        }
    }, [pathname]);

    return null;
}