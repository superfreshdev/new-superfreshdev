/* -------------------------------------------------------------------- */
// console.log("🟨 create-labels.js")
/* -------------------------------------------------------------------- */


  /* --------------------------------------------------------- */
  /*  ➡️🟥 Create Label | Codings Task Header Nav
  /* --------------------------------------------------------- */

    async function asyncCreateCodingsTaskHeaderNavLabel( iconPath, radioId, dataLabelContent,
                                                         labelCategory, dataTasks )
    {


      // Test Prints
      console.log("❇️🔩 Create New Label")
      // console.log("➡️ iconPath: " + iconPath )
      console.log("➡️ radioID: " + radioId )
      console.log("➡️ labelCategory : " + labelCategory )
      console.log("➡️ dataTasks : " +  dataTasks.length )


      /* ---------------------------------------------------- */
      /* Help Function
      /* 🟨 Step 1/4
      /* > Get Label Status Styles
      /* > In Progress: Minimum x1 Task
      /* > Later: 0 - In Progress & Minimum x1 Task Later
      /* > Done: Only all Task Done
      /* ---------------------------------------------------- */

        var dataLabelStatusStyle = "";

        var dataLabelStatusStyles = dataLabelContent.status;
        dataLabelStatusStyle = await asyncGetLabelStatusStyleFromTasks( dataLabelStatusStyles, dataTasks );


        console.log("⭐ Use Label Status Style: ")
        console.log("➡️ cssClass: " + dataLabelStatusStyle.cssClass )
        console.log("➡️ iconFilename: " + dataLabelStatusStyle.iconFilename )
        console.log("➡️ iconCssClass: " + dataLabelStatusStyle.iconCssClass)


      /* ---------------------------------------------------- */
      /* Help Function
      /* 🟨 Step 3/4
      /* > Get Finished & Max Tasks of Category
      /* ---------------------------------------------------- */

        var finishedTasks = 0;
        var maxTasks = 0;

        finishedTasks = await asyncGetFinishedTasksNumber( dataTasks )
        maxTasks = await asyncGetMaxTasksNumber( dataTasks )

        // Get 2 Number Format
        // finishedTasks = await asyncGetTwoNumbersFormat( finishedTasks );
        // maxTasks = await asyncGetTwoNumbersFormat( maxTasks );

        console.log("⭐ Finished Tasks: " + finishedTasks )
        console.log("⭐ Max Tasks: " + maxTasks )


      /* ---------------------------------------------------- */
      /* ➡️🟥 Step 4/4
      /* > Create New Label
      /* ---------------------------------------------------- */

        var labelCounterBoxCssClass = dataLabelContent.counterBoxCssClass;

        console.log("⭐ label(counterBox-cssClass): " + labelCounterBoxCssClass )
        console.log("----------------");

        var newLabel = "1";

        /*


          ### Create
          1. Label , for, class
            1.1 Div + Img Status ( img black path + fire )
            1.2 Div Text + Counters

              1.2.1 - Div - Basics
              1.2.2 - Div - Counters ( .codings-task-header-nav-item-counter-box )
                  - Div - Finished Task
                  - Div - /
                  - Div - Max Tasks



        */

        /* -------------------------------------------------------- */
        /*➡️🟥 Step 4.1
        /* > Create - Label + Status
        /* -------------------------------------------------------- */

          var labelStatusCssClass = dataLabelStatusStyle.cssClass;
          newLabel = await asyncCreateLabel( radioId, labelStatusCssClass )

        /* -------------------------------------------------------- */
        /*➡️🟥 Step 4.2
        /* > Create & Add - Div Status
        /* -------------------------------------------------------- */

          // Create - Div Status
          var divStatus = "";

          var iconFullPath = iconPath + dataLabelStatusStyle.iconFilename;
          var iconCssClass = dataLabelStatusStyle.iconCssClass;

          divStatus = await asyncCreateDivWithImg( iconFullPath, iconCssClass )

          // console.log("🔥 divStatus = " + divStatus )

          // Add "divStatus" to "newLabel"
          newLabel.appendChild( divStatus )

        /* -------------------------------------------------------- */
        /*➡️🟥 Step 4.3
        /* > Create & Add - Div Text & Counters
        /* -------------------------------------------------------- */

          var divTextCounters = await asyncCreateDiv();

          // Add - Div Text
          var divCategoryText = await asyncCreateDivWithText( labelCategory )

          // Add "divCategoryText" to "divTextCounters"
          divTextCounters.appendChild( divCategoryText )

          // Add - Div Counters
          var divCounterBox = await asyncCreateDivWithCssClass( labelCounterBoxCssClass )

          var divFinishedTasks = await asyncCreateDivWithDivText( finishedTasks )
          var divSeperator = await asyncCreateDivWithDivText( "/" )
          var divMaxTasks = await asyncCreateDivWithDivText( maxTasks )

          // Add "x3" to "divCounterBox"
          divCounterBox.appendChild( divFinishedTasks )
          divCounterBox.appendChild( divSeperator )
          divCounterBox.appendChild( divMaxTasks )

          // Add "divCounterBox" to "divTextCounters"
          divTextCounters.appendChild( divCounterBox )

          // Add "divTextCounters" to "newLabel"
          newLabel.appendChild( divTextCounters )


      return new Promise(resolve => {
        resolve( newLabel );
      })

    }
