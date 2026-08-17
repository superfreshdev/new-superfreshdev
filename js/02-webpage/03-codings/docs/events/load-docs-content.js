// console.log("🟨 load-docs-content.js")
/*
/*  Add - Load Event
/*  to: Docs Content
*/


/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  // Body Nav - Codings Radio
  var codingsNavRadio = document.getElementById("radio-codings");

  // Docs Nav - Radios
  var docsNavRadios = document.querySelectorAll('input[name="name-radio-codings-docs-nav"]');

  // Docs Nav - Labels
  var docsNavLabels = document.querySelectorAll("#codings-docs-nav > label")

  // No Content - Docs Category Container
  var docsNoContentContainer = document.getElementById("docs-category-container-no-content");

  // Docs Content Add Point
  var docsContainer = document.getElementById("codings-docs-container");


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  var stylePath = "data/json/codings/docs/styles/style-doc-category-container.json";

  var docsContentFilePaths = {

    "devBasic": "data/json/codings/docs/data/data-doc-category-dev-basic.json",
    "web": "data/json/codings/docs/data/data-doc-category-web.json",
    "software": "data/json/codings/docs/data/data-doc-category-software.json",
    "backend": "data/json/codings/docs/data/data-doc-category-backend.json",
    "ai": "data/json/codings/docs/data/data-doc-category-ai.json",
    "others": "data/json/codings/docs/data/data-doc-category-others.json"

  }

/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 Check Is Docs Content Active ?! codings & docs nav
  async function isActiveCodingsDocsNav( codingsRadio, docsNavRadios ) {

    // console.log("isActiveCodingsDocsNav");
    // console.log("codingsRadio:" + codingsRadio)
    // console.log("docsNavRadios:" + docsNavRadios)

    var isActive = false;

    // Body Nav - Codings - must be checked
    isActive = await getCheckedStatus( codingsRadio );
    console.log("🔺Body-Nav-Codings(checked)(1/2): " + isActive )

    // Docs Nav - andy Radio must be checked
    isActive = await isAnyRadioChecked( docsNavRadios );
    console.log("🔺Docs-Nav-(checked)(2/2): " + isActive  )


    return new Promise(resolve => {
      resolve( isActive  );
    })

  }

  // 🟩 Find Docs Content File to Create
  async function getDocsContentFilePath( docsNavRadios, docsContentFilePaths ) {

    // console.log("getDocsContentFilePath()");
    // console.log("docsNavRadios:" + docsNavRadios)
    // console.log("docsContentFilePaths:" + docsContentFilePaths)

    /* ----------------------------------------------------------------------- */
    /* 🟩 Step 1/3
    /* > Get Id from checked Radios
    /* ----------------------------------------------------------------------- */

       // Get Checked Docs Nav Radio Element
      var checkedDocsNavRadio = await getCheckedRadioElement( docsNavRadios )
      var checkedDocsNavRadioId = checkedDocsNavRadio.getAttribute("id");
      console.log("-> " + checkedDocsNavRadioId )

    /* ----------------------------------------------------------------------- */
    /* 🟩 Step 2/3
    /* > Substring Id String last Part after "nav-"
    /* > e.g docs-nav-dev-basic -> dev-basic => key to filter
    /* ----------------------------------------------------------------------- */

      // Filter Docs Nav Category
      var docsNavCategory = await substringAfter( "nav-", checkedDocsNavRadioId )
      console.log("-> " + docsNavCategory)

    /* ----------------------------------------------------------------------- */
    /* 🟩 Step 3/3
    /* > Substring Id String last Part after "nav-"
    /* > e.g docs-nav-dev-basic -> dev-basic => key to filter
    /* ----------------------------------------------------------------------- */

      var useDocsContentFilePath = "";

      switch( docsNavCategory ) {

        case "dev-basic":
          useDocsContentFilePath = docsContentFilePaths.devBasic;
          break;

        case "web":
          useDocsContentFilePath = docsContentFilePaths.web;
          break;

        case "software":
          useDocsContentFilePath = docsContentFilePaths.software;
          break;

        case "backend":
          useDocsContentFilePath = docsContentFilePaths.backend;
          break;

        case "ai":
          useDocsContentFilePath = docsContentFilePaths.ai;
          break;

        case "others":
          useDocsContentFilePath = docsContentFilePaths.others;
          break;

        default:
          break;

      }


    return new Promise(resolve => {
      resolve( useDocsContentFilePath );
    })

  }

  // 🟩 Should Docs Content Create
  async function shouldDocsContentCreate( docsContentPath ) {

    console.log("🔔shouldDocsContentCreate()");
    console.log("🔔docsContentPath:" + docsContentPath);

    /* ---------------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Create Object from filePath
    /* ---------------------------------------------------------------- */

      var docsContent = await getJsonObjectFromFile( docsContentPath )
      console.log("docsContent: " + docsContent)

    /* ---------------------------------------------------------------- */
    /* ➡️🟥 Step 2/2
    /* > Check if all Docs Category are visibileView = false
    /* ---------------------------------------------------------------- */

      var shouldContentViewCreate = false;
      var foundShowViews = 0;
      var showView = "";

      var categoryKeys = Object.keys(docsContent);

      // check if minimum 1 docs category visible view is true, then exit
      for( const key of categoryKeys) {

        showView = docsContent[key].showView;

        // if not empty, jump out - minimum 1 found to create
        if( showView == "true" ) {
          foundShowViews = 1;
          break;
        }

      }

      // if minimum x1 showView true found, then allow to create content view
      if( foundShowViews > 0 ) {

        shouldContentViewCreate = true;

      }

      console.log("foundShowViews = " + foundShowViews)
      console.log("shouldContentViewCreate = " + shouldContentViewCreate )


    return new Promise(resolve => {
      resolve( shouldContentViewCreate );
    })

  }

  // 🟩 Set Docs No Content View
  async function setDocsNoContentView( cssDisplay, noContentContainer ) {

    console.log("🔔setDocsNoContentView()");
    console.log("🔔cssDisplay:" + cssDisplay);
    console.log("🔔noContentContainer:" + noContentContainer);


    switch( cssDisplay ) {

      case "grid":
        noContentContainer.style.display = "grid";
        break;

      case "none":
        noContentContainer.style.display = "none";
        break;

      default:
        noContentContainer.style.display = "none";
        break;

    }


    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

  // 🟩 Update Docs Nav Counters
  async function updateDocsNavCounters( docsNavLabels, contentPaths ) {

    console.log("🔔updateDocsNavCounters()");
    console.log("🔔docsNavLabels:" + docsNavLabels);
    console.log("🔔contentPaths:" + contentPaths);

    var docsContentPaths = [];
    var docsNavCounter = "";
    var maxContentPaths = Object.keys(contentPaths).length;
    // console.log("maxContentPaths: " + maxContentPaths)

    /* -------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Get All Doc Content Paths
    /* -------------------------------------------------------- */

      for( var [docContent, docPath] of Object.entries(contentPaths)) {

        // console.log( "🌵Key: " + docContent )
        // console.log( "🌵Path: " + docPath )
        docsContentPaths.push( docPath )

      }

      /* -------------------------------------------------------- */
      /* 🟩 Step 2/2
      /* > Count from all docsContentPaths active doc Cards
      /* > & update Docs Nav Labels
      /* -------------------------------------------------------- */

        var docsContent = "";
        var docCardsData = "";
        var docCardsCounter = "";

        // Get Each Docs Content File
        for( let i=0; i < docsContentPaths.length; i++ ) {

          // console.log("✴️ Label Update " + (i+1))
          docCardsCounter = 0;

          /* -------------------------------------------------------------- */
          /* 🟩 Step 2.1
          /* > Try Open File & Create Object
          /* -------------------------------------------------------------- */

            docContent = await getJsonObjectFromFile( docsContentPaths[i] );
            console.log("docsContent = " + docContent)

          /* -------------------------------------------------------------- */
          /* 🟩 Step 2.2
          /* > Count only Doc Cards from Doc Categories with activ
          /* -------------------------------------------------------------- */

            for( var [docCategory, docData] of Object.entries(docContent)) {

              // console.log( "🔩Key: " + docCategory )
              // console.log( "🔩Path: " + docData )

              // Only Active Doc Category allow to count doc cards
              if( docData.showView == "true") {

                // console.log("### Allow to Count")

                docCardsData = docData.docCards;

                // Count Add
                docCardsCounter += Object.keys(docCardsData).length;
                // console.log("docCardsCounter====" + docCardsCounter)

              }


            }

          /* -------------------------------------------------------------- */
          /* 🟩 Step 2.4
          /* > Add Final Counter to Label
          /* > Label should be same index like files
          /* -------------------------------------------------------------- */

            docsNavLabels[i].querySelector("div:last-child > div").innerText = "x"+docCardsCounter;



        }


    return new Promise(resolve => {
      resolve( );
    })

  }

  // 🟩 Create Docs Content To
  async function createDocsContentTo( stylePath, contentPath, docsContainer ) {

    console.log("🔔createDocsContentTo()");
    console.log("🔔stylePath:" + stylePath);
    console.log("🔔contentPath:" + contentPath);
    console.log("🔔docsContainer:" + docsContainer);


    // ⚠️ Delete Template HTML to, so comment if u want testing template
    /* ----------------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Delete Old Doc Category Containers
    /* ----------------------------------------------------------------- */

      console.log("➡️ Step 1/2 - Delete Old Doc Category Containers")
      await deleteTagElementsByCssClass("docs-category-container", docsContainer)

    /* ----------------------------------------------------------------- */
    /* 🟨 Step 2/2
    /* > Create New Doc Category Containers to "docContainer"
    /* ----------------------------------------------------------------- */

      console.log("➡️ Step 2/2 - Create New Doc Category Containers")

      /* ----------------------------------------------------------------- */
      /* 🟩 Step 1.2.2 - Get Data Docs Content
      /* ----------------------------------------------------------------- */

        var dataDocsContent = await getJsonObjectFromFile( contentPath );
        // console.log("dataDocsContent:" + dataDocsContent)

      /* ----------------------------------------------------------------- */
      /* ➡️🟨 Step 1.2.3 - Create All Doc Category Containers
      /* ----------------------------------------------------------------- */

        // Get Style - Doc Category Container
        var styleDocCategoryContainer = await getJsonObjectFromFile( stylePath );
        // console.log("styleDocCategoryContainer:" + styleDocCategoryContainer)

        /* ----------------------------------------------------------------- */
        // Run all throw all Doc Categories by key value
        /* ----------------------------------------------------------------- */

          var allowToCreate = false;

          for( var [categoryKey, categoryData] of Object.entries(dataDocsContent)) {

            console.log("-------------------------------------")
            console.log("📚 Doc Content:")
            console.log("categoryKey: " + categoryKey )
            console.log("categoryData: " + categoryData )
            console.log("-------------------------------------")

            allowToCreate = categoryData.showView;

            if( allowToCreate == "true" ) {

              console.log("🟩 Allow To Create - Docs Category Container - " + categoryKey )

              /* -------------------------------------------------------------- */
              // 1. Create - Doc Category Containers
              /* -------------------------------------------------------------- */

                var docCategoryContainer = "";
                docCategoryContainer = await createDocCategoryContainer( styleDocCategoryContainer, categoryData );
                console.log("docCategoryContainer = " + docCategoryContainer )

              /* -------------------------------------------------------------- */
              // 2. Add step by step "docCategoryContainer" to "docsContainer""
              /* -------------------------------------------------------------- */

                docsContainer.appendChild( docCategoryContainer )

            } else {

              console.log("❌ Dont Allow To Create - Docs Category Container - " + categoryKey )

            }

          }


    return new Promise(resolve => {
      resolve( );
    })

  }

  // 🟩 Create Docs View - Create Content or No Content Yet
  async function createDocsView( stylePath, docsContentPath, docsContainer, docsNoContentContainer ) {

    console.log("🔩createDocsView()")
    console.log("🔺stylePath: " + stylePath)
    console.log("🔺docsContentPath: " + docsContentPath)
    console.log("🔺docsContainer: " + docsContainer)
    console.log("🔺docsNoContentContainer: " + docsNoContentContainer)


    /* --------------------------------------------------------------------- */
    /* 🟩 Step 1/1
    /* > Should Create Docs Content View or No Content View ?!
    /* --------------------------------------------------------------------- */

      var createDocsContent = false;
      createDocsContent = await shouldDocsContentCreate( docsContentPath );

      if( createDocsContent == true ) {

        /* ----------------------------------------------------------------------- */
        // 🟩 Step 1.1
        // > Unshown - No Content View, if last time was active
        /* ----------------------------------------------------------------------- */

          await setDocsNoContentView( "none", docsNoContentContainer )

        /* ----------------------------------------------------------------------- */
        // 🟩 Step 1.2
        // > Create All Doc Category Container from Doc Content to "docsContaner"
        /* ----------------------------------------------------------------------- */

          await createDocsContentTo( stylePath, docsContentPath, docsContainer )


      } else {

        console.log("🤡 No Content View is Active - no data found")

        // delete first old created docs content
        await deleteTagElementsByCssClass("docs-category-container", docsContainer)

        await setDocsNoContentView( "grid", docsNoContentContainer )

      }


    return new Promise(resolve => {
      resolve( );
    })

  }


/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  // 🟩 Step 1/1
  /* > Load - Event ( complet web-page load )
  /* ---------------------------------------------------------------- */

    window.addEventListener("load", async() => {

      console.log("🎉 Event: Load-Event | Codings - Doc Content")
      console.log("docsNavRadios(length): " + docsNavRadios.length )

      /* ------------------------------------------------------------------ */
      /* 🟩 Step 1/2
      /* > Register - Docs Nav Listener
      /* > to Update Docs Content by changing radios
      /* ------------------------------------------------------------------ */

        await registerDocsNavListener( docsNavRadios, stylePath,
                                      docsContentFilePaths, docsContainer, docsNoContentContainer);

      /* ------------------------------------------------------------------ */
      /* 🟩 Step 2/2
      /* > Update - New Doc Category Containers
      /* > Condition: CodingsNav & Docs Nav = checked
      /* ------------------------------------------------------------------ */

        var isDocsContentActive = false;
        isDocsContentActive = await isActiveCodingsDocsNav( codingsNavRadio, docsNavRadios )


        // Is Docs Content Active ?!
        if( isDocsContentActive ) {

          /* ------------------------------------------------------------------------ */
          // ➡️🟥 Step 2.1
          // > Update Docs Nav Counters
          /* ------------------------------------------------------------------------ */

            await updateDocsNavCounters( docsNavLabels, docsContentFilePaths );

          /* ------------------------------------------------------------------------ */
          // 🟩 Step 2.2
          // > Get Docs Content File Path from Selection
          /* ------------------------------------------------------------------------ */

            var docsContentPath = "";
            docsContentPath = await getDocsContentFilePath( docsNavRadios, docsContentFilePaths );
            console.log("-> (use): " + docsContentPath )

          /* ------------------------------------------------------------------------ */
          // 🟩 Step 2.3
          // > Create Content or Show No Content Yet
          // > if in data all visibleView = false, then Show No Content Yet
          /* ------------------------------------------------------------------------ */

            await createDocsView( stylePath, docsContentPath, docsContainer, docsNoContentContainer );


        } else {

          console.log("🛑 Docs Content is acutally not active")

        }



    });
