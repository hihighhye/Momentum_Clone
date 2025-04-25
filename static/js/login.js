const continueBtn = document.querySelector("#continueBtn");
const loginInput = document.querySelector("#name-field");

function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
}

continueBtn.addEventListener("submit", onLoginSubmit);