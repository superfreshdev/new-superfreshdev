console.log("🟨 codings-nav-handler.js")

//

/* -------------------------------------------------------------------- */
/* 🏠 DOM Elements
/* -------------------------------------------------------------------- */

  var techNav = document.getElementById("codings-sub-nav-tech");
  var techNavMaxCounters = techNav.querySelectorAll("label > div:last-child > div")
  // console.log("techNavMaxCounters = " + techNavMaxCounters.length );

/* -------------------------------------------------------------------- */
/* 👾 Variables
/* -------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
/* 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // Update - Codings Nav Max Tasks
  async function getCodingsMaxTasks( pathContentTasks ) {

    // console.log("getCodingsMaxTasks()")
    // console.log("🔺 pathContentTasks: " + pathContentTasks)

      var maxTasks = 0;
      var taskCounter = "";

      var contentTasks = await getJsonObjectFromFile( pathContentTasks )
      var categoryNames = contentTasks.taskCategories;
      // console.log("categoryNames: " + categoryNames)

      Object.entries(categoryNames).forEach(([ name, data ]) => {

        // console.log("name = " + name )
        // console.log("Max Cards  = " + data.taskCards.length )

        taskCounter = data.taskCards.length;
        maxTasks += taskCounter;

      });

      // console.log("🔥 Max Tasks = " + maxTasks )

     return new Promise(resolve => {
      resolve( maxTasks );
    })

  }

  // ⚠️ Update All Codings Nav Category Tasks  | updateAllCodingsNavCategoryTasks | pathFiles, maxCounterElements
  // Update All Coding Nav Max Tasks | CategoryTaskFiles

  async function updateAllCodingNavMaxTasks( contentTaskPaths, counterElements ) {

    console.log("🔩⛑️ updateAllCodingsNavCategoryTasks()")
    console.log("🔺 contentTaskPaths: " + contentTaskPaths)
    console.log("🔺 counterElements: " +  counterElements)
    console.log("🔺 Max - counterElements: " +  counterElements.length )

    /* ---------------------------------------------------------- */
    /* Step 1
    /* > Update all Max Task Counter for each max counter Element
    /* ---------------------------------------------------------- */

      var maxCategories = Object.keys(contentTaskPaths).length;
      console.log("maxCategories: " + maxCategories)


      var pathContentTasks = "";
      var contentName = "";
      var maxTasks = "";

      for( let i=0; i < maxCategories; i++ ) {

        console.log("💾 Content Task File: " + (i+1) )

        // Get Key - Content Name
        contentName = Object.keys(contentTaskPaths)[i];
        console.log("💾 contentName: " + contentName )

        // Get Value - Path Name
        pathContentTasks = Object.values(contentTaskPaths)[i];
        console.log("💾 categoryPath: " + pathContentTasks )

        // Get Max Tasks of Category
        maxCategoryTasks = await getCodingsMaxTasks( pathContentTasks )
        console.log("🔥 Max Category Tasks: " + maxCategoryTasks )

        // Update Max Category Tasks each Coding Nav Element
        techNavMaxCounters[i].innerText = maxCategoryTasks;

      }

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

  1. Reload
    - method()
      - which radio is checked ? which content should be load ?

  2. Codings Nav - Radio Change Listener
    - same method() by radio change listern - get key of radio

*/

  var radioCodingsNavs = document.querySelectorAll('input[name="name-radio-codings-nav"]');
  console.log("🔺 radioCodingsNavs(length) = " + radioCodingsNavs.length )

  // configLoadTaskContent

  /* ---------------------------------------------------------------------- */
  /* ➡️🟥 Step 1/2:
  /* Load | First Complete Webpage Load
  /* ---------------------------------------------------------------------- */

    window.addEventListener("load", async() => {


      /*

          1. Checker - is Codings = checked ?
            - Is Tech,Algos, Challenges - Checked ? - Create Task Cards
            - Is Kits checked ? do kits
            - Is Docs checked ? do docs
            - Is Unshown checked ? do nothing

            = get checked of codings + coding nav checked id

      */


    });

  /* ---------------------------------------------------------------------- */
  /* 🟥 Step 2/2:
  /* Radio Change Listener | Codings Nav
  /* > Tech, Algos, Challenges, Kits, Docs, Unshown
  /* ---------------------------------------------------------------------- */

    radioCodingsNavs.forEach(radio => {

      radio.addEventListener("change", async() => {


        /* ----------------------------------------------------------------- */
        /* 🟩 Step 1/
        /* > Get Selected Nav Topic Name
        /* ----------------------------------------------------------------- */

          var navTopicId = radio.id;
          var navTopicName = getLastGroupSegment( navTopicId, "-" )
          console.log("navTopicName = " + navTopicName )


        /* ----------------------------------------------------------------- */
        /* ➡️🟥 Step 2/
        /* > Update Max Tasks from Selected Nav Topic
        /* ----------------------------------------------------------------- */

          // 🟩 new
          var configContentTaskPaths  = {

            "tech": {

              "java": "data/json/codings/tasks/tech/codings-task-content-java.json",
              "springBoot": "data/json/codings/tasks/tech/codings-task-content-spring-boot.json",
              "observability": "data/json/codings/tasks/tech/codings-task-content-observability.json",
              "cloud": "data/json/codings/tasks/tech/codings-task-content-cloud.json",
              "ai": "data/json/codings/tasks/tech/codings-task-content-ai.json",
              "angular": "data/json/codings/tasks/tech/codings-task-content-angular.json",
              "reactNative": "data/json/codings/tasks/tech/codings-task-content-react-native.json"

            },

            "algos": {

              "basics": "data/json/codings/tasks/tech/codings-task-content-java.json",
              "leetCode": "data/json/codings/tasks/tech/codings-task-content-spring-boot.json",
              "advanced": "data/json/codings/tasks/tech/codings-task-content-observability.json",

            },

            "challenges": {

              "miniGames": "miniGames-",
              "twoAndHalf": "twoAndHalf",
              "fourAndHalf": "fourAndHalf",

            }

          }

          var contentTaskPaths = "";


          // ⚠️ maxTasks
          var maxTasks = "";

          switch( navTopicName ) {

            case "tech":

              window.alert("➡️ Update Max Tasks - Tech Nav")

              // Single Max Task
              // usingContentFiles = contentFilesOfCodingsTasks.tech.java;
              // maxTasks = await getCodingsMaxTasks( usingContentFiles, "divLabel");
              // console.log("🔥 Max Tasks = " + maxTasks )

              // All Max Tasks
              contentTaskPaths = configContentTaskPaths.tech;
              await updateAllCodingNavMaxTasks( contentTaskPaths, techNavMaxCounters )


              break;

            case "algos":

              window.alert("➡️ Update Max Tasks - Codings Task Header Nav (algos)")

              // Single Max Task
              // usingContentFiles = contentFilesOfCodingsTasks.tech.springBoot;
              // maxTasks = await getCodingsMaxTasks( usingContentFiles, "divLabel");
              // console.log("🔥 Max Tasks = " + maxTasks )

              // All Max Tasks
              contentTaskPaths = configContentTaskPaths.algos;
              await updateAllCodingNavMaxTasks( contentTaskPaths, techNavMaxCounters )

              break;

            case "challenges":
              window.alert("➡️ Update Max Tasks - Codings Task Header Nav (challenges)")
              break;

            case "kits":
              window.alert("➡️ Update Max Tasks - Tech Kits")
              break;

            case "docs":
              window.alert("➡️ Update Max Tasks - Tech Docs")
              break;

            default:
              break;

          }








      })

    })
