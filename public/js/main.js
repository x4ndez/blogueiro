const loginBtn = document.querySelector("#login-btn");
const loginContainer = document.querySelector("#login-container");
const cancelBtn = document.querySelector("#cancel-btn");

loginBtn.addEventListener("click", () => {

    loginContainer.style.display = "flex";

    setTimeout(function () {

        loginContainer.style.opacity = 1;

    }, 10);


});

cancelBtn.addEventListener("click", () => {

    loginContainer.style.opacity = 0;

    setTimeout(function () {

        loginContainer.style.display = "none";

    }, 1000);

});