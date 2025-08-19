const popup = document.querySelector("#popup");
const closeButton = document.querySelector(".popup-close-btn");

closeButton.addEventListener("click", (e) => {
 e.preventDefault();
 popup.style.display = "none";
});
