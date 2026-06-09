// console.log("🟨 header-update-codings.js")


  /* -------------------------------------------------------------------------- */
  /* 🟩 Async Function
  /* > Update | Coding Header - Title Container
  /* -------------------------------------------------------------------------- */

    async function async_update_codingHeader_titleContainer( dataDefault, dataHeaderItem, titleContainer ) {

      // console.log("⭐ async_update_codingHeader_titleContainer() ")

      // console.log("------")

      // console.log("➡️dataDefault= " + dataDefault);
      // console.log("➡️dataHeaderItem= " + dataHeaderItem);
      // console.log("➡️titleContainer= " + titleContainer);

      // console.log("------")

      /* ------------------------------------------------------------------ */
      /* Get Default Datas
      /* ------------------------------------------------------------------ */

        var def_iconPath_black = dataDefault.iconsPath_black;
        // console.log("def_iconPath_black= " + def_iconPath_black)


      /* ------------------------------------------------------------------ */
      /* Step 1/2
      /* > Update - Status Container
      /* ------------------------------------------------------------------ */

        var cssClass_status = dataHeaderItem.status.cssClass_status;
        var cssClass_status_anim = dataHeaderItem.status.cssClass_status_anim;

        var div_statusContainer = titleContainer.querySelector("div:nth-of-type(1)");

        /* -------------------------------------------------------------------------- */
        /* Update | Status Container
        /* -------------------------------------------------------------------------- */

        if( cssClass_status_anim != "" ) {

          // set css class - in progress with anim
          await async_update_2_cssClass_to_element( div_statusContainer, cssClass_status, cssClass_status_anim );

        } else {

          // set css class - done, later
          await async_update_cssClass_to_element( div_statusContainer, cssClass_status );

        }

        /* ---------------------------------------- */
        /* Get Item | Img Status
        /* ---------------------------------------- */

          var iconFilename_status = dataHeaderItem.status.icon_filename;
          var iconFullPath_status = def_iconPath_black + iconFilename_status;
          var cssClass_iconStatus = dataHeaderItem.status.cssClass_icon;

          var div_statusImg = div_statusContainer.querySelector("img:nth-of-type(1)");

        /* ---------------------------------------- */
        /* Update Item | Img Status
        /* ---------------------------------------- */

          await async_update_img_src_cssClass( iconFullPath_status,
                                               cssClass_iconStatus,
                                               div_statusImg )

        /* ---------------------------------------- */
        /* Get Item | Div Status Text
        /* ---------------------------------------- */

          var textStatus = dataHeaderItem.status.text;
          var div_statusText = div_statusContainer.querySelector("div:nth-of-type(1)");

        /* ---------------------------------------- */
        /* Update Item | Div Status Text
        /* ---------------------------------------- */

          await async_update_text_from_element( div_statusText, textStatus )


      /* ------------------------------------------------------------------ */
      /* Step 2/2
      /* > Update - Title
      /* ------------------------------------------------------------------ */

        /* ---------------------------------------- */
        /* Get Item | Div Title Text
        /* ---------------------------------------- */

          var textTitle = dataHeaderItem.content.title;
          var div_title = titleContainer.querySelector("div:nth-of-type(2)");

        /* ---------------------------------------- */
        /* Update Item | Div Title Text
        /* ---------------------------------------- */

          await async_update_text_from_element( div_title, textTitle );


      return new Promise(resolve => {
        resolve( );
      })

    }

  /* -------------------------------------------------------------------------- */
  /* 🟩 Async Function
  /* > Update | Coding Header - Time Container
  /* -------------------------------------------------------------------------- */

    async function async_update_codingHeader_timeContainer( dataDefault, dataHeaderItem, timeContainer) {

      // console.log("⭐ async_update_codingHeader_timeContainer() ")

      // console.log("------")

      // console.log("➡️dataDefault= " + dataDefault);
      // console.log("➡️dataHeaderItem= " + dataHeaderItem);
      // console.log("➡️timeContainer= " + timeContainer);

      // console.log("------")

      /* ------------------------------------------------------------------ */
      /* Get Default Datas
      /* ------------------------------------------------------------------ */

        var def_iconPath_white = dataDefault.iconsPath_white;
        var iconFilename_clock = dataDefault.iconFilename_clock;
        var cssClass_iconClock = dataDefault.cssClass_iconClock;

        var iconFullPath_clock = def_iconPath_white + iconFilename_clock;

        // img coding category
        var def_imgPath_codingCategory = dataDefault.imgPath_codingCategory;


      /* ------------------------------------------------------------------ */
      /* Step 1/2
      /* > Update - Time Box
      /* ------------------------------------------------------------------ */

        var div_timeBox = timeContainer.querySelector("div:nth-of-type(1)")

        /* ---------------------------------------- */
        /* Get Item | Img Time
        /* ---------------------------------------- */

          var img_timeIcon = div_timeBox.querySelector("img:nth-of-type(1)");

        /* ---------------------------------------- */
        /* Update Item | Img Time
        /* ---------------------------------------- */

          await async_update_img_src_cssClass( iconFullPath_clock,
                                               cssClass_iconClock,
                                               img_timeIcon )

        /* ---------------------------------------- */
        /* Get Item | Div Time Text
        /* ---------------------------------------- */

          var text_time = dataHeaderItem.content.time_info;
          var div_timeText = div_timeBox.querySelector("div:nth-of-type(1)");

        /* ---------------------------------------- */
        /* Update Item | Div Time Text
        /* ---------------------------------------- */

          await async_update_text_from_element( div_timeText, text_time );

      /* ------------------------------------------------------------------ */
      /* Step 2/2
      /* > Update - Img Category
      /* ------------------------------------------------------------------ */

        /* ---------------------------------------- */
        /* Get Item | Img Category
        /* ---------------------------------------- */

          var imgFullPath_codingCategory = def_imgPath_codingCategory + dataHeaderItem.content.imgFilename_codingCategory;
          var img_codingCategory = timeContainer.querySelector("img:last-child")

        /* ---------------------------------------- */
        /* Update Item | Img Category
        /* ---------------------------------------- */

          await async_update_img_src( imgFullPath_codingCategory,
                                      img_codingCategory )



      return new Promise(resolve => {
        resolve( );
      })


    }

  /* -------------------------------------------------------------------------- */
  /* Execute | Async Function
  /* > Update - Coding Header
  /* -------------------------------------------------------------------------- */

    async function async_update_codingHeader( dataIndex, jsonFile, header ) {

      console.log("➡️ dataIndex= " + dataIndex);
      console.log("➡️ jsonFile= " + jsonFile);
      console.log("➡️ header= " + header );

      /* ------------------------------------------------------------------- */
      /* 🟩 Step 1/4
      /* Get Data from JSON File
      /* ------------------------------------------------------------------- */

        var dataHeader = await async_getJsonFile( jsonFile )
        console.log("🟩 JSON:= " + dataHeader )

      /* ------------------------------------------------------------------- */
      /* 🟩 Step 2/4
      /* Get Default Datas
      /* ------------------------------------------------------------------- */

        var dataDefault = dataHeader.defaults;
        var dataHeaderItem = dataHeader.headers[dataIndex];

      /* ------------------------------------------------------------------- */
      /* 🟩 Step 3/4
      /* Update - Header Coding - Title Container
      /* ------------------------------------------------------------------- */

        var div_titleContainer = document.getElementById("header-coding-title-container");
        await async_update_codingHeader_titleContainer( dataDefault,
                                                        dataHeaderItem,
                                                        div_titleContainer )

      /* ------------------------------------------------------------------- */
      /* 🟩 Step 4/4
      /* Update - Header Coding - Time Container
      /* ------------------------------------------------------------------- */

        var div_timeContainer = document.getElementById("header-coding-time-container");
        await async_update_codingHeader_timeContainer(  dataDefault,
                                                        dataHeaderItem,
                                                        div_timeContainer )


      return new Promise(resolve => {
        resolve( );
      })

    }
