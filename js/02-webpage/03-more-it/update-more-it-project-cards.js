// console.log("🟨 update-more-it-project-cards.js")


/* -------------------------------------------------------------------------- */
/* Function
/* > Update Mini IT Projects by given data file (json)
/* -------------------------------------------------------------------------- */

async function update_miniItProjects_to_addPoint( jsonFile, addPoint ) {

  // console.log("💛 update_miniItProjects_to_addPoint")

  /* --------------------------------------------- */
  /* Step 1/4:
  /* > Try to open & read json file
  /* --------------------------------------------- */

    var data_mini_itProjects = await async_getJsonFile( jsonFile )
    // console.log("🟩JSON:= " + data_mini_itProjects )

  /* --------------------------------------------- */
  /* Step 2/4:
  /* > Get "default" datas
  /* --------------------------------------------- */

    // get data packages
    var def_data = data_mini_itProjects.defaults;
    var def_srcs = data_mini_itProjects.defaults.srcs;
    var def_cssClasses = data_mini_itProjects.defaults.cssClasses;

    // get data of all "it project cards"
    var data_cards = data_mini_itProjects.cards;
    // console.log( data_miniItProjectCards.length )

  /* --------------------------------------------- */
  /* Step 3/4:
  /* > Define Array of HTML Element "project item"
  /* --------------------------------------------- */

    var new_projectItem = [];

  /* ----------------------------------------------------------------------------------------------------- */
  /* Step 4/4:
  /* > add step by step to add point
  /* ----------------------------------------------------------------------------------------------------- */

    for( let i=0; i < data_cards.length; i++ ) {

      // console.log("⭐ Add Card: " + (i+1) + " ⭐")

      // get data from project card

      var cssClass_projectItem = data_cards[i].cssClass_project_item;

      var data_content = data_cards[i].content;
      var data_media = data_cards[i].media;


      /* ------------------------------------------------------------------ */
      // Step 1: Create New | Project Item
      /* ------------------------------------------------------------------ */

        new_projectItem.push( await async_get_newElement_cssClass( "div", cssClass_projectItem ) )

      /* ------------------------------------------------------------------ */
      // Step 2: Create New | Project Content
      /* ------------------------------------------------------------------ */

        const new_content = await get_newContainer_projectItemContent( def_data, data_content, (i+1) )

        // add "content" to "project item x "
        new_projectItem[i].appendChild( new_content )

      /* ------------------------------------------------------------------ */
      // Step 3: Create | Project Media
      /* ------------------------------------------------------------------ */

        const new_media = await get_newContainer_projectItemMedia( def_data, data_media )

        // add "media" to "project item x"
        new_projectItem[i].appendChild( new_media )


      /* ------------------------------------------------------------------ */
      // Step 4: Add Final | "new project item x" to "add point"
      /* ------------------------------------------------------------------ */

        addPoint.appendChild( new_projectItem[i] )

    }

    return new Promise(resolve => {
      resolve( );
    })


}

/* -------------------------------------------------------------------------- */
/* Function
/* > Get New "project-to-do-item-content"
/* -------------------------------------------------------------------------- */

async function get_newContainer_projectItemContent( data_default, data_content, counter ) {

  // console.log("💛 get_newContainer_projectItemContent")

  // --------------------------------------------------------- */
  // Step 1:
  // > Get default data categories
  // --------------------------------------------------------- */

    const def_srcs = data_default.srcs;
    const def_cssClasses = data_default.cssClasses;

  // --------------------------------------------------------- */
  // Step 2:
  // > Create Div - "project-to-do-item-content"
  // --------------------------------------------------------- */

    var cssClass_content = def_cssClasses.projectToDo_item_content;
    // console.log("css " + cssClass_content)

    const new_content_container = await async_get_newElement_cssClass( "div", cssClass_content );

  // --------------------------------------------------------- */
  // Step 2:
  // > Create Header
  // --------------------------------------------------------- */

    /* -------------------------------------------------------- */
    /* Step 1/2
    /* Create Elements
    /* -------------------------------------------------------- */

      // create - new header
      const new_header = await async_get_newElement( "header" )

      // create - new "nr status header"
      var cssClass_nrStatusHeader = def_cssClasses.projectToDo_item_content_nrStatusHeader;
      const new_nrStatusHeader = await async_get_newElement_cssClass( "div", cssClass_nrStatusHeader )

        /* ----------------------------------------- */
        // create - new "nr"
        /* ----------------------------------------- */

          var text_nr = data_content.nr;

          // use counter only if not "?."
          if( text_nr != "?.") {
            text_nr = counter+".";
          }

          const new_nr = await async_get_newElement_text( "div", text_nr );

        /* ----------------------------------------- */
        // create - new status
        /* ----------------------------------------- */

          var cssClass_status = data_content.statusItems.cssClass_status;
          const new_status = await async_get_newElement_cssClass( "div", cssClass_status );

          // create img status
          var iconName = data_content.statusItems.iconName;
          var full_iconPath = def_srcs.icons + iconName;

          var cssClass_icon = data_content.statusItems.cssClass_img;

          var new_icon_status = await async_get_newImg_src_cssClass( full_iconPath, cssClass_icon )

          // create status text
          var text_status = data_content.statusItems.text_status;

          var new_text_status = await async_get_newElement_text( "div", text_status )


      /* ----------------------------------------- */
      // create - new header title
      /* ----------------------------------------- */

        var text_headerTitle = data_content.text_header;
        const new_headerTitle = await async_get_newElement_text( "div", text_headerTitle );


      /* ----------------------------------------- */
      // create - new main text
      /* ----------------------------------------- */

        var text_main = data_content.text_main;
        const new_main = await async_get_newElement_text( "main", text_main );


    /* -------------------------------------------------------- */
    /* Step 2/2
    /* Adding Elements
    /* -------------------------------------------------------- */

      // add "nr & status" to "nr status header"
      new_nrStatusHeader.appendChild( new_nr );

      new_status.appendChild( new_icon_status )
      new_status.appendChild( new_text_status )

      new_nrStatusHeader.appendChild( new_status );

      // add "nr status header" to "new header"
      new_header.appendChild( new_nrStatusHeader );

      // add "div header title" to "new header"
      new_header.appendChild( new_headerTitle )

      // add "new header" to "new content container"
      new_content_container.appendChild( new_header )

      // add "new main" to "new content container"
      new_content_container.appendChild( new_main )


  return new Promise(resolve => {
    resolve( new_content_container  );
  })

}

/* -------------------------------------------------------------------------- */
/* Function
/* > Get New "project-to-do-item-media"
/* -------------------------------------------------------------------------- */

async function get_newContainer_projectItemMedia( data_default, data_media ) {

  // console.log("💛 get_newContainer_projectItemMedia")

  // --------------------------------------------------------- */
  // Step 1:
  // > Get default data categories
  // --------------------------------------------------------- */

    const def_srcs = data_default.srcs;
    const def_cssClasses = data_default.cssClasses;


  // --------------------------------------------------------- */
  // Step 2:
  // > Create Div - "project-to-do-item-media"
  // --------------------------------------------------------- */

    var cssClass_media = def_cssClasses.projectToDo_item_media;
    // console.log("css " + cssClass_content)

    const new_media_container = await async_get_newElement_cssClass( "div", cssClass_media );


  // --------------------------------------------------------- */
  // Step 3:
  // > Create Img
  // --------------------------------------------------------- */

    var def_imgPath = data_default.srcs.imgs;
    var fullPath_img = def_imgPath + data_media.imgPath + data_media.imgName;

    var newImg = await async_get_newImg_src( fullPath_img );


  // --------------------------------------------------------- */
  // Step 4:
  // > Create Footer
  // --------------------------------------------------------- */

    var new_footer = await async_get_newElement( "footer" );

    var dataLinks = data_media.footer;
    var def_iconPath = def_srcs.icons;

    // create optional links ( github, play)
    for( let i=0; i < dataLinks.length; i++ ) {

      // create only by show = true
      if( dataLinks[i].show == "true") {

        // console.log("Create")

        /* -------------------------------------- */
        // Create Link Element
        /* -------------------------------------- */

        var newLink = await async_get_newLink_href_cssClass( dataLinks[i].href, dataLinks[i].cssClass_link )

          // create - link img
          var fullPath_icon = def_iconPath + dataLinks[i].iconName;
          var newLink_img = await async_get_newImg_src_cssClass( fullPath_icon, dataLinks[i].cssClass_img )

          // create - link text
          var newLink_div = await async_get_newElement_text( "div", dataLinks[i].text_link )


        /* -------------------------------------- */
        // Addings
        /* -------------------------------------- */

          // add "newLink_img" to "newLink"
          newLink.appendChild( newLink_img )

          // add "newLink_div" to "newLink"
          newLink.appendChild( newLink_div )

          // add "newLink" to "new_footer"
          new_footer.appendChild( newLink )


      }

    }


  // --------------------------------------------------------- */
  // Step 5:
  // > Addings
  // --------------------------------------------------------- */

    // add "img" to "new_media_container"
    new_media_container.appendChild( newImg )

    // add "footer (loop - links)" to "new_media_container"
    new_media_container.appendChild( new_footer )



  return new Promise(resolve => {
    resolve( new_media_container );
  })

}
