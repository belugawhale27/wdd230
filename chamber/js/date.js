//current date and year
const d = new Date();
const year = d.getFullYear();

document.querySelector('#currentyear').textContent += `${year} El Cajon Chamber of Commerce | Ashley Dahlberg | WDD230 Project`;
document.querySelector('#lastmod').innerHTML += `Last Updated: ${document.lastModified}`;

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