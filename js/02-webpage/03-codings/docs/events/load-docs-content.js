// console.log("🟨 load-docs-content.js")
/*
/*  Add - Load Event
/*  to: Docs Content
*/


/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  // Body Nav - Codings Radio
  var bodyNavCodingRadio = document.getElementById("radio-codings");
  // Docs Nav - Radios
  var docsNavRadios = document.querySelectorAll('input[name="name-radio-codings-docs-nav"]');

  // Final Content Add Point
  var docsContainer = document.getElementById("codings-docs-container");


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  var styleDocCategoryContainer = "data/json/codings/docs/config-styles/style-docs-category-container.json";

  var docContentFiles = {

    "devBasic": "data/json/codings/docs/data/data-doc-category-dev-basic.json",
    "web": "data/json/codings/docs/data/data-doc-category-web.json",
    "software": "data/json/codings/docs/data/data-doc-category-software.json",
    "backend": "data/json/codings/docs/data/data-doc-category-backend.json",
    "ai": "data/json/codings/docs/data/data-doc-category-ai.json",
    "others": "data/json/codings/docs/data/data-doc-category-others.json"

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
    /* > Try to Create - New Doc Category Containers
    /* > if codings & docs is checked
    /* ------------------------------------------------------------------ */

      var updateDocsContent = false;

      console.log("➡️ Step 1/1 - Delete Old Doc Category Containers")

        // Body Nav - Codings - must be checked
        updateDocsContent = await getCheckedStatus( bodyNavCodingRadio );
        console.log("🔺Body-Nav-Codings(checked)(1/2): " + updateDocsContent )

        // Docs Nav - andy Radio must be checked
        updateDocsContent = await isAnyRadioChecked( docsNavRadios );
        console.log("🔺Docs-Nav-(checked)(2/2): " + updateDocsContent )

      // Should Create New Doc Category Containers ?!
      if( updateDocsContent ) {

        console.log("❇️ Start Clean Create Process - Doc Category Containers")

        /* ---------------------------------------------------------------------- */
        /* ➡️🟥 Step 1.1 - Delete Old Doc Category Containers
        /* ---------------------------------------------------------------------- */

        /* ---------------------------------------------------------------------- */
        /* 🟥 Step 1.2 - Create New Doc Category Containers
        /* ---------------------------------------------------------------------- */

          // console.log("➡️ Step 2 - Create New Doc Category Containers")


      } else {

        console.log("🛑 Stop Creating Process - Doc Category Containers")


      }





  });
