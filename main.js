let greeting = document.getElementById(`greeting`);
let constGreeting = document.getElementById(`greeting`).innerText;

function getName(firstName, lastName)
{
    return `${firstName} ${lastName}`
}

console.log(getName(`Haider`, `Javaid`));

function timeOfDay(time) {
    time = time.toLowerCase();
    if (time == `morning`) {
        return `Good Morning`;
    }
    else if (time == `evening`)
    {
        return `Good Evening`;
    } else if (time == `afternoon`)
    {
        return `Good Afternoon`;
    } else {
        return `Not valid time of day`;
    }

}

console.log(timeOfDay(`morning`));