// console.log("🟨 creating-process-codings-task-card.js")


/* -------------------------------------------------------------------- */
/* 🟩 | 🔩⛑️ Help Functions
/* -------------------------------------------------------------------- */

  // 🟩 Create - Task Cards from Category
  async function createTaskCardsFromCategory( cardStyleConfig, categoryTasks ) {

    console.log("🔩 - createTaskCardsFromCategory()")
    console.log("➡️ cardStyleConfig: " + cardStyleConfig )
    console.log("➡️ categoryTasks: " + categoryTasks )

    /* ---------------------------------------------------------- */
    /* 🟩 Step 1/1
    /* > Create - Task Cards by Category
    /* ---------------------------------------------------------- */

      var maxTasks = categoryTasks.length;
      // console.log("maxTasks ---- " + maxTasks )
      var taskContent = "";
      var cardNr = "";

      var newTaskCards = [];

      // Read & Create all Tasks from Category
      for( let i=0; i < maxTasks; i++ ) {

        taskContent = categoryTasks[i];
        cardNr = await formatCountingNumberZeroPadded( (i+1) );
        newTaskCards.push( await createCodingTaskCard( cardNr, cardStyleConfig, taskContent ) )

      }

      console.log("🏁 newTaskCards(length) = " + newTaskCards.length )


    return new Promise(resolve => {
      resolve( newTaskCards );
    })

  }

  // 🟩 Get - Tasks From Category
  async function getTasksFromCategory( categoryIndex, pathTaskContent ) {

      console.log("🔩 - getTasksFromCategory()")
      console.log("➡️ categoryIndex: " + categoryIndex )
      console.log("➡️ pathTaskContent: " + pathTaskContent )


      /* ---------------------------------------------------------------- */
      /* Step 1/2
      /* > Try to open & create JSON Object
      /* ---------------------------------------------------------------- */

        var contentTasks = await async_getJsonFile( pathTaskContent )

      /* ---------------------------------------------------------------- */
      /* Step 2/2
      /* > Try to get Tasks from Category X
      /* ---------------------------------------------------------------- */

        var categoryTasks = contentTasks.taskCategories[ categoryIndex ].tasks;
        console.log("🚀🚀🚀 categoryTasks(length) = " + categoryTasks.length )


      return new Promise(resolve => {
        resolve( categoryTasks );
      })


  }

  // 🟩 Build - Codings Tasks By Category
  async function buildCodingsTasksByCategory( categoryIndex, pathCardStyleConfig, pathContentTasks, addPoint ) {

    console.log("🔩 -  buildCodingsTasksByCategory()")
    console.log("➡️ categoryIndex: " + categoryIndex )
    console.log("➡️ pathCardStyleConfig: " + pathCardStyleConfig )
    console.log("➡️ pathContentTasks: " + pathContentTasks )
    console.log("➡️ addPoint: " + addPoint )

    /* -------------------------------------------------------------- */
    /* Step 1/4
    /* > Get Default Data - cardConfigStyle
    /* -------------------------------------------------------------- */

      var cardStyleConfig = await async_getJsonFile( pathCardStyleConfig );

    /* -------------------------------------------------------------- */
    /* Step 2/4
    /* > Get Data Tasks from Category X
    /* -------------------------------------------------------------- */

      var categoryTasks = await getTasksFromCategory( categoryIndex, pathContentTasks )

    /* -------------------------------------------------------------- */
    /* Step 3/4
    /* > Create "New Tasks" from Data
    /* -------------------------------------------------------------- */

      var newTaskCards = "";
      newTaskCards = await createTaskCardsFromCategory( cardStyleConfig, categoryTasks );

    /* -------------------------------------------------------------- */
    /* Step 4/4
    /* > Final Add "newTaskCards" to "addPoint" by fragment concept
    /* -------------------------------------------------------------- */

      await prependByFragement( newTaskCards, addPoint )

      // await appendChildByFragement( newTaskCards, addPoint )


    return new Promise(resolve => {
      resolve( );
    })

  }
