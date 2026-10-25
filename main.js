let greeting = document.getElementById(`greeting`);
let constGreeting = document.getElementById(`greeting`).innerText;

function getName(firstName, lastName)
{
    return `${firstName} ${lastName}`
}

console.log(getName(`Haider`, `Javaid`));