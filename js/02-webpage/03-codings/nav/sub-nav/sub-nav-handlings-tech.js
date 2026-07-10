console.log("🟨 sub-nav-handlings-tech.js")


// codings-sub-nav-tech.js

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
  /* 🟥 Step 1/2:
  /* Dom Documented Loaded | First Load Check
  /* ---------------------------------------------------- */

    // Dom Documented Loaded | First Load Check

  /* ---------------------------------------------------- */
  /* 🟥 Step 2/2:
  /* Radio Change Listener
  /* ---------------------------------------------------- */

    for( let i=0; i < techCodingsRadios.length; i++ ) {


      // Add Radios Change Listeners
      techCodingsRadios[i].addEventListener( "change", async() => {

        // get css id to decide
        var cssIdCategory = techCodingsRadios[i].getAttribute("id")
        // console.log("Actually Changed Radio ID = " + cssIdCategory )

        var jsonDataDefault = "data/json/codings/tasks/codings-tech-content-default-sets.json";
        var jsonDataContent = "";

        // decide which json should read by css id
        switch( cssIdCategory ) {

          /* ------------------------------------------ */
          /* Java
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-java":

            console.log("➡️📄 Read Json File - Java")

            /*

              1. Update - Codings Task Header
              2. Update & New Create - Codings Task Cards

              #### 4h - Plan #####

              1. Sauber JSONs - defaults in einer ( besser wartbar )
              2. clean code + saubere header info ausgaben

              3. update - header daten ohne nav + kontrolle auf 2 events ( dom loaded + change radio )
              4. uppate / create - nav radios / create labels

              Fokus:
              >> Reload + Radio Change - Codings Task Header 100%




            */

            // Update - Codings Task Header
            jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-java.json";
            await updateCodingsTaskHeader( jsonDataDefault, jsonDataContent, codingsTaksHeader );

            // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* Spring Boot
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-spring-boot":

            console.log("➡️📄 Read Json File - Spring Boot")

            // Update - Codings Task Header
            jsonDataContent = "data/json/codings/tasks/tech/codings-tech-content-spring-boot.json";
            await updateCodingsTaskHeader( jsonDataDefault, jsonDataContent, codingsTaksHeader );

            // Update - Codings Masonry

            break;

          /* ------------------------------------------ */
          /* Obervability
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-observability":

            console.log("➡️📄 Read Json File - Observability")
            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-observability.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

            break;

          /* ------------------------------------------ */
          /* Cloud
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-cloud":

            console.log("➡️📄 Read Json File - Cloud")

            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-cloud-gcp.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

            break;

          /* ------------------------------------------ */
          /* AI
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-ai-ml-llm":

            console.log("➡️📄 Read Json File - AI")

            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-ai.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );


            break;

          /* ------------------------------------------ */
          /* Python
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-pyhton":

            console.log("➡️📄 Read Json File - Python")

            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-python.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

            break;

          /* ------------------------------------------ */
          /* Angular
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-angular":

            console.log("➡️📄 Read Json File - Angular")

            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-angular.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

            break;

          /* ------------------------------------------ */
          /* React Native
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-react-native":

            console.log("➡️📄 Read Json File - React Native")

            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-react-native.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

            break;

          default:
            return;

        }


      })



    }

/* -------------------------------------------------------------------- */
/* 🚀 Execute
/* -------------------------------------------------------------------- */
