const welcomeText = document.querySelector("#greeting");
          

function paintGreetings(username) {
    const date = new Date();
    const hours = date.getHours();

    if (hours > 6 && hours < 12) {
        welcomeText.innerText = `Good morning, ${username}`;
    }
    else if (hours >= 12 && hours < 18) {
        welcomeText.innerText = `Good afternoon, ${username}`;
    }
    else if (hours >= 18 && hours < 22) {
        welcomeText.innerText = `Good evening, ${username}`;
    }
    else {
        welcomeText.innerText = `Night Night, ${username}`;
    }
}


const savedUsername = welcomeText.innerText;

paintGreetings(savedUsername);
setInterval(paintGreetings, 3600000, savedUsername);
     

