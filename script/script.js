// API reviews - curl "https://api.mockaroo.com/api/31370670?count=1000&key=27860d00" > "review.json"
// https://my.api.mockaroo.com/users.json?key=27860d00

// destination__cards card generation

/*

*/

// cards info array

function generateDestinCards() {
  const cardsInfo = [
    { city: "Istanbul", country: "Turkey", img: "1.png" },
    { city: "Sydney", country: "Australia", img: "2.png" },
    { city: "Baku", country: "Azerbaijan", img: "3.png" },
    { city: "Malé", country: "Maldives", img: "4.png" },
    { city: "Paris", country: "France", img: "5.png" },
    { city: "New York", country: "US", img: "6.png" },
    { city: "London", country: "UK", img: "7.png" },
    { city: "Tokyo", country: "Japan", img: "8.png" },
    { city: "Dubai", country: "UAE", img: "9.png" }],
    cardsDiv = document.querySelector(".destination__cards");

  cardsInfo.map((el) => {
    cardsDiv.insertAdjacentHTML('beforeend', `
    <div class="destination__card">
            <div class="destination__cardImgContainer">
              <img class="destination__cardImg" src="./img/main/cards/${el.img}" alt="">
            </div>
            <div class="destination__cardContent">
              <div class="destination__cardTitle">
                <h4>${el.city}, ${el.country}</h4>
              </div>
              <div class="destination__cardSubtitle">
                <a class="destination__cardLink" href="">Flights </a> • <a class="destination__cardLink" href="">Hotels</a> • <a class="destination__cardLink" href="">Resorts</a>
              </div>
            </div>
          </div>`)
  });
};

generateDestinCards();