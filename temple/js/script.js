//This is for the current date and year

const d = new Date();
const year = d.getFullYear();

document.querySelector('#currentyear').textContent += `${year} Temple Inn and Suites | Ashley Dahlberg | WDD230 Project`;
document.querySelector('.lastmod').innerHTML += `Last Updated: ${document.lastModified}`;

// the current date in long form
const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// using a date object this is how the current date is derived
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//This is for the banner

const day = d.getDay();
    
if (day == 1 || day == 2) {
    document.querySelector("#banner").style.display= "block";
} else {
    document.querySelector("#banner").style.display = "none";
}


//This is for the menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

//This is for the visits

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();

