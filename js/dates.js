const d = new Date();
const year = d.getFullYear();

document.querySelector('#currentyear').textContent += `${year} Ashley H. Dahlberg .:|:. San Diego, California`;
document.querySelector('#lastmod').innerHTML += `Last Updated: ${document.lastModified}`;

const day = d.getDay();
    
if (day == 1 || day == 2) {
    document.querySelector("#banner").style.display= "block";
} else {
    document.querySelector("#banner").style.display = "none";
}
