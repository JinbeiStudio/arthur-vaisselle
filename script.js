/* -------------------------------------------------------------------------- */
/*                            Menu listing produits                           */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                            Choix des collections                           */
/* -------------------------------------------------------------------------- */
function choixCollection() {
  let imgCollectionPortrait = document.getElementById("imgCollectionPortrait");
  let imgCollectionPaysage1 = document.getElementById("imgCollectionPaysage1");
  let imgCollectionPaysage2 = document.getElementById("imgCollectionPaysage2");
  let descriptionCollection = document.getElementById("descriptionCollection");
  let clickCollection = document.getElementsByClassName("clickCollection");
  for (let i = 0; i < clickCollection.length; i++) {
    clickCollection[i].addEventListener("click", function (event) {
      for (let i = 0; i < clickCollection.length; i++) {
        clickCollection[i].classList.remove("selectedCollection");
      }
      clickCollection[i].classList.add("selectedCollection");
      descriptionCollection.innerHTML =
        "<h3>" +
        clickCollection[i].innerHTML +
        "</h3>" +
        "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit Iusto beatae, accusamus provident iste voluptatem nemo! Cum repellat dolorem quod facilis Minus repudiandae numquam ad id iusto, dolor molestias similique nihil </p>" +
        " <form> <button formaction='inspiration.html'>En savoir plus</button></form>";

      if (clickCollection[i].innerHTML == "Abysse") {
        imgCollectionPortait.setAttribute("src", "images/abysse2.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/abysse3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/abysse1.jpg");
      } else if (clickCollection[i].innerHTML == "Carat") {
        imgCollectionPortait.setAttribute("src", "images/carat1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/carat3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/carat2.jpg");
      } else if (clickCollection[i].innerHTML == "Écume") {
        imgCollectionPortait.setAttribute("src", "images/ecume1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/ecume3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/ecume2.jpg");
      } else if (clickCollection[i].innerHTML == "Nordic") {
        imgCollectionPortait.setAttribute("src", "images/nordic1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/nordic3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/nordic2.jpg");
      } else if (clickCollection[i].innerHTML == "Perle") {
        imgCollectionPortait.setAttribute("src", "images/pearl1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/pearl3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/pearl2.jpg");
      } else if (clickCollection[i].innerHTML == "Saint-Tropez") {
        imgCollectionPortait.setAttribute("src", "images/saint-tropez1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/saint-tropez3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/saint-tropez2.jpg");
      }
    });
  }
}

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
  let linkinspiration = document.getElementById("inspirationHover");
  let linkarthur = document.getElementById("arthurHover");

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
    },
    false
  );

  vaisselleNav.addEventListener(
    "mouseleave",
    function (event) {
      vaisselleNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
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
    },
    false
  );

  couvertsNav.addEventListener(
    "mouseleave",
    function (event) {
      couvertsNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
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
    },
    false
  );

  verresNav.addEventListener(
    "mouseleave",
    function (event) {
      verresNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
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
    },
    false
  );

  servicesNav.addEventListener(
    "mouseleave",
    function (event) {
      servicesNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
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
    },
    false
  );

  collectionsNav.addEventListener(
    "mouseleave",
    function (event) {
      collectionsNav.style.display = "none";
      document.getElementById("main").style.opacity = "100%";
    },
    false
  );

  linkinspiration.addEventListener("mouseover", function (event) {
    vaisselleNav.style.display = "none";
    couvertsNav.style.display = "none";
    verresNav.style.display = "none";
    servicesNav.style.display = "none";
    collectionsNav.style.display = "none";
    document.getElementById("main").style.opacity = "100%";
  });

  linkarthur.addEventListener("mouseover", function (event) {
    vaisselleNav.style.display = "none";
    couvertsNav.style.display = "none";
    verresNav.style.display = "none";
    servicesNav.style.display = "none";
    collectionsNav.style.display = "none";
    document.getElementById("main").style.opacity = "100%";
  });
}

function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
