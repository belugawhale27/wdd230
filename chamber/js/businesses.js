let businesses = directory.json;
let directory = console.log(JSON.parse(businesses));

document.querySelector('#spotlight1').innerHTML=JSON.parse(businesses)[0].name;
document.querySelector('#spotlight2').innerHTML= directory[1].name;


const requestURL = 'https://belugawhale27.github.io/chamber/data/directory.json';
const cards = document.querySelector('.businesscards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });

  const business = jsonObject['business'];
  business.forEach(displayBusinesses);

  function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
  
    h2.innerHTML = business.name;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(phone);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }