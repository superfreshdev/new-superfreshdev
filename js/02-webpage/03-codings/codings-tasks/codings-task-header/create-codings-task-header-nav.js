/* -------------------------------------------------------------------- */
// console.log("🟨 create-codings-task-header-nav.js")
/* -------------------------------------------------------------------- */
/* > Create Nav Elements - Radios + Labels
/* -------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  /* --------------------------------------------------------- */
  // 🟩 1. Creat Radios
  /* --------------------------------------------------------- */

    async function asyncPrependNewRadiosToCodingsTaskHeaderContent( jsonHeaderNavRadios, addPoint ) {


      /* --------------------------------------------- */
      /* 🟩 Step 1/2
      /* > Get New Radio Ids from json
      /* --------------------------------------------- */

        // New Radio Ids
        var newRadioIds = [];

        // Get New Radio Ids
        for( let i=0; i < jsonHeaderNavRadios.length; i++ ) {

          newRadioIds.push( jsonHeaderNavRadios[i].id )
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
          for( let i=0; i < jsonHeaderNavRadios.length; i++ ) {

            newRadios.push( await asyncCreateRadio( jsonHeaderNavRadios[i].id,
                                                    jsonHeaderNavRadios[i].name,
                                                    jsonHeaderNavRadios[i].checked ) )

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
  // ➡️🟥 Create Label | Codings Task Header Nav
  /* --------------------------------------------------------- */

    async function asyncCreateCodingsTaskHeaderNavLabel( defaultIconPath, dataNav, dataTaskCategories ) {

      console.log("⚒️ Create Label - Codings Task Header Nav")
      console.log("➡️ def.iconPath: " + defaultIconPath )
      console.log("➡️ dataNav: " + dataNav )
      console.log("➡️ dataTaskCategories: " + dataTaskCategories )



      return new Promise(resolve => {
        resolve( );
      })

    }

  /* --------------------------------------------------------- */
  /* 🟥 Update - Codings Task Header Nav
  /* --------------------------------------------------------- */

    async function asyncUpdateCodingsTaskHeaderNav( jsonTaskContent, navAddPoint ) {

      console.log("❇️ Update - Codings Task Header Nav")
      console.log("➡️ jsonTaskContent: " + jsonTaskContent)
      console.log("➡️ navAddPoint: " + navAddPoint)

      /* ---------------------------------------------------- */
      /* 🟩 Step 1/4
      /* > Get Default Icon Path
      /* ---------------------------------------------------- */

        var iconPathBlack = jsonTaskContent.paths.iconBlack;

      /* ---------------------------------------------------- */
      /* 🟩 Step 2/4
      /* > Get Data Nav
      /* ---------------------------------------------------- */

        var dataNav = jsonTaskContent.header.nav;
        var maxNavItems = dataNav.length;

      /* ---------------------------------------------------- */
      /* 🟩 Step 3/4
      /* > Get Data Task Categories ( finished & max tasks )
      /* ---------------------------------------------------- */

        var dataTaskCategories = jsonTaskContent.taskCategories;

      /* ---------------------------------------------------- */
      /* ➡️🟥 Step 4/4
      /* > Create All "Special Labels" to "navAddPoint"
      /* ---------------------------------------------------- */

        var newLabels = [];

        for( let i=0; i < maxNavItems; i++ ) {

          // Create "New Label"
          console.log("dataNav = " + i);

          newLabels.push( await asyncCreateCodingsTaskHeaderNavLabel( iconPathBlack, dataNav[i], dataTaskCategories )  )

          // Add "New Label" to "navAddPoint"

        }

      return new Promise(resolve => {
        resolve( );
      })

    }




  /* --------------------------------------------------------- */
  // ➡️🟥 2. Create Labels
  /* --------------------------------------------------------- */

    // ❌
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
            newLabels.push ( await asyncCreateCodingsTaskHeaderNavLabel( radioId, jsonHeaderNav[i].label, finishedTasks[i], maxTasks[i]) )

            await asyncPrependElementTo( newLabels[i], codingsTaskHeaderNav )

          }

          // add all new labels to nav
          // 🟥 Missing

          console.log("🏁 Final - newLabels (length) = " + newLabels.length )


      return new Promise(resolve => {
        resolve( );
      })

    }
