// console.log("🟨 update-coding-category-info.js")


/* -------------------------------------------------------------------- */
/* 🟩 | 🔩 Functions
/* -------------------------------------------------------------------- */

  // 🟩 Update - Content Task Category Info -> in extra .js-Datei
  async function updateContentTaskCategoryInfo( categoryTaskName, pathTaskContent, infoElement ) {

    console.log("updateContentTaskCategoryInfo()")
    // console.log("🔺 categoryTaskName: " + categoryTaskName )
    // console.log("🔺 pathTaskContent: " + pathTaskContent )
    // console.log("🔺 infoElement: " + infoElement )

    /* ------------------------------------------------------------- */
    /* 🟩 Step 1/2
    /* > Get Task Category from "categoryTaskName"
    /* ------------------------------------------------------------- */

      var taskContent = await getJsonObjectFromFile( pathTaskContent )
      var taskCategories = taskContent.taskCategories;
      var taskCategory = await getKeyDataFromJsonArrayObject( categoryTaskName, taskCategories )

    /* ------------------------------------------------------------- */
    /* 🟩 Step 2/2
    /* > Update Task Category Info
    /* ------------------------------------------------------------- */

      // Update Info
      var taskCategoryInfo = taskCategory.info;

      // Update Info Element
      infoElement.innerText = taskCategoryInfo;

    return new Promise(resolve => {
      resolve( );
    })


  }
