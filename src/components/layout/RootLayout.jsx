import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function RootLayout() {
  const location = useLocation();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEntered(false);
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div className="bg-white text-[#0b2230] dark:bg-[#0b2230] dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <SiteHeader />
      <div
        className="flex-1 flex flex-col ease-out transition-[opacity,transform] duration-[250ms]"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateX(0)" : "translateX(-12px)",
        }}
      >
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}
