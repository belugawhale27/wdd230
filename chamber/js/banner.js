const day = d.getDay();
    
if (day == 1 || day == 2) {
    document.querySelector("#banner").style.display= "block";
} else {
    document.querySelector("#banner").style.display = "none";
}
