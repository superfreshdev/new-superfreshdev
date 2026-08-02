// console.log("🟨 initCodingTasksInMasonry.js")
// > Start Init Codings Tasks in Masonry Container


/* -------------------------------------------------------------------- */
/* ➡️🟥 | 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 Get Task Cards From Task Category
  async function getTaskCardsFromTaskCategory( taskCategoryName, pathContentTasks ) {

    console.log("🔩⛑️ getTaskCardsFromTaskCategory()")
    // console.log("🔺 taskCategoryName : " + taskCategoryName  )
    // console.log("🔺 pathContentTasks: " + pathContentTasks )

     // Get Data - Task Categories
    var dataContentTasks = await getJsonObjectFromFile( pathContentTasks )
    var dataTaskCategories = dataContentTasks.taskCategories;

    // Find from Task Categories the correct Task Category
    var dataTaskCategory =  await getKeyDataFromJsonArrayObject( taskCategoryName, dataTaskCategories )
    // console.log("🔥dataTaskCategory= " + dataTaskCategory )

    // Get Data Task Cards from Task Category
    var dataTaskCards = dataTaskCategory.taskCards;
    // console.log("🔥dataTaskCards= " + dataTaskCards )

    return new Promise(resolve => {
      resolve( dataTaskCards );
    })


  }

  // 🟩 Rebuild New Coding Task Cards To Masonry
  async function rebuildNewCodingTaskCardsToMasonry( styleTaskCard, taskCards, masonryContainer  ) {

    console.log("🔩 rebuildNewCodingTaskCardsToMasonry()")
    console.log("🔺 styleTaskCard : " + styleTaskCard  )
    console.log("🔺 taskCards: " + taskCards )
    console.log("🔺 masonryContainer: " + masonryContainer )

    /* --------------------------------------------------------------- */
    /* 🟩 Step 1/3
    /* > Set - Coding Masonry Container ( Add Point )
    /* --------------------------------------------------------------- */

      var codingMasonryContainer = masonryContainer;

    /* --------------------------------------------------------------- */
    /* 🟩 Step 2/3
    /* > Delete - Old Task Cards
    /* --------------------------------------------------------------- */

      var oldTaskCardsSelector = "div";
      await deleteTagElements( oldTaskCardsSelector, codingMasonryContainer);

    /* --------------------------------------------------------------- */
    /* 🟩 Step 3/3
    /* > Create - All Task Cards from Data
    /* --------------------------------------------------------------- */

      // Create New Task Cards
      var newTaskCards = [];
      var maxTaskCards = taskCards.length;
      console.log("Max New Task Card to ADD= " + maxTaskCards )

      for( let i=0; i < maxTaskCards; i++ ) {

        console.log("Add New Task Card = " + (i+1) )
        newTaskCards.push( await createCodingTaskCard( (i+1), styleTaskCard, taskCards[i] ) )

        // Add "newTaskCards[x] to "codingMasonryContainer" "
        codingMasonryContainer.appendChild( newTaskCards[i] )

      }

    return new Promise(resolve => {
      resolve( );
    })

  }

/* -------------------------------------------------------------------- */
/* 🟨 | 🔩 Functions
/* -------------------------------------------------------------------- */

  // 🚀🟨 Init - CodingsTasksView
  async function initCodingTasksInMasonry( dataConfig, ctxMasonry ) {

    console.log("🔩 - initCodingTasksInMasonry()")
    // console.log("🔺 dataConfig: " + dataConfig )
    // console.log("🔺 contentTaskCategory: " + dataConfig.categoryTaskName )
    // console.log("🔺 dataConfig|pathStyleTaskCard: " + dataConfig.pathStyleTaskCard )
    // console.log("🔺 dataConfig|pathTaskContent: " + dataConfig.pathTaskContent )

    // console.log("🔺 ctxMasonry: " + ctxMasonry )
    // console.log("🔺 ctxMasonry(addPoint): " + ctxMasonry.container.getAttribute("id") )
    console.log("----------------------------------")


    /* ----------------------------------------------------------------------- */
    /* 🟩 Step 1/3
    /* > Get - Category Tasks by "Category Task Name"
    /* ----------------------------------------------------------------------- */

      // Get - TaskCategoryName, e.g basics, dataSecurity, advanced, ...
      var categoryTaskName = dataConfig.categoryTaskName;
      // Get - PathTaskContent, e.g java.json, spring-boot.json, ...
      var pathContentTasks = dataConfig.pathTaskContent;

      // Get Task Cards from Category Task Name
      var taskCards = await getTaskCardsFromTaskCategory( categoryTaskName, pathContentTasks );
      console.log("🔥taskCards(max-to-add)= " + taskCards.length )


    /* ----------------------------------------------------------------------- */
    /* 🟩 Step 2/3
    /* > Rebuild - New Coding Task Cards to Masonry
    /* ----------------------------------------------------------------------- */

      // Get Data - Style Task Card
      var pathStyleTaskCard = dataConfig.pathStyleTaskCard;
      var styleTaskCard = await getJsonObjectFromFile( pathStyleTaskCard )

      // Get Adding Container - Coding Masonry Container
      var codingMasonryContainer = ctxMasonry.container;

      // Create All Cateogry Task Cards to "Coding Masonry Container"
      await rebuildNewCodingTaskCardsToMasonry( styleTaskCard, taskCards, codingMasonryContainer );


    /* ----------------------------------------------------------------------- */
    /* 🟩 Step 3/3
    /* > Initialize - Resp Masonry by given ctxMasonry - Object
    /* ----------------------------------------------------------------------- */

      // Get Context Coding Masonry
      // > It is Responsive Coding Masonry Max Col = 3
      await initResponsiveMasonry( ctxMasonry );


    return new Promise(resolve => {
      resolve( );
    })

  }
