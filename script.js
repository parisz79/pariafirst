const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");

//
moonIcon.addEventListener("click", (e) => {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
});

sunIcon.addEventListener("click", (e) => {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
});
