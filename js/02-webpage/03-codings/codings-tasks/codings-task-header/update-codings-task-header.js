// console.log("🟨 supdate-codings-task-header.js")

// ⚠️ Reminder: Create First than Add Change Listener

/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  /* --------------------------------------- */
  /* Header
  /* --------------------------------------- */

    // header - title
    var domCodingsHeaderTitle = document.getElementById("codings-task-header-title");
    // header - time block
    var domCodingsHeaderTimeBlock = document.querySelector("#codings-task-header-time-block > div:nth-of-type(1)");
    // header - img
    var domCodingsHeaderImg = document.getElementById("codings-header-img");

  /* --------------------------------------- */
  /* Header Navs
  /* --------------------------------------- */

    var rowContainerCodingsContent = document.getElementById("row-container-codings-content");

    var codingsHeaderNavRadios = document.querySelectorAll("input[name='name-radio-codings-header-nav'")
    // console.log("codingsHeaderNavRadios(length) = " + codingsHeaderNavRadios.length )


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  // Update - Codings Task Header
  async function updateCodingsTaskHeader( jsonTasksContent, headerElement ) {

    console.log("🟨 updateCodingsTaskHeader() ")

    /* ---------------------------------------------------------- */
    /* 🟩 Step 1:
    /* > Try to get json
    /* ---------------------------------------------------------- */

      var jsonTasksContent = await async_getJsonFile( jsonTasksContent )

    /* ---------------------------------------------------------- */
    /* 🟨 Step 2:
    /* > Get Default Paths
    /* ---------------------------------------------------------- */

      var pathIconBlack = jsonTasksContent.paths.iconBlack;
      var pathIconGrey = jsonTasksContent.paths.iconGrey;
      var pathImgHeader = jsonTasksContent.paths.imgCodingTaskHeader;

      // console.log("----------------------------")
      // console.log("📃 Default Paths:  ")
      // console.log("➡️ jsonTaskContent(file): " + jsonTasksContent )
      // console.log("➡️ path - iconBlack: " +  pathIconBlack )
      // console.log("➡️ path - iconGrey: " + pathIconGrey )
      // console.log("➡️ path - imgHeader: " + pathImgHeader )
      // console.log("----------------------------")


    /* ---------------------------------------------------------- */
    /* 🟩 Step 3:
    /* > Update | Header Codings Tasks - Meta
    /* ---------------------------------------------------------- */

      // Var - Data
      var headerTitle = jsonTasksContent.header.title;
      var headerTimeLimit = jsonTasksContent.header.timeLimit;
      var fullPathImgHeader = pathImgHeader + jsonTasksContent.header.imgFilename;

      // console.log("📃 Header Data:  ")
      // console.log("➡️ headerTitle: " + headerTitle )
      // console.log("➡️ headerTimeLimit: " + headerTimeLimit )
      // console.log("➡️ fullPathImgHeader: " +  fullPathImgHeader )
      // console.log("----------------------------")

      // Update - Header Title
      await asyncUpdateTextFromElement( headerTitle, domCodingsHeaderTitle );

      // Update - Header Time Block
      await asyncUpdateTextFromElement( headerTimeLimit, domCodingsHeaderTimeBlock );

      // Update - Header Img
      await asyncUpdateImgSrc( fullPathImgHeader, domCodingsHeaderImg );


    /* ---------------------------------------------------------- */
    /* ➡️🟥 Step 4:
    /* > Update / Create | Header Codings Tasks - Nav
    /* ---------------------------------------------------------- */

      /* ----------------------------------------------------- */
      /* ➡️🟥 [1/2] | Create New Radios to Element
      /* ----------------------------------------------------- */

        /* --------------------------------------------- */
        /* ➡️🟥 Step 1
        /* > Get Data - Header Nav
        /* --------------------------------------------- */

          // Var - Data
          var dataNavContent = jsonTasksContent.header.nav;

        /* --------------------------------------------- */
        /* ➡️🟥 Step 2
        /* > Get New Radio Ids from json
        /* --------------------------------------------- */

          // New Radio Ids
          var newRadioIds = [];

          // Get New Radio Ids
          for( let i=0; i < dataNavContent.length; i++ ) {

            newRadioIds.push( dataNavContent[i].radio.id )
            console.log("RadioIDs: " + newRadioIds[i])

          }

        /* --------------------------------------------------------- */
        /* ➡️🟥 Step 3
        /* > Check & Create New Radios "Prepend" to Element
        /* --------------------------------------------------------- */

          var existRadioIds = "";

          existRadioIds= await asyncExistIdStringsInElement( newRadioIds, rowContainerCodingsContent );
          console.log("👷 existRadioIds: " + existRadioIds)

          // Check
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
            for( let i=0; i < dataNavContent.length; i++ ) {

              newRadios.push( await asyncCreateRadio( dataNavContent[i].radio.id,
                                                      dataNavContent[i].radio.name,
                                                      dataNavContent[i].radio.checked ) )

            }

            console.log("🏁 New Radios Created = " + newRadios.length )

            // Add All New Radios to Element
            await asyncPrependRadiosToElement( newRadios, rowContainerCodingsContent );


          } else {

            console.log("❌🔩 Dont Create Radios")

          }



        /* --------------------------------------------- */
        /* 🟥 Step 3
        /* > Add New Radios if dont exist
        /* --------------------------------------------- */






    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  /* [1/2] | Dom Documented Loaded | First Load Check
  /* ---------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  /* [2/2] | Radio Change - Codings Task Header Nav
  /* ---------------------------------------------------------------- */

  // Radio Change Listener
  for( let i=0; i < codingsHeaderNavRadios.length; i++ ) {


    // Add Radios Change Listeners
    codingsHeaderNavRadios[i].addEventListener( "change", async() => {

      window.alert(codingsHeaderNavRadios[i].getAttribute("id"))

    }




  )}
