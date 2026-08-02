// console.log("🟨 get-styles-coding-task-card.js")


/* -------------------------------------------------------------------- */
/* 🟩 | 🔩⛑️ Help Functions - Get Styles by Conditions
/* -------------------------------------------------------------------- */

  // 🟩 Get - CSS Class - Task Card
  async function getCssClassFromTaskCard( statusTaskCard, statusStyles ) {

    var statusTaskCardCssClass = "";
    var status = statusTaskCard;

    console.log("statusTaskCard: " + statusTaskCard )

    switch( status ) {

      case "in-progress":
        console.log("use:task card - 🟨 in progress ")
        statusTaskCardCssClass = statusStyles.inProgress.cssClass;
        break;

      case "later":
        console.log("use:task card - 🟪 later ")
        statusTaskCardCssClass = statusStyles.later.cssClass;
        break;

      case "done":
        console.log("use:task card - 🟩 done ")
        statusTaskCardCssClass = statusStyles.done.cssClass;
        break;

      default:
        return new Promise(resolve => {
          resolve( );
        })

    }

    return new Promise(resolve => {
      resolve( statusTaskCardCssClass );
    })

  }

  // 🟩 Get - Icon Type Box Object from Task Card Category
  async function getIconTypeBoxByTaskCardCategory( categoryTaskCard, configStyleHeader ){

    var styleTypeBox = "";
    var category = categoryTaskCard;

    var categoryTypes = configStyleHeader.leftBlock.typeBox.types;

    // console.log("status: " + status )

    switch( category ) {

      case "Coding":
        console.log("use:type-box:coding ")
        styleTypeBox = categoryTypes.coding;
        break;

      case "Addon":
        console.log("use:type-box:addon ")
        styleTypeBox = categoryTypes.addon;
        break;

      case "Debugging":
        console.log("use:type-box:debugging")
        styleTypeBox = categoryTypes.debugging;
        break;

       case "Migrate":
        console.log("use:type-box:migrate ")
        styleTypeBox = categoryTypes.migrate;
        break;

      default:
        return new Promise(resolve => {
          resolve( );
        })

    }

    return new Promise(resolve => {
      resolve( styleTypeBox );
    })

  }

  // 🟩 Get - Status Object from Task Card Status
  async function getStatusStickerFromTaskCard( statusTaskCard, configStyleHeader ) {

    var statusStyle = "";
    var status = statusTaskCard;

    var statusTypes = configStyleHeader.rightBlock;

    // console.log("status: " + status )

    switch( status ) {

      case "in-progress":
        console.log("use:status-sticker:in-progress ")
        statusStyle = statusTypes.inProgress;
        break;

      case "later":
        console.log("use:status-sticker:later ")
        statusStyle = statusTypes.later;
        break;

      case "done":
        console.log("use:status-sticker:done")
        statusStyle = statusTypes.done;
        break;

      default:
        return new Promise(resolve => {
          resolve( );
        })

    }

    return new Promise(resolve => {
      resolve( statusStyle );
    })

  }

  // 🟩 Get - Not Available Links from Task Card
  async function getAvailableHrefTypesFromTaskCard( footerLinks ) {

      // Create all href types to use to create footer links
      var hrefTypesToUse = [];

      // Use only not empty link hrefs
      Object.entries(footerLinks).forEach(([key,value]) => {

        // Check "key" is not empty
        if( value != "") {

          console.log("key:not-empty:" + key + "➡️value:" + value)
          hrefTypesToUse.push({key,value})

        }

      })

      // console.log("hrefTypesToUse(length) = " + hrefTypesToUse.length)

     return new Promise(resolve => {
      resolve( hrefTypesToUse );
    })

  }

  // 🟩 Get - Link Style Object from Task Card
  async function getLinkStyleFromTaskCard( footerLinkKey, configStyleFooterLinks ) {

    // console.log("footerLinkKey= " + footerLinkKey )
    // console.log("configStyleFooterLinks= " + configStyleFooterLinks )

    var configLinkStyles = configStyleFooterLinks;
    var newLinkStyle = "";

    // find with footerLinkKey the configStyleFooterLinks
    // the keys are references to config style
    switch( footerLinkKey ) {

      case "githubHref":
        // console.log("get:link-stlye:github-link")
        newLinkStyle = configLinkStyles.github;
        break;

      case "showmeHref":
        // console.log("get:link-stlye:showme-link")
        newLinkStyle = configLinkStyles.showme;
        break;

      case "playHref":
        // console.log("get:link-stlye:play-link")
        newLinkStyle = configLinkStyles.play;
        break;

      default:
        break;
    }


    return new Promise(resolve => {
      resolve( newLinkStyle );
    })

  }
