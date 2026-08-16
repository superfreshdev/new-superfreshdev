// console.log("🟨 create-doc-card.js")


/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 Get Doc Card - CSS Class Status
  async function getDocCardStatusCssClass( style, statusDocCard ) {

    // console.log("🔩⛑️ - getDocCardStatusCssClass()")
    // console.log("💫 statusDocCard: " + statusDocCard)

    var styleDocCardStatus = style.docCategoryContainer.main.docCard.status;

    var docCardCssClass = "";

    switch(statusDocCard) {

      case "finished":
        docCardCssClass = styleDocCardStatus.finishedCssClass;
        break;

      case "in-progress":
        docCardCssClass = styleDocCardStatus.inProgressCssClass;
        break;

      case "later":
        docCardCssClass = styleDocCardStatus.laterCssClass;
        break;

      case "future":
        docCardCssClass = styleDocCardStatus.futureCssClass;
        break;

      default:
        break;

    }

    return new Promise(resolve => {
      resolve( docCardCssClass );
    })

  }

  // 🟩 Get Status Info - Css Class
  function getDocCardStatusInfoCssClass( style, statusDocCard ) {

    // console.log("🔩⛑️ - getDocCardStatusInfoCssClass()")
    // console.log("💫 statusDocCard: " + statusDocCard)

    var styleStatusInfo = style.docCategoryContainer.main.docCard.statusInfo;
    var statusInfoCssClass = "";

     switch( statusDocCard ) {

      case "in-progress":
        statusInfoCssClass = styleStatusInfo.inProgressCssClass;
        break;

      case "later":
        statusInfoCssClass = styleStatusInfo.laterCssClass;
        break;

      case "future":
        statusInfoCssClass = styleStatusInfo.futureCssClass;
        break;

      default:
        break;

    }

    return statusInfoCssClass;

  }

  // 🟩 Get Status Box - Icon Filename
  function getStatusBoxIconFilename( style, statusDocCard ) {

    // console.log("🔩⛑️ -  getStatusBoxIconFilename()")
    // console.log("💫 statusDocCard: " + statusDocCard)

    var iconFilename = "";

    switch( statusDocCard ) {

       case "in-progress":
        iconFilename = style.iconFilenameInProgress;
        break;

      case "later":
        iconFilename = style.iconFilenameLater;
        break;

      case "future":
        iconFilename = style.iconFilenameFuture;
        break;

      default:
        break;

    }

    return iconFilename;

  }

  // 🟩 Get Status Box - Title
  function getStatusBoxTitle( style, statusDocCard ) {

    // console.log("🔩⛑️ - getStatusBoxTitle()")
    // console.log("💫 statusDocCard: " + statusDocCard)

    var statusText = "";

    switch( statusDocCard ) {

       case "in-progress":
        statusText = style.inProgressText;
        break;

      case "later":
        statusText = style.laterText;
        break;

      case "future":
        statusText = style.futureText;
        break;

      default:
        break;

    }

    return statusText;

  }

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  // 🟩 Create - Doc Card -
  async function createDocCard( style, data ) {

    // console.log("🔩 - createDocCard()")

    // Get Datas
    var imgDefaultPathDocCards = style.paths.pathImgDocCard;
    var iconWhitePath = style.paths.pathIconWhite;
    var iconBlackPath = style.paths.pathIconBlack;


    /* ------------------------------------------------------------------ */
    /* 🟩 Step 0
    /* > Get Status CSS Class - Doc Card
    /* ------------------------------------------------------------------ */

      var statusDocCard = data.status;

      var docCardCssClass = "";
      docCardCssClass = await getDocCardStatusCssClass( style, statusDocCard );
      console.log("🎴:docCard_CssClass: " +  docCardCssClass)

    /* ------------------------------------------------------------------ */
    /* 🟩 Step 1/1
    /* > Create - Doc Card with Status Css Class
    /* ------------------------------------------------------------------ */

      var styleDocCard = style.docCategoryContainer.main.docCard;
      var docCard = await createDivClass( docCardCssClass )

      /* ---------------------------------------------------------- */
      /* 🟩 Step 1.1
      /* > Create Doc Card - Main
      /* ---------------------------------------------------------- */

        console.log("🎴:docCard_main" )
        var main = await createDomElement( "main" )

        /* ----------------------------------------------------- */
        /* 🟩 Step 1.1.1
        /* Create - Img
        /* ----------------------------------------------------- */

          console.log("🎴:docCard_main -> img" )

          var imgDocCardPath = data.imgPath;
          var imgDoc = "";

          var imgDocCardFullPath = imgDefaultPathDocCards + imgDocCardPath;
          console.log("> imgDocCardFullPath: " + imgDocCardFullPath )

          imgDoc = await createImg( imgDocCardFullPath )

          // add "imgDoc" to "main"
          main.appendChild(imgDoc)

        /* ----------------------------------------------------- */
        /* 🟩 Step 1.1.2
        /* Optional Create - Status Info
        /* ----------------------------------------------------- */

          if( docCardCssClass != "doc-card" ) {

            console.log("❇️ Create - Status Info (DocCard)")
            // console.log("StatusInfo: " + statusDocCard )

            /* ---------------------------------------------------------- */
            /* 🟩 Step 1/?:
            /* > Get Css Class - Status Info
            /* ---------------------------------------------------------- */

              var statusInfoCssClass = getDocCardStatusInfoCssClass( style, statusDocCard );
              console.log("💫statusInfoCssClass: " + statusInfoCssClass )

            /* ---------------------------------------------------------- */
            /* 🟩 Step 2/:
            /* > Create - Div | Status Info
            /* ---------------------------------------------------------- */

              var divStatusInfo = await createDivClass(statusInfoCssClass);

            /* ---------------------------------------------------------- */
            /* 🟩 Step 3/:
            /* > Create - Div | Status Box
            /* ---------------------------------------------------------- */

              var styleStatusBox = styleDocCard.statusInfo.statusBox;

              // Create - Div Status Box
              var statusBoxCssClass = styleStatusBox.cssClass;
              var divStatusBox = await createDivClass(statusBoxCssClass)

                /* -------------------------------------------- */
                // 🟩 Create - Img from Status Info
                /* -------------------------------------------- */

                  // Get Status Icon Full Path
                  var iconStatusFile = getStatusBoxIconFilename( styleStatusBox, statusDocCard )
                  var iconStatusFullPath = iconBlackPath + iconStatusFile;
                  console.log("💫iconStatus-fullPath: " + iconStatusFullPath )

                  // Create Img
                  var imgIconStatusBox = await createImg( iconStatusFullPath );

                  // add "imgIconStatusBox" to "divStatusBoxx"
                  divStatusBox.appendChild(imgIconStatusBox);

                /* -------------------------------------------- */
                // 🟩 Create - Text from Status Info
                /* -------------------------------------------- */

                  // Get Status Title
                  var statusBoxTitle = getStatusBoxTitle( styleStatusBox, statusDocCard )
                  console.log("💫statusBoxTitle: " + statusBoxTitle )

                  // divStatusTitle ⚠️ besser | statusTitle
                  var divStatusBoxTitle = await createDivText( statusBoxTitle )

                  // add "divStatusBoxTitle to "divStatusBox"
                  divStatusBox.appendChild(divStatusBoxTitle);

              // Add "divStatusBox" to "divStatusInfo"
              divStatusInfo.appendChild(divStatusBox);

              // Add "divStatusInfo" to "main"
              main.appendChild(divStatusInfo);



          } else {

            console.log("❌ Dont Create - Status Info (DocCard)")

          }

        // Add "main" to "docCard"
        docCard.appendChild(main)

      /* ---------------------------------------------------------- */
      /* ➡️🟥 Step 1.2
      /* > Create Doc Card - Footer
      /* ---------------------------------------------------------- */

        /* ------------------------------------------------ */
        // 🟩 Step 1.2.1
        // > Create - Footer
        /* ------------------------------------------------ */

          var footer = await createDomElement( "footer" );

          // Get Style Data footerLinks
          var styleFooter = style.docCategoryContainer.main.docCard.footerLinks;
          // console.log("styleFooter.iconOdt = " + styleFooter.iconOdt.filename)

        /* ------------------------------------------------ */
        // 🟩 Step 1.2.1
        // > Create - Link - odt
        /* ------------------------------------------------ */

          var linkOdt = "";
          var linkOdtHref = data.odtHref;

          var iconOdtFilename = styleFooter.iconOdt.filename;
          var iconOdtCssClass = styleFooter.iconOdt.cssClass;
          var textOdt = styleFooter.iconOdt.text;
          // combine icon full path
          var iconOdtFullPath = iconWhitePath + iconOdtFilename;

          linkOdt = await createLinkImgDivText( linkOdtHref, iconOdtFullPath, iconOdtCssClass, textOdt);

          // add "linkOdt" to "footer"
          footer.appendChild(linkOdt)

        /* ------------------------------------------------ */
        // ➡️🟥 Step 1.2.1
        // > Create - Link - External Link
        /* ------------------------------------------------ */

          var linkPdf = "";

          var linkPdfHref = data.pdfHref;

          var iconPdfFilename = styleFooter.iconExternalLink.filename;
          var iconPdfCssClass = styleFooter.iconExternalLink.cssClass;
          var textPdf = styleFooter.iconExternalLink.text;
          // combine icon full path
          var iconPdfFullPath = iconWhitePath + iconPdfFilename;

          linkPdf = await createLinkImgDivText( linkPdfHref, iconPdfFullPath, iconPdfCssClass, textPdf );


          // add "linkPdf" to "footer"
          footer.appendChild(linkPdf)



        // Add "footer" to "docCard"
        docCard.appendChild(footer)


    return new Promise(resolve => {
      resolve( docCard );
    })

  }
