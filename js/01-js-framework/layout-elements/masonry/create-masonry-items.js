// console.log("🟨 create-masonry-items.js")


/* -------------------------------------------------------------------------- */
/* DOM Elements
/* >
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Variables
/* >
/* -------------------------------------------------------------------------- */

// json data
var jsonData_codingTasks_java = "data/json/more-it/codings/tech-masonry/java-tasks-tech-masonry.json";

// add - point
var addPoint_masonryJavaContainer = document.getElementById("masonry-tech-java-container")

/* -------------------------------------------------------------------------- */
/* Function
/* > Create Masonry Items
/* -------------------------------------------------------------------------- */

async function create_masonryItems_to( jsonFile, addPoint ) {

  console.log("jsonFile= " + jsonFile)
  console.log("addPoint= " + addPoint)

  /* -------------------------------------------------------------------- */
  /* 🟩 Step 1/2:
  /* > Try tp get json data
  /* -------------------------------------------------------------------- */

    var dataMasonryItems = await async_getJsonFile( jsonFile )
    console.log("🟩 JSON:= " + dataMasonryItems )

  /* --------------------------------------------------------- */
  /* ➡️🟥 Step 2/2:
  /* > Create All Masonry Items to Masonry Layout (addPoint)
  /* --------------------------------------------------------- */

    /* --------------------------------------------------------------- */
    /* Get | Default Data
    /* --------------------------------------------------------------- */

      var dataDefaults = dataMasonryItems.defaults;
      var cssClass_masonryItem = dataDefaults.cssClass_masonryItem;

      var maxCategories = dataMasonryItems.categories.length;
      console.log("⭐ Categories= " + maxCategories )

    /* --------------------------------------------------------------- */
    /* Create | Adding Elements
    /* --------------------------------------------------------------- */

      var masonryItems = [];

      var maxTasks = "";
      var header_masonryItems = [];
      var dataHeader = "";

      var main_masonryItems = [];
      var dataMain = "";

    /* --------------------------------------------------------------- */
    /* Create All Masonry Categories from json file
    /* --------------------------------------------------------------- */

    for( let i=0; i < maxCategories; i++ ) {

      // console.log("i=" + i )

      /* --------------------------------------------------------- */
      /* Step 1/4:
      /* > Create - Masonry Item
      /* --------------------------------------------------------- */

        masonryItems.push( await async_get_newElement_cssClass( "div", cssClass_masonryItem ) );

      /* --------------------------------------------------------- */
      /* Step 2/4:
      /* > Create - Header
      /* --------------------------------------------------------- */

        // Get - Max Tasks
        dataHeader = dataMasonryItems.categories[i].header;
        // Get - Data Header
        maxTasks =  dataMasonryItems.categories[i].tasks.length;

        // Create - Header
        header_masonryItems.push( await async_create_masonryItem_header( dataDefaults, dataHeader, maxTasks ) );
        // console.log( header_masonryItems[i] )

      /* --------------------------------------------------------- */
      /* Step 3/4:
      /* > Create - Main Tasks
      /* --------------------------------------------------------- */

        // Get - Data Tasks
        dataTasks = dataMasonryItems.categories[i].tasks;

        // Create - Main
        main_masonryItems.push( await async_create_masonryItem_main( dataDefaults, dataTasks, maxTasks ) );

      /* --------------------------------------------------------- */
      /* Step 4/4:
      /* > Addings
      /* --------------------------------------------------------- */

        // Add "header_masonryItems[x] to "masonryItems[x]"
        masonryItems[i].appendChild( header_masonryItems[i] )

        // Add "main_masonryItems[x] to "masonryItems[x]"
        masonryItems[i].appendChild( main_masonryItems[i] )

        // Add Final "masonryItems[x]" to "addPoint"
        addPoint.prepend( masonryItems[i] )

    }


  return new Promise(resolve => {
    resolve( );
  })

}

/* -------------------------------------------------------------------------- */
/* Function
/* > Create Header | Masonry Item
/* -------------------------------------------------------------------------- */
async function async_create_masonryItem_header( dataDefaults, dataHeader, maxTasks ) {

  // console.log("🧱 Create | Header | Masonry Item")

  var header =  await async_get_newElement( "header" )

  /* ------------------------------------------------------ */
  // Step 1/2 | Create "Title Container"
  /* ------------------------------------------------------ */

    // --------------------------------------------- */
    // 1/3 - Create | Title
    // --------------------------------------------- */

    var header_titleContainer = await async_get_newElement( "div" )

      // Data - Img Puzzle
      var def_imgPath_puzzle = dataDefaults.iconPath_white;
      var imgFilename_puzzle = dataDefaults.iconFilename_puzzle;
      var imgFullPath_puzzle = def_imgPath_puzzle + imgFilename_puzzle;
      // console.log("🧱 = " + imgFullPath_puzzle )

      // Create Img - Header
      var img_header = await async_get_newImg_src( imgFullPath_puzzle );

      // Create Text - Header
      var header_text = dataHeader.title;
      var div_header = await async_get_newElement_text( "div", header_text )

      // Add "header_img" to "header_titleContainer"
      header_titleContainer.appendChild( img_header )

      // Add "header_div" to "header_titleContainer"
      header_titleContainer.appendChild( div_header )

    // --------------------------------------------- */
    // 2/3 | Create | Task Counter
    // --------------------------------------------- */

    var header_taskCounter = await async_get_newElement( "div" )

      // span 1 - nr task
      var span_maxTasks = await async_get_newElement_text( "span", maxTasks )

      // span 2 - text task
      var text_tasks = dataDefaults.text_tasks;
      var span_textTasks = await async_get_newElement_text( "span", text_tasks )

      // Add "nr_task_span" to "header_taskCounter"
      header_taskCounter.appendChild( span_maxTasks )

      // Add "text_task_span" to "header_taskCounter"
      header_taskCounter.appendChild( span_textTasks )


    // --------------------------------------------- */
    // 3/3 | Adding Final & Return "header"
    // --------------------------------------------- */

      // Add "header_titleContainer" to "header"
      header.appendChild( header_titleContainer )

      // Add "header_taskCounter" to "header"
      header.appendChild( header_taskCounter  )


    return new Promise(resolve => {
      resolve( header );
    })


}

/* -------------------------------------------------------------------------- */
/* Function
/* > Create Main | Masonry Item
/* -------------------------------------------------------------------------- */
async function async_create_masonryItem_main( dataDefaults, dataTasks, maxTasks ) {

  console.log("🧱 Create | Main | Masonry Item")

  var main = await async_get_newElement( "main" )

  var taskItems = [];
  var cssClass_taskItem = "";

  var task_status_main = [];

  // Status
  var status_verticals = [];

  var cssClass_statusVerticals = "";
  var taskItem_nrs = [];
  var taskItems_nrs_spans = [];
  var status_divs = [];
  var status_imgs = [];
  var def_blackIconPath = dataDefaults.iconPath_black;
  var iconFilename_status = "";
  var iconFullPath_status = "";
  var cssClass_filename_status = "";

  var task_main = [];
  var task_main_div1 = [];
  var task_main_div2 = [];

  var task_footer = [];

  /* ------------------------------------------------------ */
  /* Step 1/2
  /*  Create Task Items to "main"
  /* ------------------------------------------------------ */

    for( let i=0; i < maxTasks; i++ ) {

      console.log("Task = " + i )

      // Create - Task Item
      cssClass_taskItem = dataTasks[i].status.cssClass_item;
      taskItems.push( await async_get_newElement_cssClass( "div", cssClass_taskItem ) )

      // taskItems[i].innerText = "Verrückte - Mongo";

      /* ------------------------------------------------------ */
      /* Step 1/3
      /* Create - Status & Main
      /* ------------------------------------------------------ */

        /*

            1. Fct - Status
            2. Fct - Main

            2. Fct - Footer

        */

        task_status_main.push( await async_get_newElement( "div" ) );

        /* ------------------------------------------------------ */
        // Create - Status Container
        /* ------------------------------------------------------ */

          cssClass_statusVerticals = dataTasks[i].status.cssClass_vertical;
          status_verticals.push( await async_get_newElement_cssClass( "div", cssClass_statusVerticals ) )

            /* --------------------------------- */
            /* Create - Nr
            /* --------------------------------- */
            taskItem_nrs.push( await async_get_newElement( "div" ) )
            taskItems_nrs_spans.push( await async_get_newElement_text( "span", (i+1) ) )

            taskItem_nrs[i].appendChild(taskItems_nrs_spans[i]);

            /* --------------------------------- */
            /* Create - Div Status
            /* --------------------------------- */
            status_divs.push( await async_get_newElement( "div" ) )

              // get img src
              iconFilename_status = dataTasks[i].status.img_filename;
              iconFullPath_status = def_blackIconPath + iconFilename_status;

              // get css class
              cssClass_filename_status = dataTasks[i].status.cssClass_img;

              // Create - Icon Status
              status_imgs.push( await async_get_newImg_src_cssClass( iconFullPath_status, cssClass_filename_status ) )

              // Add "status_imgs[x]" to "status_dics[x]"
              status_divs[i].appendChild( status_imgs[i] )

            /* --------------------------------- */
            /* Addings
            /* --------------------------------- */

            // Add "taskItems_nrs[x]" to status_verticals[x]
            status_verticals[i].appendChild( taskItem_nrs[i] )

            // Add "status_divs[x]" to status_verticals[x]
            status_verticals[i].appendChild( status_divs[i] )


            // Add "status_verticals[x]" to "stats_status_main[x]"
            task_status_main[i].appendChild( status_verticals[i] );

            // Add "stats_status_main[x]" to "taskItems[i]"
            taskItems[i].appendChild(task_status_main[i])


        /* ------------------------------------------------------ */
        // Create - Main
        /* ------------------------------------------------------ */

          task_main.push( await async_get_newElement( "main" ) )

          // div 1
          var text_div1 = dataTasks[i].content.title;
          task_main_div1.push( await async_get_newElement_text( "div", text_div1 ) )
          task_main[i].appendChild( task_main_div1[i] );

          // div 2
          var text_div2 = dataTasks[i].content.description;
          task_main_div2.push( await async_get_newElement_text( "div", text_div2 ) )
          task_main[i].appendChild( task_main_div2[i] );

          // Add "task_main[i]" to "task_status_main[x]"
          task_status_main[i].appendChild( task_main[i] );

          // Add "task_status_main[x]" to "taskItems[i]"
          taskItems[i].appendChild( task_status_main[i])




      /* ------------------------------------------------------ */
      /* Step 2/3
      /* Create - Footer ( Optional )
      /* ------------------------------------------------------ */

      /* ------------------------------------------------------ */
      /* Step 3/3
      /* Adding taskItems[x] to "main"
      /* ------------------------------------------------------ */

      main.appendChild(taskItems[i])

    }

  // --------------------------------------------- */
  // Step 2/2
  // Return "main"
  // --------------------------------------------- */

    return new Promise(resolve => {
    resolve( main );

  })




}

/* -------------------------------------------------------------------------- */
/* Execute
/* -------------------------------------------------------------------------- */

  create_masonryItems_to( jsonData_codingTasks_java, addPoint_masonryJavaContainer );
