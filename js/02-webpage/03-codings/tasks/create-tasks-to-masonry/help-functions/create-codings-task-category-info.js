// console.log("🟨 create-codings-task-category-info.js")


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
