console.log("🟨 supdate-codings-task-header.js")

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
    console.log("codingsHeaderNavRadios(length) = " + codingsHeaderNavRadios.length )


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

      console.log("---------------------------------------------")
      console.log("📃 Default Paths:  ")
      console.log("➡️ jsonTaskContent(file): " + jsonTasksContent )
      console.log("➡️ path - iconBlack: " +  pathIconBlack )
      console.log("➡️ path - iconGrey: " + pathIconGrey )
      console.log("➡️ path - imgHeader: " + pathImgHeader )
      console.log("---------------------------------------------")


    /* ---------------------------------------------------------- */
    /* 🟩 Step 3:
    /* > Update Header Codings Tasks - Meta
    /* ---------------------------------------------------------- */

      // Var - Data
      var headerTitle = jsonTasksContent.header.title;
      var headerTimeLimit = jsonTasksContent.header.timeLimit;
      var fullPathImgHeader = pathImgHeader + jsonTasksContent.header.imgFilename;

      console.log("📃 Header Data:  ")
      console.log("➡️ headerTitle: " + headerTitle )
      console.log("➡️ headerTimeLimit: " + headerTimeLimit )
      console.log("➡️ fullPathImgHeader: " +  fullPathImgHeader )
      console.log("---------------------------------------------")

      // Update - Header Title
      await asyncUpdateTextFromElement( headerTitle, domCodingsHeaderTitle );

      // Update - Header Time Block
      await asyncUpdateTextFromElement( headerTimeLimit, domCodingsHeaderTimeBlock );

      // Update - Header Img
      await asyncUpdateImgSrc( fullPathImgHeader, domCodingsHeaderImg );


    /* ---------------------------------------------------------- */
    /* ➡️🟥 Step 4:
    /* > Update / Create - Header Codings Tasks - Nav
    /* ---------------------------------------------------------- */


      /* ----------------------------------------------------- */
      /* ➡️🟥 [1/2] | Check Exist Radios on Add Point ?
      /* ----------------------------------------------------- */

        /* ---------------------------------------------------------- */
        /* 🟩 Radio Array Exist ( java - basics, ad, libs, debug )
        /* ---------------------------------------------------------- */

          // codingsHeaderNavRadios

          /*

            1. hole radios aus json
            2. schaue ob die existieren in addPoint - falls ja, erstelle nur labels

          */

        /* ---------------------------------------------------------- */
        /* 👷 Static | New Dummy Radio Array ( dont exist)
        /* ---------------------------------------------------------- */

          const radioArray = [
            document.createElement('input'),
            document.createElement('input'),
            document.createElement('input')
          ];

          radioArray.forEach((radio, index) => {
            radio.type = 'radio';         // Macht es zu einem Radio-Button
            radio.name = 'gruppe1';       // Gleicher Name verknüpft sie als Gruppe
            radio.value = 'wert' + index; // Eindeutiger Wert für jeden Button

          });


          // console.log("radioArray = " + radioArray.length )

        /* ---------------------------------------------------------- */
        /* 👷 Dynamic | New Dummy Radio Array ( dont exist)
        /* ---------------------------------------------------------- */

          var newRadios = [];

          for( let i=0; i < 3; i++) {


            if( i != 2) {

              newRadios.push( await asyncCreateRadio( "id-"+i, "Name-X", false ) );

            } else {

              newRadios.push( await asyncCreateRadio( "id-"+i, "Name-X", true ) );

            }

          }

          console.log("newRadios Length = " + newRadios.length )


          // exist yes = dont create radios , no = create radios
          var existRadios = "";
          existRadios = await asyncExistRadiosInElement( newRadios, rowContainerCodingsContent );


          if( !existRadios ) {

            console.log("🟩🔩 Create Radios")

            // 1. Create New Radios

            newRadios.forEach(element => {

              console.log(element.getAttribute("id"))

            });

            // 2. Prepend New Radios To Element
            await asyncPrependRadiosToElement( newRadios, rowContainerCodingsContent );

            // Test Append
            // await asyncAppendRadiosToElement( newRadios, rowContainerCodingsContent );




          } else {
            console.log("❌🔩 Dont Create Radios")
          }


        /*


          0. Check if Create Radio dont exist
          1. Create Radio Prepend To

            + css styles extra für diese element machen
            name= name-radio-codings-header-nav:checked | radio-codings-header-nav-java-basics | java-advanced | ...

        */



      // 🟥 2. Create Nav Labels from Codings Header Tasks
      /* ----------------------------------------------------- */
      /* 🟥 [2/2] | Check Exist Radios on Add Point ?
      /* ----------------------------------------------------- */








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
