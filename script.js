document.addEventListener("DOMContentLoaded", () => {
  const toggleDarkMode = document.getElementById("toggleDarkMode");
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
