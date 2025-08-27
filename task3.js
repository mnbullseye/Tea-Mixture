const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-icon");
const sidebar = document.querySelector(".sidebar");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
  navBtn.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  navBtn.classList.remove("show");
});
