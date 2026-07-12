// console.log("🟨 create-codings-task-header-nav.js")


/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  /* --------------------------------------------------------- */
  // 🟩 1. Creat Radios
  /* --------------------------------------------------------- */

    async function asyncPrependNewRadiosToCodingsTaskHeaderContent( jsonHeaderNav, addPoint ) {


      /* --------------------------------------------- */
      /* 🟩 Step 1/2
      /* > Get New Radio Ids from json
      /* --------------------------------------------- */

        // New Radio Ids
        var newRadioIds = [];

        // Get New Radio Ids
        for( let i=0; i < jsonHeaderNav.length; i++ ) {

          newRadioIds.push( jsonHeaderNav[i].radio.id )
          console.log("RadioIDs: " + newRadioIds[i])

        }

      /* --------------------------------------------- */
      /* 🟩 Step 2/2
      /* > Create New Radios "Prepend" to addPoint
      /* > only if any Radio exist
      /* --------------------------------------------- */

        var existRadioIds = "";

        existRadioIds= await asyncExistIdStringsInElement( newRadioIds, addPoint );
        console.log("👷 existRadioIds: " + existRadioIds)

        // Only Create if any Radio exist
        if( !existRadioIds ) {

          console.log("✳️🔩 Create Radios")

          // Test Print
          console.log("### Following Radios will be added:")
          newRadioIds.forEach(element => {

            console.log(element)

          });


          // New Radio Ids
          var newRadios = [];

          // Create New Radios from Json
          for( let i=0; i < jsonHeaderNav.length; i++ ) {

            newRadios.push( await asyncCreateRadio( jsonHeaderNav[i].radio.id,
                                                    jsonHeaderNav[i].radio.name,
                                                    jsonHeaderNav[i].radio.checked ) )

          }

          console.log("🏁 New Radios Created = " + newRadios.length )

          // Add All New Radios to Element
          await asyncPrependRadiosToElement( newRadios, addPoint );


        } else {

          console.log("❌🔩 Dont Create Radios")

        }


      return new Promise(resolve => {
        resolve( );
      })

    }

  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* 🟩 Get Finished Task Number by Category
  /* --------------------------------------------------------- */

    async function asyncGetFinishedTasksNumber( dataTasks ) {

      var finishedTasks = 0;

      // only count if status done found
      for( let i=0; i < dataTasks.length; i++ ) {

        // counter found
        if( dataTasks[i].header.status.cssClassSticker == "codings-task-card-status-sticker-done") {

          finishedTasks++;

        }

      }

      return new Promise(resolve => {
        resolve( finishedTasks );
      })

    }

  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* 🟩 Get Max Task Numbers by Category
  /* --------------------------------------------------------- */

    async function asyncGetMaxTasksNumber( dataTasks ) {

      var maxTaskNr = dataTasks.length;

      return new Promise(resolve => {
        resolve( maxTaskNr );
      })

    }


  /* --------------------------------------------------------- */
  /* 🔩 Help Function
  /* ➡️🟥 Create Codings Task Header Nav Label
  /* --------------------------------------------------------- */

    async function asyncCreateCodingsTaskHeaderNavLabel( idString, dataLabel, finishedNr, maxNr) {

      console.log("-------------")
      console.log("⚒️ Build - Label")
      console.log("idString: " + idString);
      console.log("dataLabel: " + dataLabel);
      console.log("finishedNr: " + finishedNr);
      console.log("maxNr: " + maxNr);


      return new Promise(resolve => {
        resolve( );
      })

    }

  /* --------------------------------------------------------- */
  // ➡️🟥 3. Create Labels
  /* --------------------------------------------------------- */

    async function asyncReplaceNewLabelsFromCodingsTaskHeaderNav( jsonHeaderNav, jsonTaskCategories, addPoint ) {

      console.log("🟨asyncReplaceNewLabelsFromCodingsTaskHeaderNav()");

      console.log("jsonTaskCategories(length): " + jsonTaskCategories.length )

      /* --------------------------------------------------------- */
      /* 🟥 Step 1/2
      /* > Delete Old Label From Codings Task Header Nav
      /* --------------------------------------------------------- */

      /* --------------------------------------------------------- */
      /* ➡️🟥 Step 2/2
      /* > Create New Labels To Codings Task Header Nav
      /* --------------------------------------------------------- */

        var finishedTasks = [];
        var maxTasks = [];

        /* ------------------------------------------------------------------ */
        /* 🟩 Step 1/2
        /* > Get All
        /* > - Finished Tasks &
        /> > - Max Tasks Number each Category
        /* ------------------------------------------------------------------ */

          for( let i=0; i < jsonTaskCategories.length; i++) {

            // Get Finished Tasks by Category
            finishedTasks.push( await asyncGetFinishedTasksNumber( jsonTaskCategories[i].tasks ) );
            // console.log("finishedTasks = " + finishedTasks[i])

            // Get Max Tasks by Category
            maxTasks.push ( await asyncGetMaxTasksNumber( jsonTaskCategories[i].tasks ) );
            // console.log("maxTasks = " + maxTasks[i])

          }

        /* ------------------------------------------------------------------ */
        /* ➡️🟥 Step 2/2
        /* > Create Final New Labels to Nav
        /* ------------------------------------------------------------------ */

          // New Labels
          var newLabels = [];
          // Used Label Vars
          var radioId = "";


          for( let i=0; i < jsonHeaderNav.length; i++ ) {

            // get actuall radio id
            radioId = jsonHeaderNav[i].radio.id;

            // create new labels
            newLabels.push ( await asyncCreateCodingsTaskHeaderNavLabel( radioId, jsonHeaderNav[i], finishedTasks[i], maxTasks[i]) )

          }

          // add all new labels to nav
          // 🟥 Missing

          console.log("🏁 Final - newLabels (length) = " + newLabels.length )


      return new Promise(resolve => {
        resolve( );
      })

    }
