// console.log("🟨 handle-update-masonryCodingsItems.js")


/* -------------------------------------------------------------------------- */
/* 🔩 | Variables
/* -------------------------------------------------------------------------- */

  /* --------------------------------------------- */
  /* 💾 | JSON Data - Task Categories - Tech
  /* --------------------------------------------- */

    // Json Data - Java
    var jsonPathCodingTasks_java = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

    // Json Data - Spring Boot
    var jsonPathCodingTasks_springBoot = "data/json/more-it/codings/masonries/tech/spring-boot-task-categories.json";

    // Json Data - Microservices
    var jsonPathCodingTasks_microservices = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

    // Json Data - Cloud GCP
    var jsonPathCodingTasks_cloudgcp = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

    // Json Data - Angular
    var jsonPathCodingTasks_angular = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

    // Json Data - Python
    var jsonPathCodingTasks_python = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

    // Json Data - React Native
    var jsonPathCodingTasks_reactNative = "data/json/more-it/codings/masonries/tech/java-task-categories.json";


  /* --------------------------------------------- */
  /* 💾 | JSON Data -Task Categories - Algos
  /* --------------------------------------------- */

    // Json Data - Algos
    var jsonPathCodingTasks_algos = "data/json/more-it/codings/masonries/tech/java-task-categories.json";

  /* --------------------------------------------- */
  /* 💾 | JSON Data -Task Categories - Leetcode
  /* --------------------------------------------- */

    // Json Data - Leetcode
    var jsonPathCodingTasks_leetcode = "data/json/more-it/codings/masonries/tech/java-task-categories.json";


  /* --------------------------------------------- */
  /* 💾 | JSON Data -Task Categories - Challenges
  /* --------------------------------------------- */

    // Json Data - Challenges
    var jsonPathCodingTasks_challenges = "data/json/more-it/codings/masonries/tech/java-task-categories.json";






/* -------------------------------------------------------------------------- */
/* 🚀 Execute | Async Function
/* > Handle Update | Masonry Codings Items
/* > using x2 indizies for correct updating
/* -------------------------------------------------------------------------- */

  async function handleUpdateMasonryCodingsItems( radioCodings, radioTechCodings ) {


    // console.log("handleUpdateMasonryCodingsItems()")

    /* --------------------------------------------------------- */
    /* 🔩 | Variables
    /* --------------------------------------------------------- */

      // Radios - nav Codings
      var checkedIndexRadioCodings = await async_get_checked_radioIndex( radioCodings )
      var maxRadioCodings = radioCodings.length;

      // Radios - tech nav Codings
      var checkedIndexRadioTechCodings = await async_get_checked_radioIndex( radioTechCodings )

      // jsonPath - category tasks
      var jsonPathCodingCategoryTasks = "";

    /* --------------------------------------------------------- */
    /* 🖨️ | Test Prints
    /* --------------------------------------------------------- */

      console.log("⚡ maxRadioCodings= " + maxRadioCodings)
      console.log("⚡ checkedIndexRadioTechCodings= " + checkedIndexRadioTechCodings )

    /* --------------------------------------------------------------------- */
    /* Step 1/1:
    /* > Chech which "radioCodings" is checked
    /* --------------------------------------------------------------------- */

      switch( checkedIndexRadioCodings ) {

        // Tech - Sub Navs - Java, Spring Boot, ...
        case 0:

            console.log("🧱 Create | Tech Sub | MasonryItems")
            console.log("🧱 Tech Sub Checked Index = " + checkedIndexRadioTechCodings )

            // Look up for sub checked index
            switch( checkedIndexRadioTechCodings ) {

              // Java
              case 0:

                console.log("➡️ Create | Masonry Items = Java" )

                // Update - ⚠️ Clean Code machen
                var addPointMasonryJavaContainer = document.getElementById("masonry-tech-java-container");
                await createCodingMasonryItems( jsonPathCodingTasks_java,
                                                addPointMasonryJavaContainer )


                break

              // Spring Boot
              case 1:

                  console.log("➡️ Create | Masonry Items = Spring Boot" )

                  // Update - ⚠️ Clean Code machen
                  var addPointMasonryJavaContainer = document.getElementById("masonry-tech-spring-boot-container");
                  await createCodingMasonryItems( jsonPathCodingTasks_springBoot,
                                                  addPointMasonryJavaContainer )

                break;

              // Microservices
              case 2:
                console.log("➡️ Create | Masonry Items = Microservices" )
                break;

              // Cloud GCP
              case 3:
                break;

              // Angular
              case 4:
                break;

              // Python
              case 5:
                break;

              // React Native
              case 6:
                break;

              default:
                return;

            }

          break;

        // Algos
        case 1:
          console.log("🧱 Create | MasonryItems | Algos ")
          break;

        // Leetcode
        case 2:
          console.log("🧱 Create | MasonryItems | Leetcode ")
          break;

        // Challenges
        case 3:
          console.log("🧱 Create | MasonryItems | Challenges ")
          break;

        // Unshown
        default:

          // Delete Old Dom Elements "clean up"
          console.log("🧼 Delete | Old Dom Elements | Clean Up")

          break;


      }

    return new Promise(resolve => {
      resolve( );
    })

  }
