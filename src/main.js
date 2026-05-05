import "./style.css";

// ── Restore theme before paint (prevents flash) ──
const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark"); // default to dark
}

// ── Sync icon + label to match current theme ──
function syncThemeUI() {
  const isDark = document.documentElement.classList.contains("dark");

  const icon = document.getElementById("theme-icon");
  const iconMobile = document.getElementById("theme-icon-mobile");
  const label = document.getElementById("theme-label-mobile");

  if (icon) icon.setAttribute("data-lucide", isDark ? "sun" : "moon");
  if (iconMobile)
    iconMobile.setAttribute("data-lucide", isDark ? "sun" : "moon");
  if (label) label.textContent = isDark ? "LIGHT MODE" : "DARK MODE";

  lucide.createIcons();
}

// ── Toggle button ──
window.toggleTheme = function () {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  syncThemeUI();
};

document.addEventListener("DOMContentLoaded", function () {
  // ── Mobile menu ──
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = !menu.classList.contains("hidden");

      if (isOpen) {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
      } else {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
      }
    });

    document.addEventListener("click", function () {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    });
  }

  // ── Page transitions ──
  const appContainer = document.getElementById("app");

  if (appContainer) {
    // Fade in when page loads
    setTimeout(function () {
      appContainer.style.opacity = '1';
      appContainer.style.transform = 'translateY(0)';
    }, 50);

    // Fade out before navigating
    document.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (
          !href ||
          href === "#" ||
          href.startsWith("mailto") ||
          href.startsWith("tel") ||
          link.target === "_blank" ||
          link.href === window.location.href ||
          e.ctrlKey || e.metaKey // allow opening in new tab
        )
          return;
        
        e.preventDefault();
        
        appContainer.style.transition = 'opacity 300ms ease-in, transform 300ms ease-in';
        appContainer.style.opacity = '0';
        appContainer.style.transform = 'translateY(-8px)';
        
        setTimeout(function () {
          window.location.href = href;
        }, 300); // Wait 300ms for fade out before navigating
      });
    });
  }

  // ── Sync theme icons on load ──
  syncThemeUI();

  // ── Form submission ──
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      var name = document.getElementById("f-name");
      var email = document.getElementById("f-email");
      var subject = document.getElementById("f-subject");
      var message = document.getElementById("f-message");

      ["name", "email", "subject", "message"].forEach(function (f) {
        document.getElementById("err-" + f).classList.add("hidden");
        document.getElementById("f-" + f).classList.remove("border-red-400");
      });
      document.getElementById("success-msg").classList.add("hidden");

      var ok = true;

      if (!name.value.trim()) {
        document.getElementById("err-name").classList.remove("hidden");
        name.classList.add("border-red-400");
        ok = false;
      }

      var emailVal = email.value.trim();
      var atIndex = emailVal.indexOf("@");
      var dotIndex = emailVal.lastIndexOf(".");
      if (
        atIndex < 1 ||
        dotIndex < atIndex + 2 ||
        dotIndex === emailVal.length - 1
      ) {
        document.getElementById("err-email").classList.remove("hidden");
        email.classList.add("border-red-400");
        ok = false;
      }

      if (!subject.value.trim()) {
        document.getElementById("err-subject").classList.remove("hidden");
        subject.classList.add("border-red-400");
        ok = false;
      }

      if (!message.value.trim()) {
        document.getElementById("err-message").classList.remove("hidden");
        message.classList.add("border-red-400");
        ok = false;
      }

      if (!ok) return;

      document.getElementById("success-msg").classList.remove("hidden");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    });
  }
});
