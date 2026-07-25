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

  // jsonTaskContent = category x task n of x
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

      // var taskCardCssClass = jsonTaskContent.taskCardCssClass;
      var taskCardCssClass = "codings-task-card-in-progress"
       // console.log("⭐1 taskCardCssClass = " + taskCardCssClass)
      newTaskCard = await createDivClass( taskCardCssClass );


    /* ---------------------------------------------------------- */
    /* ➡️🟨 Step 1/4
    /* > Create & Add - Header
    /* ---------------------------------------------------------- */

      // Get Expliczit Data Header
      var dataTaskCardHeader = dataTaskContent.taskCategories[0].tasks[0].header;

      // ⚠️ Schleifen Durchlauf, wird von außen angegeben - task card nr
      var cardNr = "01🍎";

      var newHeader = await createCodingTaskCardHeader( cardNr, dataConfigStyle, dataTaskCardHeader );
      newTaskCard.appendChild( newHeader )

    /* ---------------------------------------------------------- */
    /* ➡️🟥 Step 2/4
    /* > Create - Main
    /* ---------------------------------------------------------- */

      /* ----------------------------------------------- */
      /* 🟨 Step 1/?
      /* > Create - Main
      /* ----------------------------------------------- */

        var newMainCssClass = "codings-task-card-main";
        var newMain = await createDomElementCssClass( "main", newMainCssClass )

      /* ----------------------------------------------- */
      /* ➡️🟥 Step 2/?
      /* > Create - Main - Context
      /* ----------------------------------------------- */

        /* ----------------------------------------------------- */
        // 🟨 2.1 - Create - Context List Container
        /* ----------------------------------------------------- */

        var contextListContainerCssClass = "codings-task-card-context-list-container";
        var divContextListContainer = await createDivClass( contextListContainerCssClass )

          /* ------------------------------------------------------------------------------- */
          // 🟨 2.1.1 - Create - Context List
          /* ------------------------------------------------------------------------------- */

          var contextListCssClass = "codings-task-card-category-list";
          var divContextList = await createDivClass( contextListCssClass )

            // 2.1.1.1 - Create - Context Items ( divs & imgs )
            var divContextItems = [];
            var iconContextItems = [];

            // get default img bullet style
            var iconPathBlack = dataConfigStyle.paths.iconBlack;
            var iconContextFilename = dataConfigStyle.iconFilenames.iconBullet;
            var iconContextFullPath = iconPathBlack + iconContextFilename;
            console.log("Main-Context: icon-path: " + iconContextFullPath )

            // get context items
            var dataContextItems = dataTaskContent.taskCategories[0].tasks[0].main.context.items;
            var maxContextItems = dataContextItems.length;
            console.log("maxContextItems= " + maxContextItems )

            // Add Context Items ( text & imgs ) to "divContextList"
            for( let i=0; i < maxContextItems; i++ ) {

              console.log("Addings: " + (i+1))

              // Create Div Context Items
              console.log("🍎 d-c-i-" + dataContextItems[i] )
              divContextItems.push( await createDivText( dataContextItems[i]) )

              // Add "divContextItems[x]" to "divContextList"
              divContextList.appendChild( divContextItems[i] )

              // not allow to create last icon bullet
              if( (i+1) != maxContextItems ) {

                // Create Icon Bullet
                iconContextItems.push( await createImg( iconContextFullPath ) )

                // Add "iconContextItems[x] to "divContextList"
                divContextList.appendChild( iconContextItems[i] )

              }

            }

            // Add "divContextList" to "divContextListContainer"
            divContextListContainer.appendChild( divContextList );


          /* ------------------------------------------------------------------------------- */
          // 🟨 2.1.2 - Create - Time Box
          /* ------------------------------------------------------------------------------- */

            var timeBoxCssClass = "codings-task-card-time-box";
            var timeBoxText = "120 Min."
            var divTimeBox = await createDivCssClassDivText( timeBoxCssClass, timeBoxText )

            // Add "divTimeBox" to "divContextListContainer"
            divContextListContainer.appendChild( divTimeBox );


          /* ------------------------------------------------------------------------------- */
          // 🟨 2.1.3 - Add "divContextListContainer" to "newMain"
          /* ------------------------------------------------------------------------------- */

            newMain.appendChild( divContextListContainer )


        /* ----------------------------------------------------- */
        // 🟨 2.2 - Create - Content
        /* ----------------------------------------------------- */

          var contentCssClass = "codings-task-card-content";
          var divContent = await createDivClass( contentCssClass );


          /* ------------------------------------------------------------------------------- */
          // 🟨 2.2.1 - Create - Content - Title
          /* ------------------------------------------------------------------------------- */

            var titleCssClass = "codings-task-card-title";
            var titleText = "ArrayList vs LinkedList vs Hashmap - so here comes the sun and so on 🍎🍎🍎"
            var divTitle = await createDivClassText( titleCssClass, titleText );

            // Add "divTitle" tp "divContent"
            divContent.appendChild( divTitle )

          /* ------------------------------------------------------------------------------- */
          // 🟨 2.2.1 - Create - Content - Hashtag List
          /* ------------------------------------------------------------------------------- */

            var hashTagListCssClass = "codings-task-card-hashtag-list";
            var divHashTagList = await createDivClass( hashTagListCssClass );

            // Get Data Hashtag Items
            var dataHashTagItems = dataTaskContent.taskCategories[0].tasks[0].main.content.hashTags;
            var maxHashTags = dataHashTagItems.length;
            console.log("maxHashTags(length)= " + maxHashTags )

            var hashTagItems = [];

            // Create & Add Hashtag Items to "divHashTagList"
            for( let i=0; i < maxHashTags; i++ ) {

              hashTagItems.push( await createDivDivText( dataHashTagItems[i] ) )

              // Add "hashtagItems[x] to "divHashTagList"
              divHashTagList.appendChild( hashTagItems[i] )

            }


          /* ------------------------------------------------------------------------------- */
          // 🟨 2.2.2 - Adds
          /* ------------------------------------------------------------------------------- */

            // Add "divHashTagList" to "divContent"
            divContent.appendChild( divHashTagList )
            // Add "divContent" to "newMain"
            newMain.appendChild( divContent )


      // Add "newMain" to "newTaskCard"
      newTaskCard.appendChild( newMain )


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
