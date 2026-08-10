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

  // Final Content Add Point
  var docsContainer = document.getElementById("codings-docs-container");


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  // styleDocCategoryContainerFilePath
  var styleDocCategoryContainerFilePath = "data/json/codings/docs/styles/style-doc-category-container.json";

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
    /* ➡️🟥 Step 1/1
    /* > Check Update Condtion
    /* > Update - New Doc Category Containers
    /* > Condition: CodingsNav & Docs Nav = checked
    /* ------------------------------------------------------------------ */

      var updateDocsContent = false;
      updateDocsContent = await isActiveCodingsDocsNav( codingsNavRadio, docsNavRadios )

      // Should Create New Doc Category Containers ?!
      if( updateDocsContent ) {

        console.log("❇️ Start Clean Create Process - Doc Category Containers")

        /* ---------------------------------------------------------------------- */
        /* 🟥 Step 1.1 - Delete Old Doc Category Containers
        /* ---------------------------------------------------------------------- */

         console.log("➡️ Step 1/1 - Delete Old Doc Category Containers")
         console.log("⚠️ Coming Soon")

        /* ---------------------------------------------------------------------- */
        /* ➡️🟥 Step 1.2 - Create New Doc Category Containers
        /* ---------------------------------------------------------------------- */

          console.log("➡️ Step 2 - Create New Doc Category Containers")

          /* ----------------------------------------------------------------- */
          /* 🟩 Step 1.2.1 - Get File Path
          /* ----------------------------------------------------------------- */

            var docsContentFilePath = "";
            docsContentFilePath = await getDocsContentFilePath( docsNavRadios, docsContentFilePaths );
            console.log("-> " + docsContentFilePath)
            console.log("-------------------------------------")

          /* ----------------------------------------------------------------- */
          /* 🟩 Step 1.2.2 - Get Data Docs Content
          /* ----------------------------------------------------------------- */

            var dataDocsContent = await getJsonObjectFromFile( docsContentFilePath );
            // console.log("dataDocsContent:" + dataDocsContent)

          /* ----------------------------------------------------------------- */
          /* ➡️🟥 Step 1.2.3 - Create All Doc Category Containers
          /* ----------------------------------------------------------------- */

            // Get Style - Doc Category Container
            var styleDocCategoryContainer = await getJsonObjectFromFile( styleDocCategoryContainerFilePath );
            // console.log("styleDocCategoryContainer:" + styleDocCategoryContainer)

            /* ----------------------------------------------------------------- */
            // Run all throw all Doc Categories by key value
            /* ----------------------------------------------------------------- */

              for( var [categoryKey, categoryData] of Object.entries(dataDocsContent)) {

                console.log("categoryKey: " + categoryKey )
                console.log("categoryData: " + categoryData )

                // 1. Create - Doc Category Containers
                var docCategoryContainer = "";
                docCategoryContainer = await createDocCategoryContainer( styleDocCategoryContainer, categoryData );
                console.log("docCategoryContainer = " + docCategoryContainer )

                // 2. Add step by step "docCategoryContainer" to "docsContainer""
                docsContainer.appendChild( docCategoryContainer )

              }


      } else {

        console.log("🛑 Stop Creating Process - Doc Category Containers")

      }





  });
