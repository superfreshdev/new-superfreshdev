// console.log("🟨 codings-tech-nav.js")


/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  // Update - Header Element
  var codingsTaksHeader = document.getElementById("codings-task-header");

  // All Tech Radios
  var techCodingsRadios = document.querySelectorAll("input[name='name-radio-codings-nav-tech']")
  // console.log("techCodingsRadios(length) = " + techCodingsRadios.length )

/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */

  /* ---------------------------------------------------- */
  /* ➡️🟥 Step 1/2:
  /* Dom Documented Loaded | First Load Check
  /* ---------------------------------------------------- */


    // 1. Beim Laden einmalig ausführen
    // - Für Masonry muss load - Event weil das komplette DOM erst geladen werden
    // muss, damit 100% korrekt die Abtsände berechnetwerden können beim domContentLoaded
    // können Seiteneffekte passieren, das dies mal klappt und manchmal nicht - d.h
    // kaputte Layout Effekte
    window.addEventListener("load", async() => {

      // window.alert("➡️ Create: Masonry 2-Col-Layout(resp:800px) ")

      // layout, items, "columns=max columns = 2", ctx
      // var codingsMasonryTasksLayout = document.getElementById("codings-masonry-container");
      // var codingsMasonryTasks = codingsMasonryTasksLayout.children;
      // console.log("codingsMasonryTasks.l= " + codingsMasonryTasks.length )
      // var maxColumns = 2;

      var ctxMasonryTasksLayout = {

        container: document.getElementById("codings-masonry-container"),
        itemSelector: ".m-item",
        gap: 16,

        breakpoints: [
          { minWidth: 0, columns: 1 }, // < 800px -> 1 col
          { minWidth: 768, columns: 2 }, // >= 800px -> 2 col
          { minWidth: 1200, columns: 3 }, // >= 1400px -> 3 col
        ]

      }

      // Create Masonry Layout with context data object of Masonry
      await initResponsiveMasonry( ctxMasonryTasksLayout );



      return new Promise(resolve => {
        resolve( );
      })


    })




    // 3. Radio Change Listener -
    for( let i=0; i < techCodingsRadios.length; i++ ) {


      // Add Radios Change Listeners
      techCodingsRadios[i].addEventListener( "change", async() => {

        // get css id to decide
        var cssIdCategory = techCodingsRadios[i].getAttribute("id")
        // console.log("Actually Changed Radio ID = " + cssIdCategory )

        var jsonDataContent = "";

        // decide which json should read by css id
        switch( cssIdCategory ) {

          /* ------------------------------------------ */
          /* ➡️🟨 Java
          /* ------------------------------------------ */

          case "radio-codings-nav-tech-java":

            console.log("❇️📄 Read Json File - Java")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-java.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* ➡️🟨 Spring Boot
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-spring-boot":

            console.log("❇️📄 Read Json File - Spring Boot")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-spring-boot.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* 🟨 Obervability
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-observability":

            console.log("❇️📄 Read Json File - Observability")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-observability.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* 🟨 Cloud
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-cloud":

            console.log("❇️📄 Read Json File - Cloud")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-cloud-gcp.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* 🟨 AI
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-ai-ml-llm":

            console.log("❇️📄 Read Json File - AI")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-ai.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry


            break;

          /* ------------------------------------------ */
          /* 🟨 Python
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-pyhton":

            console.log("❇️📄 Read Json File - Python")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-python.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* 🟨 Angular
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-angular":

            console.log("❇️📄 Read Json File - Angular")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-angular.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* 🟨 React Native
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-react-native":

            console.log("❇️📄 Read Json File - React Native")

              // Get Data
              jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-react-native.json";

              // Update - Codings Task Header
              await updateCodingsTaskHeader( jsonDataContent, codingsTaksHeader );

              // Update - Codings Masonry


            break;

          default:
            return;

        }


      })



    }

/* -------------------------------------------------------------------- */
/* 🚀 Execute
/* -------------------------------------------------------------------- */
