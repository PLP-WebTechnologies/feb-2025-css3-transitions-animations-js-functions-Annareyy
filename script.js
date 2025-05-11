// Retrieve and apply user preference on load
window.onload = function() {
  const mode = localStorage.getItem("theme");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Button click animation
document.getElementById("animateBtn").addEventListener("click", function () {
  this.classList.add("animate");
  setTimeout(() => this.classList.remove("animate"), 600);
});

// Toggle theme and store preference
document.getElementById("toggleModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});
