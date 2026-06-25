const themeToggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle-icon");
const detailButtons = document.querySelectorAll("[data-project]");
const toast = document.querySelector(".toast");

const storedTheme = localStorage.getItem("portfolio-theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark");
  toggleIcon.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  toggleIcon.textContent = isDark ? "☀" : "☾";
});

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`${button.dataset.project}: add a live link, screenshots, and a short case study here.`);
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 3200);
}
