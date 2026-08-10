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

  // 🟥 Create - Doc Category Container - Main
  async function createDocCategoryMain( style, data ) {

    console.log("🔩⛑️ - createDocCategoryMain()")


    return new Promise(resolve => {
      resolve(  );
    })

  }

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  // ⚠️ Promise - Async brauchst du wahrscheinlich hier nicht

  // 🟩 Create - Docs Category Container
  async function createDocCategoryContainer( style, data ) {

    // console.log("createDocsCategoryContainer()")
    // console.log("style:" +  style)
    // console.log("data :" + data)

    console.log("-------------------------------------")
    console.log("❇️ Create - Doc Category Container")
    console.log("-------------------------------------")

    /* ----------------------------------------------------- */
    /* 🟩 Step 1/4
    /* Create Docs Category Container
    /* ----------------------------------------------------- */

      var docCategoryContainerCssClass = style.docCategoryContainer.cssClass;
      var docCategoryContainer = await createDivClass( docCategoryContainerCssClass )
      console.log("> docCategoryContainer: " + docCategoryContainer)

    /* ----------------------------------------------------- */
    /* 🟩 Step 2/4
    /* Create Doc Category - Header
    /* ----------------------------------------------------- */

      var header = await createDocCategoryHeader( style, data )
      // Add "header to "docCategoryContainer""
      docCategoryContainer.appendChild(header);

    /* ----------------------------------------------------- */
    /* ➡️🟥 Step 3/4
    /* Create Doc Category - Main
    /* ----------------------------------------------------- */

      var main = await createDocCategoryMain( style, data );
      // Add "main" to "docCategoryContainer"
      // docCategoryContainer.appendChild(main);


    /* ----------------------------------------------------- */
    /* 🟥 Step 4/4
    /* Create & Add Doc Cards to Main
    /* ----------------------------------------------------- */

      var newDocCards = [];

      // Add "newDocCards[x] to "main""

      // Add "main to "docCategoryContainer""


    return new Promise(resolve => {
      resolve( docCategoryContainer );
    })

  }
