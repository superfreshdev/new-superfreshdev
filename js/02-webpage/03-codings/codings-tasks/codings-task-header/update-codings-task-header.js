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

  var jsonFileDefaultSets = "";

/* -------------------------------------------------------------------- */
/* Functions
/* -------------------------------------------------------------------- */

  async function updateCodingsTaskHeader( jsonFile, headerElement ) {

    console.log("🟨 updateCodingsTaskHeader() ")
    console.log("🛠️ Update & Create Codings Header")
    console.log("---------------------------------------------")
    console.log("📐 Defaults: ")
    console.log("➡️ jsonFile: " + jsonFile )
    console.log("➡️ headerElement: " + headerElement )

    // Check to get json file
    var data = await async_getJsonFile( jsonFile )
    console.log("➡️ data : " + data  )



    console.log("---------------------------------------------")

    /* --------------------------------------------------------------- */
    /* 🟥 Step 1/?
    /* > Get Json Data Arrays for easy common operations
    /* --------------------------------------------------------------- */

      // data - header
      var dataHeader = data.header;

      // data - header nav
      var dataHeaderNav = dataHeader.nav;


    /* --------------------------------------------------------------- */
    /* 🟥 Step 2/?
    /* > Update - Header Title
    /* --------------------------------------------------------------- */

      // Get Data
      var headerTitle = dataHeader.title;
      var headerTimeLimit = dataHeader.timeLimit;
      var headerImg = dataHeader.imgFilename;

      // Test Prints
      console.log("headerTitle = " + headerTitle )
      console.log("headerTimeLimit = " + headerTimeLimit )
      console.log("headerImg = " + headerImg)

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


    console.log("---------------------------------------------")
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
