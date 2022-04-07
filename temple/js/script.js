//This is for the current date and year

const d = new Date();
const year = d.getFullYear();
const hours = d.getHours();
const mins = d.getMinutes();

function formatAMPM(date) {
    let hours = d.getHours();
    let mins = d.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    mins = mins < 10 ? '0'+mins : mins;
    let strTime = `${hours}:${mins} ${ampm}`;
    return strTime;
  }
  
  //console.log(formatAMPM(new Date));

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

datefieldUK.innerHTML = `<em>${fulldateUK} ${formatAMPM(d)}</em>`;

//This is for the banner

const month = d.getMonth();
    
if (month == 3 || month == 4) {
    document.querySelector("#banner").style.display = "block";
} else {
    document.querySelector("#banner").style.display = "none";
}


//This is for the menu

function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;



