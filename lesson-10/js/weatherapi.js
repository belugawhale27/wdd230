const api = 'e95c965fb3bcc80c423394d563b131fb';
const sandiego = 5391811;
const tijuana = 3981609;
const losangeles = 5368361;
const newportbeach = 5376890;
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e95c965fb3bcc80c423394d563b131fb';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

          //  const currentTemp = document.querySelector('#cc-temp');
          //  const weathericon = document.querySelector('#cc-img');

          //  currentTemp.textContent = jsObject.main.temp.toFixed(0);
         //   let imgsrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
         //   let capimgalt = '';
         //   for (let i = 0; i < imgalt.length; i++) {
         //       if (chartAt(i) === 0) {
         //           capimgalt += imgalt.charAt(i).toUpperCase();
         //       } else {

         //       }
         //   }
         //   imgalt = imgalt.charAt(0).toUpperCase() + imgalt.slice(1);

         //   currentTemp.textContent = jsObject.main.temp.toFixed(0);
         //   weathericon.setAttribute('src', imgsrc);
        //    weathericon.setAttribute('alt', imgalt);
          });