const themeToggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle-icon");

const storedTheme = localStorage.getItem("portfolio-theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark");
  toggleIcon.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  toggleIcon.textContent = isDark ? "Light" : "Dark";
});
