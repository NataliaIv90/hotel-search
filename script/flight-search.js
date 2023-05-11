function displayCards() {
  const tours = [
    {
      "name": "Paris", "tour_name": "Romantic Parisian Getaway", "price": 900, "img": "Paris"
    },
    {
      "name": "New York City", "tour_name": "Big Apple Adventure", "price": 1100, "img": "New-York-City"
    },
    {
      "name": "Tokyo", "tour_name": "Exploring the Land of the Rising Sun", "price": 1000, "img": "Tokyo"
    },
    {
      "name": "London", "tour_name": "Discovering Historic London", "price": 800, "img": "London"
    },
    {
      "name": "Dubai", "tour_name": "Luxurious Arabian Nights", "price": 1200, "img": "Dubai"
    },
    {
      "name": "Rome", "tour_name": "Ancient Rome Discovery", "price": 700, "img": "Rome"
    },
    {
      "name": "Barcelona", "tour_name": "Gaudi and the Catalonian Culture", "price": 600, "img": "Barcelona"
    },
    {
      "name": "Sydney", "tour_name": "Spectacular Sydney Harbour", "price": 900, "img": "Sydney"
    },
    {
      "name": "Lisbon", "tour_name": "Lisbon's Coastal Wonders", "price": 800, "img": "Lisbon"
    },
    {
      "name": "Hong Kong", "tour_name": "City of Skyscrapers", "price": 1000, "img": "Hong-Kong"
    },
    {
      "name": "Amsterdam", "tour_name": "Canals and Culture", "price": 500, "img": "Amsterdam"
    },
    {
      "name": "Venice", "tour_name": "Romantic Venetian Getaway", "price": 700, "img": "Venice"
    },
    {
      "name": "Los Angeles", "tour_name": "Hollywood Hills and Beaches", "price": 900, "img": "Los-Angeles"
    },
    {
      "name": "Bangkok", "tour_name": "Bustling Bangkok and Ancient Temples", "price": 500, "img": "Bangkok"
    },
    {
      "name": "Cape Town", "tour_name": "Exploring the Cape and Winelands", "price": 800, "img": "Cape-Town"
    },
    {
      "name": "Istanbul", "tour_name": "Crossroads of East and West", "price": 600, "img": "Istanbul"
    },
    {
      "name": "Kyiv", "tour_name": "Discovering Kyiv's Rich History and Culture", "price": 700, "img": "Kyiv"
    },
    {
      "name": "Singapore", "tour_name": "Gardens by the Bay and City Sights", "price": 800, "img": "Singapore"
    },
    {
      "name": "Prague", "tour_name": "Bohemian Rhapsody", "price": 500, "img": "Prague", "img": "Prague"
    },
    {
      "name": "Seoul", "tour_name": "Korean Delights and K-Pop", "price": 1000, "img": "Seoul"
    }
  ],
    cardsDiv = document.querySelector(".hotTour__cards");

  for (let i = 0; i < 4; i++) {
    insertCard(i);
  }


  function insertCard(num) {
    let card = `
   <div class="hotTour__card" style="background-image:url('../../img/flight-search/main/destinations/${tours[num].img}.jpg')">
    <div class="hotTour__cardContent">
      <div class="hotTour__cardTitleContainer">
        <h4 class="hotTour__cardTitle">${tours[num].name}</h4>
        <p class="hotTour__cardSubtitle">${tours[num].tour_name}</p>
      </div>
      <div>$<span class="hotTour__cardPrice">${tours[num].price}</span></div>
    </div>
    <div class="hotTour__cardBtnContainer"><button class="hotTour__cardBtn">Book flight</button></div>
  </div>`
    cardsDiv.insertAdjacentHTML("beforeend", card);
  }
}

displayCards();