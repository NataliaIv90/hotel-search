function displayCards(num = 4, firstNum = 0) {
  const cardsDiv = document.querySelector(".results__cards");
  for (let i = firstNum; i < num; i++) {
    cardsDiv.insertAdjacentHTML("beforeend", `      
          <div class="results__card">
            <div class="results__cardImgContainer"></div>
            <div class="results__cardContentContainer">
              <div class="results__cardTitleWrapper">
                <div class="results__cardTitleText">
                  <span class="results__cardReviewMark">4.2</span>
                  <span class="results__cardReview">Very Good</span>
                  <span><span class="results__cardRevievNum">54</span> reviews</span>
                </div>
                <div>
                  <div>starting from</div>
                  <div class="results__cardTitleStartingPrise">$<span>104</span></div>
                </div>
              </div>
              <ul class="results__cardFlightDeatilsList">
                <li class="results__cardFlightDeatilsListItem ">
                  <input type="radio" name="" id="">

                  <div class="results__cardFlightDeatilsContent">

                    <div class="results__cardListItemDiv">
                      <div class="results__cardFlightTime"><span>12</span>:<span>00</span> <span>pm</span> -
                        <span>12</span>:<span>00</span>
                        <span>pm</span>
                      </div>
                      <div class="results__cardFlightDeatils--lightFont"> Emirates</div>
                    </div>

                    <div class="results__cardListItemDiv results__cardFlightMode">non stop </div>
                    <div class="results__cardListItemDiv">
                      <div><span>2</span>h <span>28</span>m</div>
                      <div class="results__cardFlightDeatils--lightFont">EWR-BNA</div>
                    </div>

                  </div>
                </li>
                <li class="results__cardFlightDeatilsListItem ">
                  <input type="radio" name="" id="">

                  <div class="results__cardFlightDeatilsContent">

                    <div class="results__cardListItemDiv">
                      <div class="results__cardFlightTime"><span>12</span>:<span>00</span> <span>pm</span> -
                        <span>12</span>:<span>00</span>
                        <span>pm</span>
                      </div>
                      <div class="results__cardFlightDeatils--lightFont"> Emirates</div>
                    </div>

                    <div class="results__cardListItemDiv results__cardFlightMode">non stop </div>
                    <div class="results__cardListItemDiv">
                      <div><span>2</span>h <span>28</span>m</div>
                      <div class="results__cardFlightDeatils--lightFont">EWR-BNA</div>
                    </div>

                  </div>
                </li>
              </ul>
              <div class="results__cardDivider"></div>
              <div class="results__cardBtnWrapper">
                <button class="results__cardLikeBtn" type="button"><img class="results__cardLikeBtnIcon"
                    src="../../../img/icons/like-light.svg" alt="">
                </button>
                <button class="results__cardDetailsBtn" type="button">View Details</button>
              </div>
            </div>
          </div>`);
  }
}

displayCards();