// console.log("🟨 create-coding-masonryItems.js")

  /*



  */

  /* ------------------------------------------------------------------------- */
  /* 🟩 NEW
  /* ------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /* DOM Elements
  /* -------------------------------------------------------------------------- */

    // add point
    var addPoint_masonry_javaContainer = document.getElementById("masonry-tech-java-container");

  /* -------------------------------------------------------------------------- */
  /* Variables
  /* -------------------------------------------------------------------------- */

    // data - java tasks
    var jsonData_categoryTasks_java = "data/json/more-it/codings/tech-masonry/java-category-tasks-masonry.json";

  /* -------------------------------------------------------------------------- */
  /* Help Functions
  /* -------------------------------------------------------------------------- */

    // Create - Header
    async function create_coding_masonryItem_header( dataDefaults, dataCategory ) {

      // console.log("🧱 Build | Masonry Item - Header")

      var header = await async_get_newElement( "header" );

      /* ------------------------------------------------------------- */
      /* Step 1
      /* > Create - Title Container
      /* ------------------------------------------------------------- */

        var div_titleContainer = await async_get_newElement( "div" );

        // icon
        var iconFullPath_title = dataDefaults.iconPath_white + dataDefaults.iconName_puzzle;
        var img_title = await async_get_newImg_src( iconFullPath_title )

        // div - text
        var text_title = dataCategory.header.title;
        var div_textTitle = await async_get_newElement_text( "div", text_title );

        // Add "imgTitle" to "div_titleContainer"
        div_titleContainer.appendChild( img_title )

        // Add "div_texTitle" to "div_titleContainer"
        div_titleContainer.appendChild( div_textTitle )


      /* ------------------------------------------------------------- */
      /* Step 2
      /* > Create - Task Counter
      /* ------------------------------------------------------------- */

        var div_taskCounter = await async_get_newElement( "div" );

        // span - max Tasks
        var maxTasks = dataCategory.tasks.length;
        var span_maxTasks =  await async_get_newElement_text( "span", maxTasks );

        // span - text
        var textTasks = dataDefaults.text_tasks;
        var span_textTasks = await async_get_newElement_text( "span", textTasks );

        // Add "span_maxTasks" to "div_taskCounter"
        div_taskCounter.appendChild( span_maxTasks )

        // Add "span_textTasks" to "div_taskCounter"
        div_taskCounter.appendChild( span_textTasks )

      /* ------------------------------------------------------------- */
      /* Step 3
      /* > Add Finals
      /* ------------------------------------------------------------- */

        // Add "div_titleContainer" to "header"
        header.appendChild( div_titleContainer );

        // Add "div_taskCounter" to "header"
        header.appendChild( div_taskCounter );


      return new Promise(resolve => {
        resolve( header );
      })

    }

    // Get - Status Order Task Item
    async function async_getOrderIndex_taskItem( statusTask ) {

      // console.log("📐 Check Which Status Order to use")

      // order direction
      var index_order_inProgress = [];
      var index_order_done = [];
      var index_order_later = [];

      var cssClass_statusItem = "";

      // final status order
      var final_index_statusOrder = [];

      for( let i=0; i < statusTask.length; i++ ) {

        // console.log("Task Items = " + i)
        cssClass_statusItem = statusTask[i].status.cssClass_item;
        // console.log("statusItem= " + cssClass_statusItem)

        /* -------------------------------------------------------------- */
        /* Define Status Order
        /* > 1. in progress > 2. done > 3. later
        /* -------------------------------------------------------------- */

        switch( cssClass_statusItem ) {

          case "masonry-coding-item-task-in-progress":
            index_order_inProgress.push(i);
            break;

          case "masonry-coding-item-task-done":
            index_order_done.push(i);
            break;

          case "masonry-coding-item-task-later":
            index_order_later.push(i);
            break;

          default:
            return -1;

        }

      }

      // console.log("🌴 inProgress Indizies = " + index_order_inProgress)
      // console.log("🌴 done Indizies = " + index_order_done)
      // console.log("🌴 later Indizies = " + index_order_later)

      // ⚠️ Spread - Operator better solution

      // First: in progress
      for( let i=0; i < index_order_inProgress.length; i++ ) {

        final_index_statusOrder.push( index_order_inProgress[i] )

      }

      // Second: done
      for( let i=0; i < index_order_done.length; i++ ) {

        final_index_statusOrder.push( index_order_done[i] )

      }

      // Last: later
      for( let i=0; i < index_order_later.length; i++ ) {

        final_index_statusOrder.push( index_order_later[i] )

      }


      return new Promise(resolve => {
          resolve( final_index_statusOrder );
      })

    }

    // Create - Main
    async function create_coding_masonryItem_main( dataDefaults, dataTasks ) {

      // console.log("🧱 Build | Masonry Item - Main")

      var main = await async_get_newElement( "main" );

      // task items
      var div_taskItems = [];
      var cssClass_taskItem = "";
      var maxTasksItems = dataTasks.length;

      // status main containers
      var div_statusMain_containers = [];

      /* ------------------------------------------------------------- */
      /* Step 1
      /* > Create & Add All - Task Items to Main
      /* ------------------------------------------------------------- */

        // ⚠️ Future - fct: status + main + footer

        // Use index status Order
        var indizies_statusOrder = "";
        indizies_statusOrder = await async_getOrderIndex_taskItem( dataTasks )
        var indexOrder = "";

        // console.log("⭐indizies_statusOrder = " + indizies_statusOrder )
        // console.log("⭐indizies_statusOrder 0 = " + indizies_statusOrder[0] )

        for( let i=0; i < maxTasksItems; i++ ) {

          // console.log("🔥 Create Task Item= " + (i+1))

          /* -------------------------------------------------------------- */
          /* Step 1:
          /> Create - Task Item[x]
          /* -------------------------------------------------------------- */

            // User Index Status Order
            // 1. in progress, 2. done, 3. later
            indexOrder = indizies_statusOrder[i];
            // console.log("🔥 Use - IndexOrder = " + indexOrder )

            cssClass_taskItem = dataTasks[indexOrder].status.cssClass_item;
            div_taskItems.push( await async_get_newElement_cssClass( "div", cssClass_taskItem ) )

          /* -------------------------------------------------------------- */
          /* Step 2:
          /> Create - Task Item[x] - Status & Main Container
          /* -------------------------------------------------------------- */

            div_statusMain_containers.push( await async_get_newElement( "div" ) );

            /* ---------------------------------------------------------- */
            /* 1/2 | Create - Status
            /* ---------------------------------------------------------- */

              // Create - Status
              var cssClass_status = dataTasks[indexOrder].status.cssClass_vertical;
              var div_statusContainer = await async_get_newElement_cssClass( "div", cssClass_status )

              // Create - Status Nr
              var div_statusNr = await async_get_newElement( "div" );
              var span_statusNr = await async_get_newElement_text( "span", (i+1) + "." );

                // Adding
                div_statusNr.appendChild( span_statusNr )

              // Create - Status Icon
              var div_statusIcon = await async_get_newElement( "div" );

              var iconFullPath_status = dataDefaults.iconPath_black + dataTasks[indexOrder].status.iconName;
              var cssClass_iconStatus = dataTasks[indexOrder].status.cssClass_icon;
              var img_statusIcon = await async_get_newImg_src_cssClass( iconFullPath_status, cssClass_iconStatus);

                // Adding
                div_statusIcon.appendChild( img_statusIcon )


              // Add "div_statusNr" to "div_statusContainer[x]"
              div_statusContainer.appendChild( div_statusNr )

              // Add "div_statusIcon" to "div_statusContainer[x]"
              div_statusContainer.appendChild( div_statusIcon )

              // Add "div_statusContainer" to "div_statusMain_containers[x]"
              div_statusMain_containers[i].appendChild( div_statusContainer  )

            /* ---------------------------------------------------------- */
            /* 2/2 | Create - Main
            /* ---------------------------------------------------------- */

              var main_titleContainer = await async_get_newElement( "main" );

              // Create - Div 1 - Main Title
              var text_mainTitle = dataTasks[indexOrder].content.title;
              var div_mainTitle= await async_get_newElement_text( "div", text_mainTitle )

                // Add
                main_titleContainer.appendChild( div_mainTitle )


              // Create - Div 2 - Main Sub Title
              var text_main_subTitle = dataTasks[indexOrder].content.sub_title;
              var div_main_subTitle = await async_get_newElement_text( "div", text_main_subTitle )

                // Add
                main_titleContainer.appendChild( div_main_subTitle )


            // Add "main_titleContainer" to "div_statusMain_containers[x]"
            div_statusMain_containers[i].appendChild( main_titleContainer )

            // Add "div_statusMain_containers[x]" to "div_taskItems[x]""
            div_taskItems[i].appendChild( div_statusMain_containers[i] )

          /* -------------------------------------------------------------- */
          /* Step 3:
          /> Create - Task Item[x] - Footer ( Optional )
          /* -------------------------------------------------------------- */

            var githubLink = dataTasks[indexOrder].content.github_link;

            // Create - Footer - Github | only if it is not empty
            if( githubLink !== "" ) {

              //  console.log("🟩 Not Empty - Create Footer")

               // Create - Footer
               var footer_github_containers = await async_get_newElement( "footer" ) ;

               /* -------------------------------------- */
               /* Create - Link
               /* -------------------------------------- */

                var link_footer = await async_get_newLink_href( githubLink )

                  // Create - Img Link
                  var iconFullPath_github = dataDefaults.iconPath_black + dataDefaults.iconName_github;
                  var img_link = await async_get_newImg_src( iconFullPath_github );

                    // Add - img link
                    link_footer.appendChild( img_link )

                  // Create - Div Text Github
                  var text_github = dataDefaults.text_github;
                  var div_github = await async_get_newElement_text( "div", text_github )

                    // Add - div github link
                    link_footer.appendChild( div_github )


               // Add "link_footer" to "footer_github_containers"
               footer_github_containers.appendChild( link_footer )

               // Add "footer_github_containers[x]" to "div_taskItemx[x]"
               div_taskItems[i].appendChild( footer_github_containers )

            }


          /* -------------------------------------------------------------- */
          /* Step 4:
          /> Final Add - "div_taskItems[x]" to main
          /* -------------------------------------------------------------- */

            main.appendChild( div_taskItems[i] )

        }


      return new Promise(resolve => {
        resolve( main );
      })

    }


  /* -------------------------------------------------------------------------- */
  /* Functions
  /* -------------------------------------------------------------------------- */

    // Create - Masonry Coding Items
    async function create_coding_masonryItems_to( jsonFile, addPoint ) {

      // console.log("🧱 Build | All Masonry Items to [Add Point] ")

      // console.log("jsonFile= " + jsonFile);
      // console.log("addPoint= " + addPoint);

      /* -------------------------------------------------------------------- */
      /* > Get Default Data
      /* -------------------------------------------------------------------- */

        // get data from json file
        var dataCodingMasonryItems = await async_getJsonFile( jsonFile )
        // console.log("🟩 JSON:= " + dataCodingMasonryItems )

        var defaultData = dataCodingMasonryItems.defaults;
        var dataCatagories = dataCodingMasonryItems.categories;

      /* -------------------------------------------------------------------- */
      /* Variables
      /* -------------------------------------------------------------------- */

        // masonryItems
        var div_masonryItems = [];
        var cssClass_masonryItem = defaultData.cssClass_masonryItem;

        // header masonryItems
        var header_masonryItems = [];

        // main masonryItems
        var main_masonryItems = [];

      /* -------------------------------------------------------------------- */
      /* Step 2
      /* > Create "masonryItems" to "addPoint"
      /* -------------------------------------------------------------------- */

        var maxCategories =  dataCatagories.length;
        // console.log("🍊Max_Categories: " + maxCategories)

        for( let i=0; i < maxCategories; i++ ) {

          // console.log("🔨 Build:" + (i+1) + " masonryItem")

          /* ---------------------------------------------------------- */
          /* Step 1
          /* > Build - MasonryItem[x]
          /* ---------------------------------------------------------- */

            div_masonryItems.push( await async_get_newElement_cssClass( "div", cssClass_masonryItem ) )

          /* ---------------------------------------------------------- */
          /* Step 2
          /* > Build - MasonryItem[x] - header
          /* ---------------------------------------------------------- */

            header_masonryItems.push( await create_coding_masonryItem_header( defaultData, dataCatagories[i] ) )

          /* ---------------------------------------------------------- */
          /* Step 3
          /* > Build - MasonryItem[x] - main
          /* ---------------------------------------------------------- */

            main_masonryItems.push( await create_coding_masonryItem_main( defaultData, dataCatagories[i].tasks ) )

          /* ---------------------------------------------------------- */
          /* Step 4
          /* > Final Adds
          /* ---------------------------------------------------------- */

            // Add "header" to "masonryItems"
            div_masonryItems[i].appendChild( header_masonryItems[i] )

            // Add "main" to "masonryItems"
            div_masonryItems[i].appendChild( main_masonryItems[i] )

            // Final Add "masoinryItems" to addPoint
            addPoint.prepend( div_masonryItems[i] );


        }


      return new Promise(resolve => {
        resolve( );
      })

    }


  /* -------------------------------------------------------------------------- */
  /* Execute
  /* -------------------------------------------------------------------------- */

    create_coding_masonryItems_to( jsonData_categoryTasks_java,
                                   addPoint_masonry_javaContainer )
