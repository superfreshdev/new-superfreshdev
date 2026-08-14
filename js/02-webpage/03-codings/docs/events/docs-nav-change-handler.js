// console.log("🟨 docs-nav-change-handler.js")
/*
/*  Add - Radio Change Lister
/*  to: Docs Nav
*/


/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  // ➡️🟥 Step 1/1
  /* > Radio Docs Nav - Change Listener
  /* > Use correct Data to create doc category containers
  /* ---------------------------------------------------------------- */

  async function registerDocsNavListener( docsNavRadios, stylePath, docsContentPathList, docsContainer ) {

    console.log("🔩registerDocsNavListener()");
    console.log("🔺docsNavRadios(length): " + docsNavRadios.length )
    console.log("🔺stylePath: " + stylePath )
    console.log("🔺docsContentPathList: " + docsContentPathList )
    console.log("🔺docsContainer: " + docsContainer )

    // Add Radio Change Listener to given
    docsNavRadios.forEach( docRadio => {

      docRadio.addEventListener("change", async() => {

        window.alert("docRadio - changed" + docRadio.getAttribute("id"))
        console.log("docRadio - changed" + docRadio.getAttribute("id"))


        /* -------------------------------------------------------- */
        // 🟩 Step 1.1
        // > Get doc content file path
        /* -------------------------------------------------------- */

          var docsContentPath = "";
          docsContentPath = await getDocsContentFilePath( docsNavRadios, docsContentFilePaths );
          console.log("🌵-> (use): " + docsContentPath )


        /* -------------------------------------------------------- */
        // 🟩 Step 1.2
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

            await createDocsContent( stylePath, docsContentPath, docsContainer )


          } else {

            console.log("🤡 No Content View is Active - no data found")

            // delete first old created docs content
            await deleteTagElementsByCssClass("docs-category-container", docsContainer)

            await setDocsNoContentView( "grid", docsNoContentContainer )

          }



      })

    });

    return new Promise(resolve => {
      resolve( );
    })

  }
