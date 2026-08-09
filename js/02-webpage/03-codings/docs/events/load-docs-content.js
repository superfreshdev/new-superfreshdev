// console.log("🟨 load-docs-content.js")
/*
/*  Add - Load Event
/*  to: Docs Content
*/


/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  // Final Content Add Point
  var docsContainer = document.getElementById("codings-docs-container");

  // Radios - Docs Nav
  var docsNavRadios = document.querySelectorAll('input[name="name-radio-codings-docs-nav"]');


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  /*

      🟩 100 % - Perfekte Wartbarkeit

        - category + doc cards hinzufügen in json und zack update iss da

  */

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
    /* Step 1/?
    /* > Create New Docs Category Containers by checked conditions
    /* > codings + docs must be checked
    /* ------------------------------------------------------------------ */

      // Step 1.1 - Delete Old Doc Category Containers

      // Step 1.2 - Create New Doc Category Containers from Checked Docs Nav State


  });
