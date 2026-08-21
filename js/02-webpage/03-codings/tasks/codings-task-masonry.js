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
      { minWidth: 1200, columns: 3 }, // >= 1200px -> 3 col

    ]

  }

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




  });
