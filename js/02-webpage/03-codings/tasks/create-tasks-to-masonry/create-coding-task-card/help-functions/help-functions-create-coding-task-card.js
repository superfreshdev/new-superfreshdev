// console.log("🟨 help-functions-create-coding-task-card.js")


/* -------------------------------------------------------------------- */
/* ➡️🟥 | 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 1. Create - Header |
  async function createCodingTaskCardHeader( cardNr, iconPath, styleHeader, taskContent ) {

    console.log("🔩⛑️ - createCodingTaskCardHeader_ui()")
    console.log("🔺 cardNr: " + cardNr )
    // console.log("🔺 iconPath: " + iconPath )
    // console.log("🔺 styleHeader: " + styleHeader )
    // console.log("🔺 taskContent: " + taskContent )

    /* ------------------------------------------ */
    /* 🟩 Step 1/1
    /* > Create - Header
    /* ------------------------------------------ */

      // new header
      var newHeader = "";

      var headerCssClass = styleHeader.cssClass;
      newHeader = await createDomElementCssClass( "header", headerCssClass );
      // console.log("newHeader(class) = " + newHeader.getAttribute("class"))

      /* ----------------------------------------------------------- */
      // 🟩 1.1 Create - Left Block ( nr box & tech category )
      /* ----------------------------------------------------------- */

      var divLeftBlock = await createDiv();

        /* ----------------------------------------------------------------- */
        // 🟩 1.1.1 Create - Nr Box
        /* ----------------------------------------------------------------- */
        var nrBoxCssClass = styleHeader.leftBlock.nrBox.cssClass;
        var nrText = cardNr;
        var divNrBox = await createDivCssClassDivText( nrBoxCssClass, nrText )
        divLeftBlock.appendChild( divNrBox )


        /* ----------------------------------------------------------------- */
        // 🟩 1.1.2 Create - Type Box ( coding, migrate, addon, debugging )
        /* ----------------------------------------------------------------- */
        var typeBoxCssClass = styleHeader.leftBlock.typeBox.cssClass;

        // Get Category Title & Decicde which Object of Icon Type Box
        var categoryTitle = taskContent.category;
        var iconTypeBox = await getIconTypeBoxByTaskCardCategory( categoryTitle, styleHeader )
        // console.log("iconTypeBox(filename): " + iconTypeBox.iconFilename )
        // console.log("iconTypeBox(iconCssClass): " + iconTypeBox.iconCssClass )

        // Get Img
        var iconTypeBoxFilename = iconTypeBox.iconFilename;
        var iconTypeBoxFullPath = iconPath + iconTypeBoxFilename;
        var iconTypeBoxCssClass = iconTypeBox.iconCssClass;

        var divTypeBox = await createDivCssClassWithImgAndDivText( typeBoxCssClass, iconTypeBoxFullPath,
                                                                   iconTypeBoxCssClass, categoryTitle )
        divLeftBlock.appendChild( divTypeBox )


        // 1.1.3 Add "divLeftBlock" to "newHeader"
        newHeader.appendChild( divLeftBlock )


      /* ----------------------------------------------------------- */
      // 🟩 1.2 Create - Right Block ( Status Sticker )
      /* ----------------------------------------------------------- */

        // Get Status to Decicde which Status Style
        var statusTaskCard =  taskContent.status;
        // console.log("statusTaskCard: " + statusTaskCard )

        // Get Status Sticker by Task Card Status
        var statusSticker = await getStatusStickerFromTaskCard( statusTaskCard, styleHeader )

        // Get CSS Class
        var statusStickerCssClass = statusSticker.cssClass;
        // Get Img
        var iconStatusFilename = statusSticker.iconFilename;
        var fullPathIconStatus = iconPath + iconStatusFilename;
        var iconStatusCssClass = statusSticker.iconCssClass;
        // Get Title
        var statusText = statusSticker.title;
        // Create - Right Block ( Status Sticker - in-progress, done, later )
        var divRightBlock = await createDivCssClassWithImgAndDivText( statusStickerCssClass , fullPathIconStatus,
                                                                      iconStatusCssClass, statusText )

        // 1.2.2 Add "divRightBlock" to "newHeader"
        newHeader.appendChild( divRightBlock )


    return new Promise(resolve => {
      resolve( newHeader );
    })

  }

  // 🟩 2. Create - Main
  async function createCodingTaskCardMain( iconPath, styleMain, taskContent ) {

    console.log("🔩⛑️ - createCodingTaskCardMain()")
    // console.log("🔺 iconPath: " + iconPath )
    // console.log("🔺 styleMain: " + styleMain )
    // console.log("🔺 taskContent: " + taskContent )

    // ⚠️ Future To Do - build mini seperate methods

    /* ------------------------------------------ */
    /* 🟩  Step 1/1
    /* > Create - New Main
    /* ------------------------------------------ */

      var newMainCssClass = styleMain.cssClass;
      var newMain = await createDomElementCssClass( "main", newMainCssClass)

      /* ------------------------------------------ */
      /* 🟩 Step 1.1
      /* > Create - Context List Container
      /* ------------------------------------------ */

        var styleContextListContainer = styleMain.contextListContainer;
        var contextListContainerCssClass = styleContextListContainer.cssClass;
        var newContextListContainer = await createDivClass( contextListContainerCssClass )

        /* ---------------------------------------------------------- */
        /* 🟩 Step 1.1.1
        /* > Create - Context List
        /* ---------------------------------------------------------- */

          var contextListCssClass = styleContextListContainer.contextList.cssClass;
          var newContextList = await createDivClass( contextListCssClass )

          // Get Full Path - Icon Bullet
          var iconBulletFilename = styleContextListContainer.contextList.iconSeperatorFilename
          var fullPathIconBullet = iconPath + iconBulletFilename;

          // Get Data Context Types
          var dataContextTypes = taskContent.contextTypes;
          var maxContentTypes = dataContextTypes.length;

          // New Creating Context Types ( divs + title )
          var newContextTypes = [];
          var contextTypeTitle = "";
          // New Creating Icon Bullets
          var newIconBullets = [];

          // Creating Context Type Elements from Data to "newContextList"
          for( let i=0; i < maxContentTypes; i++ ) {

            contextTypeTitle = dataContextTypes[i];
            // console.log(i + "=" + contextTypeTitle )

            // Create Context Type
            newContextTypes.push( await createDivText( contextTypeTitle ) )

            // Add "newContextTypes[x] to "newContextList" "
            newContextList.appendChild( newContextTypes[i] )

            // Create Icon Bullet - only if it is not last one
            if( (i+1) != maxContentTypes ) {

              newIconBullets.push( await createImg( fullPathIconBullet ) )

              // Add "newIconBullet[x] to "newContextList" "
              newContextList.appendChild( newIconBullets[i] )

            }

          }

          // Add "newContextList" to "newContextListContainer"
          newContextListContainer.appendChild(newContextList);


        /* ---------------------------------------------------------- */
        /* 🟩 Step 1.1.2
        /* > Create - Time Box
        /* ---------------------------------------------------------- */

          var timeBoxCssClass = styleContextListContainer.timeBox.cssClass;
          var timeBoxTitle = taskContent.timeLimit;

          var newTimeBox = await createDivCssClassDivText( timeBoxCssClass, timeBoxTitle )

          // Add "newTimeBox" to "newContextListContainer"
          newContextListContainer.appendChild(newTimeBox);



        // Add "newContextListContainer" to "newMain"
        newMain.appendChild( newContextListContainer )


      /* ------------------------------------------ */
      /* 🟩 Step 1.2
      /* > Create - Content
      /* ------------------------------------------ */

        var styleContent = styleMain.content;
        var contentCssClass = styleContent.cssClass;
        var newContent = await createDivClass( contentCssClass )

        /* ---------------------------------------------------------- */
        /* 🟩 Step 1.2.1
        /* > Create - Title
        /* ---------------------------------------------------------- */

          var titleCssClass = styleContent.title.cssClass;
          var indicatorCssClass = styleContent.title.indicatorCssClass;

          // Create New Title
          var newTitle = await createDivClass( titleCssClass )

          // Create New Title Indicator
          var indicatorText = taskContent.taskIndicator;
          var newIndicator = await createSpanCssClassText( indicatorCssClass, indicatorText );

          // Add "newIndicator" to "New Title"
          newTitle.appendChild( newIndicator );

          // Set New Title Text
          var dataTitleLines = taskContent.taskText;
          var maxTitleLines = dataTitleLines.length;

          var titleLine = "";

          // Add All Task Lines to "newTitle"
          for( let i=0; i < maxTitleLines; i++ ) {

            titleLine = dataTitleLines[i];
            // console.log( i + ": titleLine = " + titleLine )
            // Add "dataTitleLines[x] to "newTitle"
            newTitle.appendChild( await createTextNode( titleLine ) )

          }

          // Add "newTitle" to "newContent"
          newContent.appendChild(newTitle)

        /* ---------------------------------------------------------- */
        /* 🟩 Step 1.2.1
        /* > Create - Hashtag List
        /* ---------------------------------------------------------- */

          var hashtagListCssClass = styleContent.hashtagList.cssClass;
          var newHashtagList = await createDivClass( hashtagListCssClass );

          /* ---------------------------------------------------------- */
          /* 🟩 Step 1.2.1.1
          /* > Create - Hashtag List Items
          /* ---------------------------------------------------------- */

            var dataHashtagItems = taskContent.techHashTags;
            var maxHashtagItems = dataHashtagItems.length;
            var hashtagItemText = "";
            var hashtagItems = [];

            for( let i=0; i < maxHashtagItems; i++ ) {

              hashtagItemText = dataHashtagItems[i];
              hashtagItems.push( await createDivDivText( hashtagItemText ) )

              // Add "hashtagItems[x] to "newHashtagList"
              newHashtagList.appendChild( hashtagItems[i] )

            }

            // Add "newHashtagList" to  "newContent"
            newContent.appendChild( newHashtagList )

            // Add "newContent" to "newMain"
            newMain.appendChild( newContent )



    return new Promise(resolve => {
      resolve( newMain );
    })

  }

  // 🟩 3. Create - Footer
  async function createCodingTaskCardFooter( iconPathBlack, styleFooter, taskContent ) {

    console.log("🔩⛑️ - createCodingTaskCardFooter()")
    // console.log("🔺 iconPathBlack: " + iconPathBlack )
    // console.log("🔺 styleFooter: " + styleFooter )
    // console.log("🔺 taskContent: " + taskContent )

    /* ------------------------------------------------------ */
    /* 🟩 Step 1/1
    /* > Create - Footer
    /* ------------------------------------------------------ */

      var footerCssClass = styleFooter.cssClass;
      var newFooter = await createDomElementCssClass("footer", footerCssClass)

      /* ------------------------------------------ */
      /* ➡️🟥 Step 1.1
      /* > Create - Link Elements
      /* ------------------------------------------ */

        // Get Data Config Footer Links
        var configFooterLinks = styleFooter.links;
        // Get Link Hrefs
        var footerLinks = taskContent.links;

        /* ----------------------------------------------------------- */
        /* 🟩 Step 1.1.1
        /* > Get Href Types To Use
        /* > only if they are not empty in data
        /* ----------------------------------------------------------- */

          var hrefTypesToUse = [];
          var hrefType = "";
          hrefTypesToUse = await getAvailableHrefTypesFromTaskCard( footerLinks )
          var maxHrefTypesToUse = hrefTypesToUse.length;

          var newLink = "";
          var newLinkStyle = "";
          var linkTitle = "";
          var linkHref = "";

          // Check to Create Any Footer Link/s
          if( maxHrefTypesToUse != 0 || maxHrefTypesToUse != undefined ) {

            console.log("maxHrefTypesToUse is " + maxHrefTypesToUse )

            /* ------------------------------------------------------------------- */
            /* 🟩 Step 1.1.1.1
            /* > Create all Links with Style by using hrefTypeToUse
            /* ------------------------------------------------------------------- */

            for( let i=0; i < maxHrefTypesToUse; i++ ) {

              console.log("Creating: " + (i+1) + " - Link Element")

              hrefType = hrefTypesToUse[i].key;
              console.log("hrefType= " + hrefType )

              // Get Correct Link Style
              newLinkStyle  = await getLinkStyleFromTaskCard( hrefType, configFooterLinks );
              // console.log("🔥newLinkStyle: " + newLinkStyle.iconFilename )

              // Get Img Values
              var iconFullPath = iconPathBlack + newLinkStyle.iconFilename;
              var iconCssClass = newLinkStyle.iconCssClass;

              // Get Link Title
              linkTitle = newLinkStyle.title;
              linkHref = hrefTypesToUse[i].value;

              // Create Link ( img + title + href )
              newLink = await createLinkImgDivText( linkHref, iconFullPath, iconCssClass, linkTitle);

              // Add "newLink" to "newFooter"
              newFooter.prepend( newLink )

            }


          }

    return new Promise(resolve => {
      resolve( newFooter );
    })

  }
