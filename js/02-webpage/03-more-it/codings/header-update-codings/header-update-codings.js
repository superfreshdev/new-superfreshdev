console.log("🟨 header-update-codings.js")


// update header codings

/* -------------------------------------------------------------------------- */
/* Dom Elements
/* -------------------------------------------------------------------------- */

//  update - header container
var header_codingCategory_container = document.getElementById("header-coding-category-container");

/* -------------------------------------------------------------------------- */
/* Json Datas
/* -------------------------------------------------------------------------- */

// tech - data
var jsonData_header_codings_tech = "data/json/more-it/codings/header-codings/tech-headers.json";

// algos - data

// leetcode - data

/* -------------------------------------------------------------------------- */
/* Async Function
/* > Update Header Coding Category Container
/* -------------------------------------------------------------------------- */

  async function update_headerCodings_byID( checkedId, jsonFile, headerContainer ) {

    console.log("💪 update_headerCodings_byID")

    // Give Data
    console.log("➡️ checkedID: " + checkedId);
    console.log("➡️ headerContainer: " + headerContainer);

    /* -------------------------------------------------------------------- */
    /* ➡️🟥 Step 1:
    /* > Try tp get json by usind checkedID
    /* -------------------------------------------------------------------- */

      var dataHeader = await async_getJsonFile( jsonFile )
      console.log("🟩 JSON:= " + dataHeader )

      console.log("⭐ checkedID: " + checkedId )

      /* ------------------------------------------------------ */
      /* Step 1.1
      /* > Get Default Datas
      /* ------------------------------------------------------ */

      var def_icons_techPath = dataHeader.defaults.icons_techPath;
      var def_icons_blackPath = dataHeader.defaults.icons_blackPath;

      var def_cssClass_header = dataHeader.defaults.cssClass_header;

      var def_icon_filename_sandOfTime = dataHeader.defaults.icon_filename_sandOfTime;
      var def_cssClass_icon_sandOfTime = dataHeader.defaults.cssClass_icon_sandOfTime;

      var def_imgs_codingCategory_path = dataHeader.defaults.imgs_codingCategories_path;

      // Prints Default Datas
      console.log("🦾 def: " + def_icons_techPath)
      console.log("🦾 def: " + def_icons_blackPath)

      console.log("🦾 def: " + def_cssClass_header)

      console.log("🦾 def: " + def_icon_filename_sandOfTime)
      console.log("🦾 def: " + def_cssClass_icon_sandOfTime)

      console.log("🦾 def: " + def_imgs_codingCategory_path)


      /* ------------------------------------------------------ */
      /* Step 1.1
      /* > Get Index Datas
      /* ------------------------------------------------------ */

        // Correct checked ID
        console.log( "Length Json Headers = " + dataHeader.headers.length )

        if( checkedId >= 0 && checkedId < dataHeader.headers.length ) {

          console.log("🟩 allowed = " + checkedId)

        } else {

          console.log("🟥 not allowed = " + checkedId )
        }

        var dataHeader_byIndex = dataHeader.headers[checkedId];

        /* ---------------------------------------------------------------- */
        // Prints Status
        /* ---------------------------------------------------------------- */

          var status_cssClass = dataHeader_byIndex.status.cssClass_status;
          var status_cssClass_anim = dataHeader_byIndex.status.cssClass_status_anim;
          var status_iconFilename = dataHeader_byIndex.status.icon_filename;
          var status_icon_cssClass = dataHeader_byIndex.status.cssClass_icon;
          var status_text = dataHeader_byIndex.status.text;

          console.log("🧱 st: " + status_cssClass)
          console.log("🧱 st: " + status_cssClass_anim)

          console.log("🧱 st: " + status_iconFilename)

          console.log("🧱 st: " + status_icon_cssClass)
          console.log("🧱 st: " + status_text)


        /* ---------------------------------------------------------------- */
        // Prints Content
        /* ---------------------------------------------------------------- */

          var header_title =  dataHeader_byIndex.content.title;
          var header_timeInfo =  dataHeader_byIndex.content.time_info;
          var header_imgCodingCategory_filename = dataHeader_byIndex.content.img_codingCategory_filename;

          console.log("🧱 h: " + header_title )
          console.log("🧱 h: " + header_timeInfo )
          console.log("🧱 h: " + header_imgCodingCategory_filename )


    /* -------------------------------------------------------------------- */
    /* 🟩 Step 2:
    /* > Update Header Coding Category Container
    /* -------------------------------------------------------------------- */

      /* -------------------------------------------------------------------- */
      /* 🟥 Step 2.1
      /* > Update - Header Coding | Title Container
      /* -------------------------------------------------------------------- */


        /* -------------------------------------------------------------------- */
        /* Step 2.1.1
        /* > Update - Status
        /* -------------------------------------------------------------------- */

          var statusContainer = headerContainer.querySelector("div:nth-of-type(1) > div:nth-of-type(1)");

          /* ------------------------------ */
          // Update CSS Class
          /* ------------------------------ */

            await async_update_2_cssClass_to_element( statusContainer, status_cssClass, status_cssClass_anim );

          /* ------------------------------ */
          // Update Img Src + CSS Class
          /* ------------------------------ */

            var iconStatus = statusContainer.querySelector("img");

            var iconStatus_fullPath = def_icons_blackPath + status_iconFilename;
            await async_update_src_from_queryElement( iconStatus, iconStatus_fullPath )

            await async_update_cssClass_to_element( iconStatus, status_icon_cssClass )


          /* ------------------------------ */
          // Update Status Text
          /* ------------------------------ */

            var statusText = statusContainer.querySelector("div");

            await async_update_text_from_element( statusText, status_text )


        /* -------------------------------------------------------------------- */
        /* Step 2.1.2
        /* > Update - Header Title
        /* -------------------------------------------------------------------- */

          var headerTitle = headerContainer.querySelector("div:nth-of-type(1) > div:nth-of-type(2)")

          await async_update_text_from_element( headerTitle, header_title )

      /* -------------------------------------------------------------------- */
      /* 🟥 Step 2.2
      /* > Update Content - Header Coding | Time Container
      /* -------------------------------------------------------------------- */

        // Update - Time Info
        var timeInfo = headerContainer.querySelector("div:nth-of-type(2) > div:nth-of-type(1) > div:last-child")

        await async_update_text_from_element( timeInfo, header_timeInfo )

        // Update - Img Category Src
        var imgCodingCategory = headerContainer.querySelector("div:nth-of-type(2) > img:last-child")

        // concat full img path
        var imgFullPath_codingCategory = def_imgs_codingCategory_path + header_imgCodingCategory_filename

        await async_update_src_from_queryElement( imgCodingCategory, imgFullPath_codingCategory )



   return new Promise(resolve => {
      resolve( );
    })


  }

/* -------------------------------------------------------------------------- */
/* Event (1/3) - Tech
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Event (2/3) - Algos
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Event (3/3) - Leetcod
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Excecute
/* -------------------------------------------------------------------------- */

  // update header codings - tech
  update_headerCodings_byID( 0, jsonData_header_codings_tech, header_codingCategory_container )
