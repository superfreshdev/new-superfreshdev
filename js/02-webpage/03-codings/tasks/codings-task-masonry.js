console.log("codings-task-masonry.js")


/* ------------------------------------------------------------------------------ */
/* 🤓 Variables
/* ------------------------------------------------------------------------------ */

  // Data - Resp Coding Masonry
  // Dom Add Point
  // Important: it must be defined only here to be flexible
  // Defintion Context - Resp Codings Masonry Container ( max 3 cols )
  var ctxMasonryTasksLayout = {

    container: document.getElementById("codings-masonry-container"),
    itemSelector: "#codings-masonry-container > div",
    gap: 32,

    breakpoints: [
      { minWidth: 0, columns: 1 }, // < 768px -> 1 col
      { minWidth: 768, columns: 2 }, // >= 768px -> 2 col
      { minWidth: 1400, columns: 3 }, // >= 1400px -> 3 col

    ]

  }

  const ctxMasonryKitsLayout = {

      container: document.getElementById("kits-masonry-test"),
      itemSelector: "#kits-masonry-test > div",
      gap: 32,

      breakpoints: [
        { minWidth: 0, columns: 1 }, // < 768px -> 1 col
        { minWidth: 768, columns: 2 }, // >= 768px -> 2 col
        { minWidth: 1400, columns: 3 }, // >= 1400px -> 3 col

      ]

  };


   var kitsMasonryContainers = document.querySelectorAll(".kits-category-container > main");

/* ------------------------------------------------------------------------------ */
/* 🏠 DOM Elements
/* ------------------------------------------------------------------------------ */

  // Get Definition of Masonry Styles for Create
  // var codingMasonryContainer = ctxMasonry.container;



/* ------------------------------------------------------------------------------ */
/* 🎉 Load Event
/* ------------------------------------------------------------------------------ */

  window.addEventListener("load", async() => {

    // window.alert("🧱 Create - Codings Masonry Container")
    console.log("🧱 Create - Codings Masonry Container")

    /* --------------------------------------------------------------- */
    /* 🟩 Step 1/4
    /* > Set - Coding Masonry Container ( Add Point )
    /* --------------------------------------------------------------- */


    /* --------------------------------------------------------------- */
    /* 🟥 Step 2/4
    /* > Delete - Old Task Cards
    /* --------------------------------------------------------------- */

      // var oldTaskCardsSelector = "div";
      // await deleteTagElements( oldTaskCardsSelector, codingMasonryContainer);


    /* --------------------------------------------------------------- */
    /* 🟥 Step 3/4
    /* > Delete - Old Task Cards
    /* --------------------------------------------------------------- */


     /* ----------------------------------------------------------------------- */
    /* 🟩 Step 4/4
    /* > Initialize - Resp Masonry by given ctxMasonry - Object
    /* ----------------------------------------------------------------------- */

      // Get Context Coding Masonry
      // > It is Responsive Coding Masonry Max Col = 3
      await initResponsiveMasonry( ctxMasonryTasksLayout );



      // Alle Kits Masonry Container auswählen

      console.log("kitsMasonryContainer(l)= " + kitsMasonryContainers.length )

      // Für jeden Container eine eigene Masonry-Instanz initialisierne
      // for of because of async, in for each it dont work

      for(const containerElement of kitsMasonryContainers) {

         const ctxMasonryKitsLayoutXXX = {

          container: containerElement,
          itemSelector: ".kits-category-container > main > div",
          gap: 32,

          breakpoints: [
            { minWidth: 0, columns: 1 }, // < 768px -> 1 col
            { minWidth: 768, columns: 2 }, // >= 768px -> 2 col
            { minWidth: 1400, columns: 3 }, // >= 1400px -> 3 col

          ]

        };

        // Initliaze Masonry in this context
        await initResponsiveMasonry( ctxMasonryKitsLayoutXXX );

      }
  });
