// console.log("🟨 docs-nav-change-handler.js")
/* > Radio Change Lister - Docs Nav


/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  // 🟩 Step 1/1
  /* > Radio Change Listener - Docs Nav
  /* ---------------------------------------------------------------- */

  async function registerDocsNavListener( navRadios, stylePath, contentPaths, docsContainer ) {

    console.log("🔩registerDocsNavListener()");
    console.log("🔺navRadios(length): " + navRadios.length )
    console.log("🔺stylePath: " + stylePath )
    console.log("🔺contentPaths: " + contentPaths )
    console.log("🔺docsContainer: " + docsContainer )

    // Add Radio Change Listener to given
    navRadios.forEach( docRadio => {

      docRadio.addEventListener("change", async() => {

        window.alert("docRadio - changed" + docRadio.getAttribute("id"))
        console.log("docRadio - changed" + docRadio.getAttribute("id"))


        /* -------------------------------------------------------- */
        // 🟩 Step 1.1
        // > Get Defined Docs Content File Path by Selection
        /* -------------------------------------------------------- */

          var docsContentPath = "";
          docsContentPath = await getDocsContentFilePath( navRadios, docsContentFilePaths );
          console.log("🌵-> (use): " + docsContentPath )


        /* -------------------------------------------------------------------------- */
        // ➡️🟥 Step 1.2
        // > Create Content or Show No Content Yet
        // > if in data all visibleView = false, then Show No Content Yet
        /* -------------------------------------------------------------------------- */

          var createDocsContent = false;
          createDocsContent = await shouldDocsContentCreate( docsContentPath );

          if( createDocsContent == true ) {

            console.log("🟩 Update Data in Docs Content Found - Create Docs Category Containers")

            /* ----------------------------------------------------------------------- */
            // 🟩 Step 1.2.1
            // > Unshown - No Content View
            // > because if it was last time active, than we should unshown now
            /* ----------------------------------------------------------------------- */

              await setDocsNoContentView( "none", docsNoContentContainer )

            /* ----------------------------------------------------------------------- */
            // 🟩 Step 1.2.1
            // > Create All Doc Category Container from Doc Content to "docsContaner"
            /* ----------------------------------------------------------------------- */

              await createDocsContentTo( stylePath, docsContentPath, docsContainer )


          } else {

            console.log("❌ No Update Data in Docs Content Found - Show No Content Yet")

            // delete all before created docs category containers ( old docs content )
            await deleteTagElementsByCssClass("docs-category-container", docsContainer)

            // Set - Docs No Content View
            await setDocsNoContentView( "grid", docsNoContentContainer )

          }



      })

    });

    return new Promise(resolve => {
      resolve( );
    })

  }
