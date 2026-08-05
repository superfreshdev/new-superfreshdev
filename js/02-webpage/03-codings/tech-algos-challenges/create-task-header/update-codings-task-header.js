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

  /* -------------------------------------------------- */
  /* Update - Codings Task Header
  /* -------------------------------------------------- */

  async function updateCodingsTaskHeader( jsonTaskContent, headerElement ) {

    console.log("🟨 updateCodingsTaskHeader() ")

    /* ---------------------------------------------------------- */
    /* 🟩 Step 1:
    /* > Try to get json
    /* ---------------------------------------------------------- */

      var jsonTaskContent = await async_getJsonFile( jsonTaskContent )

    /* ---------------------------------------------------------- */
    /* 🟨 Step 2:
    /* > Get Default Paths
    /* ---------------------------------------------------------- */

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

      var headerImgFilename = jsonTaskContent.taskHeader.infos.imgFilename;
      var startPathHeaderImg = "media/imgs/content/02-codings/codings-header/"

      var fullPathHeaderImg = startPathHeaderImg + headerImgFilename;


      var styleHeader =  "data/json/codings/tech-algos-challenges/tech/codings-task-content-ai.json";

      // Var - Data
      var headerTitle = jsonTaskContent.taskHeader.infos.title;
      var headerTimeLimit = jsonTaskContent.taskHeader.infos.timeLimit;
      var fullPathImgHeader = fullPathHeaderImg;

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
    /* ➡️🟥 Step 4:
    /* > Create New Radios to Element
    /* ---------------------------------------------------------- */

      // Unshown Radios - define local css handlings
      // 🟥🟥 anderes Konzept - nicht array sondern key-value
      var dataRadios = jsonTaskContent.taskHeader.nav.radios;
      await asyncPrependNewRadiosFromDataTo( dataRadios, rowContainerCodingsContent );


    /* ---------------------------------------------------------- */
    /* 🟩 Step 5:
    /* > Rebuild New Labels to Nav
    /* ---------------------------------------------------------- */

      await asyncRebuildCodingsTaskHeaderNavLabels( jsonTaskContent, codingsTaskHeaderNav )


    return new Promise(resolve => {
      resolve( );
    })

  }
