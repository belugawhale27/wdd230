const d = new Date();
const year = d.getFullYear();

document.querySelector('#date').textContent += `${year} | Ashley H. Dahlberg | Last Updated: ${document.lastModified}`;