// console.log("🟨 create-docs-category-container")


/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 Create - Doc Category Container - Header
  async function createDocCategoryHeader( style, data ) {

    console.log("🔩⛑️ - createDocCategoryHeader()")

    // Get Style Data - Header
    var styleHeader = style.docCategoryContainer.header;

    /* ------------------------------------------------------ */
    /* 🟩 Step 1/1
    /* Create - Header
    /* ------------------------------------------------------ */

      var headerCssClass = styleHeader.cssClass;
      var header = await createDomElementCssClass( "header", headerCssClass)

      /* ------------------------------------------------------ */
      /* 🟩 Step 1.1
      /* > Create - Info Box
      /* ------------------------------------------------------ */

        var infoBoxCssClass = styleHeader.infoBoxCssClass;
        var divInfoBox =  await createDivClass( infoBoxCssClass);

        /* ------------------------------------------ */
        /* 🟩 Step 1.1.1
        /* > Create - Info Box Title
        /* ------------------------------------------ */

          var infoBoxTitle = data.title;
          var divInfoBoxTitle = await createDivText( infoBoxTitle )

          // Add "divInfoBoxTitle" to "divInfoBox"
          divInfoBox.appendChild(divInfoBoxTitle);

        /* --------------------------------------------------- */
        // 🟩 Step 1.1.2
        // > Optional Create - Sub Title
        /* > Only if it is not empty
        /* --------------------------------------------------- */

          if( data.subTitle !== "" ) {

            /* ------------------------------------------------------------------- */
            /* 🟩 Step 1.1.2.1
            /* > Create - Sub Info Box
            /* ------------------------------------------------------------------- */

              var divSubInfoBox = await createDiv();

            /* ------------------------------------------------------------------- */
            /* 🟩 Step 1.1.2.2
            /* > Create - Text Seperator
            /* ------------------------------------------------------------------- */

               var divSeperator = await createDivText("-");
              // Add "divSeperator" to "divSubInfoBox"
              divSubInfoBox.appendChild(divSeperator);

            /* ------------------------------------------------------------------- */
            /* 🟩 Step 1.1.2.3
            /* > Create - Sub Title
            /* ------------------------------------------------------------------- */

              var subInfoBoxTitle = data.subTitle;
              var divSubInfoBoxTitle = await createDivText( subInfoBoxTitle );
              // Add "divSubInfoBoxTitle" to "divSubInfoBox"
              divSubInfoBox.appendChild(divSubInfoBoxTitle );

            /* ------------------------------------------------------------------- */
            /* 🟩 Step 1.1.2.4
            /* > Final Add // Add "divSubInfoBox" to "divInfoBox"
            /* ------------------------------------------------------------------- */

              divInfoBox.appendChild(divSubInfoBox);

          }

        /* --------------------------------------------------- */
        // 🟩 Step 1.1.3
        // > Final Add "divInfoBox" to "header"
        /* --------------------------------------------------- */

          header.appendChild(divInfoBox);


    return new Promise(resolve => {
      resolve( header );
    })

  }

  // 🟩 Create - Doc Category Container - Main
  async function createDocCategoryMain( style, dataDocCards ) {

    console.log("🔩⛑️ - createDocCategoryMain()")

    // Get Data
    var styleMain = style.docCategoryContainer.main;

    /* ----------------------------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Create - Main
    /* ----------------------------------------------------------------------------- */

      var mainCssClass = styleMain.cssClass;
      var main = await createDivClass(mainCssClass);

    /* ----------------------------------------------------------------------------- */
    /* 🟩 Step 2/2
    /* > Create - All Doc Cards
    /* ----------------------------------------------------------------------------- */

      var docCard = "";

      // Run throw all data doc cards
      for( var [docCategory, docData] of Object.entries(dataDocCards)) {

        console.log("-------")
        console.log("➕ Create Doc Card: " + docCategory)
        console.log("> Data Doc Card: " + docData )

        docCard = await createDocCard( style, docData );

        // Add "docCards" to "main"
        main.appendChild(docCard);

      }


    return new Promise(resolve => {
      resolve( main  );
    })

  }

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  // 🟩 Create - Docs Category Container
  async function createDocCategoryContainer( style, data ) {

    // console.log("createDocsCategoryContainer()")
    // console.log("style:" +  style)
    // console.log("data :" + data)

    console.log("❇️ Create - Doc Category Container")

    /* ----------------------------------------------------- */
    /* 🟩 Step 1/3
    /* Create Docs Category Container
    /* ----------------------------------------------------- */

      var docCategoryContainerCssClass = style.docCategoryContainer.cssClass;
      var docCategoryContainer = await createDivClass( docCategoryContainerCssClass )
      console.log("> docCategoryContainer: " + docCategoryContainer)

    /* ----------------------------------------------------- */
    /* 🟩 Step 2/3
    /* Create Doc Category - Header
    /* ----------------------------------------------------- */

      var header = await createDocCategoryHeader( style, data )
      // Add "header to "docCategoryContainer""
      docCategoryContainer.appendChild(header);

    /* ----------------------------------------------------- */
    /* 🟩 Step 3/3
    /* Create Doc Category - Main
    /* ----------------------------------------------------- */

      var dataDocCards = data.docCards;
      var main = await createDocCategoryMain( style, dataDocCards );
      // Add "main" to "docCategoryContainer"
      docCategoryContainer.appendChild(main);


    return new Promise(resolve => {
      resolve( docCategoryContainer );
    })

  }
