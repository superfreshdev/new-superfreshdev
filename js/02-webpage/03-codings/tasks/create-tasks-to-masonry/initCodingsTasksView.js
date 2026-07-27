// console.log("🟨 initCodingsTasksView.js")
// > Start Init Codings Tasks Views


/* -------------------------------------------------------------------- */
/* 🟩 | 🔩 Functions
/* -------------------------------------------------------------------- */

  // 🚀🟩 Init - CodingsTasksView
  async function initCodingsTasksView( codingsTaskConfig, ctxMasonry ) {

    console.log("🔩 - initCodingsTasksView()")
    console.log("➡️ codingsTaskConfig: " + codingsTaskConfig )
    console.log("➡️ taskConfig|CategoryIndex: " + codingsTaskConfig.categoryIndex )
    console.log("➡️ taskConfig|CategoryIndex: " + codingsTaskConfig.pathContentTasks )
    console.log("➡️ ctxMasonry: " + ctxMasonry )
    console.log("➡️ ctxMasonry(addPoint): " + ctxMasonry.container.getAttribute("id") )


    /* ----------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Create Coding Tasks by Category
    /* ----------------------------------------------------------- */

      // Create Tasks from Category X to "addPoint"
      var categoryIndex = codingsTaskConfig.categoryIndex;
      var pathCardStyleConfig = codingsTaskConfig.pathTaskCardStyle;
      var pathContentTasks = codingsTaskConfig.pathContentTasks;

      var codingsMasonryContainer = ctxMasonry.container;

      await buildCodingsTasksByCategory( categoryIndex, pathCardStyleConfig, pathContentTasks, codingsMasonryContainer )


    /* ----------------------------------------------------------- */
    /* 🟩 Step 2/2
    /* > Create Masonry Layout - Codings Tasks
    /* ----------------------------------------------------------- */

      // Use given resp masonry layout object ( addPoint & co )
      // Create Masonry Layout with Masonry Context Object ( all datas )
      await initResponsiveMasonry( ctxMasonry );


    return new Promise(resolve => {
      resolve( );
    })

  }
