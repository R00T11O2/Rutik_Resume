(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);

// script.js

const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.style.backgroundColor = "#000";
themeToggleButton.style.color = "#0ae6e6";
themeToggleButton.style.outline = "0";
themeToggleButton.style.borderRadius = "10px";

// // Check for the saved theme in localStorage
// if (localStorage.getItem("theme") === "dark") {
//   document.body.setAttribute("data-theme", "dark");
//   themeToggleButton.textContent = "Light Mode";
// } else {
//   document.body.setAttribute("data-theme", "light");
//   themeToggleButton.textContent = "Dark Mode";
// }

themeToggleButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeToggleButton.textContent = "Dark Mode";
    themeToggleButton.style.backgroundColor = "#000";
    themeToggleButton.style.color = "#0ae6e6";
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggleButton.textContent = "Light Mode";
    themeToggleButton.style.backgroundColor = "#fff";
    themeToggleButton.style.color = "#000";
  }
});

if (currentTheme === "dark") {
  document.timeline - info;
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const navbar = document.getElementById("mainNavbar");

  // Default to light mode
  body.classList.add("light-mode");
  navbar.classList.add("light-mode");

  toggleBtn.addEventListener("click", function () {
    const isDark = body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode", !isDark);
    navbar.classList.toggle("dark-mode", isDark);
    navbar.classList.toggle("light-mode", !isDark);
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
});

document.querySelectorAll(".circular-progress").forEach((progress) => {
  const valueEl = progress.querySelector(".progress-value");
  const skillName = progress.querySelector(".skill-name");
  const percentage = parseInt(progress.getAttribute("data-percentage"));
  const color = progress.getAttribute("data-color") || "#00ffff";
  let current = 0;

  // Apply dynamic color
  valueEl.style.color = color;
  skillName.style.color = color;
  valueEl.style.textShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
  skillName.style.textShadow = `0 0 5px ${color}`;
  progress.style.boxShadow = `0 0 25px ${color}80, 0 0 50px ${color}40, inset 0 0 15px ${color}60`;

  // Animate loading
  const animate = setInterval(() => {
    if (current >= percentage) {
      clearInterval(animate);
    } else {
      current++;
      const angle = (360 * current) / 100;
      progress.style.background = `conic-gradient(${color} ${angle}deg, #222 ${angle}deg)`;
      valueEl.textContent = `${current}%`;
    }
  }, 20);
});
