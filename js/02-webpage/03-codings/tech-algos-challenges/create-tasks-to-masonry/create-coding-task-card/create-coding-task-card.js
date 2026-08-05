// console.log("🟨 tech-nav-tasks-handler.js")


/* -------------------------------------------------------------------- */
/* 🟩 | 🔩 Functions
/* -------------------------------------------------------------------- */

  async function createCodingTaskCard( cardNr, configStyle, taskContent ) {

    console.log("🔩 createCodingTaskCard() ");
    console.log("🔺 configStyle: " +  configStyle )
    console.log("🔺 taskContent-X: " +  taskContent )

    /* ------------------------------------------------------------ */
    /* 🟩 Step 1/2
    /* > Get Data - Icon Path Black
    /* ------------------------------------------------------------ */

      var iconPathBlack = configStyle.defaults.paths.iconBlack;

    /* ------------------------------------------------------------ */
    /* 🟩 Step 2/2
    /* > Create - Coding Task Card
    /* ------------------------------------------------------------ */

      console.log("-----------------------------------------")
      console.log("❇️ Create Coding Task Card ")
      console.log("-----------------------------------------")

      // Get Status Value of Task Card
      var statusTaskCard = taskContent.status;

      // Get All Data Styles from Task Card
      var statusTaskCardStyles = configStyle.taskCard.status;

      // Create - New Task Card
      var newTaskCard = "";

      var taskCardCssClass = await getCssClassFromTaskCard( statusTaskCard, statusTaskCardStyles );
      newTaskCard  = await createDivClass( taskCardCssClass )
      console.log("📃 newTaskCard = " + newTaskCard.getAttribute("class") )
      console.log("-----------------------------------------")

      /* ------------------------------------------------------------ */
      /* 🟩 Step 2.1
      /* > Create - Coding Task Card - Header
      /* ------------------------------------------------------------ */

        console.log("➡️ Create: Coding Task Card - Header")
        console.log("-----------------------------------------")

        // Get Data - Style Header
        var styleHeader = configStyle.taskCard.header;

        // Create - New Header
        var newHeader = "";
        newHeader = await createCodingTaskCardHeader( cardNr, iconPathBlack, styleHeader, taskContent );

        // Add "newHeader" to "newCodingTaskCard"
        newTaskCard.appendChild( newHeader )

      /* ------------------------------------------------------------ */
      /* 🟩 Step 2.2
      /* > Create - Coding Task Card - Main
      /* ------------------------------------------------------------ */

        console.log("-----------------------------------------")
        console.log("➡️ Create: Coding Task Card - Main")
        console.log("-----------------------------------------")

        // Get Data - Style Header
        var styleMain = configStyle.taskCard.main;

        // Create - New Main
        var newMain = "";
        newMain = await createCodingTaskCardMain( iconPathBlack, styleMain, taskContent );

        // Add "newMain" to "newCodingTaskCard"
        newTaskCard.appendChild( newMain )


      /* ------------------------------------------------------------ */
      /* 🟩 Step 2.3
      /* > Create - Coding Task Card - Footer
      /* ------------------------------------------------------------ */

        console.log("-----------------------------------------")
        console.log("➡️ Create: Coding Task Card - Footer")
        console.log("-----------------------------------------")

        // Get Data - Style Footer
        var styleFooter = configStyle.taskCard.footer;

        // Create - New Footer
        var newFooter = "";
        newFooter = await createCodingTaskCardFooter( iconPathBlack, styleFooter, taskContent );

        // Add "newFooter" to "newCodingTaskCard"
        newTaskCard.appendChild( newFooter );


    return new Promise(resolve => {
      resolve( newTaskCard );
    })

  }
