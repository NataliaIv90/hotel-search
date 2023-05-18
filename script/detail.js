function displayGalleryImg() {
  const galleryImgArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    galleryDiv = document.querySelector(".planeInfo__galleryCards");
  galleryImgArr.map(el => {
    galleryDiv.insertAdjacentHTML("beforeend", `
    <div class="planeInfo__galleryCardsImgContainer" style="background-image:url('../../../img/flight-details/plane-info/${el}.jpg')"></div>
    `);
  })
}

displayGalleryImg();

function displayCardInfoIcons() {
  const infoIconsArr = ["plane-dark", "wifi", "watch", "food", "seat"],
    infoIconsDiv = document.querySelector(".flightInfo__cardInfoIconsWrapper");

  infoIconsArr.map(el => {
    infoIconsDiv.insertAdjacentHTML("beforeend", `
    <div class="flightInfo__iconContainer"><img class="flightInfo__icon" src="../../../img/icons/${el}.svg" alt=""></div>
    `)
  })
}

displayCardInfoIcons();