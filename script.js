const reserveTableLink = document.getElementById("reserveTable");
const reserveTableModal = document.getElementById("reserveTableModal");
console.log("started");
reserveTableLink.addEventListener("click", () => {
  console.log("clicked");
  reserveTableModal.classList.add("show");
  reserveTableModal.style.display = "block";
});

const loginLink = document.getElementById("loginLink");
const loginModal = document.getElementById("LoginModal");
console.log("started");
loginLink.addEventListener("click", () => {
  console.log("clicked");
  loginModal.classList.add("show");
  loginModal.style.display = "block";
});
const closeReserveModal = () => {
  console.log("clickedreser");
  $("#reserveTableModal").removeClass("show");
  reserveTableModal.style.display = "none";
  // $("#reserveTableModal").s
};
const closeLoginModal = () => {
  console.log("clickedlogin");
  $("#LoginModal").removeClass("show");
  loginModal.style.display = "none";
};
