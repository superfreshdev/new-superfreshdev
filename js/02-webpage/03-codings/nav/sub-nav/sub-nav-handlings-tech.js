console.log("🟨 sub-nav-handlings-tech.js")


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

        var jsonFile = "";

        // decide which json should read by css id
        switch( cssIdCategory ) {

          /* ------------------------------------------ */
          /* Java
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-java":

            console.log("➡️📄 Read Json File - Java")
            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-java.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

            break;

          /* ------------------------------------------ */
          /* Spring Boot
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-spring-boot":

            console.log("➡️📄 Read Json File - Spring Boot")
            jsonFile = "data/json/codings/tasks/tech/codings-tech-content-spring-boot.json";

            // Update - Codings Task Header
            await updateCodingsTaskHeader( jsonFile, codingsTaksHeader );

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
            break;

          /* ------------------------------------------ */
          /* Python
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-pyhton":
            console.log("➡️📄 Read Json File - Python")
            break;

          /* ------------------------------------------ */
          /* Angular
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-angular":
            console.log("➡️📄 Read Json File - Angular")
            break;

          /* ------------------------------------------ */
          /* React Native
          /* ------------------------------------------ */
          case "radio-codings-nav-tech-react-native":
            console.log("➡️📄 Read Json File - React Native")
            break;

          default:
            return;

        }


      })



    }

/* -------------------------------------------------------------------- */
/* 🚀 Execute
/* -------------------------------------------------------------------- */
