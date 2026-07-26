// console.log("🟨 tech-nav-handler.js")



/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  // Update - Header Element
  var codingsTaksHeader = document.getElementById("codings-task-header");

  // All Tech Radios
  var techCodingsRadios = document.querySelectorAll("input[name='name-radio-codings-nav-tech']")
  // console.log("techCodingsRadios(length) = " + techCodingsRadios.length )

  // addPoint ⚠️ | add Point muss in der Hauptfunktion
  var codingsMasonryContainer = document.getElementById("codings-masonry-container");

/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

  var cardStyleConfig = "data/json/codings/tasks/config-styles/config-style-task-content.json";

/* -------------------------------------------------------------------- */
/* 🔩 Functions
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🎉 Events
/* -------------------------------------------------------------------- */


  /* ---------------------------------------------------------------------- */
  /* ➡️🟥 Step 1/2:
  /* Load | First Complete Webpage Load
  /* ---------------------------------------------------------------------- */

    // 1. Beim Laden einmalig ausführen
    // - Für Masonry muss load - Event weil das komplette DOM erst geladen werden
    // muss, damit 100% korrekt die Abtsände berechnetwerden können beim domContentLoaded
    // können Seiteneffekte passieren, das dies mal klappt und manchmal nicht - d.h
    // kaputte Layout Effekte

    window.addEventListener("load", async() => {

      // window.alert("➡️ Create: Masonry 2-Col-Layout(resp:800px) ")

      /* ----------------------------------------------------------- */
      /* ➡️🟥 Step ?/?
      /* > Create Coding Tasks by Category
      /* ----------------------------------------------------------- */

        // Get Default Data - cardStyleConfig
        var dataConfigStyle = await async_getJsonFile( cardStyleConfig )

        // Get Data - Task Content
        var jsonTaskContent = "data/json/codings/tasks/tech/codings-tech-content-java.json";
        var dataTaskContent =  await async_getJsonFile( jsonTaskContent )

        // Get Explicit Index Task Data
        // e.g category 0 - all tasks
        var categoryTasks = dataTaskContent.taskCategories[0].tasks;
        var maxTasks = categoryTasks.length;


        console.log("🎆 Category: " + 0 + " - max Tasks = " + maxTasks )

        // New Task Cards
        var newTaskCard = [];
        var taskContent = "";
        // get category 0 - task 0
        // var taskContent = categoryTasks[0];
        // var taskContent = categoryTasks[1];
        // var taskContent = categoryTasks[2];
        // var taskContent = categoryTasks[3];

        // Create all Tasks from given Category X
        for( let i=0; i < maxTasks; i++ ) {

          // Get Actually Task Content by Index
          taskContent = categoryTasks[i];
          // Create "newTaskCard[x]"
          newTaskCard.push( await createCodingTaskCard( (i+1), dataConfigStyle, taskContent ) );

        }

        // Fragement Concept because better performance of many dom creations
        // Use Fragement Concept to create in correct direction
        var fragement = document.createDocumentFragment();
        newTaskCard.forEach(card => fragement.appendChild(card))

        // Add sorted "fragement" to "addPoint" in one way
        codingsMasonryContainer.prepend(fragement)
        // await prependElementTo( newTaskCard[i], codingsMasonryContainer )


      /* ----------------------------------------------------------- */
      /* 🟥 Step ?/?
      /* > Create Masonry Layout - Codings Tasks
      /* ----------------------------------------------------------- */

        // Define Masonry Layout
        // Reminder: only first items from parent use e.g :scope > div
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

        // Create Masonry Layout with Masonry Context Object ( all datas )
        await initResponsiveMasonry( ctxMasonryTasksLayout );


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
