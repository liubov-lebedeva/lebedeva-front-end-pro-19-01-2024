let userAge = "";
let userCountry = "";
let userFavSportsman = "";

const userBirthYear = Number(prompt("What is your birth year?"));

if (!userBirthYear) {
    alert("It's a pity that you didn't want to enter your birth year.");
} else if (typeof userBirthYear === 'number') {
    userAge = 2023 - userBirthYear;
} else {
    userAge = "";
}

const userCity = prompt("What is your residence city?");

if (!userCity) {
    alert("It's a pity that you didn't want to enter your residence city.");
}

const userFavSport = prompt("What is your favorite sport?");

if (!userFavSport) {
    alert("It's a pity that you didn't want to enter your favorite sport.");
}

switch (userCity) {
    case "Kyiv":
        userCountry = "You live in the capital of Ukraine";
        break;
    case "Washington":
        userCountry = "You live in the capital of USA";
        break;
    case "London":
        userCountry = "You live in the capital of England";
        break;
    case "":
        userCountry = "";
        break;
    case null:
        userCountry = "";
        break;
    default:
        userCountry = `You live in the ${userCity}`;
}

switch (userFavSport) {
    case "Tennis":
        userFavSportsman = "Cool! Do you want to become like Carlos Alcaraz?"
        break;
    case "Biathlon":
        userFavSportsman = "Cool! Do you want to become like Martin Fourcade?"
        break;
    case "Athletics":
        userFavSportsman = "Cool! Do you want to become like Usain Bolt?"
        break;
    default:
        userFavSportsman = "";
}

alert(
    `${userAge}\n` +
    `${userCountry}\n` +
    `${userFavSportsman}`
)