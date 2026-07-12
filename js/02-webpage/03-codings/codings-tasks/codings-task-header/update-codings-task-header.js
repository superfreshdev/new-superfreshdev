// console.log("🟨 update-codings-task-header.js")

// ⚠️ Reminder: Create First than Add Change Listener

/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  /* --------------------------------------- */
  /* Header
  /* --------------------------------------- */

    // add point - radios
    var rowContainerCodingsContent = document.getElementById("row-container-codings-content");

    // header - title
    var domCodingsHeaderTitle = document.getElementById("codings-task-header-title");
    // header - time block
    var domCodingsHeaderTimeBlock = document.querySelector("#codings-task-header-time-block > div:nth-of-type(1)");
    // header - img
    var domCodingsHeaderImg = document.getElementById("codings-header-img");

  /* --------------------------------------- */
  /* Header Nav
  /* --------------------------------------- */

    // add point - radio labels
    var codingsTaskHeaderNav = document.getElementById("codings-task-header-nav")


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  // Update - Codings Task Header
  async function updateCodingsTaskHeader( jsonTasksContent, headerElement ) {

    console.log("🟨 updateCodingsTaskHeader() ")

    /* ---------------------------------------------------------- */
    /* 🟩 Step 1:
    /* > Try to get json
    /* ---------------------------------------------------------- */

      var jsonTasksContent = await async_getJsonFile( jsonTasksContent )

    /* ---------------------------------------------------------- */
    /* 🟨 Step 2:
    /* > Get Default Paths
    /* ---------------------------------------------------------- */

      var pathIconBlack = jsonTasksContent.paths.iconBlack;
      var pathIconGrey = jsonTasksContent.paths.iconGrey;
      var pathImgHeader = jsonTasksContent.paths.imgCodingTaskHeader;

      // console.log("----------------------------")
      // console.log("📃 Default Paths:  ")
      // console.log("➡️ jsonTaskContent(file): " + jsonTasksContent )
      // console.log("➡️ path - iconBlack: " +  pathIconBlack )
      // console.log("➡️ path - iconGrey: " + pathIconGrey )
      // console.log("➡️ path - imgHeader: " + pathImgHeader )
      // console.log("----------------------------")


    /* ---------------------------------------------------------- */
    /* 🟩 Step 3:
    /* > Update | Header Codings Tasks - Meta
    /* ---------------------------------------------------------- */

      // Var - Data
      var headerTitle = jsonTasksContent.header.title;
      var headerTimeLimit = jsonTasksContent.header.timeLimit;
      var fullPathImgHeader = pathImgHeader + jsonTasksContent.header.imgFilename;

      // console.log("📃 Header Data:  ")
      // console.log("➡️ headerTitle: " + headerTitle )
      // console.log("➡️ headerTimeLimit: " + headerTimeLimit )
      // console.log("➡️ fullPathImgHeader: " +  fullPathImgHeader )
      // console.log("----------------------------")

      // Update - Header Title
      await asyncUpdateTextFromElement( headerTitle, domCodingsHeaderTitle );

      // Update - Header Time Block
      await asyncUpdateTextFromElement( headerTimeLimit, domCodingsHeaderTimeBlock );

      // Update - Header Img
      await asyncUpdateImgSrc( fullPathImgHeader, domCodingsHeaderImg );


    /* ---------------------------------------------------------- */
    /* 🟩 Step 4:
    /* > Create New Codings Task Header Nav - Radios
    /* ---------------------------------------------------------- */

      var dataHeaderNav = jsonTasksContent.header.nav;
      await asyncPrependNewRadiosToCodingsTaskHeaderContent( dataHeaderNav, rowContainerCodingsContent )

    /* ---------------------------------------------------------- */
    /* ➡️🟥 Step 5:
    /* > Replace New Codings Task Header Nav Labels
    /* ---------------------------------------------------------- */

      var dataTaskCategories = jsonTasksContent.taskCategories;
      await asyncReplaceNewLabelsFromCodingsTaskHeaderNav( dataHeaderNav, dataTaskCategories, codingsTaskHeaderNav )




    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  /* [1/2] | Dom Documented Loaded | First Load Check
  /* ---------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  /* [2/2] | Radio Change - Codings Task Header Nav
  /* ---------------------------------------------------------------- */

  var codingsHeaderNavRadios = document.querySelectorAll("input[name='name-radio-codings-header-nav'")
  // console.log("codingsHeaderNavRadios(length) = " + codingsHeaderNavRadios.length )

  // Radio Change Listener
  for( let i=0; i < codingsHeaderNavRadios.length; i++ ) {


    // Add Radios Change Listeners
    codingsHeaderNavRadios[i].addEventListener( "change", async() => {

      window.alert(codingsHeaderNavRadios[i].getAttribute("id"))

    }




  )}
