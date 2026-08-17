// console.log("🟨 docs-nav-change-handler.js")
/* > Radio Change Lister - Docs Nav


/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------------------- */
  // 🟩 Step 1/1
  /* > Radio Change Listener - Docs Nav
  /* ---------------------------------------------------------------- */

  async function registerDocsNavListener( navRadios, stylePath, contentPaths, docsContainer, docsNoContentContainer ) {

    console.log("🔩registerDocsNavListener()");
    console.log("🔺navRadios(length): " + navRadios.length )
    console.log("🔺stylePath: " + stylePath )
    console.log("🔺contentPaths: " + contentPaths )
    console.log("🔺docsContainer: " + docsContainer )
    console.log("🔺docsNoContentContainer: " + docsNoContentContainer )

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


        /* ------------------------------------------------------------------------ */
        // 🟩 Step 1.2
        // > Create Content or Show No Content Yet
        // > if in data all visibleView = false, then Show No Content Yet
        /* ------------------------------------------------------------------------ */

          await createDocsView( stylePath, docsContentPath, docsContainer, docsNoContentContainer );


      })

    });

    return new Promise(resolve => {
      resolve( );
    })

  }
