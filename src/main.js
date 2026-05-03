import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  // ── Mobile menu ──
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

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

  // ── Page transitions ──
  const overlay = document.getElementById("page-transition");

  // Fade in when page loads
  overlay.style.opacity = "1";
  overlay.style.transition = "none";
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.style.transition = "opacity 0.35s ease";
      overlay.style.opacity = "0";
    });
  });

  // Fade out before navigating to another page
  document.querySelectorAll("a[href]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (
        !href ||
        href === "#" ||
        href.startsWith("mailto") ||
        href.startsWith("tel")
      )
        return;
      e.preventDefault();
      overlay.classList.add("leaving");
      setTimeout(function () {
        window.location.href = href;
      }, 350);
    });
  });

  // ── Form submission ──
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      var name = document.getElementById("f-name");
      var email = document.getElementById("f-email");
      var subject = document.getElementById("f-subject");
      var message = document.getElementById("f-message");

      // Reset all errors and success message
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

      // All fields valid — show success and reset
      document.getElementById("success-msg").classList.remove("hidden");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    });
  }
});
