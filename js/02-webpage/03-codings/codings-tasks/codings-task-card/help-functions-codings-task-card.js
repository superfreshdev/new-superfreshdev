// console.log("🟨 help-functions-codings-task-card.js")



/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟨 1. Create - Header
  async function createCodingTaskCardHeader( cardNr, jsonConfigStyle, jsonTaskCardHeader ) {

    console.log("🔩⛑️ - createCodingTaskCardHeader()")

    // Test Prints
    console.log("➡️ jsonConfigStyle: " + jsonConfigStyle )
    console.log("➡️ jsonTaskCardHeader: " + jsonTaskCardHeader )
    console.log("➡️ cardNr: " + cardNr )
    console.log("------")
    console.log("💢: " + jsonConfigStyle.paths.iconBlack )

    console.log("💢: " + jsonConfigStyle.taskCard.header.headerCssClass )
    console.log("💢: " + jsonConfigStyle.taskCard.header.nrBoxCssClass )
    console.log("💢: " + jsonConfigStyle.taskCard.header.categoryStickerCssClass )
    console.log("------")
    console.log("💫c: " + jsonTaskCardHeader.techCategory.iconCssClass )
    console.log("💫c: " + jsonTaskCardHeader.techCategory.iconFilename )
    console.log("💫c: " + jsonTaskCardHeader.techCategory.title )
    console.log("###")
    console.log("💫s: " + jsonTaskCardHeader.status.stickerCssClass )
    console.log("💫s: " + jsonTaskCardHeader.status.iconFilename )
    console.log("💫s: " + jsonTaskCardHeader.status.iconCssClass )
    console.log("💫s: " + jsonTaskCardHeader.status.title )
    console.log("------")


    // Default Var
    var pathIconBlack = jsonConfigStyle.paths.iconBlack;

    /* ------------------------------------------ */
    /* Step 1/?
    /* > Create - Header
    /* ------------------------------------------ */

      // new header
      var newHeader = "";

      var headerCssClass = jsonConfigStyle.taskCard.header.headerCssClass
      newHeader = await createDomElementCssClass( "header", headerCssClass );

      /* ----------------------------------------------------------- */
      // 1.1 Create - Left Block ( nr box & tech category )
      /* ----------------------------------------------------------- */
      var divLeftBlock = await createDiv();

        // 1.1.1 Create - Nr Box
        var headerNrBoxCssClass = jsonConfigStyle.taskCard.header.nrBoxCssClass;
        // ⚠️ Schleifen Durchlauf mit geben
        var nrText = cardNr;
        var divNrBox = await createDivCssClassDivText( headerNrBoxCssClass, nrText )
        divLeftBlock.appendChild( divNrBox )

        // 1.1.2 Create - Category Sticker
        var headerCategoryCssClass = jsonConfigStyle.taskCard.header.categoryStickerCssClass;

        var iconCategoryFilename = jsonTaskCardHeader.techCategory.iconFilename;
        var iconCategoryFullPath = pathIconBlack + iconCategoryFilename;
        var iconCategoryCssClass = jsonTaskCardHeader.techCategory.iconCssClass;
        var iconCategoryText = jsonTaskCardHeader.techCategory.title;
        var divCategory = await createDivCssClassWithImgAndDivText( headerCategoryCssClass, iconCategoryFullPath,
                                                                    iconCategoryCssClass, iconCategoryText )
        divLeftBlock.appendChild( divCategory )


        // 1.1.3 Add "divLeftBlock" to "newHeader"
        newHeader.appendChild( divLeftBlock )

      /* ----------------------------------------------------------- */
      // 1.2 Create - Right Block ( Status Sticker )
      /* ----------------------------------------------------------- */

        // 1.2.1 Create - Right Block
        var statusStickerCssClass = jsonTaskCardHeader.status.stickerCssClass;

        var iconStatusFilename = jsonTaskCardHeader.status.iconFilename;
        var fullPathIconStatus = pathIconBlack + iconStatusFilename;

        var iconStatusCssClass = jsonTaskCardHeader.status.iconCssClass;
        var statusText = jsonTaskCardHeader.status.title;

        var divRightBlock = await createDivCssClassWithImgAndDivText( statusStickerCssClass , fullPathIconStatus,
                                                                      iconStatusCssClass, statusText )

        // 1.2.2 Add "divRightBlock" to "newHeader"
        newHeader.appendChild( divRightBlock )


    return new Promise(resolve => {
      resolve( newHeader );
    })

  }

  // ➡️🟥 2. Create - Main
  async function createCodingTaskCardMain() {

    console.log("createCodingTaskCardMain()")



    return new Promise(resolve => {
      resolve( );
    })

  }

  // 🟥 3. Create - Footer
  async function createCodingTaskCardFooter() {

    console.log("createCodingTaskCardFooter()")



    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  async function createCodingTaskCard( jsonConfigStyle, jsonTaskContent ) {

    console.log("🔩createCodingTaskCard()")
    console.log("➡️ jsonConfigStyle: " + jsonConfigStyle )
    console.log("➡️ jsonTaskContent: " + jsonTaskContent )

    // Create Data Obj from Json
    var dataConfigStyle = await async_getJsonFile( jsonConfigStyle )
    var dataTaskContent = await async_getJsonFile( jsonTaskContent )

    // addPoint ⚠️ | add Point muss in der Hauptfunktion
    var codingsMasonryContainer = document.getElementById("codings-masonry-container");

    // new task card
    var newTaskCard = "";

    /* ---------------------------------------------------------- */
    /* 🟩 Step 0/4
    /* > Create - Task Card
    /* ---------------------------------------------------------- */

      var taskCardCssClass = "codings-task-card-in-progress";
      newTaskCard = await createDivClass( taskCardCssClass );
      // console.log("⭐1 newTaskCard = " + newTaskCard )

    /* ---------------------------------------------------------- */
    /* ➡️🟥 Step 1/4
    /* > Create & Add - Header
    /* ---------------------------------------------------------- */

      // Get Expliczit Data Header
      var dataTaskCardHeader = dataTaskContent.taskCategories[0].tasks[0].header;

      // ⚠️ Schleifen Durchlauf, wird von außen angegeben - task card nr
      var cardNr = "01🍎";

      var newHeader = await createCodingTaskCardHeader( cardNr, dataConfigStyle, dataTaskCardHeader );
      newTaskCard.appendChild( newHeader )

    /* ---------------------------------------------------------- */
    /* 🟥 Step 2/4
    /* > Create - Main
    /* ---------------------------------------------------------- */


    /* ---------------------------------------------------------- */
    /* 🟥 Step 3/4
    /* > Create - Footer
    /* ---------------------------------------------------------- */


    /* ---------------------------------------------------------- */
    /* 🟩 Step 4/4
    /* > Final Add - Add "newTaskCard" to "addPoint"
    /* ---------------------------------------------------------- */

      await prependElementTo( newTaskCard, codingsMasonryContainer )



    return new Promise(resolve => {
      resolve( );
    })

  }
