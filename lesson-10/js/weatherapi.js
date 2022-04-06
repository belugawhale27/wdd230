const api = 'e95c965fb3bcc80c423394d563b131fb';
const sandiego = 5391811;
const tijuana = 3981609;
const losangeles = 5368361;
const newportbeach = 5376890;
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb';

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
}