const d = new Date();
const year = d.getFullYear();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.querySelector('#date').innerHTML = (today.toLocaleDateString("en-UK", options));


document.querySelector('#currentyear').textContent += `${year} Ashley H. Dahlberg .:|:. San Diego, California`;
document.querySelector('#lastmod').innerHTML += `Last Updated: ${document.lastModified}`;
