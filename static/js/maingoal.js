import { HIDDEN_CLASSNAME, GOAL_KEY } from "./SecretKeys.js"


const goalForm = document.getElementById("goal-form");
const goalInput = document.getElementById("main-goal");
const usersGoalContainer = document.getElementById("users-goal-container");
const usersGoal = document.querySelector("#users-goal");
const deleteBtn = document.querySelector("#delete-button");


function paintGoal(goal) {
    usersGoal.innerText = goal;
    deleteBtn.addEventListener("click", deleteGoal);
    goalForm.classList.add(HIDDEN_CLASSNAME);
    usersGoalContainer.classList.remove(HIDDEN_CLASSNAME);
}

function handleGoalSubmit(event) {
    event.preventDefault();
    const goal = goalInput.value;
    goalInput.value = "";
    paintGoal(goal);

    localStorage.setItem(GOAL_KEY, goal);
}

function deleteGoal(event) {
    usersGoalContainer.classList.add(HIDDEN_CLASSNAME);
    goalForm.classList.remove(HIDDEN_CLASSNAME);

    localStorage.setItem(GOAL_KEY, "");
}


goalForm.addEventListener("submit", handleGoalSubmit);

const savedGoal = localStorage.getItem(GOAL_KEY);

if (savedGoal) {
    paintGoal(savedGoal);
}
else {
    goalForm.classList.remove(HIDDEN_CLASSNAME);
    usersGoalContainer.classList.add(HIDDEN_CLASSNAME);
}



