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

function displayReviewCards() {
  const reviewDiv = document.querySelector(".rewiews__cards"),
    reviewsArr = [{
      "id": 1,
      "username": "Lorant Esherwood",
      "rating": 2,
      "comment": "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
      "commentTitle": "eu mi nulla ac",
      "date": "24.02.2023",
      "company": "Venezia",
      "continent": "EU"
    }, {
      "id": 2,
      "username": "Emylee Mattersley",
      "rating": 4,
      "comment": "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
      "commentTitle": "luctus et ultrices posuere cubilia",
      "date": "01.05.2021",
      "company": "Montgomery",
      "continent": "NA"
    }, {
      "id": 3,
      "username": "Annemarie Eyes",
      "rating": 3,
      "comment": "vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",
      "commentTitle": "odio curabitur convallis duis",
      "date": "22.03.2023",
      "company": "El Dorado",
      "continent": "NA"
    }, {
      "id": 4,
      "username": "Louie Inskipp",
      "rating": 2,
      "comment": "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
      "commentTitle": "libero quis orci nullam molestie",
      "date": "24.02.2021",
      "company": "Port Protection",
      "continent": "NA"
    }, {
      "id": 5,
      "username": "Shermy Szymanowicz",
      "rating": 5,
      "comment": "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
      "commentTitle": "vehicula condimentum curabitur",
      "date": "01.03.2023",
      "company": "Morristown",
      "continent": "NA"
    }, {
      "id": 6,
      "username": "Marigold Luis",
      "rating": 5,
      "comment": "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
      "commentTitle": "orci mauris lacinia",
      "date": "12.01.2022",
      "company": "Valletta",
      "continent": "EU"
    }, {
      "id": 7,
      "username": "Sile Mussolini",
      "rating": 5,
      "comment": "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in",
      "commentTitle": "in eleifend quam a odio",
      "date": "14.01.2022",
      "company": "Barnwell",
      "continent": "OC"
    }, {
      "id": 8,
      "username": "Alfreda Glazyer",
      "rating": 3,
      "comment": "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
      "commentTitle": "suscipit nulla elit ac",
      "date": "23.05.2022",
      "company": "Pantnagar",
      "continent": "AS"
    }, {
      "id": 9,
      "username": "Dell Uwins",
      "rating": 5,
      "comment": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
      "commentTitle": "imperdiet sapien urna pretium nisl",
      "date": "16.12.2021",
      "company": "Gewoia",
      "continent": "OC"
    }, {
      "id": 10,
      "username": "Tracy Sturt",
      "rating": 4,
      "comment": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
      "commentTitle": "eleifend quam a odio",
      "date": "19.10.2020",
      "company": "Tokoname",
      "continent": "AS"
    }, {
      "id": 11,
      "username": "Ryon Zanassi",
      "rating": 2,
      "comment": "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
      "commentTitle": "fusce lacus purus aliquet at",
      "date": "14.09.2021",
      "company": "Hampton",
      "continent": "NA"
    }, {
      "id": 12,
      "username": "Alva Leaver",
      "rating": 4,
      "comment": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra",
      "commentTitle": "vestibulum sit amet",
      "date": "19.06.2022",
      "company": "Nanwalek",
      "continent": "NA"
    }, {
      "id": 13,
      "username": "Jacquenette Wildish",
      "rating": 5,
      "comment": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
      "commentTitle": "maecenas ut massa quis",
      "date": "19.11.2020",
      "company": "New York",
      "continent": "NA"
    }, {
      "id": 14,
      "username": "Josefina Fevier",
      "rating": 5,
      "comment": "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
      "commentTitle": "fusce congue diam id ornare",
      "date": "15.08.2021",
      "company": "Golmud",
      "continent": "AS"
    }, {
      "id": 15,
      "username": "Nora Humphrys",
      "rating": 3,
      "comment": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
      "commentTitle": "dui luctus rutrum nulla",
      "date": "10.07.2022",
      "company": "Pohang",
      "continent": "AS"
    }, {
      "id": 16,
      "username": "Lauren Benning",
      "rating": 5,
      "comment": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra",
      "commentTitle": "nullam sit amet turpis elementum",
      "date": "18.11.2020",
      "company": "Katowize",
      "continent": "EU"
    }, {
      "id": 17,
      "username": "Rosalind Wardell",
      "rating": 5,
      "comment": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
      "commentTitle": "at turpis a",
      "date": "06.03.2023",
      "company": "Motswari Private Game Reserve",
      "continent": "AF"
    }, {
      "id": 18,
      "username": "Anthea Weare",
      "rating": 4,
      "comment": "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc",
      "commentTitle": "ultrices posuere cubilia",
      "date": "08.05.2020",
      "company": "Tindouf",
      "continent": "AF"
    }, {
      "id": 19,
      "username": "D'arcy Membry",
      "rating": 4,
      "comment": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
      "commentTitle": "orci luctus et ultrices",
      "date": "30.03.2021",
      "company": "Sitiawan",
      "continent": "AS"
    }, {
      "id": 20,
      "username": "Cleon Gordge",
      "rating": 2,
      "comment": "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel",
      "commentTitle": "primis in faucibus",
      "date": "01.06.2020",
      "company": "Puerto Asís",
      "continent": "SA"
    }],
    continentsArr = {
      "SA": "South America",
      "NA": "North America",
      "AS": "Asia",
      "AF": "Africa",
      "EU": "Europe",
      "OC": "Oceania"
    };

  let indexErr;
  try {
    for (let i = 1; i <= 3; i++) {
      let index = Math.floor(Math.random() * 20);
      indexErr = index;
      reviewDiv.insertAdjacentHTML("beforeend", `
     <div class="rewiews__card">
        <div class="rewiews__cardTitle">"${reviewsArr[index].commentTitle}"</div>
        <div class="rewiews__cardSubtitle">
           <div class="rewiews__cardSubtitleText rewiews__cardSubtitleText--short">${reviewsArr[index].comment}</div>
           <div class="rewiews__cardSubtitleBtn"><button type="button">View more</button></div>
        </div>
       <div class="rewiews__cardRate" data-rate="${reviewsArr[index].rating}">
          <div class="reviews__star reviews__starDark"></div>
          <div class="reviews__star reviews__starDark"></div>
          <div class="reviews__star reviews__starDark"></div>
          <div class="reviews__star reviews__starDark"></div>
          <div class="reviews__star reviews__starDark"></div>
       </div>
       <div>
       <div class="rewiews__cardClientName">${reviewsArr[index].username}</div>
       <div class="rewiews__cardDestination">Weave Studios - ${reviewsArr[index].company}, ${continentsArr[reviewsArr[index].continent]}</div>
       </div>
       <div class="rewiews__cardReviewSource"><img src="./img/main/reviews/google.svg" alt=""> <div class="rewiews__cardReviewSourceName">Google</div></div>
       <div class="rewiews__cardImgContainer" style="background-image: url('./img/destination-img/${reviewsArr[index].continent}/${Math.ceil(Math.random() * 10)}.jpg" alt="${reviewsArr[index].company}');"></div>
    </div>
    `)
    }
  } catch (err) {
    console.log(indexErr, "Opps, something get qrong");
  }

  document.querySelectorAll(".rewiews__cardRate").forEach(el => {
    const rate = el.getAttribute("data-rate");
    for (let i = 0; i < rate; i++) {
      el.children[i].classList.remove("reviews__starDark");
    }
  });
}

displayReviewCards();