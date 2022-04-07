const requestURL = 'https://belugawhale27.github.io/wdd230/temple/data/templedata.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
      if (!response.ok) {
      } else {
        return response.json();
      }
  })
  .then(function (jsonObject) {
     console.table(jsonObject);      // temporary checking for valid response and data parsing
     const temples = jsonObject['temples'];
     temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let picture = document.createElement('img');
    let p = document.createElement('p');
    let p1 = document.createElement('p1');
  
    // Change the textContent property of the h2 element to contain the temple's name
    h2.innerHTML = `${temple.name}`;
    p.innerHTML = `${temple.streetlocation}`  
    p1.innerHTML = `${temple.citylocation}, ${temple.statelocation}, ${temple.countrylocation}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    picture.setAttribute('src', temple.image);
    picture.setAttribute('alt', `Picture of ${temple.name}`);
    picture.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(picture);
    card.appendChild(p);
    card.appendChild(p1);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }