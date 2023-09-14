const loginBtn = document.querySelector("#login-btn");
const loginContainer = document.querySelector("#login-container");
const cancelBtn = document.querySelector("#cancel-btn");

loginBtn.addEventListener("click", () => {

    loginContainer.setAttribute("style", "display: flex;");

});

cancelBtn.addEventListener("click", () => {

    loginContainer.setAttribute("style", "display: none;");

});