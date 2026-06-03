"use client";

import { useContext, useRef, ReactNode } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  children: ReactNode;
}

export default function FrozenRoute({ children }: Props) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context);

  return (
    <LayoutRouterContext.Provider value={frozen.current}>
      {children}
    </LayoutRouterContext.Provider>
  );
}