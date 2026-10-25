let greeting = document.getElementById(`greeting`);
const constGreeting = document.getElementById(`greeting`).innerText;


function getName(firstName, lastName)
{
    return `${firstName} ${lastName}`
}

console.log(getName(`Nao`, `Meow`));

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


function getGreet(time, firstName, lastName)
{    
    return `${timeOfDay(time)} ${getName(firstName, lastName)}`;
}

greeting.innerText = getGreet(`evening`, `Nao`, `Meow`) ;
console.log(getGreet(`evening`, `Nao`, `Meow`))