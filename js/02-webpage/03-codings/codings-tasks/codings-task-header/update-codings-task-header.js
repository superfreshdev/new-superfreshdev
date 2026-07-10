console.log("🟨 supdate-codings-task-header.js")

// ⚠️ Reminder: Create First than Add Change Listener

/* -------------------------------------------------------------------- */
/* DOM Elements
/* -------------------------------------------------------------------- */

  var codingsHeaderNavRadios = document.querySelectorAll("input[name='name-radio-codings-header-nav'")
  console.log("codingsHeaderNavRadios(length) = " + codingsHeaderNavRadios.length )

/* -------------------------------------------------------------------- */
/* Variables
/* -------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
/* Functions
/* -------------------------------------------------------------------- */


  async function updateCodingsTaskHeader( jsonHeaderDefaults, jsonHeaderData, headerElement ) {

    console.log("🟨 updateCodingsTaskHeader() ")
    console.log("🛠️ Update & Create Navs")

    /* ---------------------------------------------------------- */
    /* Step 1:
    /* > Get Default Paths
    /* ---------------------------------------------------------- */

      // Try to get default json

      dataDefaultPaths = await async_getJsonFile( jsonHeaderDefaults )

      console.log("---------------------------------------------")
      console.log("📐 Json Default Paths:  ")
      console.log("➡️ jsonDefaultPaths(local): " + dataDefaultPaths )

      var defaultPaths = dataDefaultPaths.paths;
      var defaultImgFiles = dataDefaultPaths.imgFiles;

      // create default var paths
      var pathIconGrey = defaultPaths.iconGrey;
      var pathIconBlack = defaultPaths.iconBlack;
      var pathImgHeader = defaultPaths.imgCodingTaskHeader;

      var imgFileClock = defaultImgFiles.imgFilenameClock;
      var imgFileInfo = defaultImgFiles.imgFilenameInfo;
      var imgFileBullet = defaultImgFiles.imgFilenameBullet;

    /* ---------------------------------------------------------- */
    /* Step 2:
    /* > Get Default Data
    /* ---------------------------------------------------------- */

      // Try to get Data
      var data = await async_getJsonFile( jsonData )

      console.log("---------------------------------------------")
      console.log("📐 Json Data: ")
      console.log("➡️ jsonData(given): " + data  )
      console.log("➡️ headerElement: " + headerElement )

      var dataHeader = data.header;
      var dataHeaderNav = data.nav;

      // Create header datas
      var headerTitle = dataHeader.title;
      var headerTimeLimit = dataHeader.timeLimit;
      var headerFilename = dataHeader.imgFilename;

      console.log("💫header title: " + headerTitle )
      console.log("💫header time limit: " + headerTimeLimit )
      console.log("💫header filename: " + headerFilename )


      // ➡️🟥 Create nav datas ( if radios exist only update labels )


    console.log("---------------------------------------------")

    /* --------------------------------------------------------------- */
    /* 🟥 Step 1/?
    /* > Get Json Data Arrays for easy common operations
    /* --------------------------------------------------------------- */



    /* --------------------------------------------------------------- */
    /* 🟥 Step 2/?
    /* > Update - Header Title
    /* --------------------------------------------------------------- */

    /* --------------------------------------------------------------- */
    /* 🟥 Step 3/?
    /* > Update - Header Time Limit
    /* --------------------------------------------------------------- */

    /* --------------------------------------------------------------- */
    /* 🟥 Step 4/?
    /* > Update - Header Img
    /* --------------------------------------------------------------- */

    /* --------------------------------------------------------------- */
    /* 🟥 Step 5/?
    /* > Update - Header Nav
    /* --------------------------------------------------------------- */

    console.log("❇️ Finished Update & Create")




    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* Events
/* -------------------------------------------------------------------- */

  // Dom Documented Loaded | First Load Check

  // Radio Change Listener
  for( let i=0; i < codingsHeaderNavRadios.length; i++ ) {


    // Add Radios Change Listeners
    codingsHeaderNavRadios[i].addEventListener( "change", async() => {

      window.alert(codingsHeaderNavRadios[i].getAttribute("id"))


    }




  )}
