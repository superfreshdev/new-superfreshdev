// console.log("🟨 tech-nav-tasks-handler.js")



/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  /* ---------------------------------- */
  /* Header Task Category
  /* ---------------------------------- */

    // Update - Header Element
    var codingsTaksHeader = document.getElementById("codings-task-header");

    // All Tech Radios
    var techCodingsRadios = document.querySelectorAll("input[name='name-radio-codings-nav-tech']")
    // console.log("techCodingsRadios(length) = " + techCodingsRadios.length )

  /* ---------------------------------- */
  /* Content Task Category
  /* ---------------------------------- */

    // Add Point - Coding Masonry Container
    var codingsMasonryContainer = document.getElementById("codings-masonry-container");

    // Update Category Task Info Element
    var categoryTaskInfoElement = document.querySelector("#codings-masonry-task-infos > div");


/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  // Dyn. Update Config Data for Codings Task Content
  var configCodingTaskContent = {

    "pathStyleTaskCard": "data/json/codings/tech-algos-challenges/config-styles/style-coding-task-card.json",
    "pathTaskContent": "data/json/codings/tech-algos-challenges/tech/codings-task-content-java.json",
    "categoryTaskName": "basics",

  }

  // Data - Resp Coding Masonry
  // Dom Add Point
  // Important: it must be defined only here to be flexible
  // Defintion Context - Resp Codings Masonry Container ( max 3 cols )
  var ctxMasonryTasksLayout = {

    container: document.getElementById("codings-masonry-container"),
    itemSelector: "#codings-masonry-container > div",
    gap: 16,

    breakpoints: [
      { minWidth: 0, columns: 1 }, // < 768px -> 1 col
      { minWidth: 768, columns: 2 }, // >= 768px -> 2 col
      { minWidth: 1200, columns: 3 }, // >= 1200px -> 3 col

    ]

  }

/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 Update Config - Coding Task Content
  async function updateConfigCodingTaskContent( pathStyleTaskCard, pathTaskContent, categoryTaskName, updateConfig )
  {

    console.log("updateCodingTaskConfig()")
    // console.log("🔺 pathStyleConfig: " + pathStyleConfig )
    // console.log("🔺 pathTaskContent: " + pathTaskContent )
    // console.log("🔺 categoryName: " + categoryName )
    // console.log("🔺 updateConfig: " + updateConfig )

    // Update Process
    updateConfig.pathStyleTaskCard = pathStyleTaskCard;
    updateConfig.pathTaskContent = pathTaskContent;
    updateConfig.categoryTaskName = categoryTaskName;


    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */

  /*



      ------------------------------------------------------------------------------

      To DO !!!
      🟥 1. Reload:
          - Codings checked ?
            - Tech checked | Docs Checked ? if yes, update counters e.g tech - java (max-tasks), spring boot


      🟥 1. Reload:
          1.1 - Create - Codings Task Header
          1.2 - Create Process ( Info + Codings Masonry with Cards )

          - First Radios: Tech, Algos, Challenges -> checked ? yes, then
            - Which Sub Radios is Checked ? - Java, Spring Boot ? get correct configStyleTaskCard + dataJson
              - Look is unshown radio checked, if yes ? dont create, if is checked, than look which radio of it


      🟥 Change Listener - Codings Task Header Radios, e.g Java - Basics, Advanced ... from json and check if is not unshown

  */

  /* ---------------------------------------------------------------------- */
  /* ➡️🟥 Step 1/2:
  /* Load | First Complete Webpage Load
  /* ---------------------------------------------------------------------- */

    // 1. Beim Laden einmalig ausführen
    // - Für Masonry muss load - Event weil das komplette DOM erst geladen werden
    // muss, damit 100% korrekt die Abtsände berechnet werden können beim domContentLoaded
    // können Seiteneffekte passieren, das dies mal klappt und manchmal nicht - d.h
    // kaputte Layout Effekte

    window.addEventListener("load", async() => {

      // window.alert("➡️ Create: Masonry 2-Col-Layout(resp:800px) ")


      /* ----------------------------------------------------------- */
      /* ➡️🟨 Step 1/3
      /* > Update - Config Data - Coding Task Content
      /* ----------------------------------------------------------- */

        /* ---------------------------------------------- */
        /* ↗️ Manually - Update Process
        /* ---------------------------------------------- */

          // default
          var defineJsonFileStyleTaskCard = "data/json/codings/tasks/config-styles/style-coding-task-card.json";
          var updateJsonFileTaskContent = "";
          var updateCategoryTaskName = "";

          /* ---------------------------------------------------- */
          /* 🟩 Set - New Content Category Tasks
          /* ---------------------------------------------------- */

            //➡️ Update - Content Tasks - Java
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-java.json";
            updateCategoryTaskName = "basics";

            //➡️ Update - Content Tasks - Spring Boot
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-spring-boot.json";
            updateCategoryTaskName = "basics";

            //➡️ Update - Content Tasks - Observability
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-observability.json";
            updateCategoryTaskName = "mixery";

            //➡️ Update - Content Tasks - Cloud
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-cloud.json";
            updateCategoryTaskName = "basics";

            //➡️ Update - Content Tasks - AI ( Python, )
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-ai.json";
            updateCategoryTaskName = "python";

            //➡️ Update - Content Tasks - Angular
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-angular.json";
            updateCategoryTaskName = "basics";

            //➡️ Update - Content Tasks - React Native
            updateJsonFileTaskContent = "data/json/codings/tasks/tech/codings-task-content-react-native.json";
            updateCategoryTaskName = "basics";


          /* ---------------------------------------------------- */
          /* 🟩 Update - Category Task Info
          /* ---------------------------------------------------- */

            // await updateContentTaskCategoryInfo( updateCategoryTaskName, updateJsonFileTaskContent, categoryTaskInfoElement );

          /* ---------------------------------------------------- */
          /* Update - Category Tasks
          /* ---------------------------------------------------- */

            // await updateConfigCodingTaskContent( defineJsonFileStyleTaskCard, updateJsonFileTaskContent, updateCategoryTaskName, configCodingTaskContent )


        /* ----------------------------------------------------------- */
        /* 🟩 Step 3/3
        /* > Initialiaze - Coding Tasks in Masonry
        /* ----------------------------------------------------------- */

          // await initCodingTasksInMasonry( configCodingTaskContent, ctxMasonryTasksLayout );


      return new Promise(resolve => {
        resolve( );
      })


    })

  /* ------------------------------------------------------------------------------- */
  /* ➡️🟥 Step 2/2:
  /* Radio Change Listener | Tech Nav Radios
  /* ------------------------------------------------------------------------------- */

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-java.json";

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-spring-boot.json";

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-observability.json";

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-cloud.json";

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-ai.json";

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-angular.json";

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
              jsonDataContent = "data/json/codings/tech-algos-challenges/tech/codings-task-content-react-native.json";

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
