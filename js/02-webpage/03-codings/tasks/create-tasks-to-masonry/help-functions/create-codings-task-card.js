// console.log("🟨 create-codings-task-card.js")


/* -------------------------------------------------------------------- */
/* 🟩 | 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 1. Create - Header
  async function createCodingTaskCardHeader( cardNr, cardStyleConfig, dataHeader ) {

    console.log("🔩⛑️ - createCodingTaskCardHeader()")

    // Test Prints
    // console.log("➡️ cardStyleConfig: " + cardStyleConfig )
    // console.log("➡️ dataHeader: " + dataHeader )
    // console.log("➡️ cardNr: " + cardNr )
    // console.log("------")
    // console.log("💢: " + cardStyleConfig.paths.iconBlack )

    // console.log("💢: " + cardStyleConfig.taskCard.header.headerCssClass )
    // console.log("💢: " + cardStyleConfig.taskCard.header.nrBoxCssClass )
    // console.log("💢: " + cardStyleConfig.taskCard.header.categoryStickerCssClass )
    // console.log("------")
    // console.log("💫c: " + dataHeader.techCategory.iconCssClass )
    // console.log("💫c: " + dataHeader.techCategory.iconFilename )
    // console.log("💫c: " + dataHeader.techCategory.title )
    // console.log("###")
    // console.log("💫s: " + dataHeader.status.stickerCssClass )
    // console.log("💫s: " + dataHeader.status.iconFilename )
    // console.log("💫s: " + dataHeader.status.iconCssClass )
    // console.log("💫s: " + dataHeader.status.title )
    // console.log("------")

    // Default Var
    var pathIconBlack = cardStyleConfig.paths.iconBlack;

    /* ------------------------------------------ */
    /* Step 1/?
    /* > Create - Header
    /* ------------------------------------------ */

      // new header
      var newHeader = "";
      var headerCssClass = cardStyleConfig.taskCard.header.cssClass;
      newHeader = await createDomElementCssClass( "header", headerCssClass );

      /* ----------------------------------------------------------- */
      // 1.1 Create - Left Block ( nr box & tech category )
      /* ----------------------------------------------------------- */

      var divLeftBlock = await createDiv();

        // 1.1.1 Create - Nr Box
        var nrBoxCssClass = cardStyleConfig.taskCard.header.nrBoxCssClass;
        var nrText = cardNr;
        var divNrBox = await createDivCssClassDivText( nrBoxCssClass, nrText )
        divLeftBlock.appendChild( divNrBox )

        // 1.1.2 Create - Category Box ( Technical Context | Business Context )
        // var categoryBoxCssClass = cardStyleConfig.taskCard.header.categoryBoxCssClass;

        // var iconCategoryBoxFilename = dataHeader.categoryBox.iconFilename;
        // var iconCategoryBoxFullPath = pathIconBlack + iconCategoryBoxFilename;
        // var iconCategoryBoxCssClass = dataHeader.categoryBox.iconCssClass;

        // var categoryBoxAttributeTitle = dataHeader.categoryBox.attributeTitle;

        // var divCategoryBox = await createDivCssClassAttributeWithImg( categoryBoxCssClass, categoryBoxAttributeTitle,
        //                                                               iconCategoryBoxFullPath, iconCategoryBoxCssClass )

        // divLeftBlock.appendChild ( divCategoryBox )


        // 1.1.3 Create - Type Box ( coding, migrate, addon, debugging )
        var typeBoxCssClass = cardStyleConfig.taskCard.header.typeBoxCssClass;
        var iconTypeBoxFilename = dataHeader.typeBox.iconFilename;
        var iconTypeBoxFullPath = pathIconBlack + iconTypeBoxFilename;
        var iconTypeBoxCssClass = dataHeader.typeBox.iconCssClass;
        var iconTypeBoxText = dataHeader.typeBox.title;
        var divTypeBox = await createDivCssClassWithImgAndDivText( typeBoxCssClass, iconTypeBoxFullPath,
                                                                    iconTypeBoxCssClass, iconTypeBoxText )
        divLeftBlock.appendChild( divTypeBox )


        // 1.1.3 Add "divLeftBlock" to "newHeader"
        newHeader.appendChild( divLeftBlock )

      /* ----------------------------------------------------------- */
      // 1.2 Create - Right Block ( Status Sticker )
      /* ----------------------------------------------------------- */

        // 1.2.1 Create - Right Block
        var statusStickerCssClass = dataHeader.status.stickerCssClass;

        var iconStatusFilename = dataHeader.status.iconFilename;
        var fullPathIconStatus = pathIconBlack + iconStatusFilename;

        var iconStatusCssClass = dataHeader.status.iconCssClass;
        var statusText = dataHeader.status.title;

        var divRightBlock = await createDivCssClassWithImgAndDivText( statusStickerCssClass , fullPathIconStatus,
                                                                      iconStatusCssClass, statusText )

        // 1.2.2 Add "divRightBlock" to "newHeader"
        newHeader.appendChild( divRightBlock )


    return new Promise(resolve => {
      resolve( newHeader );
    })

  }

  // 🟩 2. Create - Main
  async function createCodingTaskCardMain( cardStyleConfig, dataMain ) {

    console.log("🔩⛑️ - createCodingTaskCardMain()")

    // Default Var
    var pathIconBlack = cardStyleConfig.paths.iconBlack;

    // Default Config Style - Main
    var styleConfigMain = cardStyleConfig.taskCard.main;


    /* ----------------------------------------------- */
    /* 🟨 Step 1/?
    /* > Create - Main
    /* ----------------------------------------------- */

      var mainCssClass = styleConfigMain.cssClass;
      var newMain = await createDomElementCssClass( "main", mainCssClass )

      /* ----------------------------------------------- */
      /* 🟨 Step 2/?
      /* > Create - Main - Context
      /* ----------------------------------------------- */

        /* ----------------------------------------------------- */
        // 🟨 2.1 - Create - Context List Container
        /* ----------------------------------------------------- */

          var contextListContainerCssClass = styleConfigMain.context.listContainerCssClass;
          var divContextListContainer = await createDivClass( contextListContainerCssClass )

          /* ------------------------------------------------------------------------------- */
          // 🟨 2.1.1 - Create - Context List
          /* ------------------------------------------------------------------------------- */

            var contextListCssClass =  styleConfigMain.context.categoryListCssClass;
            var divContextList = await createDivClass( contextListCssClass )

              // 2.1.1.1 - Create - Context Items ( divs & imgs )
              var divContextItems = [];
              var iconContextItems = [];

              // get default img bullet style
              var iconContextFilename = cardStyleConfig.iconFilenames.bulletPoint;
              var iconContextFullPath = pathIconBlack + iconContextFilename;
              // console.log("Main-Context: icon-path: " + iconContextFullPath )

              // get context items
              var dataContextItems = dataMain.context.items;
              var maxContextItems = dataContextItems.length;
              // console.log("maxContextItems= " + maxContextItems )

              // Add Context Items ( text & imgs ) to "divContextList"
              for( let i=0; i < maxContextItems; i++ ) {

                // console.log("Addings: " + (i+1))

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

            var timeBoxCssClass = styleConfigMain.context.timeBoxCssClass;
            var timeBoxText = dataMain.context.timeLimit;
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

          var contentCssClass = styleConfigMain.content.cssClass;
          var divContent = await createDivClass( contentCssClass );


          /* ------------------------------------------------------------------------------- */
          // 🟨 2.2.1 - Create - Content - Title
          /* ------------------------------------------------------------------------------- */

            var titleCssClass = styleConfigMain.content.titleCssClass;
            var titleText = dataMain.content.title;
            var divTitle = await createDivClassText( titleCssClass, titleText );

            // Add "divTitle" tp "divContent"
            divContent.appendChild( divTitle )

          /* ------------------------------------------------------------------------------- */
          // 🟨 2.2.1 - Create - Content - Hashtag List
          /* ------------------------------------------------------------------------------- */

            var hashTagListCssClass = styleConfigMain.content.hashtagListCssClass;
            var divHashTagList = await createDivClass( hashTagListCssClass );

            // Get Data Hashtag Items
            var dataHashTagItems = dataMain.content.hashTags;
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


    return new Promise(resolve => {
      resolve( newMain );
    })

  }

  // 🟩 3. Create - Footer
  async function createCodingTaskCardFooter( cardStyleConfig, dataFooter ) {

    console.log("🔩⛑️ - createCodingTaskCardFooter()")

    // Default Var
    var iconPathBlack = cardStyleConfig.paths.iconBlack;


    /* ----------------------------------------------------- */
    // 🟨 3.1 - Create - Footer
    /* ----------------------------------------------------- */

      // cardStyleConfig.taskCard.footerCssClass;
      var footerCssClass = cardStyleConfig.taskCard.footer.cssClass;
      var newFooter = await createDomElementCssClass( "footer", footerCssClass )


      /* ----------------------------------------------------- */
      // 🟨 3.2 - Create & Add - Links to Footer
      /* ----------------------------------------------------- */

        // Get Link Datas
        var dataFooterLinks = dataFooter.links;
        var maxFooterLinks = dataFooterLinks.length;

        // New Links
        var newFooterLinks = [];

        // Link Datas
        var linkHref = "";
        var iconFullPath = "";
        var iconCssClass = "";
        var linkText = "";


        // Create & Add
        for( let i=0; i < maxFooterLinks; i++ ) {

          // Get Link Datas
          linkHref = dataFooterLinks[i].href;
          iconFullPath = iconPathBlack + dataFooterLinks[i].filenameIcon;
          iconCssClass = dataFooterLinks[i].cssClassIcon;
          linkText = dataFooterLinks[i].text;

          // Create Link
          newFooterLinks.push( await createLinkImgDivText( linkHref, iconFullPath, iconCssClass, linkText ) )

          // Add "newFooterLinks[x] to "newFooter" "
          newFooter.appendChild( newFooterLinks[i] )

        }



    return new Promise(resolve => {
      resolve( newFooter );
    })

  }

  // 🟩 Create - Task Card ( Header, Main, Footer )
  async function createCodingTaskCard( cardNr, cardStyleConfig, taskContent ) {

    console.log("🔩 - createCodingTaskCard()")
    console.log("➡️ cardNr: " + cardNr )
    console.log("➡️ cardStyleConfig: " + cardStyleConfig )
    console.log("➡️ taskContent: " + taskContent )


    /* ---------------------------------------------------------- */
    /* 🟩 Step 1/4
    /* > Create - Task Card
    /* ---------------------------------------------------------- */

      // Get Css Class of New Task Card
      var taskCardCssClass = taskContent.taskCardCssClass;

      // Create - New Task Card
      var newTaskCard = "";
      newTaskCard = await createDivClass( taskCardCssClass );

    /* ---------------------------------------------------------- */
    /* 🟩 Step 2/4
    /* > Create & Add - Header
    /* ---------------------------------------------------------- */

      // Get Expliczit Data Header
      var dataHeader = taskContent.header;

      // Create - New Header
      var newHeader = await createCodingTaskCardHeader( cardNr, cardStyleConfig, dataHeader );
      // Add "newHeader" to "newTaskCard"
      newTaskCard.appendChild( newHeader )

    /* ---------------------------------------------------------- */
    /* 🟩 Step 3/4
    /* > Create - Main
    /* ---------------------------------------------------------- */

      // Get Expliczit Data Main
      var dataMain = taskContent.main;

      // Create - New Main
      var newMain = await createCodingTaskCardMain( cardStyleConfig, dataMain );
      // Add "newMain" to "newTaskCard"
      newTaskCard.appendChild( newMain )


    /* ---------------------------------------------------------- */
    /* 🟩 Step 4/4
    /* > Create - Footer
    /* ---------------------------------------------------------- */

      // Get Expliczit Data Footer
      var dataFooter = taskContent.footer;

      // Create - New Footer
      var newFooter = await createCodingTaskCardFooter( cardStyleConfig, dataFooter )
      // Add "newFooter" to "newTaskCard"
      newTaskCard.appendChild( newFooter )


    return new Promise(resolve => {
      resolve( newTaskCard );
    })

  }
