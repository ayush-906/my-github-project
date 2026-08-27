const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Hello! Git and GitHub are working together 🚀";
});