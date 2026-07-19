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

    // only if first nav is checked - than look deeper

    // Dom Documented Loaded | First Load Check

    document.addEventListener("DOMContentLoaded", async() => {

      // window.alert("(js) - tech-nav-handler: dom-content-loaded")

      /*

        1. count all tasks from each category - java 14, ...
        2. check which radio (java, sb, ..) is checked, default radio 1 checked

        3. Do Routine - Update Codings Task Header

      */

      return new Promise(resolve => {
        resolve( );
      })


    })

  /* ---------------------------------------------------- */
  /* 🟨 Step 2/2:
  /* Radio Tech - Change Listener
  /* ---------------------------------------------------- */

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
