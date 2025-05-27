

const html = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme");

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (!savedTheme && prefersDark) {
  html.classList.add("dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}


if (savedTheme === "dark") {
  html.classList.add("dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

toggleButton.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});
