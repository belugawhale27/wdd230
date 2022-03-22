let businesses = directory.json;
let directory = console.log(JSON.parse(businesses));

document.querySelector('#spotlight1').innerHTML=JSON.parse(businesses)[0].name;
document.querySelector('#spotlight2').innerHTML= directory[1].name;



