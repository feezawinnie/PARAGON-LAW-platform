import { useEffect, useRef } from "react";

export default function PageWrapper({ children }) {
  const ref = useRef(null);
  // useEffect(() => {
  //   const el = ref.current;
  //   if (!el) return;
  //   requestAnimationFrame(() => {
  //     el.style.opacity = "1";
  //     el.style.transform = "translateX(0)";
  //   });
  // }, []);

  return (
    <div
      // ref={ref}
      // className="bg-white text-[#0b2230] dark:bg-[#0b2230] dark:text-white transition-colors duration-300"
      className="animate-in fade-in slide-in-from-left-3 duration-300 bg-white text-[#0b2230] dark:bg-[#0b2230] dark:text-white"
      // style={{
      //   opacity: 1,
      //   transform: "translateX(-12px)",
      //   transition: "opacity 250ms ease-out, transform 250ms ease-out",
      // }}
    >
      {children}
    </div>
  );
}
