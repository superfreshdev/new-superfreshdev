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

  // No Content - Docs Category Container
  var docsNoContentContainer = document.getElementById("docs-category-container-no-content");

  // Final Content Add Point
  var docsContainer = document.getElementById("codings-docs-container");


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  // styleDocCategoryContainerFilePath
  var stylePathDocCategoryContainer = "data/json/codings/docs/styles/style-doc-category-container.json";



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

  // 🟩 Check active codings & docs nav
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

  // ➡️🟨 Create Docs Content
  async function createDocsContent( stylePath, contentPath, docsContainer ) {

    console.log("🔔createDocsContent()");
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

          for( var [categoryKey, categoryData] of Object.entries(dataDocsContent)) {

            console.log("-------------------------------------")
            console.log("📚 Doc Content:")
            console.log("categoryKey: " + categoryKey )
            console.log("categoryData: " + categoryData )
            console.log("-------------------------------------")

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

          }


    return new Promise(resolve => {
      resolve( );
    })

  }

  // 🟩 Create Docs Content
  async function isDocsContentEmpty( docsContentPath ) {

    console.log("🔔isDocsContentEmpty()");
    console.log("🔔docsContentPath:" + docsContentPath);

    /* ---------------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Create Object from filePath
    /* ---------------------------------------------------------------- */

      var docsContent = await getJsonObjectFromFile( docsContentPath )
      console.log("docsContent: " + docsContent)

    /* ---------------------------------------------------------------- */
    /* ➡️🟥 Step 2/2
    /* > Check if all title = "", then no content view is active
    /* ---------------------------------------------------------------- */

      var isContentEmpty = true;

      var foundCategoryTitle = 0;
      var categoryKeys = Object.keys(docsContent);

      for( const key of categoryKeys) {

        var title = docsContent[key].title;

        // if not empty, jump out - minimum 1 found to create
        if( title != "" ) {
          foundCategoryTitle = 1;
          break;
        }

      }

      if( foundCategoryTitle != 0 ) {

        isContentEmpty = false;

      }

      console.log("isContentEmpty = " + isContentEmpty )


    return new Promise(resolve => {
      resolve( isContentEmpty );
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
/* 🎉 Events
/* -------------------------------------------------------------------- */


  /* ---------------------------------------------------------------- */
  // ➡️🟥 Step 1/1
  /* > Load - Event ( complet web-page load )
  /* > ⚠️ Maybe u need only DomDocumentLoaded, dont must be load
  /* ---------------------------------------------------------------- */

  window.addEventListener("load", async() => {

    console.log("🎉 Event: Load-Event | Codings - Doc Content")
    console.log("docsNavRadios(length): " + docsNavRadios.length )

    /* ------------------------------------------------------------------ */
    /* 🟩 Step 1/2
    /* > Register - Docs Nav Listener
    /* > to Update Docs Content by changing radios
    /* ------------------------------------------------------------------ */

      await registerDocsNavListener( docsNavRadios, stylePathDocCategoryContainer,
                                     docsContentFilePaths, docsContainer);

    /* ------------------------------------------------------------------ */
    /* ➡️🟥 Step 2/2
    /* > Update - New Doc Category Containers
    /* > Condition: CodingsNav & Docs Nav = checked
    /* ------------------------------------------------------------------ */

      var updateDocsContent = false;
      updateDocsContent = await isActiveCodingsDocsNav( codingsNavRadio, docsNavRadios )

      // ⚠️ not show - style no content
      // updateDocsContent = false;


      // Should Create New Doc Category Containers ?!
      if( updateDocsContent ) {


        /* -------------------------------------------------------- */
        // 🟩 Step 1.1
        // > Get doc content file path
        /* -------------------------------------------------------- */

          var docsContentPath = "";
          docsContentPath = await getDocsContentFilePath( docsNavRadios, docsContentFilePaths );
          console.log("-> (use): " + docsContentPath )


        /* -------------------------------------------------------- */
        // 🟥 Step 1.2
        // > Show - No Content Container, if Content is empty
        // > check if all title = ""
        /* -------------------------------------------------------- */

          var isNoContentViewActive = false;
          isNoContentViewActive = await isDocsContentEmpty( docsContentPath );

          if( isNoContentViewActive == false ) {

            /* ----------------------------------------------------------------------- */
            // 🟩 Step 1.3
            // > Unshown - No Content View, if last time was active
            /* ----------------------------------------------------------------------- */

              await setDocsNoContentView( "none", docsNoContentContainer )

            /* ----------------------------------------------------------------------- */
            // ➡️🟨 Step 1.4
            // > Create All Doc Category Container from Doc Content to "docsContaner"
            /* ----------------------------------------------------------------------- */

            await createDocsContent( stylePathDocCategoryContainer, docsContentPath, docsContainer )


          } else {

            console.log("🤡 No Content View is Active - no data found")

            // delete first old created docs content
            await deleteTagElementsByCssClass("docs-category-container", docsContainer)

            await setDocsNoContentView( "grid", docsNoContentContainer )

          }


      } else {

        console.log("🛑 Stop Creating Process - Doc Category Containers")

      }



  });
