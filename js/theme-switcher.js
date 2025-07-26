function toggleTheme() {
  const html = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.removeAttribute("data-theme");
    button.textContent = "🌙 Dunkel";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    button.textContent = "☀️ Hell";
    localStorage.setItem("theme", "dark");
  }
}

// Theme beim Laden setzen
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

document.addEventListener("DOMContentLoaded", initTheme);
