document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-theme");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    btn.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");
  });
});