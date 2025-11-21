let userName = ("Michael Jordan")
let userDateOfBirth = ("February 17, 1963")
let userAge = (60)
let userNationality = ("American")
let userCareer = ("Professional Basketball Player")
let userTeams = (["Chicago Bulls", "Washington Wizards"])
let userHeight = ("6 ft 6 in")
let userWeight = ("216 lb")
let userAccolades = (["6× NBA champion", "5× NBA Most Valuable Player", "14× NBA All-Star"])
let userCurrentState = ("Retired. Currently enjoying life and spending time with family.")

let userProfileSummary = {
    name: userName,
    dateOfBirth: userDateOfBirth,
    age: userAge,
    nationality: userNationality,
    career: userCareer,
    teams: userTeams,
    height: userHeight,
    weight: userWeight,
    accolades: userAccolades,
    currentState: userCurrentState
}

let userName2 = ("LeBron James")
let userDateOfBirth2 = ("December 30, 1984")
let userAge2 = (38)
let userNationality2 = ("American")
let userCareer2 = ("Professional Basketball Player")
let userTeams2 = (["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers"])
let userHeight2 = ("6 ft 9 in")
let userWeight2 = ("250 lb")
let userAccolades2 = (["4× NBA champion", "4× NBA Most Valuable Player", "17× NBA All-Star"])
let userCurrentState2 = ("Active. Currently playing for the Los Angeles Lakers.")

let userProfileSummary2 = {
    name: userName2,
    dateOfBirth: userDateOfBirth2,
    age: userAge2,
    nationality: userNationality2,
    career: userCareer2,
    teams: userTeams2,
    height: userHeight2,
    weight: userWeight2,
    accolades: userAccolades2,
    currentState: userCurrentState2
}

//

let readline = require ('readline-sync')
let userProfile = readline.question("Qual é seu nome? ")

function printMichaelJordanProfile() {
    console.log("-------------------User Profile: Michael Jordan--------------------:")
    console.log("Name: " + userProfileSummary.name)
    console.log("Date of Birth: " + userProfileSummary.dateOfBirth)
    console.log("Age: " + userProfileSummary.age)
    console.log("Nationality: " + userProfileSummary.nationality)
    console.log("Career: " + userProfileSummary.career)
    console.log("Teams: " + userProfileSummary.teams.join(", "))
    console.log("Height: " + userProfileSummary.height)
    console.log("Weight: " + userProfileSummary.weight)
    console.log("Accolades: " + userProfileSummary.accolades.join(", "))
    console.log("Current State: " + userProfileSummary.currentState)
    console.log("-----------------------------------------------------")
}

function printLeBronJamesProfile() {
    console.log("-------------------User Profile: LeBron James--------------------:")
    console.log("Name: " + userProfileSummary2.name)
    console.log("Date of Birth: " + userProfileSummary2.dateOfBirth)
    console.log("Age: " + userProfileSummary2.age)
    console.log("Nationality: " + userProfileSummary2.nationality)
    console.log("Career: " + userProfileSummary2.career)
    console.log("Teams: " + userProfileSummary2.teams.join(", "))
    console.log("Height: " + userProfileSummary2.height)
    console.log("Weight: " + userProfileSummary2.weight)
    console.log("Accolades: " + userProfileSummary2.accolades.join(", "))
    console.log("Current State: " + userProfileSummary2.currentState)
    console.log("-----------------------------------------------------")
}

switch (userProfile) {
    case "Michael Jordan":
        console.log("Olá Michael Jordan!");
        printMichaelJordanProfile();
        break;

    case "LeBron James":
        console.log("Olá LeBron James!");
        printLeBronJamesProfile();
        break;
    default:
        console.log("Desculpe, não reconheço você.");
}

