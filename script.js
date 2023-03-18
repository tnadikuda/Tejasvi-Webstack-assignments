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
