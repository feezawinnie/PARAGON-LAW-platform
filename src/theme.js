// // 1. Restore theme before paint (prevents flash)
// const saved = localStorage.getItem("theme");
// if (saved === "dark") document.documentElement.classList.add("dark");

// // 2. Page transition on every internal link click
// document.addEventListener("DOMContentLoaded", () => {
//   const overlay = document.getElementById("page-transition");

//   document.querySelectorAll("a[href]").forEach((link) => {
//     const href = link.getAttribute("href");

//     // Skip external links, anchors, and mailto/tel
//     if (
//       !href ||
//       href.startsWith("http") ||
//       href.startsWith("#") ||
//       href.startsWith("mailto") ||
//       href.startsWith("tel")
//     )
//       return;

//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       overlay.classList.add("leaving");

//       setTimeout(() => {
//         window.location.href = href;
//       }, 350); // match your transition duration
//     });
//   });

//   // 3. Fade in on arrival
//   overlay.classList.remove("leaving");
// });

// // 4. Toggle button
// function toggleTheme() {
//   const isDark = document.documentElement.classList.toggle("dark");
//   localStorage.setItem("theme", isDark ? "dark" : "light");
// }

// window.toggleTheme = toggleTheme;
