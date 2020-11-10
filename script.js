/* -------------------------------------------------------------------------- */
/*                        Faire apparaître le sous menu                       */
/* -------------------------------------------------------------------------- */
function subNav() {
  let linkVaisselle = document.getElementById("vaisselleHover");
  let vaisselleNav = document.getElementById("vaisselleNav");
  let linkcouverts = document.getElementById("couvertsHover");
  let couvertsNav = document.getElementById("couvertsNav");
  let linkverres = document.getElementById("verresHover");
  let verresNav = document.getElementById("verresNav");
  let linkservices = document.getElementById("servicesHover");
  let servicesNav = document.getElementById("servicesNav");
  let linkcollections = document.getElementById("collectionsHover");
  let collectionsNav = document.getElementById("collectionsNav");

  /* -------------------------------------------------------------------------- */
  /*                             Sous-Menu Vaisselle                            */
  /* -------------------------------------------------------------------------- */
  linkVaisselle.addEventListener(
    "mouseover",
    function (event) {
      couvertsNav.style.display = "none";
      verresNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "none";
      vaisselleNav.style.display = "flex";
      document.getElementById("main").style.opacity = "30%";
      setTimeout(function () {}, 500);
    },
    false
  );

  vaisselleNav.addEventListener(
    "mouseleave",
    function (event) {
      vaisselleNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
      setTimeout(function () {}, 500);
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                             Sous-Menu Couverts                             */
  /* -------------------------------------------------------------------------- */
  linkcouverts.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      verresNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "none";
      couvertsNav.style.display = "flex";
      document.getElementById("main").style.opacity = "30%";
      setTimeout(function () {}, 500);
    },
    false
  );

  couvertsNav.addEventListener(
    "mouseleave",
    function (event) {
      couvertsNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
      setTimeout(function () {}, 500);
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                              Sous-menu Verres                              */
  /* -------------------------------------------------------------------------- */
  linkverres.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      couvertsNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "none";
      verresNav.style.display = "flex";
      document.getElementById("main").style.opacity = "30%";
      setTimeout(function () {}, 500);
    },
    false
  );

  verresNav.addEventListener(
    "mouseleave",
    function (event) {
      verresNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
      setTimeout(function () {}, 500);
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                             Sous-Menu Services                             */
  /* -------------------------------------------------------------------------- */
  linkservices.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      couvertsNav.style.display = "none";
      verresNav.style.display = "none";
      collectionsNav.style.display = "none";
      servicesNav.style.display = "flex";
      document.getElementById("main").style.opacity = "30%";
      setTimeout(function () {}, 500);
    },
    false
  );

  servicesNav.addEventListener(
    "mouseleave",
    function (event) {
      servicesNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
      setTimeout(function () {}, 500);
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  linkcollections.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      couvertsNav.style.display = "none";
      verresNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "flex";
      document.getElementById("main").style.opacity = "30%";
      setTimeout(function () {}, 500);
    },
    false
  );

  collectionsNav.addEventListener(
    "mouseleave",
    function (event) {
      collectionsNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
      setTimeout(function () {}, 500);
    },
    false
  );
}

function listingProduits() {
  let linkListing = document.getElementsByClassName("linkListing");
  let selectedListing = document.getElementsByClassName("selectedListing");
  let listingCards = document.getElementsByClassName("listingCards");

  for (let i = 0; i < linkListing.length; i++) {
    linkListing[i].addEventListener(
      "click",
      function (event) {
        for (let i = 0; i < selectedListing.length; i++) {
          selectedListing[i].classList.remove("selectedListing");
        }
        for (let i = 0; i < listingCards.length; i++) {
          listingCards[i].classList.remove("selectedListingCards");
          listingCards[i].classList.add("unselectedListingCards");
        }
        listingCards[i].classList.add("selectedListingCards");
        linkListing[i].classList.add("selectedListing");
      },
      false
    );
  }
}
