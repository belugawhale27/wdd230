const api = 'e95c965fb3bcc80c423394d563b131fb';
const sandiego = 5391811;
const tijuana = 3981609;
const losangeles = 5368361;
const newportbeach = 5376890;
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb`;

/* fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);

            const currentTemp = document.querySelector('#current-temp');
            const weathericon = document.querySelector('#weathericon');
            const caption = document.querySelector('figcaption');
            const cityname = document.querySelector('#city-name');
           
            currentTemp.textContent = x.main.temp.toFixed(0);
            let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            let imgalt = x.weather[0].description;
            imgalt = imgalt.split(' ').map(capitalize).join(' ');
            cityname.textContent = x.name;


            currentTemp.textContent = x.main.temp.toFixed(0);
            weathericon.setAttribute('src', imgsrc);
            weathericon.setAttribute('alt', imgalt);
            caption.innerHTML = imgalt;
          });
*/

//San Diego
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5391811&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb`;

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);

            const currentTempHi = document.querySelector('.temp-hi');
            const currentTempLow = document.querySelector('.temp-low');
            const weathericon = document.querySelector('#weathericon');
            const caption = document.querySelector('figcaption');
           
            currentTempHi.textContent = x.main.temp_max.toFixed(0);
            currentTempLow.textContent= x.main.temp_min.toFixed(0);
            let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            let imgalt = x.weather[0].description;
            imgalt = imgalt.split(' ').map(capitalize).join(' ');


            currentTempHi.textContent = x.main.temp_max.toFixed(0);
            currentTempLow.textContent = x.main.temp_min.toFixed(0);
            weathericon.setAttribute('src', imgsrc);
            weathericon.setAttribute('alt', imgalt);
          //  caption.innerHTML = imgalt;
          });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}



//Tijuana
/*const tapiURL = `https://api.openweathermap.org/data/2.5/weather?id=3981609&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb`;

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);

            const currentTemp = document.querySelector('#current-temp');
            const weathericon = document.querySelector('#weathericon');
            const caption = document.querySelector('figcaption');
           
            currentTemp.textContent = x.main.temp.toFixed(0);
            let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            let imgalt = x.weather[0].description;
            imgalt = imgalt.split(' ').map(capitalize).join(' ');


            currentTemp.textContent = x.main.temp.toFixed(0);
            weathericon.setAttribute('src', imgsrc);
            weathericon.setAttribute('alt', imgalt);
            caption.innerHTML = imgalt;
          });


//Newport Beach
const nbapiURL = `https://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb`;

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);

            const currentTemp = document.querySelector('#current-temp');
            const weathericon = document.querySelector('#weathericon');
            const caption = document.querySelector('figcaption');
           
            currentTemp.textContent = x.main.temp.toFixed(0);
            let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            let imgalt = x.weather[0].description;
            imgalt = imgalt.split(' ').map(capitalize).join(' ');


            currentTemp.textContent = x.main.temp.toFixed(0);
            weathericon.setAttribute('src', imgsrc);
            weathericon.setAttribute('alt', imgalt);
            caption.innerHTML = imgalt;
          });


// Los Angeles
const laapiURL = `https://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb`;

fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
        console.log(x);

            const currentTemp = document.querySelector('#current-temp');
            const weathericon = document.querySelector('#weathericon');
            const caption = document.querySelector('figcaption');
           
            currentTemp.textContent = x.main.temp.toFixed(0);
            let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            let imgalt = x.weather[0].description;
            imgalt = imgalt.split(' ').map(capitalize).join(' ');


            currentTemp.textContent = x.main.temp.toFixed(0);
            weathericon.setAttribute('src', imgsrc);
            weathericon.setAttribute('alt', imgalt);
            caption.innerHTML = imgalt;
          });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}*/