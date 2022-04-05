const requestURL = 'https://belugawhale27.github.io/temple/temple/data/latter-day-prophets.json';
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
     const prophets = jsonObject['temples'];
     temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let picture = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${temple.name} <span class="highlight">`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', temple.imageurl);
    picture.setAttribute('alt', `Picture of ${temple.name}`);
    picture.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(picture);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }